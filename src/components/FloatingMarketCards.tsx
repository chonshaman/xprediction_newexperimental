interface MarketCardProps {
  icon: string;
  title: string;
  percentage: string;
  isPositive: boolean;
  rotation: number;
  left: string;
  delay: number;
  duration: number;
}

function MarketCard({ icon, title, percentage, isPositive, rotation, left, delay, duration }: MarketCardProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-100px',
        left,
        width: '160px',
        backdropFilter: 'blur(5px)',
        background: 'rgba(255, 255, 255, 0.06)',
        borderRadius: 'var(--border-radius--0-5rem)',
        padding: '0.625rem 0.75rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        animation: `dropCard-${rotation} ${duration}s linear ${delay}s infinite`,
        pointerEvents: 'none',
        zIndex: 5,
        ['--rotation' as any]: `${rotation}deg`
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem', alignItems: 'flex-start' }}>
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-xs)',
            color: 'rgba(159, 159, 168, 1)',
            lineHeight: '16px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%'
          }}
        >
          {icon} {title}
        </div>
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: '16px',
              color: isPositive ? 'rgba(202, 255, 122, 1)' : 'rgba(255, 122, 122, 1)',
              lineHeight: '24px'
            }}
          >
            {percentage}
          </div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-xs)',
              color: isPositive ? 'rgba(202, 255, 122, 1)' : 'rgba(255, 122, 122, 1)',
              lineHeight: '16px'
            }}
          >
            {isPositive ? '↑' : '↓'}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FloatingMarketCards({ show }: { show: boolean }) {
  if (!show) return null;

  const cards: Omit<MarketCardProps, 'rotation' | 'left' | 'delay' | 'duration'>[] = [
    { icon: '⚽', title: 'Madrid Champions', percentage: '72%', isPositive: true },
    { icon: '≡', title: 'ETH Flipping', percentage: '12%', isPositive: false },
    { icon: '🗳️', title: 'Cabinet Resign', percentage: '56%', isPositive: true },
    { icon: '👖', title: 'NewJeans ADOP', percentage: '45%', isPositive: false },
    { icon: '🔥', title: 'BLACKPINK Comeback', percentage: '84%', isPositive: true },
    { icon: '🗳️', title: 'Rate Cuts 2026', percentage: '78%', isPositive: true },
    { icon: '🗳️', title: 'GPT-5 Launch', percentage: '88%', isPositive: true },
    { icon: '⚡', title: 'Tesla Q2 Beats', percentage: '91%', isPositive: true },
    { icon: '🎮', title: 'GTA 6 Delay', percentage: '34%', isPositive: false },
    { icon: '🏀', title: 'Lakers Playoff', percentage: '67%', isPositive: true }
  ];

  // Generate random positions for infinite dropping effect
  const positions = [
    { rotation: -12, left: '8%', delay: 0, duration: 5 },
    { rotation: 8, left: '45%', delay: 1.2, duration: 6 },
    { rotation: -18, left: '28%', delay: 2.4, duration: 5.5 },
    { rotation: 15, left: '58%', delay: 0.8, duration: 6.5 },
    { rotation: -8, left: '12%', delay: 3.6, duration: 5.8 },
    { rotation: 20, left: '38%', delay: 1.8, duration: 6.2 },
    { rotation: -15, left: '52%', delay: 4.2, duration: 5.3 },
    { rotation: 10, left: '18%', delay: 2.8, duration: 6.8 },
    { rotation: -20, left: '62%', delay: 0.4, duration: 5.6 },
    { rotation: 12, left: '32%', delay: 3.2, duration: 6.4 }
  ];

  // Generate unique keyframes for each rotation
  const keyframes = positions.map((pos) => `
    @keyframes dropCard-${pos.rotation} {
      0% {
        transform: translateY(0) rotate(${pos.rotation}deg) scale(0.85);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      90% {
        opacity: 0.3;
      }
      100% {
        transform: translateY(520px) rotate(${pos.rotation}deg) scale(0.85);
        opacity: 0;
      }
    }
  `).join('\n');

  return (
    <>
      {cards.map((card, index) => (
        <MarketCard
          key={index}
          {...card}
          {...positions[index]}
        />
      ))}
      <style>{keyframes}</style>
    </>
  );
}
