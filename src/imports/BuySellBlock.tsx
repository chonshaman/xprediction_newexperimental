import svgPaths from "./svg-gfvpplyo4g";

function TabItem() {
  return (
    <div className="bg-[#fffefc] content-stretch flex gap-[16px] items-center justify-center px-[20px] py-[11px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[96px]" data-name="tab item">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">Buy</p>
    </div>
  );
}

function TabItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-[20px] py-[10px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[96px]" data-name="tab item">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">Sell</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 z-[2]">
      <TabItem />
      <TabItem1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #5A687D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex gap-[7.99px] h-[36px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button menu">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">Market</p>
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <ButtonMenu />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex h-[40px] isolate items-start justify-between relative shrink-0 w-full z-[2]">
      <Frame2 />
      <Container />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] tracking-[-0.32px]" style={{ fontFeatureSettings: "'case', 'lnum', 'tnum'" }}>
        <p className="css-ew64yg leading-[24px]">Outcome</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative z-[2]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="info">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #5A687D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9.33333V7" id="Vector_2" stroke="var(--stroke-0, #5A687D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 4.66667H7.00583" id="Vector_3" stroke="var(--stroke-0, #5A687D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-px relative shrink-0 size-[16px]" data-name="Icon">
      <Info />
      <div className="absolute bg-[rgba(0,0,0,0.1)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Container3 />
      <Icon />
    </div>
  );
}

function RefreshCw() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative z-[2]" data-name="refresh-cw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="refresh-cw">
          <path d={svgPaths.p258d0c40} id="Vector" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.75 2.25V6H12" id="Vector_2" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pf844500} id="Vector_3" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 12H2.25V15.75" id="Vector_4" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <RefreshCw />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Icon1 />
    </div>
  );
}

function Lightning() {
  return (
    <div className="absolute contents inset-[10.41%_4.98%_8.04%_5.11%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.11%] right-[67.16%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p3b5ec2f0} fill="url(#paint0_linear_816_4154)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4154" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164947">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.74%_16.33%_31.63%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15918">
            <g filter="url(#filter0_f_816_4162)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p35ca8700} fill="url(#paint0_linear_816_4162)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15918" id="filter0_f_816_4162" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_816_4162" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4162" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_53.39%_10.35%_9.87%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.28deg] skew-x-[-2.23deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_816_4061)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p208340} fill="url(#paint0_linear_816_4061)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_816_4061" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_816_4061" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4061" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.74%_26.16%_34.64%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_816_4096)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_816_4096)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_816_4096" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_816_4096" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4096" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.98%_36.15%_70.84%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_816_4166)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4166" x1="4.51468" x2="-0.92707" y1="12.201" y2="0.72694">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_14.51%_40%_60.94%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p2b3a4c00} fill="url(#paint0_linear_816_4160)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4160" x1="4.31613" x2="0.987832" y1="9.12718" y2="-0.0808057">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_816_4049)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_816_4049" r="1">
              <stop offset="0.1358" stopColor="#5BB98B" />
              <stop offset="0.7046" stopColor="#218358" />
              <stop offset="0.7217" stopColor="#218358" />
              <stop offset="0.7429" stopColor="#218358" />
              <stop offset="0.7623" stopColor="#218358" />
              <stop offset="0.7778" stopColor="#8ECEAA" />
              <stop offset="0.8078" stopColor="#2B9A66" />
              <stop offset="0.8378" stopColor="#2B9A66" />
              <stop offset="0.9109" stopColor="#30A46C" />
              <stop offset="0.9233" stopColor="#30A46C" />
              <stop offset="0.9623" stopColor="#5BB98B" />
              <stop offset="0.9725" stopColor="#8ECEAA" />
              <stop offset="0.9867" stopColor="#ADDDC0" />
              <stop offset="1" stopColor="#ADDDC0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning />
    </div>
  );
}

function YesGreen() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative z-[2]" data-name="Yes green">
      <Group />
      <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]" data-name="Y">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 9.16667">
          <path d={svgPaths.p294227c0} fill="var(--fill-0, white)" id="Y" />
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <YesGreen />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 z-[3]">
      <Icon2 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)]">Yes</p>
    </div>
  );
}

function BinaryOutcomeButton() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Binary outcome button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 184 56\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'0.30000001192092896\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(32.09 12.196 -41.913 8.899 29.937 -0.0000024959)\'><stop stop-color=\'rgba(167,187,194,1)\' offset=\'0\'/><stop stop-color=\'rgba(255,255,255,0.05)\' offset=\'1\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(235, 242, 245) 0%, rgb(235, 242, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center justify-between px-[14px] py-[16px] relative w-full">
          <Frame11 />
          <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[0px] text-[16px] text-right w-[36px] z-[2]">
            <span className="leading-[24px]">36¢</span>
            <span className="leading-[24px]">{` `}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Lightning1() {
  return (
    <div className="absolute contents inset-[10.41%_4.43%_8.04%_5.66%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.66%] right-[66.61%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54433 8.39305">
          <path clipRule="evenodd" d={svgPaths.p14f943f0} fill="url(#paint0_linear_816_4135)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4135" x1="5.36749" x2="1.12657" y1="8.08876" y2="0.164947">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.19%_16.33%_32.18%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-31.65%_-10.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5273 5.15918">
            <g filter="url(#filter0_f_816_4164)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p403db80} fill="url(#paint0_linear_816_4164)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.15918" id="filter0_f_816_4164" width="11.5273" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_816_4164" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4164" x1="10.5423" x2="1.5609" y1="1.127" y2="3.48291">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_52.84%_10.35%_10.42%] items-center justify-center">
        <div className="flex-none h-[3.28px] rotate-[61.28deg] skew-x-[-2.23deg] w-[9.181px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-30.49%_-10.89%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1813 5.27966">
                <g filter="url(#filter0_f_816_4032)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p208340} fill="url(#paint0_linear_816_4032)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.27966" id="filter0_f_816_4032" width="11.1813" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_816_4032" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4032" x1="10.1958" x2="1.46279" y1="1.13184" y2="3.25831">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.19%_26.16%_35.19%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-43.49%_-12.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3244 4.29945">
            <g filter="url(#filter0_f_816_4096)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p4865e80} fill="url(#paint0_linear_816_4096)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29945" id="filter0_f_816_4096" width="10.3244" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_816_4096" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4096" x1="9.33426" x2="1.45375" y1="1.11828" y2="2.40248">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.43%_36.15%_71.39%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83712 10.6893">
          <path clipRule="evenodd" d={svgPaths.p193cdc00} fill="url(#paint0_linear_816_4065)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4065" x1="4.51468" x2="-0.927069" y1="12.201" y2="0.726939">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_13.96%_40%_61.49%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.91063 8.73095">
          <path clipRule="evenodd" d={svgPaths.p2b3a4c00} fill="url(#paint0_linear_816_4057)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4057" x1="4.31613" x2="0.987833" y1="9.12718" y2="-0.0808061">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[4.17%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
          <path d={svgPaths.p1f4c2700} fill="url(#paint0_radial_816_4144)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.16649 9.16721) scale(9.16667)" gradientUnits="userSpaceOnUse" id="paint0_radial_816_4144" r="1">
              <stop offset="0.1358" stopColor="#EB8E90" />
              <stop offset="0.7046" stopColor="#CE2C31" />
              <stop offset="0.7217" stopColor="#CE2C31" />
              <stop offset="0.7429" stopColor="#CE2C31" />
              <stop offset="0.7623" stopColor="#CE2C31" />
              <stop offset="0.7778" stopColor="#F4A9AA" />
              <stop offset="0.8078" stopColor="#DC3E42" />
              <stop offset="0.8378" stopColor="#DC3E42" />
              <stop offset="0.9109" stopColor="#E5484D" />
              <stop offset="0.9233" stopColor="#E5484D" />
              <stop offset="0.9623" stopColor="#EB8E90" />
              <stop offset="0.9725" stopColor="#F4A9AA" />
              <stop offset="0.9867" stopColor="#FDBDBE" />
              <stop offset="1" stopColor="#FDBDBE" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning1 />
    </div>
  );
}

function NoRed() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative z-[2]" data-name="No Red">
      <Group1 />
      <div className="absolute inset-[29.17%_31.25%]" data-name="N">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 8.33333">
          <path d={svgPaths.p2b92e400} fill="var(--fill-0, white)" id="N" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <NoRed />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 z-[3]">
      <Icon3 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)]">No</p>
    </div>
  );
}

function BinaryOutcomeButton1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Binary outcome button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 184 56\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'0.30000001192092896\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(32.09 12.196 -41.913 8.899 29.937 -0.0000024959)\'><stop stop-color=\'rgba(167,187,194,1)\' offset=\'0\'/><stop stop-color=\'rgba(255,255,255,0.05)\' offset=\'1\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(235, 242, 245) 0%, rgb(235, 242, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.04),0px_2px_12px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center justify-between px-[14px] py-[16px] relative w-full">
          <Frame12 />
          <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[0px] text-[16px] text-right w-[36px] z-[2]">
            <span className="leading-[24px]">64¢</span>
            <span className="leading-[24px]">{` `}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="button group">
      <BinaryOutcomeButton />
      <BinaryOutcomeButton1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <ButtonGroup />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] tracking-[-0.32px] w-full" style={{ fontFeatureSettings: "'case', 'lnum', 'tnum'" }}>
        <p className="css-4hzbpn leading-[24px]">Amount</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading />
    </div>
  );
}

function SectionItems() {
  return (
    <div className="h-full relative w-[60px]" data-name="section items">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
            <div className="absolute inset-[-2px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 2">
                <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.4" strokeWidth="2" x2="44" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[60px] items-center justify-end min-h-px min-w-px overflow-auto relative" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[30px] text-right tracking-[-0.225px]">
        <p className="css-ew64yg leading-[40px]">$100</p>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "18.875" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[-90deg]">
          <SectionItems />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">$3,600</p>
      <p className="css-ew64yg relative shrink-0">.28</p>
    </div>
  );
}

function AmountFormat() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.215px] pt-[1.785px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px]">
        <p className="css-ew64yg leading-[20px]">Available balance:</p>
      </div>
      <AmountFormat />
    </div>
  );
}

function StatusLabel() {
  return (
    <div className="bg-[#fffefc] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Status label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center">
        <p className="css-ew64yg leading-[20px]">+$1</p>
      </div>
    </div>
  );
}

function StatusLabel1() {
  return (
    <div className="bg-[#fffefc] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Status label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center">
        <p className="css-ew64yg leading-[20px]">+$20</p>
      </div>
    </div>
  );
}

function StatusLabel2() {
  return (
    <div className="bg-[#fffefc] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Status label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center">
        <p className="css-ew64yg leading-[20px]">+$100</p>
      </div>
    </div>
  );
}

function StatusLabel3() {
  return (
    <div className="bg-[#fffefc] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Status label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[12px] text-center">
        <p className="css-ew64yg leading-[20px]">Max</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <StatusLabel />
      <StatusLabel1 />
      <StatusLabel2 />
      <StatusLabel3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Frame6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#6952fe] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[4px] px-[12px] relative w-full">
        <Frame5 />
        <Container6 />
      </div>
    </div>
  );
}

function Banana() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Banana">
      <div className="absolute bg-gradient-to-b from-[#d88d2f] inset-[78.47%_82.39%_13.27%_6.25%] rounded-[1.322px] to-[#ff9115] via-[#ff971c] via-[51.042%]" />
      <div className="absolute inset-[40.1%_6.25%_44.75%_59.91%]" data-name="Peel_Right_Base">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.76833 3.03022">
          <path d={svgPaths.pebfe300} fill="url(#paint0_linear_816_4086)" id="Peel_Right_Base" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4086" x1="3.12832" x2="5.78012" y1="2.55652" y2="0.982013">
              <stop stopColor="#FEB568" />
              <stop offset="1" stopColor="#FFC587" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-[47.83%] left-3/4 right-[7.6%] top-[41.58%]" data-name="Peel_Right_Highlight">
        <div className="absolute inset-[-17.7%_-10.16%_-16.63%_-9.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.15785 2.84562">
            <g filter="url(#filter0_f_816_4017)" id="Peel_Right_Highlight">
              <path d={svgPaths.p2f3e740} stroke="url(#paint0_linear_816_4017)" strokeOpacity="0.6" strokeWidth="0.15" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="2.84562" id="filter0_f_816_4017" width="4.15785" x="1.11759e-08" y="7.45058e-09">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_816_4017" stdDeviation="0.15" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4017" x1="0.209097" x2="3.8041" y1="0.375008" y2="2.99881">
                <stop stopColor="#FFD986" stopOpacity="0" />
                <stop offset="0.447917" stopColor="#FFEECA" />
                <stop offset="1" stopColor="#FFD986" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[39.68%_54.17%_45.17%_11.99%]" data-name="Peel_Left_Base">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.76873 3.03022">
          <path d={svgPaths.p1cf07080} fill="url(#paint0_linear_816_4009)" id="Peel_Left_Base" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4009" x1="1.09913" x2="5.08652" y1="1.09641" y2="2.54822">
              <stop stopColor="#FFB36D" />
              <stop offset="0.5" stopColor="#F8A65B" />
              <stop offset="1" stopColor="#F8A65B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[6.25%_27.56%_12.03%_14.54%]" data-name="FruitBase">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.579 16.3448">
          <g id="FruitBase">
            <path d={svgPaths.p380c7940} fill="url(#paint0_linear_816_4071)" />
            <path d={svgPaths.p380c7940} fill="url(#paint1_radial_816_4071)" />
            <path d={svgPaths.p380c7940} fill="url(#paint2_radial_816_4071)" />
            <path d={svgPaths.p380c7940} fill="url(#paint3_radial_816_4071)" />
            <path d={svgPaths.p380c7940} fill="url(#paint4_radial_816_4071)" />
            <path d={svgPaths.p380c7940} fill="url(#paint5_radial_816_4071)" />
            <path d={svgPaths.p380c7940} fill="url(#paint6_radial_816_4071)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4071" x1="11.579" x2="5.29666" y1="6.01288" y2="7.83258">
              <stop stopColor="#FFE78C" />
              <stop offset="1" stopColor="#CF862F" />
            </linearGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(7.40395 6.875) rotate(180) scale(5.9375 14.1114)" gradientUnits="userSpaceOnUse" id="paint1_radial_816_4071" r="1">
              <stop offset="0.0877672" stopColor="#FEAC50" />
              <stop offset="0.657908" stopColor="#E6A64C" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(7.40395 4.0625) rotate(160.56) scale(5.63367 13.3893)" gradientUnits="userSpaceOnUse" id="paint2_radial_816_4071" r="1">
              <stop offset="0.0342483" stopColor="#FEAC50" />
              <stop offset="0.614261" stopColor="#E6A64C" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(8.96645 2.5) rotate(-122.005) scale(2.94812 1.76705)" gradientUnits="userSpaceOnUse" id="paint3_radial_816_4071" r="1">
              <stop stopColor="#FFE88F" />
              <stop offset="0.826486" stopColor="#FFC265" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.59145 4.0625) rotate(161.565) scale(1.97642 4.69729)" gradientUnits="userSpaceOnUse" id="paint4_radial_816_4071" r="1">
              <stop offset="0.0509662" stopColor="#FFE78C" stopOpacity="0.41" />
              <stop offset="0.989583" stopColor="#FFEC8E" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(10.4473 4.96015) rotate(174.611) scale(3.40564 8.09405)" gradientUnits="userSpaceOnUse" id="paint5_radial_816_4071" r="1">
              <stop offset="0.0509662" stopColor="#FFE78C" />
              <stop offset="1" stopColor="#FFEC8E" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(4.54504 5.80622) rotate(-80.3463) scale(7.42107 2.76414)" gradientUnits="userSpaceOnUse" id="paint6_radial_816_4071" r="1">
              <stop offset="0.486848" stopColor="#D68A36" />
              <stop offset="1" stopColor="#E6A64C" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[45.86%_29.86%_6.25%_11.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7473 9.57823">
          <g id="Vector">
            <path d={svgPaths.p21e52500} fill="url(#paint0_linear_816_4094)" />
            <path d={svgPaths.p21e52500} fill="url(#paint1_radial_816_4094)" />
            <path d={svgPaths.p21e52500} fill="url(#paint2_radial_816_4094)" />
            <path d={svgPaths.p21e52500} fill="url(#paint3_radial_816_4094)" />
            <path d={svgPaths.p21e52500} fill="url(#paint4_linear_816_4094)" />
            <path d={svgPaths.p21e52500} fill="url(#paint5_linear_816_4094)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4094" x1="8.57799" x2="0.480621" y1="2.77107" y2="8.21907">
              <stop stopColor="#FFCB1B" />
              <stop offset="0.494792" stopColor="#FFCF19" />
              <stop offset="1" stopColor="#FFBB13" />
            </linearGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(4.24944 1.05458) rotate(66.1356) scale(8.85437 10.8595)" gradientUnits="userSpaceOnUse" id="paint1_radial_816_4094" r="1">
              <stop stopColor="#CE8418" />
              <stop offset="0.36059" stopColor="#CE8418" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(0.294046 3.18154) rotate(60.1885) scale(7.95616 9.75787)" gradientUnits="userSpaceOnUse" id="paint2_radial_816_4094" r="1">
              <stop stopColor="#A9913F" stopOpacity="0.8" />
              <stop offset="0.431161" stopColor="#A9913F" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(1.6747 10.6445) rotate(-62.3447) scale(9.6473 11.832)" gradientUnits="userSpaceOnUse" id="paint3_radial_816_4094" r="1">
              <stop stopColor="#F89434" />
              <stop offset="0.348958" stopColor="#F89434" stopOpacity="0" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_816_4094" x1="9.02577" x2="5.18232" y1="2.88301" y2="5.90553">
              <stop stopColor="#F18C1B" stopOpacity="0.75" />
              <stop offset="0.796875" stopColor="#F18C1B" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_816_4094" x1="9.02577" x2="5.29426" y1="2.88301" y2="6.24137">
              <stop stopColor="#C76D09" stopOpacity="0.4" />
              <stop offset="0.28125" stopColor="#C76D09" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[51.39%_41.37%_16.39%_15.69%]" data-name="Vector (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.58892 6.44284">
          <path clipRule="evenodd" d={svgPaths.p22c6780} fill="var(--fill-0, #F49000)" fillOpacity="0.6" fillRule="evenodd" id="Vector (Stroke)" />
        </svg>
      </div>
      <div className="absolute inset-[45.89%_19.25%_14.03%_40.76%]" data-name="Peel_Front_Base">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.9986 8.01543">
          <g id="Peel_Front_Base">
            <path d={svgPaths.pb1b6880} fill="url(#paint0_linear_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint1_linear_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint2_radial_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint3_linear_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint4_linear_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint5_linear_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint6_radial_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint7_radial_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint8_radial_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint9_radial_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint10_radial_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint11_radial_816_4090)" />
            <path d={svgPaths.pb1b6880} fill="url(#paint12_radial_816_4090)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4090" x1="3.9993" x2="3.9993" y1="0" y2="8.01543">
              <stop stopColor="#FFB33D" />
              <stop offset="1" stopColor="#FFC160" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_816_4090" x1="8.09795" x2="6.53545" y1="3.6335" y2="3.6335">
              <stop stopColor="#FFC676" stopOpacity="0" />
              <stop offset="0.230355" stopColor="#FFC57F" />
            </linearGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(7.16047 3.35127) rotate(139.705) scale(1.91004 1.90603)" gradientUnits="userSpaceOnUse" id="paint2_radial_816_4090" r="1">
              <stop stopColor="#FFC676" stopOpacity="0" />
              <stop offset="0.543481" stopColor="#FFCC7F" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_816_4090" x1="7.9986" x2="5.70363" y1="4.60147" y2="4.58654">
              <stop stopColor="#EEA736" />
              <stop offset="0.130799" stopColor="#FFC676" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_816_4090" x1="4.75897" x2="5.70363" y1="5.40088" y2="4.58654">
              <stop stopColor="#FFB949" />
              <stop offset="0.09375" stopColor="#FBB559" stopOpacity="0.65" />
              <stop offset="0.515625" stopColor="#F8B265" stopOpacity="0.37" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_816_4090" x1="8.14126" x2="8.11677" y1="1.99055e-09" y2="2.03071">
              <stop stopColor="#F5A21D" />
              <stop offset="0.173353" stopColor="#FFC676" stopOpacity="0" />
            </linearGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(8.12902 1.01536) rotate(142.803) scale(2.89623 2.89015)" gradientUnits="userSpaceOnUse" id="paint6_radial_816_4090" r="1">
              <stop offset="0.33823" stopColor="#FFCB77" />
              <stop offset="0.473473" stopColor="#FFC676" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(7.58395 0.231824) rotate(124.807) scale(3.08675 3.08027)" gradientUnits="userSpaceOnUse" id="paint7_radial_816_4090" r="1">
              <stop offset="0.33823" stopColor="#FFCB77" />
              <stop offset="0.436447" stopColor="#FFC676" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(6.71862 0.237938) rotate(110.041) scale(3.53598 7.9429)" gradientUnits="userSpaceOnUse" id="paint8_radial_816_4090" r="1">
              <stop stopColor="#F5A21D" />
              <stop offset="0.180433" stopColor="#FFC676" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(7.46029 0.708014) rotate(124.41) scale(3.45668 7.76476)" gradientUnits="userSpaceOnUse" id="paint9_radial_816_4090" r="1">
              <stop stopColor="#F5A21D" />
              <stop offset="0.180433" stopColor="#FFC676" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(7.9986 1.60638) rotate(141.905) scale(3.16617 7.1122)" gradientUnits="userSpaceOnUse" id="paint10_radial_816_4090" r="1">
              <stop stopColor="#F5A21D" />
              <stop offset="0.197195" stopColor="#FFC676" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(8.09327 1.85199) rotate(156.571) scale(2.84124 6.3823)" gradientUnits="userSpaceOnUse" id="paint11_radial_816_4090" r="1">
              <stop stopColor="#F5A21D" />
              <stop offset="0.188314" stopColor="#FFC676" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="translate(7.63705 0.972132) rotate(136.944) scale(2.94349 6.61199)" gradientUnits="userSpaceOnUse" id="paint12_radial_816_4090" r="1">
              <stop stopColor="#F5A21D" />
              <stop offset="0.149137" stopColor="#FFC676" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#0f172a] text-[14px]">
        <p className="css-ew64yg leading-[24px]">To Win Est.</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#5a687d] text-[12px] text-right">
        <p className="css-ew64yg">
          <span className="leading-[20px]">Avg. Price: 52</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">¢</span>
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Banana />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#020617] text-[20px]">
        <p className="css-ew64yg leading-[28px]">$2795</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="bg-[#d6f1df] relative rounded-[8px] shrink-0 w-full" data-name="HorizontalBorder">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[6px] relative w-full">
          <Frame4 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function InputAmount() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[380px]" data-name="input amount">
      <Frame8 />
      <HorizontalBorder />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#6952fe] relative rounded-[8px] shrink-0 w-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-[12px] relative w-full">
          <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-white z-[3]">Buy</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full">
      <Container1 />
      <InputAmount />
      <Button />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
        <p className="css-ew64yg leading-[24px]">You Buy</p>
      </div>
    </div>
  );
}

function Lightning2() {
  return (
    <div className="absolute contents inset-[10.41%_4.98%_8.04%_5.11%]" data-name="Lightning">
      <div className="absolute bottom-[8.04%] left-[5.11%] right-[67.16%] top-1/2" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.88103 5.87513">
          <path clipRule="evenodd" d={svgPaths.p20824a00} fill="url(#paint0_linear_816_4021)" fillRule="evenodd" id="Line 192 (Stroke)" opacity="0.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4021" x1="3.75724" x2="0.7886" y1="5.66213" y2="0.115463">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[67.88%_20.74%_16.33%_31.63%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-45.22%_-14.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.6691 4.21143">
            <g filter="url(#filter0_f_816_4067)" id="Line 192 (Stroke)">
              <path clipRule="evenodd" d={svgPaths.p2ded2f00} fill="url(#paint0_linear_816_4067)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.21143" id="filter0_f_816_4067" width="8.6691" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_816_4067" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4067" x1="7.67963" x2="1.39263" y1="1.0889" y2="2.73804">
                <stop stopOpacity="0.39" />
                <stop offset="0.310764" stopOpacity="0.94" />
                <stop offset="0.487847" stopOpacity="0.9" />
                <stop offset="0.670139" stopOpacity="0.71" />
                <stop offset="1" stopOpacity="0.26" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-[42.08%_53.39%_10.35%_9.87%] items-center justify-center">
        <div className="flex-none h-[2.296px] rotate-[61.28deg] skew-x-[-2.23deg] w-[6.427px]">
          <div className="relative size-full" data-name="Line 192 (Stroke)">
            <div className="absolute inset-[-43.56%_-15.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4269 4.29576">
                <g filter="url(#filter0_f_816_4063)" id="Line 192 (Stroke)">
                  <path clipRule="evenodd" d={svgPaths.p3f8ec400} fill="url(#paint0_linear_816_4063)" fillRule="evenodd" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="4.29576" id="filter0_f_816_4063" width="8.4269" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_816_4063" stdDeviation="0.5" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4063" x1="7.43705" x2="1.32395" y1="1.09229" y2="2.58082">
                    <stop stopOpacity="0.39" />
                    <stop offset="0.310764" stopOpacity="0.87" />
                    <stop offset="0.487847" stopOpacity="0.71" />
                    <stop offset="0.670139" />
                    <stop offset="1" stopOpacity="0.26" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.34%_23.74%_26.16%_34.64%]" data-name="Line 192 (Stroke)">
        <div className="absolute inset-[-62.13%_-17.16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82706 3.60961">
            <g filter="url(#filter0_f_816_4059)" id="Line 192 (Stroke)" opacity="0.4">
              <path clipRule="evenodd" d={svgPaths.p3505ce00} fill="url(#paint0_linear_816_4059)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="3.60961" id="filter0_f_816_4059" width="7.82706" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_816_4059" stdDeviation="0.5" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4059" x1="6.83398" x2="1.31762" y1="1.08279" y2="1.98174">
                <stop stopOpacity="0.79" />
                <stop offset="0.487847" stopOpacity="0.517361" />
                <stop offset="1" stopOpacity="0.72" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.41%_4.98%_36.15%_70.84%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.38599 7.48248">
          <path clipRule="evenodd" d={svgPaths.p1a524100} fill="url(#paint0_linear_816_4088)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4088" x1="3.16028" x2="-0.648949" y1="8.54069" y2="0.508858">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.487847" stopColor="white" stopOpacity="0.517361" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[16.35%_14.51%_40%_60.94%]" data-name="Line 192 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.43744 6.11166">
          <path clipRule="evenodd" d={svgPaths.pb65ad80} fill="url(#paint0_linear_816_4034)" fillRule="evenodd" id="Line 192 (Stroke)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_816_4034" x1="3.02129" x2="0.691483" y1="6.38902" y2="-0.0565642">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.453125" stopColor="white" stopOpacity="0.57" />
              <stop offset="0.578125" stopColor="white" stopOpacity="0.44" />
              <stop offset="0.703125" stopColor="white" stopOpacity="0.29" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[4.17%_4.17%_4.17%_4.16%]" data-name="Group">
      <div className="absolute inset-[4.17%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
          <path d={svgPaths.p3db30800} fill="url(#paint0_radial_816_4124)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(6.41654 6.41705) scale(6.41667)" gradientUnits="userSpaceOnUse" id="paint0_radial_816_4124" r="1">
              <stop offset="0.1358" stopColor="#5BB98B" />
              <stop offset="0.7046" stopColor="#218358" />
              <stop offset="0.7217" stopColor="#218358" />
              <stop offset="0.7429" stopColor="#218358" />
              <stop offset="0.7623" stopColor="#218358" />
              <stop offset="0.7778" stopColor="#8ECEAA" />
              <stop offset="0.8078" stopColor="#2B9A66" />
              <stop offset="0.8378" stopColor="#2B9A66" />
              <stop offset="0.9109" stopColor="#30A46C" />
              <stop offset="0.9233" stopColor="#30A46C" />
              <stop offset="0.9623" stopColor="#5BB98B" />
              <stop offset="0.9725" stopColor="#8ECEAA" />
              <stop offset="0.9867" stopColor="#ADDDC0" />
              <stop offset="1" stopColor="#ADDDC0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Lightning2 />
    </div>
  );
}

function YesGreen1() {
  return (
    <div className="flex-[1_0_0] h-[14px] min-h-px min-w-px relative z-[2]" data-name="Yes green">
      <Group2 />
      <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-[29.17%]" data-name="Y">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.83333 6.41667">
          <path d={svgPaths.p2d560400} fill="var(--fill-0, white)" id="Y" />
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-px relative shrink-0 size-[16px]" data-name="Icon">
      <YesGreen1 />
      <div className="absolute bg-[rgba(0,0,0,0.1)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon4 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-right">
        <p className="css-ew64yg leading-[20px]">192.3</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5a687d] text-[12px] text-right">
        <p className="css-ew64yg leading-[20px]">Shares:</p>
      </div>
      <Frame10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="Container">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">$100</p>
      <Frame9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function SectionItems1() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
        <p className="css-ew64yg leading-[24px]">Fee (0%)</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">$0</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function SectionItems2() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 380 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="380" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px]">
        <p className="css-ew64yg leading-[24px]">Net Purchase</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">$100</p>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="HorizontalBorder">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container10 />
      <SectionItems1 />
      <Container13 />
      <SectionItems2 />
      <HorizontalBorder1 />
    </div>
  );
}

function Tabpanel() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[380px]" data-name="Tabpanel">
      <Frame7 />
      <Frame3 />
    </div>
  );
}

function BuySellBlock1() {
  return (
    <div className="max-w-[420px] min-w-[420px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shrink-0 z-[1]" data-name="buy sell block" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 420 547\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'0.20000000298023224\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(-21 7.7476e-15 -1.3096e-13 -24.92 210 547)\'><stop stop-color=\'rgba(167,187,194,1)\' offset=\'0\'/><stop stop-color=\'rgba(255,255,255,0.05)\' offset=\'1\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 254, 252) 0%, rgb(255, 254, 252) 100%)" }}>
      <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[inherit] min-w-[inherit] overflow-clip pb-[24px] pt-[20px] px-[20px] relative rounded-[inherit]">
        <Tabpanel />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] shadow-[0px_8px_56px_-12px_rgba(0,0,0,0.2)]" />
    </div>
  );
}

export default function BuySellBlock() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="buy sell block">
      <Frame1 />
      <BuySellBlock1 />
    </div>
  );
}