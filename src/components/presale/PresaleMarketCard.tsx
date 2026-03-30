import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '@/components/ui/button';
import svgPaths from '../../imports/svg-dbugqkyth2';

type MarketStatus = 
  | 'Presale Live' 
  | 'Presale Unsuccessful' 
  | 'Market Live' 
  | 'Pending Resolution' 
  | 'Payout In Progress' 
  | 'Resolved'
  | 'Payout Completed';

type ViewerRole = 'creator' | 'investor-joined' | 'investor-not-joined';

interface PresaleMarketCardProps {
  image: string;
  category: string;
  participants: string;
  question: string;
  softcapProgress: number;
  raised: string;
  total: string;
  endingDays?: number; // Kept for backwards compatibility
  endingHours?: number;
  endingMinutes?: number;
  endDate?: Date | string; // New: actual end date
  createdBy: string;
  status?: MarketStatus;
  statusColor?: 'blue' | 'orange' | 'green' | 'teal' | 'red';
  viewerRole?: ViewerRole;
  createdDate?: string;
  joinedDate?: string;
  onClick?: () => void;
}

export function PresaleMarketCard({
  image,
  category,
  participants,
  question,
  softcapProgress,
  raised,
  total,
  endingDays = 0,
  endingHours = 0,
  endingMinutes = 0,
  endDate,
  createdBy,
  status = 'Presale Live',
  statusColor = 'blue',
  viewerRole = 'investor-not-joined',
  createdDate,
  joinedDate,
  onClick,
}: PresaleMarketCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({ days: endingDays, hours: endingHours, minutes: endingMinutes });
  const [displayFormat, setDisplayFormat] = useState<'countdown' | 'days' | 'date'>('countdown');
  
  useEffect(() => {
    // Calculate end date from props
    let targetDate: Date;
    
    if (endDate) {
      targetDate = typeof endDate === 'string' ? new Date(endDate) : endDate;
    } else {
      // Calculate from days/hours/minutes
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + endingDays);
      targetDate.setHours(targetDate.getHours() + endingHours);
      targetDate.setMinutes(targetDate.getMinutes() + endingMinutes);
    }
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeRemaining({ days, hours, minutes });
      
      // Determine display format based on time remaining
      if (days > 7) {
        setDisplayFormat('date');
      } else if (days >= 3) {
        setDisplayFormat('days');
      } else {
        setDisplayFormat('countdown');
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, [endDate, endingDays, endingHours, endingMinutes]);
  
  // Format the end date for display
  const formatEndDate = () => {
    let targetDate: Date;
    if (endDate) {
      targetDate = typeof endDate === 'string' ? new Date(endDate) : endDate;
    } else {
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + endingDays);
      targetDate.setHours(targetDate.getHours() + endingHours);
      targetDate.setMinutes(targetDate.getMinutes() + endingMinutes);
    }
    
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    return targetDate.toLocaleDateString('en-US', options);
  };
  
  // Map statuses to CSS variables
  const getStatusColors = (status: MarketStatus) => {
    switch (status) {
      case 'Presale Live':
        return { bg: 'var(--blue-3)', text: 'var(--blue-11)' };
      case 'Presale Unsuccessful':
        return { bg: 'var(--red-3)', text: 'var(--red-11)' };
      case 'Market Live':
        return { bg: 'var(--green-3)', text: 'var(--green-12)' };
      case 'Pending Resolution':
        return { bg: 'var(--orange-3)', text: 'var(--orange-11)' };
      case 'Payout In Progress':
        return { bg: 'var(--gold-3)', text: 'var(--gold-12)' };
      case 'Resolved':
        return { bg: 'var(--gold-3)', text: 'var(--gold-12)' };
      case 'Payout Completed':
        return { bg: 'var(--green-3)', text: 'var(--green-12)' };
      default:
        return { bg: 'var(--blue-3)', text: 'var(--blue-11)' };
    }
  };

  const statusStyle = getStatusColors(status);

  return (
    <>
      <div 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="rounded-[var(--radius-xl)] overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 group relative flex flex-col"
        style={{
          background: isHovered ? 'var(--card-hover)' : 'var(--card-normal)',
          border: '1px solid var(--black-a1)',
          boxShadow: isHovered ? 'var(--shadow-3)' : 'var(--shadow-1)',
          minHeight: '256px',
        }}
      >
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--gap--0-5rem)',
          padding: 'var(--gap--1rem)',
          flex: 1,
        }}
      >
        {/* Status and Countdown - Only show for Presale Live */}
        {status === 'Presale Live' && (
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 'var(--gap--0-5rem)',
            }}
          >
            {/* Status Label */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px 12px',
                background: statusStyle.bg,
                border: '1px solid var(--black-a1)',
                borderRadius: '9999px',
              }}
            >
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: statusStyle.text,
                }}
              >
                {status}
              </span>
            </div>

            {/* Countdown */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--gap--0-25rem)',
              }}
            >
              {displayFormat === 'date' ? (
                // Show "Ending at [date]" for markets > 7 days away
                <>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-normal)',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    Ending at
                  </span>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: 'var(--card-foreground)',
                    }}
                  >
                    {formatEndDate()}
                  </span>
                </>
              ) : displayFormat === 'days' ? (
                // Show "Ending in X days" for 3-7 days
                <>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-normal)',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    Ending in
                  </span>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: 'var(--card-foreground)',
                    }}
                  >
                    {timeRemaining.days} {timeRemaining.days === 1 ? 'day' : 'days'}
                  </span>
                </>
              ) : (
                // Show countdown timer for < 3 days
                <>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-normal)',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    Ending in
                  </span>
                  <div 
                    style={{
                      display: 'flex',
                      gap: '2px',
                      alignItems: 'center',
                    }}
                  >
                    <div 
                      style={{
                        minWidth: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--orange-2)',
                        border: '1px solid var(--orange-4)',
                        borderRadius: '6px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'var(--font-weight-semi-bold)',
                        fontSize: '12px',
                        lineHeight: '16px',
                        color: 'var(--card-foreground)',
                        padding: '0 4px',
                      }}
                    >
                      {String(timeRemaining.days).padStart(2, '0')}
                    </div>
                    <span 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'var(--font-weight-normal)',
                        fontSize: 'var(--text-sm)',
                        lineHeight: '24px',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      :
                    </span>
                    <div 
                      style={{
                        minWidth: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--orange-2)',
                        border: '1px solid var(--orange-4)',
                        borderRadius: '6px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'var(--font-weight-semi-bold)',
                        fontSize: '12px',
                        lineHeight: '16px',
                        color: 'var(--card-foreground)',
                        padding: '0 4px',
                      }}
                    >
                      {String(timeRemaining.hours).padStart(2, '0')}
                    </div>
                    <span 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'var(--font-weight-normal)',
                        fontSize: 'var(--text-sm)',
                        lineHeight: '24px',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      :
                    </span>
                    <div 
                      style={{
                        minWidth: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--orange-2)',
                        border: '1px solid var(--orange-4)',
                        borderRadius: '6px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'var(--font-weight-semi-bold)',
                        fontSize: '12px',
                        lineHeight: '16px',
                        color: 'var(--card-foreground)',
                        padding: '0 4px',
                      }}
                    >
                      {String(timeRemaining.minutes).padStart(2, '0')}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Image and Content */}
        <div 
          style={{
            display: 'flex',
            gap: 'var(--gap--0-75rem)',
          }}
        >
          {/* Image */}
          <div 
            style={{
              width: '82px',
              height: '136px',
              borderRadius: '6px',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <ImageWithFallback 
              src={image} 
              alt={question}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Content */}
          <div 
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--gap--0-75rem)',
            }}
          >
            {/* Category and Participants */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--gap--0-5rem)',
              }}
            >
              {/* Category Tag - Synced with general market card */}
              <div 
                className="bg-accent"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '3px 12px',
                  borderRadius: 'var(--radius-input)',
                  flexShrink: 0,
                }}
              >
                <span 
                  className="text-muted-foreground"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'var(--text-xs)',
                    lineHeight: '16px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {category}
                </span>
              </div>
              
              {/* Participants - Synced with general market card format */}
              <span 
                className="text-muted-foreground"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--text-xs)',
                  lineHeight: '20px',
                }}
              >
                {participants} participants
              </span>
            </div>

            {/* Question */}
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'var(--font-weight-semi-bold)',
                fontSize: 'var(--text-m)',
                lineHeight: '20px',
                color: 'var(--card-foreground)',
                margin: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                minHeight: '56px',
                maxHeight: '64px',
              }}
            >
              {question}
            </p>

            {/* Softcap Progress Bar */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--gap--0-25rem)',
              }}
            >
              {/* Progress Bar */}
              <div 
                style={{
                  width: '100%',
                  height: '12px',
                  position: 'relative',
                  borderRadius: '9999px',
                }}
              >
                {/* Border overlay */}
                <div 
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    border: '1px solid var(--black-a6)',
                    borderRadius: '9999px',
                    pointerEvents: 'none',
                  }}
                />
                
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '3px',
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    isolate: softcapProgress > 100 ? 'isolate' : undefined,
                  }}
                >
                  {/* Fire icon for over-softcap */}
                  {softcapProgress > 100 && (
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '3px',
                        right: 0,
                        width: '20px',
                        height: '20px',
                        zIndex: 2,
                        animation: 'fireFlicker 1.5s ease-in-out infinite, firePulse 2s ease-in-out infinite',
                      }}
                    >
                      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g clipPath="url(#clip0_652_15486)">
                          <g>
                            <path d={svgPaths.pfb7d300} fill="url(#paint0_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint1_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint2_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint3_linear_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint4_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint5_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint6_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint7_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint8_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint9_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint10_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint11_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint12_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint13_radial_652_15486)" fillOpacity="0.2" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint14_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint15_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint16_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint17_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint18_radial_652_15486)" fillOpacity="0.3" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint19_radial_652_15486)" fillOpacity="0.4" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint20_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint21_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint22_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint23_radial_652_15486)" fillOpacity="0.8" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint24_radial_652_15486)" fillOpacity="0.2" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint25_radial_652_15486)" fillOpacity="0.2" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint26_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint27_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint28_radial_652_15486)" />
                            <path d={svgPaths.pfb7d300} fill="url(#paint29_radial_652_15486)" />
                          </g>
                          <g>
                            <path d={svgPaths.p12610cc0} fill="url(#paint30_radial_652_15486)" />
                            <path d={svgPaths.p12610cc0} fill="url(#paint31_radial_652_15486)" />
                            <path d={svgPaths.p12610cc0} fill="url(#paint32_radial_652_15486)" />
                            <path d={svgPaths.p12610cc0} fill="url(#paint33_radial_652_15486)" />
                            <path d={svgPaths.p12610cc0} fill="url(#paint34_linear_652_15486)" />
                            <path d={svgPaths.p12610cc0} fill="url(#paint35_radial_652_15486)" />
                            <path d={svgPaths.p12610cc0} fill="url(#paint36_radial_652_15486)" />
                            <path d={svgPaths.p12610cc0} fill="url(#paint37_radial_652_15486)" fillOpacity="0.7" />
                          </g>
                        </g>
                        <defs>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(17.0015 14.3251) rotate(-179.474) scale(10.6867 16.1163)" gradientUnits="userSpaceOnUse" id="paint0_radial_652_15486" r="1">
                            <stop stopColor="#FF953D" />
                            <stop offset="1" stopColor="#FF5141" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(8.48285 11.7844) rotate(-157.937) scale(6.46507 11.1559)" gradientUnits="userSpaceOnUse" id="paint1_radial_652_15486" r="1">
                            <stop stopColor="#CE5327" />
                            <stop offset="1" stopColor="#CE5327" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(6.93013 14.4734) rotate(15.4786) scale(1.3145 4.78962)" gradientUnits="userSpaceOnUse" id="paint2_radial_652_15486" r="1">
                            <stop stopColor="#F38758" />
                            <stop offset="0.363071" stopColor="#F38758" stopOpacity="0.703001" />
                            <stop offset="0.71349" stopColor="#F38758" stopOpacity="0.210142" />
                            <stop offset="1" stopColor="#F38758" stopOpacity="0" />
                          </radialGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_652_15486" x1="13.4603" x2="13.4603" y1="20.7151" y2="17.5285">
                            <stop stopColor="#FF7583" />
                            <stop offset="1" stopColor="#FF7583" stopOpacity="0" />
                          </linearGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(5.09831 10.9947) rotate(24.0149) scale(1.94041 16.0619)" gradientUnits="userSpaceOnUse" id="paint4_radial_652_15486" r="1">
                            <stop stopColor="#FFAA7B" />
                            <stop offset="0.845295" stopColor="#FFAA7B" stopOpacity="0.0923529" />
                            <stop offset="1" stopColor="#FFAA7B" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(7.81903 5.90695) rotate(77.3196) scale(2.40022 2.99492)" gradientUnits="userSpaceOnUse" id="paint5_radial_652_15486" r="1">
                            <stop stopColor="#FF5E47" />
                            <stop offset="1" stopColor="#FF5E47" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(12.2682 2.85376) rotate(87.8819) scale(6.33587 5.86451)" gradientUnits="userSpaceOnUse" id="paint6_radial_652_15486" r="1">
                            <stop stopColor="#FF2F3C" />
                            <stop offset="1" stopColor="#FF2F3C" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.55001 7.47795) rotate(152.832) scale(0.778771 0.331045)" gradientUnits="userSpaceOnUse" id="paint7_radial_652_15486" r="1">
                            <stop stopColor="#FFA682" />
                            <stop offset="0.686162" stopColor="#FFA682" stopOpacity="0.266248" />
                            <stop offset="0.821066" stopColor="#FFA682" stopOpacity="0.117186" />
                            <stop offset="1" stopColor="#FFA682" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.4564 7.47479) rotate(114.808) scale(2.42045 0.239687)" gradientUnits="userSpaceOnUse" id="paint8_radial_652_15486" r="1">
                            <stop stopColor="#FFA682" />
                            <stop offset="0.701678" stopColor="#FFA682" stopOpacity="0.199672" />
                            <stop offset="1" stopColor="#FFA682" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(7.39164 8.25739) rotate(20.9596) scale(0.558432 2.64863)" gradientUnits="userSpaceOnUse" id="paint9_radial_652_15486" r="1">
                            <stop stopColor="#FF815B" />
                            <stop offset="0.24804" stopColor="#FF815B" stopOpacity="0.869521" />
                            <stop offset="0.815487" stopColor="#FF815B" stopOpacity="0.150116" />
                            <stop offset="1" stopColor="#FF815B" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(7.81757 7.45614) rotate(16.4224) scale(0.685352 2.26671)" gradientUnits="userSpaceOnUse" id="paint10_radial_652_15486" r="1">
                            <stop stopColor="#FF815B" />
                            <stop offset="0.24804" stopColor="#FF815B" stopOpacity="0.869521" />
                            <stop offset="0.822875" stopColor="#FF815B" stopOpacity="0.150116" />
                            <stop offset="1" stopColor="#FF815B" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(8.66427 6.23454) rotate(99.2111) scale(0.682806 2.72066)" gradientUnits="userSpaceOnUse" id="paint11_radial_652_15486" r="1">
                            <stop stopColor="#FF2F3C" />
                            <stop offset="0.739036" stopColor="#FF2F3C" stopOpacity="0.119038" />
                            <stop offset="1" stopColor="#FF2F3C" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.23537 7.06829) rotate(105.173) scale(3.64505 0.960133)" gradientUnits="userSpaceOnUse" id="paint12_radial_652_15486" r="1">
                            <stop stopColor="#FF2F3C" stopOpacity="0.72" />
                            <stop offset="0.739036" stopColor="#FF2F3C" stopOpacity="0.119038" />
                            <stop offset="1" stopColor="#FF2F3C" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.38285 10.2744) rotate(31.1593) scale(1.73454 7.84837)" gradientUnits="userSpaceOnUse" id="paint13_radial_652_15486" r="1">
                            <stop stopColor="#CA0B4A" />
                            <stop offset="0.680964" stopColor="#CA0B4A" stopOpacity="0.54" />
                            <stop offset="1" stopColor="#CA0B4A" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(10.8026 6.02709) rotate(23.7601) scale(1.41009 5.13792)" gradientUnits="userSpaceOnUse" id="paint14_radial_652_15486" r="1">
                            <stop stopColor="#F38758" />
                            <stop offset="0.363071" stopColor="#F38758" stopOpacity="0.703001" />
                            <stop offset="0.71349" stopColor="#F38758" stopOpacity="0.210142" />
                            <stop offset="1" stopColor="#F38758" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.66789 8.75761) rotate(28.8359) scale(1.0444 3.80546)" gradientUnits="userSpaceOnUse" id="paint15_radial_652_15486" r="1">
                            <stop stopColor="#F38758" stopOpacity="0.86" />
                            <stop offset="0.262244" stopColor="#F38758" stopOpacity="0.703001" />
                            <stop offset="0.675284" stopColor="#F38758" stopOpacity="0.210142" />
                            <stop offset="0.861713" stopColor="#F38758" stopOpacity="0.0623553" />
                            <stop offset="1" stopColor="#F38758" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(8.03969 11.7203) rotate(24.6769) scale(1.53856 5.60604)" gradientUnits="userSpaceOnUse" id="paint16_radial_652_15486" r="1">
                            <stop stopColor="#F38758" />
                            <stop offset="0.363071" stopColor="#F38758" stopOpacity="0.703001" />
                            <stop offset="0.71349" stopColor="#F38758" stopOpacity="0.210142" />
                            <stop offset="1" stopColor="#F38758" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.75756 15.8005) rotate(-160.017) scale(3.63448 7.40684)" gradientUnits="userSpaceOnUse" id="paint17_radial_652_15486" r="1">
                            <stop stopColor="#CE5327" />
                            <stop offset="0.844833" stopColor="#CE5327" stopOpacity="0.434204" />
                            <stop offset="0.945717" stopColor="#CE5327" stopOpacity="0.12821" />
                            <stop offset="1" stopColor="#CE5327" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(12.2207 5.65796) rotate(-176.122) scale(0.729334 2.91563)" gradientUnits="userSpaceOnUse" id="paint18_radial_652_15486" r="1">
                            <stop stopColor="#CE5327" stopOpacity="0.65" />
                            <stop offset="0.481357" stopColor="#CE5327" stopOpacity="0.434204" />
                            <stop offset="0.738276" stopColor="#CE5327" stopOpacity="0.12821" />
                            <stop offset="1" stopColor="#CE5327" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(11.9299 6.98328) rotate(-164.148) scale(0.745832 2.98159)" gradientUnits="userSpaceOnUse" id="paint19_radial_652_15486" r="1">
                            <stop stopColor="#CE5327" stopOpacity="0.65" />
                            <stop offset="0.481357" stopColor="#CE5327" stopOpacity="0.434204" />
                            <stop offset="0.738276" stopColor="#CE5327" stopOpacity="0.12821" />
                            <stop offset="1" stopColor="#CE5327" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(7.41492 10.5721) rotate(-154.011) scale(0.459964 3.87743)" gradientUnits="userSpaceOnUse" id="paint20_radial_652_15486" r="1">
                            <stop stopColor="#CE5327" stopOpacity="0.87" />
                            <stop offset="0.493785" stopColor="#CE5327" stopOpacity="0.53" />
                            <stop offset="0.852631" stopColor="#CE5327" stopOpacity="0.123929" />
                            <stop offset="1" stopColor="#CE5327" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.31648 8.40142) rotate(-145.909) scale(0.195247 1.20909)" gradientUnits="userSpaceOnUse" id="paint21_radial_652_15486" r="1">
                            <stop stopColor="#FF5E47" />
                            <stop offset="1" stopColor="#FF5E47" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(6.87879 7.54778) rotate(29.1817) scale(0.843148 5.22128)" gradientUnits="userSpaceOnUse" id="paint22_radial_652_15486" r="1">
                            <stop offset="0.25679" stopColor="#FF5E47" />
                            <stop offset="0.779632" stopColor="#FF5E47" stopOpacity="0.216117" />
                            <stop offset="1" stopColor="#FF5E47" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.65676 7.72602) rotate(-155.855) scale(0.270745 1.32939)" gradientUnits="userSpaceOnUse" id="paint23_radial_652_15486" r="1">
                            <stop stopColor="#FF2F3C" />
                            <stop offset="0.361378" stopColor="#FF2F3C" stopOpacity="0.44772" />
                            <stop offset="0.739036" stopColor="#FF2F3C" stopOpacity="0.119038" />
                            <stop offset="1" stopColor="#FF2F3C" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(12.2641 5.67831) rotate(-177.99) scale(1.12257 5.92931)" gradientUnits="userSpaceOnUse" id="paint24_radial_652_15486" r="1">
                            <stop stopColor="#CA0B4A" />
                            <stop offset="0.680964" stopColor="#CA0B4A" stopOpacity="0.183465" />
                            <stop offset="1" stopColor="#CA0B4A" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(12.2875 4.07573) rotate(-180) scale(0.595412 3.14491)" gradientUnits="userSpaceOnUse" id="paint25_radial_652_15486" r="1">
                            <stop stopColor="#CA0B4A" />
                            <stop offset="0.680964" stopColor="#CA0B4A" stopOpacity="0.183465" />
                            <stop offset="1" stopColor="#CA0B4A" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(6.88672 13.2675) rotate(22.249) scale(0.422884 2.65781)" gradientUnits="userSpaceOnUse" id="paint26_radial_652_15486" r="1">
                            <stop stopColor="#F38758" />
                            <stop offset="0.277249" stopColor="#F38758" stopOpacity="0.771452" />
                            <stop offset="0.585568" stopColor="#F38758" stopOpacity="0.288453" />
                            <stop offset="1" stopColor="#F38758" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(7.7795 11.6296) rotate(29.7449) scale(0.379832 2.38723)" gradientUnits="userSpaceOnUse" id="paint27_radial_652_15486" r="1">
                            <stop stopColor="#F38758" />
                            <stop offset="0.277249" stopColor="#F38758" stopOpacity="0.771452" />
                            <stop offset="0.585568" stopColor="#F38758" stopOpacity="0.288453" />
                            <stop offset="1" stopColor="#F38758" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(8.74534 10.1444) rotate(37.4054) scale(0.347825 2.18607)" gradientUnits="userSpaceOnUse" id="paint28_radial_652_15486" r="1">
                            <stop stopColor="#F38758" />
                            <stop offset="0.277249" stopColor="#F38758" stopOpacity="0.771452" />
                            <stop offset="0.585568" stopColor="#F38758" stopOpacity="0.288453" />
                            <stop offset="1" stopColor="#F38758" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.92379 12.7832) rotate(-151.033) scale(2.66225 5.7928)" gradientUnits="userSpaceOnUse" id="paint29_radial_652_15486" r="1">
                            <stop stopColor="#CE5327" />
                            <stop offset="0.638398" stopColor="#CE5327" stopOpacity="0.417024" />
                            <stop offset="0.913732" stopColor="#CE5327" stopOpacity="0.123929" />
                            <stop offset="1" stopColor="#CE5327" stopOpacity="0" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(15.2529 17.2351) rotate(-168.558) scale(6.26819 7.80567)" gradientUnits="userSpaceOnUse" id="paint30_radial_652_15486" r="1">
                            <stop stopColor="#FFDA2F" />
                            <stop offset="0.352487" stopColor="#FFC634" />
                            <stop offset="1" stopColor="#FF8E41" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(14.3307 16.0813) rotate(-174.878) scale(6.42524 15.7318)" gradientUnits="userSpaceOnUse" id="paint31_radial_652_15486" r="1">
                            <stop offset="0.627719" stopColor="#D7812D" stopOpacity="0" />
                            <stop offset="0.728983" stopColor="#D7812D" stopOpacity="0.137125" />
                            <stop offset="0.855913" stopColor="#D7812D" stopOpacity="0.404199" />
                            <stop offset="1" stopColor="#D7812D" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(18.7499 19.8252) rotate(-135.822) scale(12.5457 14.7938)" gradientUnits="userSpaceOnUse" id="paint32_radial_652_15486" r="1">
                            <stop stopColor="#D7812D" stopOpacity="0" />
                            <stop offset="0.688904" stopColor="#D7812D" stopOpacity="0" />
                            <stop offset="0.767023" stopColor="#D7812D" stopOpacity="0.103983" />
                            <stop offset="0.837368" stopColor="#D7812D" stopOpacity="0.404199" />
                            <stop offset="0.951078" stopColor="#D7812D" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.75082 7.37035) rotate(69.0442) scale(8.83906 7.67996)" gradientUnits="userSpaceOnUse" id="paint33_radial_652_15486" r="1">
                            <stop offset="0.152609" stopColor="#FD5639" />
                            <stop offset="0.835743" stopColor="#FE5534" stopOpacity="0.0858814" />
                            <stop offset="1" stopColor="#FE5533" stopOpacity="0" />
                          </radialGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_652_15486" x1="12.3141" x2="12.3141" y1="8.63257" y2="10.9121">
                            <stop stopColor="#F95131" />
                            <stop offset="1" stopColor="#F95131" stopOpacity="0" />
                          </linearGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(16.3661 13.7514) rotate(143.063) scale(10.0341 7.26087)" gradientUnits="userSpaceOnUse" id="paint35_radial_652_15486" r="1">
                            <stop offset="0.725303" stopColor="#F18A52" stopOpacity="0" />
                            <stop offset="0.816284" stopColor="#F18A52" stopOpacity="0.230883" />
                            <stop offset="1" stopColor="#F18A52" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(17.0803 16.2955) rotate(-148.858) scale(8.61285 14.1854)" gradientUnits="userSpaceOnUse" id="paint36_radial_652_15486" r="1">
                            <stop stopColor="#F39D5D" stopOpacity="0" />
                            <stop offset="0.928937" stopColor="#F39D5D" stopOpacity="0" />
                            <stop offset="0.938719" stopColor="#F39D5D" stopOpacity="0.0581965" />
                            <stop offset="0.950197" stopColor="#F39D5D" stopOpacity="0.180239" />
                            <stop offset="0.983595" stopColor="#F39D5D" />
                          </radialGradient>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(18.7184 16.7542) rotate(-178.108) scale(10.9156 11.0632)" gradientUnits="userSpaceOnUse" id="paint37_radial_652_15486" r="1">
                            <stop stopColor="#F39D5D" stopOpacity="0" />
                            <stop offset="0.939537" stopColor="#F39D5D" stopOpacity="0" />
                            <stop offset="0.951154" stopColor="#F39D5D" stopOpacity="0.0581965" />
                            <stop offset="0.96296" stopColor="#F39D5D" stopOpacity="0.180239" />
                            <stop offset="0.980969" stopColor="#F39D5D" />
                          </radialGradient>
                          <clipPath id="clip0_652_15486">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  )}
                  
                  {/* Progress bars */}
                  <div 
                    style={{
                      display: 'flex',
                      height: '100%',
                      width: '100%',
                      gap: '2px',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {softcapProgress <= 100 && (
                      <>
                        {/* Normal progress bar (0-100%) */}
                        <div 
                          style={{
                            width: `${softcapProgress}%`,
                            background: 'var(--indigo-9)',
                            borderRadius: softcapProgress === 100 ? '9999px' : '9999px 0 0 9999px',
                            height: '100%',
                          }}
                        />
                        {softcapProgress < 100 && (
                          <div 
                            style={{
                              flex: 1,
                              background: 'var(--gray-3)',
                              borderRadius: '0 9999px 9999px 0',
                              height: '100%',
                            }}
                          />
                        )}
                      </>
                    )}
                    
                    {softcapProgress > 100 && (
                      <>
                        {/* Over softcap progress bar (100%+ with overflow) */}
                        <div 
                          style={{
                            width: `${Math.min((100 / softcapProgress) * 100, 100)}%`,
                            background: 'var(--indigo-9)',
                            borderRadius: '9999px 0 0 9999px',
                            height: '100%',
                          }}
                        />
                        <div 
                          style={{
                            flex: 1,
                            background: 'var(--crimson-9)',
                            borderRadius: '0 9999px 9999px 0',
                            height: '100%',
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Progress Text */}
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 'var(--gap--0-25rem)',
                }}
              >
                {/* Left: Softcap progress label */}
                <div 
                  style={{
                    display: 'flex',
                    gap: '2px',
                    alignItems: 'center',
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: 'var(--gray-10)',
                    }}
                  >
                    Softcap progress:
                  </span>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: softcapProgress === 100 
                        ? 'var(--indigo-9)' 
                        : softcapProgress > 100 
                          ? 'var(--crimson-9)' 
                          : 'var(--gray-10)',
                    }}
                  >
                    {softcapProgress}%
                  </span>
                </div>
                
                {/* Right: Amount */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--gap--0-25rem)',
                  }}
                >
                  {softcapProgress < 100 && (
                    <>
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 'var(--font-weight-medium)',
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: 'var(--card-foreground)',
                        }}
                      >
                        {raised}
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 'var(--font-weight-medium)',
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: 'var(--gray-7)',
                        }}
                      >
                        /
                      </span>
                      <span 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 'var(--font-weight-medium)',
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: 'var(--card-foreground)',
                        }}
                      >
                        {total}
                      </span>
                    </>
                  )}
                  {softcapProgress >= 100 && (
                    <span 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 'var(--font-weight-medium)',
                        fontSize: '12px',
                        lineHeight: '20px',
                        color: 'var(--card-foreground)',
                      }}
                    >
                      {raised}
                    </span>
                  )}
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      fontSize: '12px',
                      lineHeight: '20px',
                      color: 'var(--black-a6)',
                    }}
                  >
                    USDX
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer before divider/footer group */}
        <div style={{ flex: 1, minHeight: 'var(--gap--0-5rem)' }} />

        {/* Divider */}
        <div 
          style={{
            width: '100%',
            height: '1px',
            background: 'var(--black-a1)',
          }}
        />

        {/* Footer */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 'var(--gap--0-5rem)',
            width: '100%',
          }}
        >
          {/* Left: Creator and Created Date */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              flex: '1 1 auto',
            }}
          >
            {/* Creator Name Row */}
            <div 
              style={{
                display: 'flex',
                gap: 'var(--gap--0-5rem)',
                alignItems: 'center',
              }}
            >
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--text-xs)',
                  lineHeight: '20px',
                  color: 'var(--muted-foreground)',
                }}
              >
                By
              </span>
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--text-xs)',
                  lineHeight: '20px',
                  color: 'var(--foreground)',
                }}
              >
                {createdBy}
              </span>

              {/* Joined Date - Show on same row for investor-joined view on Presale Live */}
              {viewerRole === 'investor-joined' && status === 'Presale Live' && joinedDate && (
                <>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      fontSize: 'var(--text-xs)',
                      lineHeight: '20px',
                      color: 'var(--muted-foreground)',
                    }}
                  >
                    •
                  </span>
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 'var(--font-weight-medium)',
                      fontSize: 'var(--text-xs)',
                      lineHeight: '20px',
                      color: 'var(--primary-button-bg)',
                    }}
                  >
                    Joined on {joinedDate}
                  </span>
                </>
              )}
            </div>

            {/* Created Date - Show below creator name for creator view */}
            {viewerRole === 'creator' && createdDate && (
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--text-xs)',
                  lineHeight: '20px',
                  color: 'var(--iris-10)',
                }}
              >
                Created {createdDate}
              </span>
            )}

            {/* Joined Date - Show below creator name for investor-joined view */}
            {viewerRole === 'investor-joined' && joinedDate && (
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--text-xs)',
                  lineHeight: '20px',
                  color: 'var(--iris-10)',
                }}
              >
                Joined at {joinedDate}
              </span>
            )}

            {/* Created Date - Show for investor-not-joined view (market they don't own) */}
            {viewerRole === 'investor-not-joined' && createdDate && (
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 'var(--font-weight-medium)',
                  fontSize: 'var(--text-xs)',
                  lineHeight: '20px',
                  color: 'var(--muted-foreground)',
                }}
              >
                Created {createdDate}
              </span>
            )}
          </div>

          {/* Right: Action or Status */}
          <div>
            {/* Investor View (Not Joined) - Show Join Button for Presale Live */}
            {viewerRole === 'investor-not-joined' && status === 'Presale Live' && (
              <Button 
                variant="primary"
                size="sm"
                onClick={onClick}
              >
                Join Pre-sale
              </Button>
            )}

            {/* Show Status for Non-Presale Live markets */}
            {status !== 'Presale Live' && (
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px 12px',
                  background: statusStyle.bg,
                  border: '1px solid var(--black-a1)',
                  borderRadius: '9999px',
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: statusStyle.text,
                  }}
                >
                  {status}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

      {/* Fire Animation Keyframes */}
      <style>{`
        @keyframes fireFlicker {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          10% {
            opacity: 0.92;
            transform: scale(1.05) rotate(-2deg);
          }
          20% {
            opacity: 0.88;
            transform: scale(0.98) rotate(1deg);
          }
          30% {
            opacity: 0.95;
            transform: scale(1.02) rotate(-1deg);
          }
          40% {
            opacity: 0.9;
            transform: scale(1.04) rotate(2deg);
          }
          50% {
            opacity: 0.87;
            transform: scale(0.96) rotate(-2deg);
          }
          60% {
            opacity: 0.93;
            transform: scale(1.03) rotate(1deg);
          }
          70% {
            opacity: 0.91;
            transform: scale(1.01) rotate(-1deg);
          }
          80% {
            opacity: 0.89;
            transform: scale(0.99) rotate(2deg);
          }
          90% {
            opacity: 0.94;
            transform: scale(1.02) rotate(-1deg);
          }
        }

        @keyframes firePulse {
          0%, 100% {
            filter: brightness(1) saturate(1);
          }
          50% {
            filter: brightness(1.15) saturate(1.2);
          }
        }
      `}</style>
    </>
  );
}