import svgPaths from "./svg-dbugqkyth2";

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame7 />
      </div>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
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

function Amount1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount1 />
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount2 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat />
      <AmountFormat1 />
      <AmountFormat2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame />
    </div>
  );
}

function SoftcapBar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[20px] w-[496px]" data-name="softcap bar">
      <Frame6 />
      <Frame1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[#3e63dd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[9999px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame9 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[2px] items-center leading-[16px] min-h-px min-w-[150px] not-italic relative text-[12px]">
      <p className="css-ew64yg relative shrink-0 text-[#858585]">Softcap progress:</p>
      <p className="css-ew64yg relative shrink-0 text-[#3e63dd]">100%</p>
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount3 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <Frame10 />
      <Frame3 />
    </div>
  );
}

function SoftcapBar1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[112px] w-[496px]" data-name="softcap bar">
      <Frame8 />
      <Frame2 />
    </div>
  );
}

function Fire() {
  return (
    <div className="absolute bottom-[3px] right-0 size-[20px] z-[2]" data-name="Fire">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_652_15486)" id="Fire">
          <g id="Vector 396">
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
          <g id="Vector 397">
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
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full z-[1]">
      <div className="bg-[#3e63dd] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[126px]" />
      <div className="bg-[#e93d82] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col gap-[10px] isolate items-start p-[3px] relative size-full">
        <Fire />
        <Frame12 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e93d82] text-[12px]">250%</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-[148px] relative">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress:</p>
      <Frame14 />
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">25,000</p>
    </div>
  );
}

function AmountFormat4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount4 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AmountFormat4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <Frame13 />
      <Frame5 />
    </div>
  );
}

function SoftcapBar2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[78px] w-[496px]" data-name="softcap bar">
      <Frame11 />
      <Frame4 />
    </div>
  );
}

export default function Frame15() {
  return (
    <div className="bg-white relative size-full">
      <SoftcapBar />
      <SoftcapBar1 />
      <SoftcapBar2 />
    </div>
  );
}