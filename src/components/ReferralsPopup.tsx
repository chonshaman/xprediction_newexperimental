import { useState } from 'react';
import svgPaths from "../imports/svg-8nd9kfj3ik";
import { PrimaryButton } from './PrimaryButton';
import { FloatingMarketCards } from './FloatingMarketCards';

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

function XmarketLogo({ onClick, centered }: { onClick?: () => void; centered?: boolean }) {
  return (
    <div 
      style={{ 
        display: 'flex', 
        gap: 'var(--gap--0-25rem)', 
        alignItems: 'center',
        transform: 'scale(1.3)',
        transformOrigin: centered ? 'center' : 'top left',
        cursor: onClick ? 'pointer' : 'default',
        justifyContent: centered ? 'center' : 'flex-start',
        transition: 'opacity 0.2s ease'
      }}
      onClick={onClick}
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

function LoginPopupContent({ onGoogleClick, isLoading }: { onGoogleClick: () => void; isLoading: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap--1-5rem)',
        height: '100%',
        padding: 'var(--gap--3rem) var(--gap--2rem)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <XmarketLogo centered={true} />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--gap--1-5rem)' }}>
        <p 
          style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontWeight: 'var(--font-weight-semi-bold)', 
            fontSize: 'var(--text-lg)', 
            color: '#f8fafc',
            margin: 0,
            textAlign: 'center'
          }}
        >
          Login or Register
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--0-75rem)' }}>
          {/* Google Button */}
          <div 
            style={{ 
              backdropFilter: 'blur(8px)', 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: 'var(--border-radius--0-5rem)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: isLoading ? 'default' : 'pointer',
              transition: 'all 0.2s ease',
              opacity: isLoading ? 0.7 : 1
            }}
            onClick={!isLoading ? onGoogleClick : undefined}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            <div style={{ display: 'flex', gap: 'var(--gap--0-75rem)', alignItems: 'center', padding: 'var(--gap--0-75rem) var(--gap--1-5rem)' }}>
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
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-base)', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
                {isLoading ? 'Loading...' : 'Google'}
              </p>
            </div>
          </div>

          {/* Email Button */}
          <div 
            style={{ 
              backdropFilter: 'blur(8px)', 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: 'var(--border-radius--0-5rem)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', gap: 'var(--gap--0-75rem)', alignItems: 'center', padding: 'var(--gap--0-75rem) var(--gap--1-5rem)' }}>
              <div style={{ width: '20px', height: '20px' }}>
                <MailOpen />
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-base)', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
                Continue with email
              </p>
            </div>
          </div>

          {/* Wallet Button */}
          <div 
            style={{ 
              backdropFilter: 'blur(8px)', 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: 'var(--border-radius--0-5rem)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ display: 'flex', gap: 'var(--gap--0-75rem)', alignItems: 'center', padding: 'var(--gap--0-75rem) var(--gap--1-5rem)' }}>
              <div style={{ width: '20px', height: '20px' }}>
                <Wallet />
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-base)', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
                Continue with a wallet
              </p>
            </div>
          </div>
        </div>
      </div>

      <p 
        style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: 'var(--text-sm)', 
          color: 'rgba(255, 255, 255, 0.7)', 
          textAlign: 'center',
          margin: 0
        }}
      >
        24,000 users currently on waitlist
      </p>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function InviteCodePopupContent({ onValidCode, onBackToLogin }: { onValidCode: () => void; onBackToLogin: () => void }) {
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
        gap: 'var(--gap--1-5rem)',
        height: '100%',
        padding: 'var(--gap--3rem) var(--gap--2rem)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <XmarketLogo onClick={onBackToLogin} centered={true} />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--gap--1-5rem)' }}>
        <p 
          style={{ 
            fontFamily: '"Russo One", Inter, sans-serif',
            fontWeight: 'var(--font-weight-normal)',
            fontSize: 'var(--text-lg)',
            lineHeight: '1.3',
            color: '#f8fafc',
            margin: 0,
            textAlign: 'center'
          }}
        >
          Climb the ranks for first access. Invite-only.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--0-5rem)' }}>
          <label 
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'var(--font-weight-medium)',
              fontSize: 'var(--text-sm)', 
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
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
              padding: 'var(--gap--0-75rem) var(--gap--1rem)',
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
                margin: 0
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
            fontSize: 'var(--text-base)'
          }}
        >
          Continue
        </PrimaryButton>

        <p 
          style={{ 
            fontFamily: 'Inter, sans-serif', 
            fontSize: 'var(--text-sm)', 
            color: 'rgba(255, 255, 255, 0.7)', 
            textAlign: 'center',
            margin: 0
          }}
        >
          24,000 users currently on waitlist
        </p>
      </div>

    </div>
  );
}

function LeftGradientPanel({ showInviteCode }: { showInviteCode: boolean }) {
  const gradientClass = showInviteCode ? 'gradient-invite' : 'gradient-login';
  
  return (
    <div 
      style={{ 
        width: '540px',
        height: '100%',
        position: 'relative',
        background: 'linear-gradient(rgb(3 3 13) 0%, rgb(3 3 5) 137%, rgb(0 0 0) 100%)',
        overflow: 'hidden',
        borderRadius: 'var(--border-radius--1rem) 0 0 var(--border-radius--1rem)'
      }}
    >
      {/* Conic gradients */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div 
          className={`gradient-left-popup ${gradientClass}`}
          style={{ 
            position: 'absolute', 
            width: '50%',
            height: '100%',
            left: 0,
            mixBlendMode: 'color-dodge'
          }}
        />
        <div 
          className={`gradient-right-popup ${gradientClass}`}
          style={{ 
            position: 'absolute', 
            width: '50%',
            height: '100%',
            right: 0,
            mixBlendMode: 'color-dodge'
          }}
        />
      </div>

      {/* Content */}
      <div 
        style={{ 
          position: 'relative',
          zIndex: 1,
          height: showInviteCode ? '108%' : '96%',
          display: 'flex',
          flexFlow: 'column-reverse',
          placeContent: showInviteCode ? 'space-between' : 'flex-end space-between',
          alignItems: 'center',
          padding: 'var(--gap--3rem) var(--gap--3rem) var(--gap--2rem)',
          textAlign: 'center',
          flexWrap: showInviteCode ? 'nowrap' : undefined,
          alignContent: showInviteCode ? 'flex-end' : undefined
        }}
      >
        <div 
          className="popup-title-responsive"
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--gap--0-5rem)',
            transform: showInviteCode ? 'translateY(-120px)' : 'translateY(0)',
            transition: 'transform 0.77s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <p 
            className="popup-title-main"
            style={{ 
              fontFamily: '"Russo One", Inter, sans-serif',
              fontWeight: 'var(--font-weight-normal)',
              fontSize: '32px',
              lineHeight: '1.3',
              color: 'white',
              margin: 0
            }}
          >
            The future has a price.
          </p>
          <p 
            className="popup-title-sub"
            style={{ 
              fontFamily: '"Russo One", Inter, sans-serif',
              fontWeight: 'var(--font-weight-normal)',
              fontSize: 'var(--text-xl)',
              lineHeight: '1.3',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: 0
            }}
          >
            Make it work for you.
          </p>
        </div>

        {/* Floating Market Cards - positioned below the text */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}>
          <FloatingMarketCards show={showInviteCode} />
        </div>
      </div>

      <style>{`
        @property --gradient-position-popup {
          syntax: '<percentage>';
          initial-value: 62%;
          inherits: false;
        }

        @property --gradient-horizontal-left {
          syntax: '<percentage>';
          initial-value: 50%;
          inherits: false;
        }

        @property --gradient-horizontal-right {
          syntax: '<percentage>';
          initial-value: 50%;
          inherits: false;
        }

        .gradient-left-popup {
          background: conic-gradient(from 90deg at var(--gradient-horizontal-left) var(--gradient-position-popup), #ffffff 0deg, #5f3a3a 0deg, #ffffff 365deg);
          --gradient-position-popup: 62%;
          --gradient-horizontal-left: 50%;
          transition: --gradient-position-popup 0.77s cubic-bezier(0.4, 0, 0.2, 1), --gradient-horizontal-left 0.77s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gradient-right-popup {
          background: conic-gradient(from 270deg at var(--gradient-horizontal-right) var(--gradient-position-popup), #ffffff -5deg, #5f3a3a 360deg, #ffffff 334deg);
          --gradient-position-popup: 62%;
          --gradient-horizontal-right: 50%;
          transition: --gradient-position-popup 0.77s cubic-bezier(0.4, 0, 0.2, 1), --gradient-horizontal-right 0.77s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gradient-login {
          --gradient-position-popup: 70%;
          --gradient-horizontal-left: 50%;
          --gradient-horizontal-right: 50%;
        }

        .gradient-invite {
          --gradient-position-popup: 88%;
          --gradient-horizontal-left: 30%;
          --gradient-horizontal-right: 70%;
        }

        @media (max-width: 1024px) {
          .popup-title-responsive .popup-title-main {
            font-size: var(--text-2xl) !important;
          }
          .popup-title-responsive .popup-title-sub {
            font-size: var(--text-base) !important;
          }
        }

        @media (max-width: 768px) {
          .popup-title-responsive .popup-title-main {
            font-size: var(--text-2xl) !important;
          }
          .popup-title-responsive .popup-title-sub {
            font-size: var(--text-base) !important;
          }
        }
      `}</style>
    </div>
  );
}

export function ReferralsPopup({ onNavigateToHome }: { onNavigateToHome: () => void }) {
  const [showInviteCode, setShowInviteCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowInviteCode(true);
    }, 1700);
  };

  const handleValidCode = () => {
    onNavigateToHome();
  };

  const handleBackToLogin = () => {
    setShowInviteCode(false);
  };

  return (
    <div 
      style={{ 
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(3, 3, 8, 0.9)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000
      }}
    >
      <div 
        style={{ 
          display: 'flex',
          width: '900px',
          height: '600px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          background: '#1a1a2e',
          borderRadius: 'var(--border-radius--1rem)',
          overflow: 'hidden',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <LeftGradientPanel showInviteCode={showInviteCode} />
        
        <div 
          style={{ 
            width: '360px',
            background: '#0f0f1a',
            height: '100%',
            position: 'relative'
          }}
        >
          <div 
            style={{ 
              position: 'absolute',
              inset: 0,
              opacity: showInviteCode ? 0 : 1,
              transition: 'opacity 0.4s ease',
              pointerEvents: showInviteCode ? 'none' : 'auto'
            }}
          >
            <LoginPopupContent onGoogleClick={handleGoogleClick} isLoading={isLoading} />
          </div>
          
          <div 
            style={{ 
              position: 'absolute',
              inset: 0,
              opacity: showInviteCode ? 1 : 0,
              transition: 'opacity 0.4s ease',
              pointerEvents: showInviteCode ? 'auto' : 'none'
            }}
          >
            <InviteCodePopupContent onValidCode={handleValidCode} onBackToLogin={handleBackToLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}
