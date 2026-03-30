import React, { useState, useEffect } from 'react';
import { Calendar, Check, Copy, ChevronRight } from 'lucide-react';
import { SoftcapProgressBar } from './SoftcapProgressBar';
import { CopyLinkInput } from '../ui/CopyLinkInput';
import { Input } from '../ui/input';
import { PresaleDetailRightColumn } from './PresaleDetailRightColumn';
import { PrimaryButton } from '../PrimaryButton';
import { Button } from '../ui/button';
import type { PresaleState, VestingSchedule, ResolutionOutcome } from '../../data/presaleMarketsData';

interface Participant {
  id: string;
  name: string;
  initials: string;
  avatar?: string;
  color: string;
  amount: string;
  dateJoined?: string;
  refundStatus?: 'refunded' | 'not_refunded';
  refundClaimed?: boolean;
  dateClaimed?: string; // Date when refund was claimed
}

interface Comment {
  id: string;
  author: string;
  authorInitials: string;
  authorColor: string;
  content: string;
  timestamp: string;
  date: string;
  likes: number;
  replies?: number;
  link?: string;
}

interface PresaleDetailPageProps {
  marketId: string;
  question: string;
  category: string;
  softcapProgress: number;
  raised: string;
  total: string;
  endDate: Date | string;
  createdBy: string;
  createdDate: string;
  contractAddress: string;
  marketType: 'Yes/No' | 'Multi-Outcome';
  status: string;
  statusColor?: 'blue' | 'orange' | 'green' | 'teal' | 'red';
  resolutionDate: string;
  resolutionCriteria: string;
  participants: Participant[];
  comments?: Comment[];
  presaleState: PresaleState;
  viewerRole: 'creator' | 'investor-joined' | 'investor-not-joined';
  vestingSchedule?: VestingSchedule;
  resolutionOutcome?: ResolutionOutcome;
  currentPrice?: { yes: number; no: number };
  ammInitialPrice?: { yes: number; no: number };
  totalVolume?: number;
  presaleSharePrice?: number;
  creatorStake?: any;
  currentUserId?: string; // ID of the current user to highlight their position
  userInvestment?: number; // Amount the user invested (for refund display)
  isDarkMode?: boolean;
}

export function PresaleDetailPage({
  marketId,
  question,
  category,
  softcapProgress,
  raised,
  total,
  endDate,
  createdBy,
  createdDate,
  contractAddress,
  marketType,
  status,
  statusColor = 'blue',
  resolutionDate,
  resolutionCriteria,
  participants,
  comments = [],
  presaleState,
  viewerRole,
  vestingSchedule,
  resolutionOutcome,
  currentPrice,
  ammInitialPrice,
  totalVolume,
  presaleSharePrice,
  creatorStake,
  currentUserId,
  userInvestment,
  isDarkMode,
}: PresaleDetailPageProps) {
  const [timeRemaining, setTimeRemaining] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [commentText, setCommentText] = useState('');
  const [localComments, setLocalComments] = useState<Comment[]>(comments);
  const [showAllParticipants, setShowAllParticipants] = useState(false);
  const [amount, setAmount] = useState('');
  const [copied, setCopied] = useState(false);
  const [refundClaimed, setRefundClaimed] = useState(false);
  const [showClaimConfirmation, setShowClaimConfirmation] = useState(false);

  // Handler for posting a new comment
  const handlePostComment = () => {
    if (!commentText.trim()) return;
    
    const now = new Date();
    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      author: 'Current User', // Replace with actual user name
      authorInitials: 'CN',
      authorColor: '#16433c',
      content: commentText,
      timestamp: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      date: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      likes: 0,
      replies: 0,
    };
    
    // Add new comment at the beginning (newest first)
    setLocalComments([newComment, ...localComments]);
    setCommentText('');
  };

  // Handler for claiming refund
  const handleClaimRefund = () => {
    setRefundClaimed(true);
    setShowClaimConfirmation(false);
  };

  // Calculate time remaining
  useEffect(() => {
    const targetDate = typeof endDate === 'string' ? new Date(endDate) : endDate;
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeRemaining({ hours, minutes, seconds });
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [endDate]);

  const handleCopyLink = () => {
    const copyToClipboard = (text: string) => {
      // Try modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
          .catch(() => {
            // Fallback to older method
            fallbackCopyTextToClipboard(text);
          });
      } else {
        // Use fallback method
        fallbackCopyTextToClipboard(text);
      }
    };

    const fallbackCopyTextToClipboard = (text: string) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '-999999px';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }

      document.body.removeChild(textArea);
    };

    copyToClipboard(`xmarket.app/presale/id${marketId}`);
  };

  const handleMaxClick = () => {
    setAmount('1000'); // Placeholder max amount
  };

  const displayedParticipants = showAllParticipants ? participants : participants.slice(0, 3);
  const isOverSoftcap = softcapProgress >= 100;

  // Status color mapping - synced with badge colors
  const statusColors = {
    blue: 'var(--blue-11)',
    orange: 'var(--orange-11)',
    green: 'var(--green-12)',
    teal: 'var(--teal-9)',
    red: 'var(--red-11)',
  };

  return (
    <div 
      className="presale-detail-container"
      style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: 'var(--gap--2rem)',
        paddingRight: 'var(--gap--2rem)',
        paddingTop: 'var(--gap--2rem)',
        paddingBottom: 'var(--gap--4rem)',
      }}
    >
      {/* Breadcrumbs */}
      <div 
        className="flex items-center"
        style={{
          gap: 'var(--gap--0-5rem)',
          marginBottom: 'var(--gap--2rem)',
        }}
      >
        <button
          className="font-sans transition-colors duration-200"
          style={{
            fontSize: 'var(--text-s)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--muted-foreground)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--card-foreground)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}
        >
          Presales
        </button>
        <ChevronRight 
          style={{
            width: '16px',
            height: '16px',
            color: 'var(--muted-foreground)',
          }}
        />
        <span
          className="font-sans"
          style={{
            fontSize: 'var(--text-s)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--muted-foreground)',
          }}
        >
          ID-{marketId}
        </span>
      </div>

      {/* Title */}
      <h1
        className="font-sans"
        style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--card-foreground)',
          marginBottom: 'var(--gap--3rem)',
          lineHeight: '1.2',
        }}
      >
        {question}
      </h1>

      {/* Two Column Layout */}
      <div 
        className="grid grid-cols-1 lg:grid-cols-3"
        style={{
          gap: 'var(--gap--2rem)',
        }}
      >
        {/* Left Column - 2/3 width */}
        <div 
          className="lg:col-span-2"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--gap--2rem)',
          }}
        >
          {/* Soft Cap Section */}
          <div
            style={{
              backgroundColor: 'var(--card-normal)',
              border: '1px solid var(--black-a2)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--gap--2rem)',
            }}
          >
            {/* Softcap Progress Bar */}
            <div style={{ marginBottom: 'var(--gap--1-5rem)' }}>
              <SoftcapProgressBar
                softcapProgress={softcapProgress}
                raised={raised}
                total={total}
                size="large"
              />
            </div>

            {/* Top Participants */}
            <div>
              <h3
                className="font-sans"
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--card-foreground)',
                  marginBottom: 'var(--gap--1rem)',
                }}
              >
                Participants
              </h3>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                }}
              >
                {displayedParticipants.map((participant, index) => {
                  const isCurrentUser = currentUserId && participant.id === currentUserId;
                  const isPreviousUserCurrent = index > 0 && currentUserId && displayedParticipants[index - 1].id === currentUserId;
                  const position = participants.findIndex(p => p.id === participant.id) + 1;
                  
                  // Sync refund claimed status - if current user, use state; otherwise use participant data
                  const isRefundClaimed = isCurrentUser 
                    ? refundClaimed 
                    : (participant.refundClaimed || false);
                  
                  return (
                    <div key={participant.id}>
                      {/* Extra spacing after current user card */}
                      {isPreviousUserCurrent && (
                        <div style={{ marginTop: 'var(--gap--1-5rem)' }} />
                      )}
                      
                      {/* Divider - show between participants, but not before current user or right after current user */}
                      {index > 0 && !isCurrentUser && !isPreviousUserCurrent && (
                        <div
                          style={{
                            borderTop: '1px solid var(--black-a1)',
                            marginTop: 'var(--gap--0-75rem)',
                            marginBottom: 'var(--gap--0-75rem)',
                          }}
                        />
                      )}
                      
                      <div
                        className="flex items-center justify-between"
                        style={{
                          padding: isCurrentUser ? 'var(--gap--0-75rem)' : '0',
                          backgroundColor: isCurrentUser ? 'var(--iris-3)' : 'transparent',
                          border: isCurrentUser ? '1px solid var(--iris-6)' : 'none',
                          borderRadius: isCurrentUser ? 'var(--radius-input)' : '0',
                        }}
                      >
                        {/* Left Side: Avatar + Name & Date */}
                        <div className="flex items-center" style={{ gap: 'var(--gap--0-75rem)', flex: 1 }}>
                          {/* Avatar */}
                          <div
                            className="flex items-center justify-center rounded-full"
                            style={{
                              width: '32px',
                              height: '32px',
                              backgroundColor: participant.color,
                              fontSize: 'var(--text-xs)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: '#FFFFFF',
                              flexShrink: 0,
                            }}
                          >
                            {participant.initials}
                          </div>
                          
                          {/* Name and Date Joined */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--0-125rem)' }}>
                            <div>
                              <span
                                style={{
                                  fontFamily: 'Inter, sans-serif',
                                  fontSize: 'var(--text-m)',
                                  fontWeight: 'var(--font-weight-medium)',
                                  color: 'var(--card-foreground)',
                                }}
                              >
                                {participant.name}
                              </span>
                              {isCurrentUser && (
                                <span
                                  style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: 'var(--text-m)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    color: 'var(--iris-11)',
                                    marginLeft: 'var(--gap--0-5rem)',
                                  }}
                                >
                                  (You)
                                </span>
                              )}
                            </div>
                            {participant.dateJoined && (
                              <span
                                style={{
                                  fontFamily: 'Inter, sans-serif',
                                  fontSize: 'var(--text-xs)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  color: 'var(--muted-foreground)',
                                }}
                              >
                                Joined {participant.dateJoined}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Right Side: Amount and Refund Status */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--0-25rem)', alignItems: 'flex-end' }}>
                          {/* Amount */}
                          <div className="flex items-center" style={{ gap: 'var(--gap--0-25rem)' }}>
                            <div
                              className="flex items-center justify-center rounded-full"
                              style={{
                                width: '16px',
                                height: '16px',
                                backgroundColor: 'var(--lum-03)',
                              }}
                            >
                              <span style={{ fontSize: '10px' }}>$</span>
                            </div>
                            <span
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: 'var(--text-m)',
                                fontWeight: 'var(--font-weight-medium)',
                                color: 'var(--card-foreground)',
                              }}
                            >
                              {participant.amount} USDX
                            </span>
                          </div>
                          
                          {/* Refund Status - Only show when presale failed and participant is eligible for refund */}
                          {presaleState === 'PRESALE_FAILED' && participant.refundStatus && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-25rem)' }}>
                              <span
                                style={{
                                  fontFamily: 'Inter, sans-serif',
                                  fontSize: 'var(--text-xs)',
                                  fontWeight: 'var(--font-weight-medium)',
                                  color: 'var(--green-11)',
                                }}
                              >
                                Refunded
                              </span>
                              <span
                                style={{
                                  fontFamily: 'Inter, sans-serif',
                                  fontSize: 'var(--text-xs)',
                                  fontWeight: 'var(--font-weight-regular)',
                                  color: isRefundClaimed ? 'var(--green-11)' : 'var(--orange-11)',
                                }}
                              >
                                • {isRefundClaimed 
                                  ? `Claimed at ${participant.dateClaimed || 'Jan 21, 2026'}` 
                                  : 'Not Claimed'}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {participants.length > 3 && (
                <button
                  onClick={() => setShowAllParticipants(!showAllParticipants)}
                  className="font-sans transition-colors duration-200"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--card-foreground)',
                    marginTop: 'var(--gap--1rem)',
                    textDecoration: 'underline',
                  }}
                >
                  {showAllParticipants ? 'Show Less' : 'Load More'}
                </button>
              )}
            </div>
          </div>

          {/* Resolution Criteria Section */}
          <div
            style={{
              backgroundColor: 'var(--card-normal)',
              border: '1px solid var(--black-a2)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--gap--2rem)',
            }}
          >
            <h2
              className="font-sans"
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--card-foreground)',
                marginBottom: 'var(--gap--1-5rem)',
              }}
            >
              Resolution Criteria
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--gap--2rem)',
                marginBottom: 'var(--gap--1-5rem)',
              }}
            >
              {/* Category */}
              <div>
                <span
                  className="font-sans"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--muted-foreground)',
                    display: 'block',
                    marginBottom: 'var(--gap--0-25rem)',
                  }}
                >
                  Category
                </span>
                <span
                  className="font-sans"
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--card-foreground)',
                  }}
                >
                  {category}
                </span>
              </div>

              {/* Created by */}
              <div>
                <span
                  className="font-sans"
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--muted-foreground)',
                    display: 'block',
                    marginBottom: 'var(--gap--0-25rem)',
                  }}
                >
                  Created by
                </span>
                <span
                  className="font-sans"
                  style={{
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--card-foreground)',
                  }}
                >
                  {createdBy}
                </span>
              </div>
            </div>

            {/* Resolution Date */}
            <div style={{ marginBottom: 'var(--gap--1-5rem)' }}>
              <span
                className="font-sans"
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--muted-foreground)',
                  display: 'block',
                  marginBottom: 'var(--gap--0-25rem)',
                }}
              >
                Resolution Date
              </span>
              <span
                className="font-sans"
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--card-foreground)',
                }}
              >
                {resolutionDate}
              </span>
            </div>

            {/* Resolution Criteria Text */}
            <div>
              <span
                className="font-sans"
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--muted-foreground)',
                  display: 'block',
                  marginBottom: 'var(--gap--0-5rem)',
                }}
              >
                Resolution Criteria
              </span>
              <p
                className="font-sans"
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-normal)',
                  color: 'var(--card-foreground)',
                  lineHeight: '1.6',
                }}
              >
                {resolutionCriteria}
              </p>
            </div>
          </div>

          {/* Discussion Section */}
          <div
            style={{
              backgroundColor: 'var(--card-normal)',
              border: '1px solid var(--black-a2)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--gap--2rem)',
            }}
          >
            <h2
              className="font-sans"
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--card-foreground)',
                marginBottom: 'var(--gap--1-5rem)',
              }}
            >
              Discussion
            </h2>

            {/* Comment Input */}
            <div style={{ marginBottom: 'var(--gap--2rem)' }}>
              <span
                className="font-sans"
                style={{
                  fontSize: 'var(--text-s)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--card-foreground)',
                  display: 'block',
                  marginBottom: 'var(--gap--0-75rem)',
                }}
              >
                Your comment:
              </span>
              
              <div className="flex items-start" style={{ gap: 'var(--gap--0-75rem)' }}>
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#16433c',
                    fontSize: 'var(--text-xs)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  CN
                </div>
                
                <div style={{ flex: 1 }}>
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Type your message here"
                    className="font-sans"
                    style={{
                      width: '100%',
                      minHeight: '100px',
                      padding: 'var(--gap--0-75rem)',
                      backgroundColor: 'var(--lum-02)',
                      border: '1px solid var(--black-a2)',
                      borderRadius: 'var(--radius-input)',
                      fontSize: 'var(--text-m)',
                      fontWeight: 'var(--font-weight-normal)',
                      color: 'var(--card-foreground)',
                      resize: 'vertical',
                      outline: 'none',
                    }}
                  />
                  
                  <PrimaryButton
                    onClick={handlePostComment}
                    style={{
                      marginTop: 'var(--gap--0-75rem)',
                    }}
                    size="sm"
                  >
                    Post comment
                  </PrimaryButton>
                </div>
              </div>
            </div>

            {/* Comments List */}
            <div>
              <h3
                className="font-sans"
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--card-foreground)',
                  marginBottom: 'var(--gap--1rem)',
                }}
              >
                Comments
              </h3>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                }}
              >
                {localComments.map((comment, index) => (
                  <div 
                    key={comment.id}
                    style={{
                      animation: index === 0 ? 'commentSlideIn 0.4s ease-out forwards' : 'none',
                    }}
                  >
                    {/* Divider between comments */}
                    {index > 0 && (
                      <div
                        style={{
                          borderTop: '1px solid var(--black-a1)',
                          marginTop: 'var(--gap--1-5rem)',
                          marginBottom: 'var(--gap--1-5rem)',
                        }}
                      />
                    )}
                    
                    <div className="flex items-start" style={{ gap: 'var(--gap--0-75rem)' }}>
                      <div
                        className="flex items-center justify-center rounded-full"
                        style={{
                          width: '32px',
                          height: '32px',
                          backgroundColor: comment.authorColor,
                          fontSize: 'var(--text-xs)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: '#FFFFFF',
                          flexShrink: 0,
                        }}
                      >
                        {comment.authorInitials}
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        <div className="flex items-center justify-between" style={{ marginBottom: 'var(--gap--0-5rem)' }}>
                          <span
                            className="font-sans"
                            style={{
                              fontSize: 'var(--text-m)',
                              fontWeight: 'var(--font-weight-semibold)',
                              color: 'var(--card-foreground)',
                            }}
                          >
                            {comment.author}
                          </span>
                          
                          <div className="flex items-center" style={{ gap: 'var(--gap--0-5rem)' }}>
                            <span
                              className="font-sans"
                              style={{
                                fontSize: 'var(--text-xs)',
                                fontWeight: 'var(--font-weight-normal)',
                                color: 'var(--muted-foreground)',
                              }}
                            >
                              {comment.timestamp}
                            </span>
                            <span
                              className="font-sans"
                              style={{
                                fontSize: 'var(--text-xs)',
                                fontWeight: 'var(--font-weight-normal)',
                                color: 'var(--muted-foreground)',
                              }}
                            >
                              {comment.date}
                            </span>
                          </div>
                        </div>
                        
                        <p
                          className="font-sans"
                          style={{
                            fontSize: 'var(--text-m)',
                            fontWeight: 'var(--font-weight-normal)',
                            color: 'var(--card-foreground)',
                            lineHeight: '1.5',
                            marginBottom: 'var(--gap--0-5rem)',
                          }}
                        >
                          {comment.content}
                        </p>
                        
                        {comment.link && (
                          <a
                            href={comment.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans"
                            style={{
                              fontSize: 'var(--text-xs)',
                              fontWeight: 'var(--font-weight-normal)',
                              color: 'var(--iris-9)',
                              textDecoration: 'underline',
                              display: 'block',
                              marginBottom: 'var(--gap--0-5rem)',
                            }}
                          >
                            {comment.link}
                          </a>
                        )}
                        
                        <div className="flex items-center" style={{ gap: 'var(--gap--1rem)' }}>
                          <button
                            className="flex items-center transition-colors duration-200"
                            style={{
                              gap: 'var(--gap--0-25rem)',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: 'var(--text-xs)',
                              fontWeight: 'var(--font-weight-medium)',
                              color: 'var(--muted-foreground)',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--card-foreground)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}
                          >
                            <span>👍</span>
                            <span>{comment.likes}</span>
                          </button>
                          
                          <button
                            className="font-sans transition-colors duration-200"
                            style={{
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: 'var(--text-xs)',
                              fontWeight: 'var(--font-weight-medium)',
                              color: 'var(--muted-foreground)',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--card-foreground)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 1/3 width */}
        <PresaleDetailRightColumn
          presaleState={presaleState}
          viewerRole={viewerRole}
          marketId={marketId}
          status={status}
          contractAddress={contractAddress}
          marketType={marketType}
          resolutionDate={resolutionDate}
          createdDate={createdDate}
          timeRemaining={timeRemaining}
          vestingSchedule={vestingSchedule}
          resolutionOutcome={resolutionOutcome}
          userInvestment={userInvestment}
          refundClaimed={refundClaimed}
          onClaimRefund={() => setShowClaimConfirmation(true)}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Claim Refund Confirmation Modal */}
      {showClaimConfirmation && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowClaimConfirmation(false)}
        >
          <div
            style={{
              background: 'var(--card-normal)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--gap--2rem)',
              maxWidth: '400px',
              width: '90%',
              border: '1px solid var(--black-a2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--card-foreground)',
                marginBottom: 'var(--gap--1rem)',
              }}
            >
              Claim Refund
            </h3>
            
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-normal)',
                color: 'var(--card-foreground)',
                lineHeight: '1.6',
                marginBottom: 'var(--gap--2rem)',
              }}
            >
              Are you sure you want to claim your refund? This will transfer{' '}
              <strong>{userInvestment || 500} USDX</strong> back to your wallet.
            </p>
            
            <div style={{ display: 'flex', gap: 'var(--gap--1rem)' }}>
              <button
                onClick={() => setShowClaimConfirmation(false)}
                className="transition-all duration-200"
                style={{
                  flex: 1,
                  padding: 'var(--gap--0-75rem)',
                  background: 'radial-gradient(46% 50% at 50% 100%, var(--lum-05, rgba(167, 187, 194, 0.30)) 0%, var(--white-a1, rgba(255, 255, 255, 0.02)) 100%), var(--lum-04, #EBF2F5)',
                  color: 'var(--card-foreground)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-button)',
                  fontSize: 'var(--text-s)',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-1)',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-03)';
                  e.currentTarget.style.border = '1px solid var(--black-a2)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'radial-gradient(46% 50% at 50% 100%, var(--lum-05, rgba(167, 187, 194, 0.30)) 0%, var(--white-a1, rgba(255, 255, 255, 0.02)) 100%), var(--lum-04, #EBF2F5)';
                  e.currentTarget.style.border = '1px solid var(--border)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-1)';
                }}
              >
                Cancel
              </button>
              
              <button
                onClick={handleClaimRefund}
                className="transition-all duration-200"
                style={{
                  flex: 1,
                  padding: 'var(--gap--0-75rem)',
                  background: 'var(--red-9)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-button)',
                  fontSize: 'var(--text-s)',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--red-8)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(229, 72, 77, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--red-9)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Confirm Claim
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .presale-detail-container {
            padding-left: var(--gap--1rem) !important;
            padding-right: var(--gap--1rem) !important;
            padding-top: var(--gap--1-5rem) !important;
            padding-bottom: var(--gap--2rem) !important;
          }
        }

        @media (max-width: 768px) {
          .presale-detail-container {
            padding-left: var(--gap--0-75rem) !important;
            padding-right: var(--gap--0-75rem) !important;
            padding-top: var(--gap--1rem) !important;
          }
        }
      `}</style>
    </div>
  );
}