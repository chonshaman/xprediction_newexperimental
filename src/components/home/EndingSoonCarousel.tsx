import React, { useState, useCallback, useRef } from "react";
import Slider from "react-slick";
import { EndingSoonMarketCard } from "../EndingSoonMarketCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COMPONENT_SIZES } from "../../config/app-config";
import { CSS_VAR_STYLES } from "../../utils/css-vars";
import type { Market } from "../../data/markets";

interface ArrowProps {
  onClick?: () => void;
}

interface EndingSoonCarouselProps {
  markets: Market[];
  onMarketClick: (market: Market) => void;
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

export function EndingSoonCarousel({ markets, onMarketClick }: EndingSoonCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const handleBeforeChange = useCallback((oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
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

  const totalSlides = markets.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full relative pb-16" style={{ paddingTop: '48px', paddingBottom: 'var(--gap--4rem)' }}>
      <Slider {...settings} className="ending-soon-slick-slider" ref={sliderRef}>
        {markets.map((market) => (
          <div key={market.id} className="px-1 sm:px-2">
            <EndingSoonMarketCard
              {...market}
              onClick={() => onMarketClick(market)}
            />
          </div>
        ))}
      </Slider>

      {/* Left Gradient Overlay */}
      <div 
        className="absolute top-0 z-10 pointer-events-none"
        style={{
          left: 'calc(-50vw + 50%)',
          width: 'calc(50vw - 50% + 200px)',
          height: '100%',
          background: 'linear-gradient(to right, var(--mauve-1) 0%, var(--mauve-1) calc(100% - 200px), transparent 100%)',
        }}
      />

      {/* Right Gradient Overlay */}
      <div 
        className="absolute top-0 z-10 pointer-events-none"
        style={{
          right: 'calc(-50vw + 50%)',
          width: 'calc(50vw - 50% + 200px)',
          height: '100%',
          background: 'linear-gradient(to left, var(--mauve-1) 0%, var(--mauve-1) calc(100% - 200px), transparent 100%)',
        }}
      />

      {/* Custom Navigation Controls */}
      <div className="absolute left-0 right-0 flex items-center justify-between z-20" style={{ bottom: 'var(--gap--2rem)' }}>
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
                backgroundColor: currentSlide === index ? "var(--primary)" : "var(--muted-foreground)",
                opacity: currentSlide === index ? 1 : 0.5,
              }}
            />
          ))}
        </div>
        
        <NextArrow onClick={handleNextClick} />
      </div>

      <style>{`
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
            overflow: visible;
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
        .ending-soon-slick-slider .slick-track {
          display: flex !important;
        }
        .ending-soon-slick-slider .slick-slide {
          height: inherit !important;
        }
        .ending-soon-slick-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}