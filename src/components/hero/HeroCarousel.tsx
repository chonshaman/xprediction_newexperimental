import React, { useState, useCallback, useRef, useMemo } from "react";
import Slider from "react-slick";
import { MarketingCard } from "./MarketingCard";
import { ReferralCard } from "./ReferralCard";
import { FeaturedMarketCard } from "./FeaturedMarketCard";
import { MultiOutcomeMarketCard } from "./MultiOutcomeMarketCard";
import { FeaturedMatchCard } from "./FeaturedMatchCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroCarouselMarkets, multiOutcomeMarkets } from "../../data/markets";
import { allMatches } from "../../data/matches";
import { CAROUSEL_CONFIG, COMPONENT_SIZES } from "../../config/app-config";
import { CSS_VAR_STYLES } from "../../utils/css-vars";
import type { Market } from "../../data/markets";

interface ArrowProps {
  onClick?: () => void;
}

interface HeroCarouselProps {
  onMarketSelect: (market: Market) => void;
}

// Utility function to shuffle array (Fisher-Yates algorithm)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function NextArrow({ onClick }: ArrowProps) {
  const buttonSize = Math.round(COMPONENT_SIZES.button.arrow * 0.7); // 30% smaller
  return (
    <div
      className="cursor-pointer group"
      onClick={onClick}
      style={{
        width: `${buttonSize}px`,
        height: `${buttonSize}px`,
        pointerEvents: "auto",
      }}
    >
      <div
        className="w-full h-full flex items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
        style={CSS_VAR_STYLES.arrowButton}
      >
        <ChevronRight 
          className="w-4 h-4" 
          style={{ color: "var(--foreground)" }}
        />
      </div>
    </div>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  const buttonSize = Math.round(COMPONENT_SIZES.button.arrow * 0.7); // 30% smaller
  return (
    <div
      className="cursor-pointer group"
      onClick={onClick}
      style={{
        width: `${buttonSize}px`,
        height: `${buttonSize}px`,
        pointerEvents: "auto",
      }}
    >
      <div
        className="w-full h-full flex items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
        style={CSS_VAR_STYLES.arrowButton}
      >
        <ChevronLeft 
          className="w-4 h-4" 
          style={{ color: "var(--foreground)" }}
        />
      </div>
    </div>
  );
}

export function HeroCarousel({ onMarketSelect }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeQuickBuyId, setActiveQuickBuyId] = useState<string | null>(null);
  const sliderRef = useRef<Slider>(null);
  const [slidesToShow, setSlidesToShow] = useState(1); // Start with mobile default
  
  // Touch event handling for swipe functionality
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Calculate initial slides to show based on window width
  React.useEffect(() => {
    const calculateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSlidesToShow(4);
      } else if (width >= 1024) {
        setSlidesToShow(3);
      } else if (width >= 560) {
        // Show 2 cards from 560px to 760px (and up to 1024px)
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    // Calculate on mount
    calculateSlides();

    // Recalculate on resize
    window.addEventListener('resize', calculateSlides);
    return () => window.removeEventListener('resize', calculateSlides);
  }, []);

  // Combine hero markets with one multi-outcome market and randomize
  const allCarouselMarkets = useMemo(() => {
    // Pick the first multi-outcome market (Premier League match)
    const multiOutcomeMarket = multiOutcomeMarkets[0];
    
    // Combine with hero carousel markets
    const combined = [...heroCarouselMarkets, multiOutcomeMarket];
    
    // Shuffle the combined array
    return shuffleArray(combined);
  }, []);

  // Pick one featured match (Arsenal vs Chelsea - high volume match)
  const featuredMatch = useMemo(() => allMatches[0], []);

  const handleBeforeChange = useCallback((oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
  }, []);

  const handleOpenQuickBuy = useCallback((marketId: string) => {
    setActiveQuickBuyId(marketId);
  }, []);

  const handleCloseQuickBuy = useCallback(() => {
    setActiveQuickBuyId(null);
  }, []);

  const handlePrevClick = useCallback(() => {
    sliderRef.current?.slickPrev();
  }, []);

  const handleNextClick = useCallback(() => {
    sliderRef.current?.slickNext();
  }, []);

  const handleDotClick = useCallback((index: number) => {
    sliderRef.current?.slickGoTo(index);
  }, []);

  // Touch event handlers for swipe detection
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const minSwipeDistance = 50; // Minimum distance for a swipe
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left - go to next slide
        sliderRef.current?.slickNext();
      } else {
        // Swiped right - go to previous slide
        sliderRef.current?.slickPrev();
      }
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  }, []);

  const totalSlides = 3 + allCarouselMarkets.length; // Marketing + Referral + FeaturedMatch + Markets

  const settings = {
    dots: false,
    infinite: true,
    speed: CAROUSEL_CONFIG.transitionSpeed,
    slidesToShow: slidesToShow, // Default: 4 cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: CAROUSEL_CONFIG.autoplaySpeed,
    pauseOnHover: true,
    arrows: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 1279, // When screen is 1279px or less
        settings: {
          slidesToShow: 3, // Show 3 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023, // When screen is 1023px or less
        settings: {
          slidesToShow: 2, // Show 2 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767, // When screen is 767px or less
        settings: {
          slidesToShow: 1, // Show 1 card
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: any) => (
      <div style={{ position: "relative" }}>
        <ul className="flex justify-center gap-2 m-0 p-0" style={{ listStyle: "none" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <button
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          padding: 0,
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onClick={() => handleDotClick(i)}
      >
        <div 
          className="dot-custom" 
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "var(--muted-foreground)",
          }}
        />
      </button>
    ),
  };

  return (
    <div className="w-full relative pb-16" style={{ paddingBottom: 'var(--gap--4rem)' }}>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Slider {...settings} className="hero-slick-slider" ref={sliderRef}>
          {/* Slide 1: Marketing Card */}
          <div className="px-1 sm:px-2">
            <div className="carousel-card-height">
              <MarketingCard />
            </div>
          </div>

          {/* Slide 2: Referral Card */}
          <div className="px-1 sm:px-2">
            <div className="carousel-card-height">
              <ReferralCard />
            </div>
          </div>

          {/* Slide 3: Featured Match Card */}
          <div className="px-1 sm:px-2">
            <div className="carousel-card-height">
              <FeaturedMatchCard match={featuredMatch} />
            </div>
          </div>

          {/* Subsequent Slides: Markets (Binary and Multi-Outcome) */}
          {allCarouselMarkets.map((market, index) => (
            <div key={market.id} className="px-1 sm:px-2">
              <div className="carousel-card-height">
                {market.outcomes && market.outcomes.length > 2 ? (
                  // Render multi-outcome card
                  <MultiOutcomeMarketCard 
                    {...market} 
                    onMarketSelect={onMarketSelect}
                  />
                ) : (
                  // Render binary market card with QuickBuy
                  <FeaturedMarketCard 
                    {...market} 
                    isQuickBuyOpen={activeQuickBuyId === market.id}
                    onOpenQuickBuy={handleOpenQuickBuy}
                    onCloseQuickBuy={handleCloseQuickBuy}
                    onMarketSelect={onMarketSelect}
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Custom Navigation Controls */}
      <div className="absolute left-0 right-0 flex items-center justify-between" style={{ bottom: 'var(--gap--2rem)' }}>
        <PrevArrow onClick={handlePrevClick} />
        
        {/* Dots Container - Positioned in Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="transition-all duration-300"
              style={{
                width: currentSlide === index ? "12px" : "8px",
                height: "8px",
                borderRadius: "50%",
                padding: 0,
                border: "none",
                cursor: "pointer",
                backgroundColor: currentSlide === index ? "var(--iris-9)" : "var(--muted-foreground)",
                opacity: currentSlide === index ? 1 : 0.3,
              }}
            />
          ))}
        </div>
        
        <NextArrow onClick={handleNextClick} />
      </div>

      <style>{`
        /* Carousel card responsive heights */
        .carousel-card-height {
          height: ${COMPONENT_SIZES.card.height.mobile}px;
        }

        @media (min-width: 640px) {
          .carousel-card-height {
            height: ${COMPONENT_SIZES.card.height.tablet}px;
          }
        }

        @media (min-width: 768px) {
          .carousel-card-height {
            height: ${COMPONENT_SIZES.card.height.desktop}px;
          }
        }

        /* Minimal required Slick CSS */
        .slick-slider {
            position: relative;
            display: block;
            box-sizing: border-box;
            user-select: none;
            -webkit-touch-callout: none;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
            overflow: visible;
        }
        .slick-list {
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }
        .slick-list:focus {
            outline: none;
        }
        .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
        }
        .slick-slider .slick-track,
        .slick-slider .slick-list {
            transform: translate3d(0, 0, 0);
        }
        .slick-track {
            position: relative;
            top: 0;
            left: 0;
            display: flex !important;
            margin-left: auto;
            margin-right: auto;
        }
        .slick-track:before,
        .slick-track:after {
            display: table;
            content: '';
        }
        .slick-track:after {
            clear: both;
        }
        .slick-loading .slick-track {
            visibility: hidden;
        }
        .slick-slide {
            display: none;
            float: left;
            height: inherit !important;
            min-height: 1px;
        }
        .slick-slide > div {
          height: 100%;
        }
        [dir='rtl'] .slick-slide {
            float: right;
        }
        .slick-slide img {
            display: block;
        }
        .slick-slide.slick-loading img {
            display: none;
        }
        .slick-slide.dragging img {
            pointer-events: none;
        }
        .slick-initialized .slick-slide {
            display: block;
        }
        .slick-loading .slick-slide {
            visibility: hidden;
        }
        .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 1px solid transparent;
        }
        .slick-arrow.slick-hidden {
            display: none;
        }

        /* Custom Styles */
        .hero-slick-slider .slick-track {
          display: flex !important;
        }
        .hero-slick-slider .slick-slide {
          height: inherit !important;
        }
        .hero-slick-slider .slick-slide > div {
          height: 100%;
        }
        .dot-custom {
          opacity: 0.5;
        }
        .slick-active .dot-custom {
          opacity: 1;
          background-color: var(--primary);
          width: 12px;
        }

        /* Progress Bar Animation */
        @keyframes progressAnimation {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .progress-bar-animation {
          animation: progressAnimation 7000ms linear infinite;
        }

        /* Only show progress bar on active slide */
        .hero-slick-slider .progress-bar-container {
          opacity: 0;
          visibility: hidden;
        }

        .hero-slick-slider .slick-current .progress-bar-container {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </div>
  );
}