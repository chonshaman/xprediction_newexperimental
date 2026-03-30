import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-8nd9kfj3ik";
import { PrimaryButton } from './PrimaryButton';
import { ReferralsPopup } from './ReferralsPopup';
import { Maximize2, Minimize2 } from 'lucide-react';

function Group({ showInviteCode, isInitialLoad }: { showInviteCode: boolean; isInitialLoad: boolean }) {
  const gradientClass = showInviteCode ? 'gradient-invite' : 'gradient-login';
  
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
      {/* Left gradient layer - 50% width on left side */}
      <div 
        className={`gradient-left ${gradientClass} ${isInitialLoad ? 'initial-load' : ''}`}
        style={{ 
          position: 'absolute', 
          height: '100%', 
          left: 0, 
          mixBlendMode: 'color-dodge', 
          top: 0, 
          width: '50%'
        }} 
      />
      {/* Right gradient layer - 50% width on right side */}
      <div 
        className={`gradient-right ${gradientClass} ${isInitialLoad ? 'initial-load' : ''}`}
        style={{ 
          position: 'absolute', 
          height: '100%', 
          right: 0, 
          mixBlendMode: 'color-dodge', 
          top: 0, 
          width: '50%'
        }}
      />
      {/* Overlay gradient */}
      <div 
        style={{ 
          position: 'absolute', 
          background: showInviteCode 
            ? 'linear-gradient(180deg, #08081b 0%, rgba(8, 8, 27, 0) 90%, #08081b 100%)'
            : 'linear-gradient(180deg, #08081b 0%, rgba(8, 8, 27, 0) 60%, #08081b 100%)', 
          height: '100%', 
          left: 0, 
          top: 0, 
          width: '100%',
          transition: 'background 0.77s ease'
        }} 
      />
      <style>{`
        @property --gradient-position {
          syntax: '<percentage>';
          initial-value: 62%;
          inherits: false;
        }

        .gradient-left {
          background: conic-gradient(from 90deg at 50% var(--gradient-position), #ffffff 0deg, #5f3a3a 0deg, #ffffff 368deg);
          --gradient-position: 62%;
          transition: --gradient-position 0.77s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gradient-right {
          background: conic-gradient(from 270deg at 50% var(--gradient-position), #ffffff -8deg, #5f3a3a 360deg, #ffffff 334deg);
          --gradient-position: 62%;
          transition: --gradient-position 0.77s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gradient-login {
          --gradient-position: 62%;
        }

        .gradient-invite {
          --gradient-position: 88%;
        }

        .initial-load {
          opacity: 0;
          animation: fadeIn 1s ease 0.2s forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

function Title() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        fontFamily: '"Russo One", Inter, sans-serif',
        fontWeight: 'var(--font-weight-normal)',
        gap: 'var(--gap--1rem)', 
        alignItems: 'center', 
        lineHeight: 'normal', 
        fontStyle: 'normal', 
        textAlign: 'center', 
        color: 'white',
        zIndex: 2
      }}
      className="title-responsive"
    >
      <p className="title-main" style={{ flexShrink: 0, fontSize: '40px' }}>The future has a price.</p>
      <p className="title-sub" style={{ minWidth: '100%', opacity: 0.7, flexShrink: 0, fontSize: 'var(--text-xl)', width: 'min-content', whiteSpace: 'pre-wrap' }}>Make it work for you.</p>
      <style>{`
        @media (max-width: 1024px) {
          .title-responsive .title-main {
            font-size: var(--text-3xl) !important;
          }
          .title-responsive .title-sub {
            font-size: var(--text-base) !important;
          }
        }
        @media (max-width: 768px) {
          .title-responsive .title-main {
            font-size: var(--text-3xl) !important;
          }
          .title-responsive .title-sub {
            font-size: var(--text-base) !important;
          }
        }
      `}</style>
    </div>
  );
}

function XmarketSymbol() {
  return (
    <div style={{ height: '28px', position: 'relative', flexShrink: 0, width: '28.059px' }}>
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 28.059 28">
        <g>
          <path d={svgPaths.p2521db00} fill="#6952FE" />
          <g>
            <path d={svgPaths.p12488800} fill="white" />
            <path d={svgPaths.p675af40} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function XmarketWordmark() {
  return (
    <div style={{ height: '16px', position: 'relative', flexShrink: 0, width: '152px' }}>
      <div style={{ position: 'absolute', inset: '-1.73% -0.02% 0 0' }}>
        <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 152.034 16.2775">
          <g>
            <path d={svgPaths.p221e8780} fill="#E0DFFE" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function XmarketLogo({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      style={{ 
        display: 'flex', 
        gap: 'var(--gap--0-25rem)', 
        alignItems: 'center',
        zIndex: 2,
        paddingTop: '40px',
        transform: 'scale(1.3)',
        transformOrigin: 'top center',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'opacity 0.2s ease'
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.opacity = '0.8';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.opacity = '1';
        }
      }}
    >
      <XmarketSymbol />
      <XmarketWordmark />
    </div>
  );
}

function Group1() {
  return (
    <div style={{ position: 'absolute', inset: '8.33% 9.92% 8.33% 8.33%' }}>
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 16.3488 16.6667">
        <g>
          <path d={svgPaths.p2998f580} fill="#4285F4" />
          <path d={svgPaths.p2f0e100} fill="#34A853" />
          <path d={svgPaths.p36277100} fill="#FBBC05" />
          <path d={svgPaths.p12562680} fill="#EB4335" />
        </g>
      </svg>
    </div>
  );
}

function IcGoogleWithText() {
  return (
    <div style={{ position: 'relative', flexShrink: 0, width: '20px', height: '20px' }}>
      <div style={{ position: 'absolute', background: 'white', left: 0, opacity: 0, borderRadius: '28px', width: '24px', height: '24px', top: 0 }} />
      <Group1 />
    </div>
  );
}

function Frame({ onClick, isLoading }: { onClick: () => void; isLoading: boolean }) {
  return (
    <div 
      style={{ 
        backdropFilter: 'blur(8px)', 
        background: 'rgba(255, 255, 255, 0.1)', 
        position: 'relative', 
        borderRadius: 'var(--border-radius--0-5rem)', 
        flexShrink: 0, 
        width: '100%',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        cursor: isLoading ? 'default' : 'pointer',
        transition: 'all 0.2s ease',
        opacity: isLoading ? 0.7 : 1
      }}
      onClick={!isLoading ? onClick : undefined}
      onMouseEnter={(e) => {
        if (!isLoading) {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
          e.currentTarget.style.transform = 'translateY(-4px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isLoading) {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%' }}>
        <div 
          style={{ 
            display: 'flex', 
            gap: 'var(--gap--0-75rem)', 
            alignItems: 'center', 
            padding: 'var(--gap--0-75rem) var(--gap--1-5rem)', 
            position: 'relative',
            width: '100%'
          }}
        >
          {isLoading ? (
            <div
              style={{
                width: '20px',
                height: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderTop: '2px solid rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite'
              }}
            />
          ) : (
            <IcGoogleWithText />
          )}
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 'var(--font-weight-medium)', 
              lineHeight: '24px', 
              fontStyle: 'normal', 
              flexShrink: 0, 
              fontSize: 'var(--text-base)', 
              color: 'rgba(255, 255, 255, 0.7)', 
              textAlign: 'center' 
            }}
          >
            {isLoading ? 'Loading...' : 'Google'}
          </p>
        </div>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function MailOpen() {
  return (
    <div style={{ flex: '1 0 0', height: '100%', minHeight: '1px', minWidth: '1px', position: 'relative', zIndex: 2 }}>
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d={svgPaths.p1bd73380} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
          <path d={svgPaths.p12930b00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        gap: 'var(--gap--0-5rem)', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '1px', 
        position: 'relative', 
        flexShrink: 0, 
        width: '20px', 
        height: '20px',
        isolation: 'isolate'
      }}
    >
      <MailOpen />
      <div 
        style={{ 
          position: 'absolute', 
          background: 'rgba(0, 0, 0, 0.06)', 
          left: '50%', 
          opacity: 0, 
          borderRadius: '24px', 
          width: '24px', 
          height: '24px', 
          top: '50%', 
          zIndex: 1,
          transform: 'translate(-50%, -50%)'
        }} 
      />
    </div>
  );
}

function Frame1() {
  return (
    <div 
      style={{ 
        backdropFilter: 'blur(8px)', 
        background: 'rgba(255, 255, 255, 0.1)', 
        position: 'relative', 
        borderRadius: 'var(--border-radius--0-5rem)', 
        flexShrink: 0, 
        width: '100%',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%' }}>
        <div 
          style={{ 
            display: 'flex', 
            gap: 'var(--gap--0-75rem)', 
            alignItems: 'center', 
            padding: 'var(--gap--0-75rem) var(--gap--1-5rem)', 
            position: 'relative', 
            width: '100%' 
          }}
        >
          <Icon />
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 'var(--font-weight-medium)', 
              lineHeight: '24px', 
              fontStyle: 'normal', 
              flexShrink: 0, 
              fontSize: 'var(--text-base)', 
              color: 'rgba(255, 255, 255, 0.7)', 
              textAlign: 'center' 
            }}
          >
            Continue with email
          </p>
        </div>
      </div>
    </div>
  );
}

function Wallet() {
  return (
    <div style={{ flex: '1 0 0', height: '100%', minHeight: '1px', minWidth: '1px', position: 'relative', zIndex: 2 }}>
      <svg style={{ display: 'block', width: '100%', height: '100%' }} fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d={svgPaths.p35625ff0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
          <path d={svgPaths.p2532d00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div 
      style={{ 
        display: 'flex', 
        gap: 'var(--gap--0-5rem)', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '1px', 
        position: 'relative', 
        flexShrink: 0, 
        width: '20px', 
        height: '20px',
        isolation: 'isolate'
      }}
    >
      <Wallet />
      <div 
        style={{ 
          position: 'absolute', 
          background: 'rgba(0, 0, 0, 0.06)', 
          left: '50%', 
          opacity: 0, 
          borderRadius: '24px', 
          width: '24px', 
          height: '24px', 
          top: '50%', 
          zIndex: 1,
          transform: 'translate(-50%, -50%)'
        }} 
      />
    </div>
  );
}

function Frame3() {
  return (
    <div 
      style={{ 
        backdropFilter: 'blur(8px)', 
        background: 'rgba(255, 255, 255, 0.1)', 
        position: 'relative', 
        borderRadius: 'var(--border-radius--0-5rem)', 
        flexShrink: 0, 
        width: '100%',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%' }}>
        <div 
          style={{ 
            display: 'flex', 
            gap: 'var(--gap--0-75rem)', 
            alignItems: 'center', 
            padding: 'var(--gap--0-75rem) var(--gap--1-5rem)', 
            position: 'relative', 
            width: '100%' 
          }}
        >
          <Icon1 />
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 'var(--font-weight-medium)', 
              lineHeight: '24px', 
              fontStyle: 'normal', 
              flexShrink: 0, 
              fontSize: 'var(--text-base)', 
              color: 'rgba(255, 255, 255, 0.7)', 
              textAlign: 'center' 
            }}
          >
            Continue with a wallet
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2({ onGoogleClick, isLoading }: { onGoogleClick: () => void; isLoading: boolean }) {
  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--gap--0-75rem)', 
        alignItems: 'center', 
        position: 'relative', 
        flexShrink: 0, 
        width: '100%' 
      }}
    >
      <Frame onClick={onGoogleClick} isLoading={isLoading} />
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function LoginItems({ onGoogleClick, isLoading }: { onGoogleClick: () => void; isLoading: boolean }) {
  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '23px', 
        alignItems: 'center', 
        width: '320px',
        maxWidth: '90vw',
        zIndex: 2,
        opacity: 0,
        animation: 'fadeInContent 0.64s ease 0.32s forwards'
      }}
    >
      <p 
        style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontWeight: 'var(--font-weight-semi-bold)', 
          lineHeight: '28px', 
          fontStyle: 'normal', 
          flexShrink: 0, 
          color: '#f8fafc', 
          fontSize: 'var(--text-lg)' 
        }}
      >
        Login or Register
      </p>
      <Frame2 onGoogleClick={onGoogleClick} isLoading={isLoading} />
      <style>{`
        @keyframes fadeInContent {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function InviteCodePage({ onValidCode, onLogoClick }: { onValidCode: () => void; onLogoClick: () => void }) {
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (inviteCode.trim() === 'lumberworks2026') {
      setError('');
      onValidCode();
    } else {
      setError('Invalid invite code. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInviteCode(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleContinue();
    }
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--gap--1rem)', 
        alignItems: 'center', 
        width: '600px',
        maxWidth: '90vw',
        zIndex: 2,
        animation: 'fadeInUp 0.8s ease forwards'
      }}
    >
      <XmarketLogo onClick={onLogoClick} />
      
      <div className="logo-gap" style={{ height: '72px' }} />

      <h1 
        className="invite-title-mobile"
        style={{ 
          fontFamily: '"Russo One", Inter, sans-serif',
          fontWeight: 'var(--font-weight-normal)',
          fontSize: 'var(--text-3xl)', 
          lineHeight: '1.3', 
          fontStyle: 'normal', 
          textAlign: 'center', 
          color: 'white',
          margin: 0,
          animation: 'fadeInUp 0.8s ease 0.2s backwards'
        }}
      >
        Climb the ranks for first access. Invite-only.
      </h1>

      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--gap--0-5rem)', 
          width: '100%',
          animation: 'fadeInUp 0.8s ease 0.4s backwards'
        }}
      >
        <label 
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'var(--font-weight-medium)',
            fontSize: 'var(--text-base)', 
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: '24px'
          }}
        >
          Invite code:
        </label>
        <input
          type="text"
          placeholder="Enter the invite code"
          value={inviteCode}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          style={{
            width: '100%',
            padding: 'var(--gap--1rem) var(--gap--1-5rem)',
            background: 'rgba(255, 255, 255, 0.05)',
            border: error ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--border-radius--0-5rem)',
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-base)',
            color: 'white',
            outline: 'none',
            transition: 'border 0.2s ease'
          }}
          onFocus={(e) => {
            if (!error) {
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.3)';
            }
          }}
          onBlur={(e) => {
            if (!error) {
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            }
          }}
        />
        {error && (
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-sm)',
              color: 'rgba(239, 68, 68, 0.9)',
              margin: 0,
              paddingLeft: 'var(--gap--0-5rem)',
              animation: 'slideInError 0.3s ease forwards'
            }}
          >
            {error}
          </p>
        )}
      </div>

      <PrimaryButton
        onClick={handleContinue}
        size="md"
        style={{
          width: '100%',
          fontSize: 'var(--text-base)',
          animation: 'fadeInUp 0.8s ease 0.6s backwards'
        }}
      >
        Continue
      </PrimaryButton>

      <p 
        style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontWeight: 'var(--font-weight-regular)', 
          fontSize: 'var(--text-base)', 
          color: 'rgba(255, 255, 255, 0.5)', 
          textAlign: 'center',
          margin: 0,
          animation: 'fadeInUp 0.8s ease 0.8s backwards'
        }}
      >
        Don't have a code?
      </p>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInError {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .logo-gap {
            height: 56px !important;
          }
          .invite-title-mobile {
            font-size: var(--text-2xl) !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function Referrals({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  const [showInviteCode, setShowInviteCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isPopupMode, setIsPopupMode] = useState(false);

  useEffect(() => {
    // Set initial load to false after first render
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Load popup mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('referralsPopupMode');
    if (savedMode === 'true') {
      setIsPopupMode(true);
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isPopupMode;
    setIsPopupMode(newMode);
    localStorage.setItem('referralsPopupMode', String(newMode));
  };

  const handleGoogleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowInviteCode(true);
    }, 1700);
  };

  const handleLogoClick = () => {
    if (showInviteCode) {
      setShowInviteCode(false);
    }
  };

  const handleValidCode = () => {
    // Navigate to homepage using the passed prop
    onNavigateToHome();
  };

  // Render popup mode
  if (isPopupMode) {
    return (
      <>
        <ReferralsPopup onNavigateToHome={onNavigateToHome} />
        
        {/* Toggle button */}
        <button
          onClick={toggleMode}
          style={{
            position: 'fixed',
            bottom: 'var(--gap--2rem)',
            right: 'var(--gap--2rem)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(105, 82, 254, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 1001,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = 'rgba(105, 82, 254, 1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(105, 82, 254, 0.9)';
          }}
        >
          <Maximize2 size={20} color="white" />
        </button>
      </>
    );
  }

  return (
    <div 
      style={{ 
        background: '#030308', 
        position: 'relative', 
        width: '100%', 
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem 1rem'
      }}
    >
      <Group showInviteCode={showInviteCode} isInitialLoad={isInitialLoad} />
      
      {!showInviteCode ? (
        <>
          <XmarketLogo />
          <LoginItems onGoogleClick={handleGoogleClick} isLoading={isLoading} />
          <div 
            className="title-mobile"
            style={{ 
              opacity: 0,
              animation: 'fadeInContent 0.64s ease 0.45s forwards',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--gap--1rem)',
              zIndex: 2
            }}
          >
            <Title />
          </div>
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 'var(--font-weight-regular)', 
              lineHeight: '24px', 
              fontStyle: 'normal', 
              fontSize: 'var(--text-sm)', 
              color: 'rgba(255, 255, 255, 0.7)', 
              textAlign: 'center', 
              width: '320px',
              maxWidth: '90vw', 
              whiteSpace: 'pre-wrap',
              zIndex: 2,
              opacity: 0,
              animation: 'fadeInContent 0.64s ease 0.58s forwards'
            }}
          >
            24,000 users currently on waitlist
          </p>
        </>
      ) : (
        <>
          <InviteCodePage onValidCode={handleValidCode} onLogoClick={handleLogoClick} />
          
          <div style={{ flexShrink: 0 }} />
          <div style={{ flexShrink: 0 }} />
          
          <p 
            style={{ 
              fontFamily: 'Inter, sans-serif', 
              fontWeight: 'var(--font-weight-regular)', 
              fontSize: 'var(--text-sm)', 
              color: 'rgba(255, 255, 255, 0.7)', 
              textAlign: 'center',
              margin: 0,
              zIndex: 2,
              animation: 'fadeInUp 0.8s ease 1s backwards'
            }}
          >
            24,000 users currently on waitlist
          </p>
        </>
      )}

      {/* Toggle button for fullscreen mode */}
      <button
        onClick={toggleMode}
        style={{
          position: 'fixed',
          bottom: 'var(--gap--2rem)',
          right: 'var(--gap--2rem)',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(105, 82, 254, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.background = 'rgba(105, 82, 254, 1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.background = 'rgba(105, 82, 254, 0.9)';
        }}
      >
        <Minimize2 size={20} color="white" />
      </button>
    </div>
  );
}
