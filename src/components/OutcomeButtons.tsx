import type { MarketOutcome } from '../data/markets';
import svgPaths from '../imports/svg-08dg7pjb6g';
import { useState, memo } from 'react';

interface OutcomeButtonsProps {
  outcomes: MarketOutcome[];
  onOutcomeClick: (outcomeId: string, prediction: 'yes' | 'no') => void;
}

/**
 * OutcomeButtons Component
 * 
 * Displays outcome buttons for multi-outcome markets.
 * Each outcome is shown as a row with the name on the left and Yes/No buttons on the right.
 * Maximum 2 rows visible, scrollable vertically if more outcomes.
 */
export const OutcomeButtons = memo(function OutcomeButtons({ outcomes, onOutcomeClick }: OutcomeButtonsProps) {
  return (
    <div className="flex flex-col gap-[6px] sm:gap-[8px]">
      {outcomes.map((outcome) => (
        <OutcomeRow
          key={outcome.id}
          outcome={outcome}
          onYesClick={() => onOutcomeClick(outcome.id, 'yes')}
          onNoClick={() => onOutcomeClick(outcome.id, 'no')}
        />
      ))}
    </div>
  );
});

interface OutcomeRowProps {
  outcome: MarketOutcome;
  onYesClick: () => void;
  onNoClick: () => void;
}

function OutcomeRow({ outcome, onYesClick, onNoClick }: OutcomeRowProps) {
  const [hoveredButton, setHoveredButton] = useState<'yes' | 'no' | null>(null);

  return (
    <div 
      className="flex items-center justify-between gap-[12px]"
      style={{ height: '30px' }}
    >
      {/* Outcome Name */}
      <p 
        className="font-sans truncate flex-1 transition-all duration-300"
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
          lineHeight: '20px',
          color: hoveredButton === 'yes' 
            ? '#30A46C' // Green color for Yes hover
            : hoveredButton === 'no'
            ? '#E5484D' // Red color for No hover
            : 'var(--card-foreground)',
          textShadow: hoveredButton === 'yes'
            ? '0 0 8px rgba(48, 164, 108, 0.6), 0 0 16px rgba(48, 164, 108, 0.3)'
            : hoveredButton === 'no'
            ? '0 0 8px rgba(229, 72, 77, 0.6), 0 0 16px rgba(229, 72, 77, 0.3)'
            : 'none',
        }}
      >
        {outcome.label}
      </p>

      {/* Yes/No Buttons - aligned to right */}
      <div className="flex gap-[6px] sm:gap-[8px] shrink-0">
        {/* Yes Button */}
        <div 
          className="relative rounded-[var(--radius-input)] overflow-hidden group/yes cursor-pointer transition-all duration-300" 
          onClick={(e) => {
            e.stopPropagation();
            onYesClick();
          }}
          onMouseEnter={() => setHoveredButton('yes')}
          onMouseLeave={() => setHoveredButton(null)}
          style={{ 
            border: '1px solid var(--black-a2)',
            background: 'var(--side-bar-outline)',
            boxShadow: hoveredButton === 'yes' 
              ? '0 8px 16px 0 #5bb98b60, 0 4px 8px 0 #5bb98b40'
              : 'var(--shadow-4)',
            width: '63px',
            height: '30px',
            transform: hoveredButton === 'yes' ? 'translateY(-2px)' : 'translateY(0)'
          }}
        >
          {/* Animated circle that scales from right to left, clipped by button */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[30px] h-[30px] pointer-events-none">
            <div 
              className="absolute inset-0 rounded-full scale-0 transition-all duration-500 ease-out group-hover/yes:scale-[10] group-hover/yes:-translate-x-1/2"
              style={{ backgroundColor: 'var(--chart-1-hover)' }}
            />
          </div>
          
          <div className="flex flex-row items-center justify-center size-full relative z-10 px-[6px] py-[5px]">
            <div className="flex gap-[4px] items-center">
              {/* Green Y Icon */}
              <div className="flex items-center justify-center shrink-0 size-[20px] sm:size-[24px]">
                <div className="relative shrink-0 h-[16px] sm:h-[20px] w-[16px] sm:w-[20px]">
                  {/* Yes Green Icon with dark theme gradient */}
                  <div className="absolute inset-[4.17%]">
                    <div className="absolute inset-[4.17%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                        <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_yes_multi)" />
                        <defs>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_yes_multi" r="1">
                            <stop offset="0.1358" stopColor="#2F7C57" />
                            <stop offset="0.7046" stopColor="#3DD68C" />
                            <stop offset="0.7778" stopColor="#28684A" />
                            <stop offset="0.8078" stopColor="#33B074" />
                            <stop offset="0.9109" stopColor="#30A46C" />
                            <stop offset="0.9623" stopColor="#2F7C57" />
                            <stop offset="0.9725" stopColor="#28684A" />
                            <stop offset="1" stopColor="#20573E" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                      <path d={svgPaths.p294227c0} fill="#F1F5F9" />
                    </svg>
                  </div>
                </div>
              </div>
              <p 
                className="font-sans text-nowrap text-card-foreground whitespace-pre hidden sm:block"
                style={{
                  fontSize: 'var(--text-s)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '24px'
                }}
              >
                Yes
              </p>
            </div>
          </div>
        </div>

        {/* No Button */}
        <div 
          className="relative rounded-[var(--radius-input)] overflow-hidden group/no cursor-pointer transition-all duration-300" 
          onClick={(e) => {
            e.stopPropagation();
            onNoClick();
          }}
          onMouseEnter={() => setHoveredButton('no')}
          onMouseLeave={() => setHoveredButton(null)}
          style={{ 
            border: '1px solid var(--black-a2)',
            background: 'var(--side-bar-outline)',
            boxShadow: hoveredButton === 'no'
              ? '0 8px 16px 0 #eb8e9060, 0 4px 8px 0 #eb8e9040'
              : 'var(--shadow-4)',
            width: '63px',
            height: '30px',
            transform: hoveredButton === 'no' ? 'translateY(-2px)' : 'translateY(0)'
          }}
        >
          {/* Animated circle that scales from right to left, clipped by button */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[30px] h-[30px] pointer-events-none">
            <div 
              className="absolute inset-0 rounded-full scale-0 transition-all duration-500 ease-out group-hover/no:scale-[10] group-hover/no:-translate-x-1/2"
              style={{ backgroundColor: 'var(--chart-2-hover)' }}
            />
          </div>
          
          <div className="flex flex-row items-center justify-center size-full relative z-10 px-[6px] py-[5px]">
            <div className="flex gap-[4px] items-center">
              {/* Red N Icon */}
              <div className="flex items-center justify-center shrink-0 size-[20px] sm:size-[24px]">
                <div className="relative shrink-0 h-[16px] sm:h-[20px] w-[16px] sm:w-[20px]">
                  {/* No Red Icon with dark theme gradient */}
                  <div className="absolute inset-[4.17%]">
                    <div className="absolute inset-[4.17%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                        <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_no_multi)" />
                        <defs>
                          <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_no_multi" r="1">
                            <stop offset="0.1358" stopColor="#B54548" />
                            <stop offset="0.7046" stopColor="#FF9592" />
                            <stop offset="0.7778" stopColor="#8C333A" />
                            <stop offset="0.8078" stopColor="#EC5D5E" />
                            <stop offset="0.9109" stopColor="#E5484D" />
                            <stop offset="0.9623" stopColor="#B54548" />
                            <stop offset="0.9725" stopColor="#8C333A" />
                            <stop offset="1" stopColor="#72232D" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[29.17%_31.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
                      <path d={svgPaths.p2b92e400} fill="#F1F5F9" />
                    </svg>
                  </div>
                </div>
              </div>
              <p 
                className="font-sans text-nowrap text-card-foreground whitespace-pre hidden sm:block"
                style={{
                  fontSize: 'var(--text-s)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: '24px'
                }}
              >
                No
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}