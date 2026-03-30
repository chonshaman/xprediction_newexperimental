import React from 'react';

// Card Section Content - Title Only
export const CardSectionTitleOnly: React.FC = () => {
  return (
    <div className="w-full p-8" style={{ background: 'var(--lum-01)' }}>
      {/* Section Title */}
      <h2 
        className="mb-6"
        style={{
          fontSize: 'var(--text-2xl)',
          fontWeight: 'var(--font-weight-semi-bold)',
          color: 'var(--card-foreground)',
        }}
      >
        Popular Markets
      </h2>

      {/* Card Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        style={{ gap: 'var(--gap--1-5rem)' }}
      >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-[var(--radius-card)] border-[1px] overflow-hidden"
            style={{
              background: 'var(--card-normal)',
              borderColor: 'var(--black-a1)',
              boxShadow: 'var(--shadow-1)',
              padding: 'var(--gap--1-5rem)',
            }}
          >
            <div 
              className="mb-3"
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--card-foreground)',
              }}
            >
              Market Title {i}
            </div>
            <div
              style={{
                fontSize: 'var(--text-s)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.5',
              }}
            >
              Brief description of the market prediction content goes here.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Card Section Content - Title and Caption
export const CardSectionTitleCaption: React.FC = () => {
  return (
    <div className="w-full p-8" style={{ background: 'var(--lum-01)' }}>
      {/* Section Title and Caption */}
      <div className="mb-6">
        <h2 
          className="mb-2"
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--card-foreground)',
          }}
        >
          Featured Predictions
        </h2>
        <p
          style={{
            fontSize: 'var(--text-s)',
            color: 'var(--muted-foreground)',
          }}
        >
          Explore the most active and trending prediction markets
        </p>
      </div>

      {/* Card Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ gap: 'var(--gap--1-5rem)' }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-[var(--radius-card)] border-[1px] overflow-hidden"
            style={{
              background: 'var(--card-normal)',
              borderColor: 'var(--black-a1)',
              boxShadow: 'var(--shadow-1)',
              padding: 'var(--gap--1-5rem)',
            }}
          >
            <div 
              className="mb-3"
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--card-foreground)',
              }}
            >
              Market Title {i}
            </div>
            <div
              className="mb-4"
              style={{
                fontSize: 'var(--text-s)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.5',
              }}
            >
              Brief description of the market prediction content goes here with more details.
            </div>
            <div 
              className="flex items-center justify-between"
              style={{
                paddingTop: 'var(--gap--0-75rem)',
                borderTop: '1px solid var(--black-a1)',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--muted-foreground)',
                }}
              >
                Volume: $12.5K
              </span>
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  color: 'var(--green-9)',
                }}
              >
                +5.2%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Card Section Content - With Detailed Content
export const CardSectionDetailedContent: React.FC = () => {
  return (
    <div className="w-full p-8" style={{ background: 'var(--lum-01)' }}>
      {/* Section Header */}
      <div 
        className="flex items-center justify-between mb-6"
        style={{ paddingBottom: 'var(--gap--1rem)', borderBottom: '1px solid var(--black-a2)' }}
      >
        <div>
          <h2 
            className="mb-1"
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--card-foreground)',
            }}
          >
            Trending Now
          </h2>
          <p
            style={{
              fontSize: 'var(--text-s)',
              color: 'var(--muted-foreground)',
            }}
          >
            Hot markets with high activity
          </p>
        </div>
        <button
          className="px-4 rounded-[var(--radius-button)]"
          style={{
            height: '32px',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--iris-11)',
            background: 'transparent',
            border: '1px solid var(--black-a2)',
          }}
        >
          View All
        </button>
      </div>

      {/* Card Grid with Detailed Content */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        style={{ gap: 'var(--gap--1-5rem)' }}
      >
        {[
          { title: 'AI Market Prediction', volume: '$45.2K', change: '+12.3%', isPositive: true },
          { title: 'Crypto Forecast 2024', volume: '$38.9K', change: '+8.7%', isPositive: true },
          { title: 'Tech Stock Rally', volume: '$52.1K', change: '-3.2%', isPositive: false },
          { title: 'Election Outcome', volume: '$67.5K', change: '+15.1%', isPositive: true },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-[var(--radius-card)] border-[1px] overflow-hidden transition-all duration-200"
            style={{
              background: 'var(--card-normal)',
              borderColor: 'var(--black-a1)',
              boxShadow: 'var(--shadow-1)',
              padding: 'var(--gap--1-5rem)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-1)';
            }}
          >
            {/* Card Icon/Badge */}
            <div 
              className="mb-3 rounded-[var(--radius-button)]"
              style={{
                width: '40px',
                height: '40px',
                background: 'var(--lum-03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--text-xl)',
              }}
            >
              📈
            </div>

            {/* Card Title */}
            <div 
              className="mb-2"
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--card-foreground)',
              }}
            >
              {item.title}
            </div>

            {/* Card Description */}
            <div
              className="mb-4"
              style={{
                fontSize: 'var(--text-s)',
                color: 'var(--muted-foreground)',
                lineHeight: '1.5',
              }}
            >
              Detailed market analysis and prediction insights with multiple data points.
            </div>

            {/* Card Metrics */}
            <div 
              className="flex items-center justify-between"
              style={{
                paddingTop: 'var(--gap--0-75rem)',
                borderTop: '1px solid var(--black-a1)',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--muted-foreground)',
                    marginBottom: '2px',
                  }}
                >
                  Volume
                </div>
                <div
                  style={{
                    fontSize: 'var(--text-s)',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    color: 'var(--card-foreground)',
                  }}
                >
                  {item.volume}
                </div>
              </div>
              <div className="text-right">
                <div
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--muted-foreground)',
                    marginBottom: '2px',
                  }}
                >
                  24h Change
                </div>
                <div
                  style={{
                    fontSize: 'var(--text-s)',
                    fontWeight: 'var(--font-weight-semi-bold)',
                    color: item.isPositive ? 'var(--green-9)' : 'var(--red-9)',
                  }}
                >
                  {item.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Instructions */}
      <div 
        className="mt-8 p-6 rounded-[var(--radius-card)] border-[1px]"
        style={{
          background: 'var(--lum-02)',
          borderColor: 'var(--black-a2)',
        }}
      >
        <h3
          className="mb-3"
          style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semi-bold)',
            color: 'var(--card-foreground)',
          }}
        >
          How to Create Card Section Content
        </h3>
        <div
          style={{
            fontSize: 'var(--text-s)',
            color: 'var(--muted-foreground)',
            lineHeight: '1.6',
          }}
        >
          <p className="mb-3">
            <strong style={{ color: 'var(--card-foreground)' }}>1. Section Container:</strong> Use padding of <code style={{ 
              background: 'var(--lum-03)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: 'var(--text-xs)'
            }}>var(--gap--2rem)</code> or <code style={{ 
              background: 'var(--lum-03)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: 'var(--text-xs)'
            }}>32px</code> for outer spacing.
          </p>
          <p className="mb-3">
            <strong style={{ color: 'var(--card-foreground)' }}>2. Title Spacing:</strong> Add margin-bottom of <code style={{ 
              background: 'var(--lum-03)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: 'var(--text-xs)'
            }}>var(--gap--1-5rem)</code> (24px) below section title.
          </p>
          <p className="mb-3">
            <strong style={{ color: 'var(--card-foreground)' }}>3. Caption Spacing:</strong> Use <code style={{ 
              background: 'var(--lum-03)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: 'var(--text-xs)'
            }}>var(--gap--0-5rem)</code> (8px) between title and caption.
          </p>
          <p className="mb-3">
            <strong style={{ color: 'var(--card-foreground)' }}>4. Card Grid Gap:</strong> Use <code style={{ 
              background: 'var(--lum-03)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: 'var(--text-xs)'
            }}>var(--gap--1-5rem)</code> (24px) between cards for proper spacing.
          </p>
          <p className="mb-3">
            <strong style={{ color: 'var(--card-foreground)' }}>5. Card Background:</strong> Always use <code style={{ 
              background: 'var(--lum-03)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: 'var(--text-xs)'
            }}>var(--card-normal)</code> for card backgrounds to maintain consistency.
          </p>
          <p>
            <strong style={{ color: 'var(--card-foreground)' }}>6. Card Padding:</strong> Use <code style={{ 
              background: 'var(--lum-03)', 
              padding: '2px 6px', 
              borderRadius: '4px',
              fontSize: 'var(--text-xs)'
            }}>var(--gap--1-5rem)</code> (24px) for internal card padding.
          </p>
        </div>
      </div>
    </div>
  );
};
