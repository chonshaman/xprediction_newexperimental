import React from 'react';
import svgPaths from '../../imports/svg-dbugqkyth2';

interface SoftcapProgressBarProps {
  softcapProgress: number;
  raised: string;
  total: string;
  size?: 'small' | 'medium' | 'large';
  showLabels?: boolean;
}

export const SoftcapProgressBar = React.memo(function SoftcapProgressBar({ 
  softcapProgress, 
  raised, 
  total,
  size = 'medium',
  showLabels = true,
}: SoftcapProgressBarProps) {
  const height = size === 'large' ? '32px' : size === 'medium' ? '20px' : '12px';
  const fireSize = size === 'large' ? '33.6px' : size === 'medium' ? '20px' : '16px';
  const padding = size === 'large' ? '4px' : size === 'medium' ? '3px' : '2px';

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap--0-25rem)',
      }}
    >
      {/* Labels */}
      {showLabels && (
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--muted-foreground)',
            }}
          >
            Softcap progress: <span style={{ color: 'var(--card-foreground)' }}>{softcapProgress}%</span>
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--card-foreground)',
            }}
          >
            {raised} {total && `/ ${total}`} USDX
          </span>
        </div>
      )}

      {/* Progress Bar */}
      <div 
        style={{
          width: '100%',
          height,
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
            padding,
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
                bottom: padding,
                right: 0,
                width: fireSize,
                height: fireSize,
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
                  <radialGradient cx="0" cy="0" gradientTransform="translate(7.44664 9.84739) rotate(15.4786) scale(0.912831 3.32539)" gradientUnits="userSpaceOnUse" id="paint11_radial_652_15486" r="1">
                    <stop stopColor="#FF815B" />
                    <stop offset="0.24804" stopColor="#FF815B" stopOpacity="0.869521" />
                    <stop offset="0.822875" stopColor="#FF815B" stopOpacity="0.150116" />
                    <stop offset="1" stopColor="#FF815B" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(8.06831 9.2849) rotate(14.036) scale(0.697119 2.58813)" gradientUnits="userSpaceOnUse" id="paint12_radial_652_15486" r="1">
                    <stop stopColor="#F58E5B" />
                    <stop offset="0.24804" stopColor="#F58E5B" stopOpacity="0.869521" />
                    <stop offset="0.822875" stopColor="#F58E5B" stopOpacity="0.150116" />
                    <stop offset="1" stopColor="#F58E5B" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(7.31914 5.95864) rotate(14.036) scale(1.66907 6.19596)" gradientUnits="userSpaceOnUse" id="paint13_radial_652_15486" r="1">
                    <stop stopColor="#FFB27D" />
                    <stop offset="1" stopColor="#FFB27D" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(8.45164 7.84239) rotate(14.036) scale(0.545151 2.02357)" gradientUnits="userSpaceOnUse" id="paint14_radial_652_15486" r="1">
                    <stop stopColor="#FFA76F" />
                    <stop offset="0.507346" stopColor="#FFA76F" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFA76F" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(7.57414 8.04364) rotate(14.036) scale(0.393151 1.45918)" gradientUnits="userSpaceOnUse" id="paint15_radial_652_15486" r="1">
                    <stop stopColor="#FFA76F" />
                    <stop offset="0.507346" stopColor="#FFA76F" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFA76F" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(9.13289 9.50489) rotate(14.036) scale(0.348134 1.29208)" gradientUnits="userSpaceOnUse" id="paint16_radial_652_15486" r="1">
                    <stop stopColor="#FFA76F" />
                    <stop offset="0.507346" stopColor="#FFA76F" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFA76F" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(7.28664 6.98364) rotate(14.036) scale(1.24227 4.61066)" gradientUnits="userSpaceOnUse" id="paint17_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(9.20414 3.71989) rotate(14.036) scale(3.42653 12.717)" gradientUnits="userSpaceOnUse" id="paint18_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(10.2916 2.38364) rotate(14.036) scale(2.61516 9.70575)" gradientUnits="userSpaceOnUse" id="paint19_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(8.83164 11.1999) rotate(14.036) scale(0.348134 1.29208)" gradientUnits="userSpaceOnUse" id="paint20_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(11.2104 10.4249) rotate(14.036) scale(0.348134 1.29208)" gradientUnits="userSpaceOnUse" id="paint21_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(9.71914 9.98364) rotate(14.036) scale(0.469151 1.74161)" gradientUnits="userSpaceOnUse" id="paint22_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(8.91539 11.4049) rotate(14.036) scale(0.666318 2.47295)" gradientUnits="userSpaceOnUse" id="paint23_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(10.9854 11.4174) rotate(14.036) scale(1.12126 4.16127)" gradientUnits="userSpaceOnUse" id="paint24_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(10.9666 10.0049) rotate(14.036) scale(1.27727 4.74035)" gradientUnits="userSpaceOnUse" id="paint25_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(8.75164 9.59739) rotate(14.036) scale(0.393151 1.45918)" gradientUnits="userSpaceOnUse" id="paint26_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(10.6041 8.37989) rotate(14.036) scale(0.469151 1.74161)" gradientUnits="userSpaceOnUse" id="paint27_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(9.72414 11.6111) rotate(14.036) scale(0.424651 1.57627)" gradientUnits="userSpaceOnUse" id="paint28_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(9.97414 8.31989) rotate(14.036) scale(0.63818 2.36908)" gradientUnits="userSpaceOnUse" id="paint29_radial_652_15486" r="1">
                    <stop stopColor="#FFAA76" />
                    <stop offset="0.507346" stopColor="#FFAA76" stopOpacity="0.42024" />
                    <stop offset="1" stopColor="#FFAA76" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(16.3366 15.1877) rotate(-172.025) scale(9.28699 9.1559)" gradientUnits="userSpaceOnUse" id="paint30_radial_652_15486" r="1">
                    <stop stopColor="#F7D581" />
                    <stop offset="1" stopColor="#F7D581" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient cx="0" cy="0" gradientTransform="translate(14.7491 11.5377) rotate(-172.025) scale(4.78477 4.71706)" gradientUnits="userSpaceOnUse" id="paint31_radial_652_15486" r="1">
                    <stop stopColor="#F2BC6B" />
                    <stop offset="1" stopColor="#F2BC6B" stopOpacity="0" />
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

      {/* Fire animation keyframes */}
      <style>{`
        @keyframes fireFlicker {
          0%, 100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
          25% { 
            opacity: 0.9; 
            transform: translateY(-1px) scale(1.05);
          }
          50% { 
            opacity: 1; 
            transform: translateY(0) scale(0.98);
          }
          75% { 
            opacity: 0.95; 
            transform: translateY(-0.5px) scale(1.02);
          }
        }

        @keyframes firePulse {
          0%, 100% { 
            filter: brightness(1) saturate(1);
          }
          50% { 
            filter: brightness(1.1) saturate(1.2);
          }
        }
      `}</style>
    </div>
  );
});