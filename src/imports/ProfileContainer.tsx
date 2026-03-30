import svgPaths from "./svg-hbrnzuw03o";
import imgImage from "figma:asset/3749d799280219ead1f6db16e99ff3481e1baafc.png";
import imgImage1 from "figma:asset/14992a95af9c9155867f3f0fde3e15d81d17628f.png";
import imgImage2 from "figma:asset/620a9cae31114c5f3aaed3697d45271693f63cba.png";
import imgImage3 from "figma:asset/453fef3d8dff5b7316dc0f3664ab8b193551775f.png";
import imgImage4 from "figma:asset/c2bfc04d289fb3dec6dbb1aa02c158d47e68061f.png";
import imgImage5 from "figma:asset/f881b889bf0e8c7b3d760d2aaa8b9cfa9f5dc9a2.png";
import imgImage6 from "figma:asset/bc8711c6d31e644935845adda39ce7c907af96b6.png";
import imgImage7 from "figma:asset/f2e5fdc795be344744b7070099c7d48bbc1caa80.png";
import imgRocket from "figma:asset/c48a8719dbb7c9b62d95dd9b9ea3513b2fa4b1d2.png";

function Rocket() {
  return (
    <div className="relative shrink-0 size-[28px] z-[2]" data-name="rocket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="rocket">
          <path d={svgPaths.p351649f0} id="Vector" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d={svgPaths.p3dff3850} id="Vector_2" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d={svgPaths.p177a6d80} id="Vector_3" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d={svgPaths.p86b7780} id="Vector_4" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex isolate items-center justify-between p-[2px] relative shrink-0 w-[32px]" data-name="Icon">
      <Rocket />
      <div className="absolute bg-[rgba(0,0,0,0.1)] left-1/2 opacity-0 rounded-[24px] size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="Title">
      <Icon />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#020617] text-[30px] tracking-[-0.225px]">
        <p className="css-4hzbpn leading-[40px]">Pre-Sale Markets</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Title />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5a687d] text-[16px] w-full" style={{ fontFeatureSettings: "'case', 'lnum', 'tnum'" }}>
        <p className="css-4hzbpn leading-[24px]">A launchpad for creators and investors—get in early, grow together.</p>
      </div>
    </div>
  );
}

function TabItem() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="tab item">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">Explore</p>
    </div>
  );
}

function TabItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="tab item">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">My Markets</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] content-stretch flex gap-[4px] items-start p-[4px] relative rounded-[8px] shrink-0" data-name="tabs">
      <div aria-hidden="true" className="absolute border-[1.4px] border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <TabItem />
      <TabItem1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[640px] px-0 py-[4px] relative shrink-0 w-full" data-name="Content">
      <Container />
      <Tabs />
    </div>
  );
}

function SectionItems() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 900 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="900" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[320px] relative" data-name="Content">
      <Content1 />
      <SectionItems />
    </div>
  );
}

function BlockHeader() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] h-[156px] items-center relative shrink-0 w-full" data-name="Block Header">
      <Content />
    </div>
  );
}

function Search() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative z-[2]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="search">
          <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p126da180} id="Vector_2" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Search />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function InputSearch() {
  return (
    <div className="bg-[#fffefc] content-stretch flex gap-[4px] h-[36px] items-center max-w-[640px] min-h-[36px] pl-[12px] pr-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[320px]" data-name="Input Search">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <Icon1 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#334155] text-[14px]">Search by markets, topics...</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative z-[2]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #020617)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-px relative shrink-0 size-[16px]" data-name="Icon">
      <ChevronDown />
      <div className="absolute bg-[rgba(0,0,0,0.1)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function StatusLabel() {
  return (
    <div className="bg-[#fffefc] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Status label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5a687d] text-[14px] text-center">
        <p className="css-ew64yg leading-[24px]">Status:</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#353b3d] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">All</p>
      </div>
      <Icon2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <StatusLabel />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <InputSearch />
      <Frame27 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function CategoryLabel() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 41 32\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.05 4.5324e-16 -1.2784e-14 -1.4579 20.5 32)\\\'><stop stop-color=\\\'rgba(167,187,194,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(255, 254, 252) 0%, rgb(255, 254, 252) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#334155] text-[14px]">All</p>
    </div>
  );
}

function CategoryLabel1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#334155] text-[14px]">Politics</p>
    </div>
  );
}

function CategoryLabel2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#334155] text-[14px]">Sport</p>
    </div>
  );
}

function CategoryLabel3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#334155] text-[14px]">Crypto</p>
    </div>
  );
}

function CategoryLabel4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#334155] text-[14px]">Tech</p>
    </div>
  );
}

function CategoryLabel5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#334155] text-[14px]">Economy</p>
    </div>
  );
}

function Category() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Category">
      <CategoryLabel />
      <CategoryLabel1 />
      <CategoryLabel2 />
      <CategoryLabel3 />
      <CategoryLabel4 />
      <CategoryLabel5 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Category />
    </div>
  );
}

function QuestionTokenLabel() {
  return (
    <div className="bg-[#e6f4fe] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d74ce] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Live</p>
      </div>
    </div>
  );
}

function Day() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">23</p>
    </div>
  );
}

function Day1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day2() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">17</p>
    </div>
  );
}

function Day3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day4() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">49</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
    </div>
  );
}

function Countdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="countdown">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Ending in</p>
      <Frame66 />
    </div>
  );
}

function Tagncount() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tagncount">
      <QuestionTokenLabel />
      <Countdown />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[132.08%] left-[-15.49%] max-w-none top-[-32.08%] w-[132.09%]" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function CategoryLabel6() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel6 />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame38 />
      <AmountFormat />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame72 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will Jair Messias Bolsonaro be arrested in 2025?</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame78() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame79 />
      </div>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
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
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount2 />
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat1 />
      <AmountFormat2 />
      <AmountFormat3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame />
    </div>
  );
}

function SoftcapBar() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame78 />
      <Frame1 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame74 />
      <Frame76 />
      <SoftcapBar />
    </div>
  );
}

function Contentgroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image />
      <Frame73 />
    </div>
  );
}

function SectionItems1() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat4 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 106 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.3 5.099e-16 -3.3051e-14 -1.6401 53 36)\\\'><stop stop-color=\\\'rgba(140,157,163,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(198,206,209,0.525)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(105, 82, 254) 0%, rgb(105, 82, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-white z-[3]">Join Presale</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username />
      <Button />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[248px] items-center justify-between relative shrink-0 w-full" data-name="container">
      <Tagncount />
      <Contentgroup />
      <SectionItems1 />
      <Footer />
    </div>
  );
}

function CardDetail() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-[256px] min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] min-w-[inherit] p-[16px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function QuestionTokenLabel1() {
  return (
    <div className="bg-[#e6f4fe] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d74ce] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Live</p>
      </div>
    </div>
  );
}

function Day5() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">23</p>
    </div>
  );
}

function Day6() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day7() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">17</p>
    </div>
  );
}

function Day8() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day9() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">49</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <Day5 />
      <Day6 />
      <Day7 />
      <Day8 />
      <Day9 />
    </div>
  );
}

function Countdown1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="countdown">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Ending in</p>
      <Frame67 />
    </div>
  );
}

function Tagncount1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tagncount">
      <QuestionTokenLabel1 />
      <Countdown1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] rounded-[4px] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function CategoryLabel7() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel7 />
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat5() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount4 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame39 />
      <AmountFormat5 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame80 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will Jair Messias Bolsonaro be arrested in 2025?</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame84 />
      </div>
    </div>
  );
}

function Amount5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
    </div>
  );
}

function AmountFormat6() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount5 />
    </div>
  );
}

function Amount6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount6 />
    </div>
  );
}

function Amount7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat8() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount7 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat6 />
      <AmountFormat7 />
      <AmountFormat8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame3 />
    </div>
  );
}

function SoftcapBar1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame83 />
      <Frame2 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame77 />
      <Frame82 />
      <SoftcapBar1 />
    </div>
  );
}

function Contentgroup1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image1 />
      <Frame75 />
    </div>
  );
}

function SectionItems2() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat9() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat9 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 106 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.3 5.099e-16 -3.3051e-14 -1.6401 53 36)\\\'><stop stop-color=\\\'rgba(140,157,163,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(198,206,209,0.525)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(105, 82, 254) 0%, rgb(105, 82, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f8fafc] text-[14px] z-[3]">Join Presale</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username1 />
      <Button1 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[248px] items-center justify-between relative shrink-0 w-full" data-name="container">
      <Tagncount1 />
      <Contentgroup1 />
      <SectionItems2 />
      <Footer1 />
    </div>
  );
}

function CardDetail1() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-[256px] min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] min-w-[inherit] p-[16px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <CardDetail />
      <CardDetail1 />
    </div>
  );
}

function QuestionTokenLabel2() {
  return (
    <div className="bg-[#e6f4fe] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d74ce] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Live</p>
      </div>
    </div>
  );
}

function Day10() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">23</p>
    </div>
  );
}

function Day11() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day12() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">17</p>
    </div>
  );
}

function Day13() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day14() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">49</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <Day10 />
      <Day11 />
      <Day12 />
      <Day13 />
      <Day14 />
    </div>
  );
}

function Countdown2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="countdown">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Ending in</p>
      <Frame68 />
    </div>
  );
}

function Tagncount2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tagncount">
      <QuestionTokenLabel2 />
      <Countdown2 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-gradient-to-b from-[#231c09] inset-0 to-[#0043b2]" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function CategoryLabel8() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel8 />
    </div>
  );
}

function Amount8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat10() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount8 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame41 />
      <AmountFormat10 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame88 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will South Korea advance to the Round of 16 at the FIFA World Cup 2026?</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame42 />
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

function Frame91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full z-[1]">
      <div className="bg-[#3e63dd] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[126px]" />
      <div className="bg-[#e93d82] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col gap-[10px] isolate items-start p-[3px] relative size-full">
        <Fire />
        <Frame91 />
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e93d82] text-[12px]">250%</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-[148px] relative">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress:</p>
      <Frame93 />
    </div>
  );
}

function Amount9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">25,000</p>
    </div>
  );
}

function AmountFormat11() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount9 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AmountFormat11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <Frame92 />
      <Frame5 />
    </div>
  );
}

function SoftcapBar2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="softcap bar">
      <Frame90 />
      <Frame4 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame87 />
      <Frame89 />
      <SoftcapBar2 />
    </div>
  );
}

function Contentgroup2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image2 />
      <Frame86 />
    </div>
  );
}

function SectionItems3() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat12 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 106 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.3 5.099e-16 -3.3051e-14 -1.6401 53 36)\\\'><stop stop-color=\\\'rgba(140,157,163,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(198,206,209,0.525)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(105, 82, 254) 0%, rgb(105, 82, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-white z-[3]">Join Presale</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username2 />
      <Button2 />
    </div>
  );
}

function Footer2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[248px] items-center justify-between relative shrink-0 w-full" data-name="container">
      <Tagncount2 />
      <Contentgroup2 />
      <SectionItems3 />
      <Footer2 />
    </div>
  );
}

function CardDetail2() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-[256px] min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] min-w-[inherit] p-[16px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function QuestionTokenLabel3() {
  return (
    <div className="bg-[#e6f4fe] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d74ce] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Live</p>
      </div>
    </div>
  );
}

function Day15() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">23</p>
    </div>
  );
}

function Day16() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day17() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">17</p>
    </div>
  );
}

function Day18() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day19() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">49</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <Day15 />
      <Day16 />
      <Day17 />
      <Day18 />
      <Day19 />
    </div>
  );
}

function Countdown3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="countdown">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Ending in</p>
      <Frame69 />
    </div>
  );
}

function Tagncount3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tagncount">
      <QuestionTokenLabel3 />
      <Countdown3 />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-gradient-to-b from-[#231c09] inset-0 to-[#0043b2]" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function CategoryLabel9() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel9 />
    </div>
  );
}

function Amount10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat13() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount10 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame43 />
      <AmountFormat13 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame96 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will South Korea advance to the Round of 16 at the FIFA World Cup 2026?</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Fire1() {
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

function Frame99() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full z-[1]">
      <div className="bg-[#3e63dd] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[126px]" />
      <div className="bg-[#e93d82] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame98() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col gap-[10px] isolate items-start p-[3px] relative size-full">
        <Fire1 />
        <Frame99 />
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#e93d82] text-[12px]">250%</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-[148px] relative">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress:</p>
      <Frame101 />
    </div>
  );
}

function Amount11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">25,000</p>
    </div>
  );
}

function AmountFormat14() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount11 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <AmountFormat14 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <Frame100 />
      <Frame7 />
    </div>
  );
}

function SoftcapBar3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="softcap bar">
      <Frame98 />
      <Frame6 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame95 />
      <Frame97 />
      <SoftcapBar3 />
    </div>
  );
}

function Contentgroup3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image3 />
      <Frame94 />
    </div>
  );
}

function SectionItems4() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat15() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat15 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 106 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.3 5.099e-16 -3.3051e-14 -1.6401 53 36)\\\'><stop stop-color=\\\'rgba(140,157,163,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(198,206,209,0.525)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(105, 82, 254) 0%, rgb(105, 82, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-white z-[3]">Join Presale</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username3 />
      <Button3 />
    </div>
  );
}

function Footer3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[248px] items-center justify-between relative shrink-0 w-full" data-name="container">
      <Tagncount3 />
      <Contentgroup3 />
      <SectionItems4 />
      <Footer3 />
    </div>
  );
}

function CardDetail3() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-[256px] min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] min-w-[inherit] p-[16px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <CardDetail2 />
      <CardDetail3 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame81 />
      <Frame85 />
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function CategoryLabel10() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel10 />
    </div>
  );
}

function Amount12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat16() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount12 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame45 />
      <AmountFormat16 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame105 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">{`Will Ethereum's market capitalization surpass Bitcoin's at any point in 2025?`}</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame107() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame108 />
      </div>
    </div>
  );
}

function Amount13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
    </div>
  );
}

function AmountFormat17() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount13 />
    </div>
  );
}

function Amount14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat18() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount14 />
    </div>
  );
}

function Amount15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat19() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount15 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat17 />
      <AmountFormat18 />
      <AmountFormat19 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame9 />
    </div>
  );
}

function SoftcapBar4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame107 />
      <Frame8 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame104 />
      <Frame106 />
      <SoftcapBar4 />
    </div>
  );
}

function Contentgroup4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image4 />
      <Frame103 />
    </div>
  );
}

function SectionItems5() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat20() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat20 />
    </div>
  );
}

function QuestionTokenLabel4() {
  return (
    <div className="bg-[#ffefd6] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#cc4e00] text-[12px]">
        <p className="css-ew64yg">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic">Pending</span>
          <span className="leading-[16px]">{` Resolution`}</span>
        </p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username4 />
      <QuestionTokenLabel4 />
    </div>
  );
}

function Footer4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="container">
      <Contentgroup4 />
      <SectionItems5 />
      <Footer4 />
    </div>
  );
}

function CardDetail4() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-px min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-w-[inherit] p-[16px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function CategoryLabel11() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel11 />
    </div>
  );
}

function Amount16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat21() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount16 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame47 />
      <AmountFormat21 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame111 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will the global box office revenue for 2025 exceed $50 billion?</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame48 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame113() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame114 />
      </div>
    </div>
  );
}

function Amount17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
    </div>
  );
}

function AmountFormat22() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount17 />
    </div>
  );
}

function Amount18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat23() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount18 />
    </div>
  );
}

function Amount19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat24() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount19 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat22 />
      <AmountFormat23 />
      <AmountFormat24 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame11 />
    </div>
  );
}

function SoftcapBar5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame113 />
      <Frame10 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame110 />
      <Frame112 />
      <SoftcapBar5 />
    </div>
  );
}

function Contentgroup5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image5 />
      <Frame109 />
    </div>
  );
}

function SectionItems6() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat25() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat25 />
    </div>
  );
}

function QuestionTokenLabel5() {
  return (
    <div className="bg-[#e6f6eb] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#193b2d] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Market Live</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username5 />
      <QuestionTokenLabel5 />
    </div>
  );
}

function Footer5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="container">
      <Contentgroup5 />
      <SectionItems6 />
      <Footer5 />
    </div>
  );
}

function CardDetail5() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-px min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-w-[inherit] p-[16px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <CardDetail4 />
      <CardDetail5 />
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function CategoryLabel12() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel12 />
    </div>
  );
}

function Amount20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat26() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount20 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame49 />
      <AmountFormat26 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame118 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will the United Kingdom formally apply to rejoin the European Union before 2030?</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame120() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame121 />
      </div>
    </div>
  );
}

function Amount21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
    </div>
  );
}

function AmountFormat27() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount21 />
    </div>
  );
}

function Amount22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat28() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount22 />
    </div>
  );
}

function Amount23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat29() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount23 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat27 />
      <AmountFormat28 />
      <AmountFormat29 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame13 />
    </div>
  );
}

function SoftcapBar6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame120 />
      <Frame12 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame117 />
      <Frame119 />
      <SoftcapBar6 />
    </div>
  );
}

function Contentgroup6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image6 />
      <Frame116 />
    </div>
  );
}

function SectionItems7() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat30() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat30 />
    </div>
  );
}

function QuestionTokenLabel6() {
  return (
    <div className="bg-[#e6f6eb] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#193b2d] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Payout Completed</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username6 />
      <QuestionTokenLabel6 />
    </div>
  );
}

function Footer6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="container">
      <Contentgroup6 />
      <SectionItems7 />
      <Footer6 />
    </div>
  );
}

function CardDetail6() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-px min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-w-[inherit] p-[16px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Image7() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage4} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function CategoryLabel13() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel13 />
    </div>
  );
}

function Amount24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat31() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount24 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame51 />
      <AmountFormat31 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame124 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will a manned mission to Mars be successfully launched by any country by 2030?</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame52 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame126() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame127 />
      </div>
    </div>
  );
}

function Amount25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
    </div>
  );
}

function AmountFormat32() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount25 />
    </div>
  );
}

function Amount26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat33() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount26 />
    </div>
  );
}

function Amount27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat34() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount27 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat32 />
      <AmountFormat33 />
      <AmountFormat34 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame15 />
    </div>
  );
}

function SoftcapBar7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame126 />
      <Frame14 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame123 />
      <Frame125 />
      <SoftcapBar7 />
    </div>
  );
}

function Contentgroup7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image7 />
      <Frame122 />
    </div>
  );
}

function SectionItems8() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat35() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat35 />
    </div>
  );
}

function QuestionTokenLabel7() {
  return (
    <div className="bg-[#f2f0e7] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3b352b] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Payout in Progress</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username7 />
      <QuestionTokenLabel7 />
    </div>
  );
}

function Footer7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="container">
      <Contentgroup7 />
      <SectionItems8 />
      <Footer7 />
    </div>
  );
}

function CardDetail7() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-px min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-w-[inherit] p-[16px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <CardDetail6 />
      <CardDetail7 />
    </div>
  );
}

function QuestionTokenLabel8() {
  return (
    <div className="bg-[#e6f4fe] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d74ce] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Live</p>
      </div>
    </div>
  );
}

function Day20() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">23</p>
    </div>
  );
}

function Day21() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day22() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">17</p>
    </div>
  );
}

function Day23() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day24() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">49</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <Day20 />
      <Day21 />
      <Day22 />
      <Day23 />
      <Day24 />
    </div>
  );
}

function Countdown4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="countdown">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Ending in</p>
      <Frame70 />
    </div>
  );
}

function Tagncount4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tagncount">
      <QuestionTokenLabel8 />
      <Countdown4 />
    </div>
  );
}

function Image8() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function CategoryLabel14() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel14 />
    </div>
  );
}

function Amount28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat36() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount28 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame53 />
      <AmountFormat36 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame131 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will the United Kingdom formally apply to rejoin the European Union before 2030?</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame54 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame133() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame134 />
      </div>
    </div>
  );
}

function Amount29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
    </div>
  );
}

function AmountFormat37() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount29 />
    </div>
  );
}

function Amount30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat38() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount30 />
    </div>
  );
}

function Amount31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat39() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount31 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat37 />
      <AmountFormat38 />
      <AmountFormat39 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame17 />
    </div>
  );
}

function SoftcapBar8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame133 />
      <Frame16 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame130 />
      <Frame132 />
      <SoftcapBar8 />
    </div>
  );
}

function Contentgroup8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image8 />
      <Frame129 />
    </div>
  );
}

function SectionItems9() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat40() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat40 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 106 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.3 5.099e-16 -3.3051e-14 -1.6401 53 36)\\\'><stop stop-color=\\\'rgba(140,157,163,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(198,206,209,0.525)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(105, 82, 254) 0%, rgb(105, 82, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-white z-[3]">Join Presale</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username8 />
      <Button4 />
    </div>
  );
}

function Footer8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[248px] items-center justify-between relative shrink-0 w-full" data-name="container">
      <Tagncount4 />
      <Contentgroup8 />
      <SectionItems9 />
      <Footer8 />
    </div>
  );
}

function CardDetail8() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-[256px] min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] min-w-[inherit] p-[16px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function QuestionTokenLabel9() {
  return (
    <div className="bg-[#e6f4fe] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d74ce] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Live</p>
      </div>
    </div>
  );
}

function Day25() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">23</p>
    </div>
  );
}

function Day26() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day27() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">17</p>
    </div>
  );
}

function Day28() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day29() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">49</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <Day25 />
      <Day26 />
      <Day27 />
      <Day28 />
      <Day29 />
    </div>
  );
}

function Countdown5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="countdown">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Ending in</p>
      <Frame71 />
    </div>
  );
}

function Tagncount5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tagncount">
      <QuestionTokenLabel9 />
      <Countdown5 />
    </div>
  );
}

function Image9() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage4} />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function CategoryLabel15() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel15 />
    </div>
  );
}

function Amount32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat41() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount32 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame55 />
      <AmountFormat41 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame137 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will a manned mission to Mars be successfully launched by any country by 2030?</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame139() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame140 />
      </div>
    </div>
  );
}

function Amount33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
    </div>
  );
}

function AmountFormat42() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount33 />
    </div>
  );
}

function Amount34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat43() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount34 />
    </div>
  );
}

function Amount35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat44() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount35 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat42 />
      <AmountFormat43 />
      <AmountFormat44 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame19 />
    </div>
  );
}

function SoftcapBar9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame139 />
      <Frame18 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame136 />
      <Frame138 />
      <SoftcapBar9 />
    </div>
  );
}

function Contentgroup9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image9 />
      <Frame135 />
    </div>
  );
}

function SectionItems10() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="410" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat45() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat45 />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 106 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.3 5.099e-16 -3.3051e-14 -1.6401 53 36)\\\'><stop stop-color=\\\'rgba(140,157,163,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(198,206,209,0.525)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(105, 82, 254) 0%, rgb(105, 82, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-white z-[3]">Join Presale</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username9 />
      <Button5 />
    </div>
  );
}

function Footer9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[248px] items-center justify-between relative shrink-0 w-full" data-name="container">
      <Tagncount5 />
      <Contentgroup9 />
      <SectionItems10 />
      <Footer9 />
    </div>
  );
}

function CardDetail9() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-[256px] min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] min-w-[inherit] p-[16px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <CardDetail8 />
      <CardDetail9 />
    </div>
  );
}

function QuestionTokenLabel10() {
  return (
    <div className="bg-[#e6f4fe] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d74ce] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Live</p>
      </div>
    </div>
  );
}

function Day30() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">23</p>
    </div>
  );
}

function Day31() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day32() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">17</p>
    </div>
  );
}

function Day33() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day34() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">49</p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <Day30 />
      <Day31 />
      <Day32 />
      <Day33 />
      <Day34 />
    </div>
  );
}

function Countdown6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="countdown">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Ending in</p>
      <Frame142 />
    </div>
  );
}

function Tagncount6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tagncount">
      <QuestionTokenLabel10 />
      <Countdown6 />
    </div>
  );
}

function Image10() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function CategoryLabel16() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel16 />
    </div>
  );
}

function Amount36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat46() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount36 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame57 />
      <AmountFormat46 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame145 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will Team Falcons win the Club Championship at the 2025 Esports World Cup?</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame58 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame147() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame151 />
      </div>
    </div>
  );
}

function Amount37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
    </div>
  );
}

function AmountFormat47() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount37 />
    </div>
  );
}

function Amount38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat48() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount38 />
    </div>
  );
}

function Amount39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat49() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount39 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat47 />
      <AmountFormat48 />
      <AmountFormat49 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame21 />
    </div>
  );
}

function SoftcapBar10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame147 />
      <Frame20 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame144 />
      <Frame146 />
      <SoftcapBar10 />
    </div>
  );
}

function Contentgroup10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image10 />
      <Frame143 />
    </div>
  );
}

function SectionItems11() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 412 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="412" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat50() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username10() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat50 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 106 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.3 5.099e-16 -3.3051e-14 -1.6401 53 36)\\\'><stop stop-color=\\\'rgba(140,157,163,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(198,206,209,0.525)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(105, 82, 254) 0%, rgb(105, 82, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-white z-[3]">Join Presale</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username10 />
      <Button6 />
    </div>
  );
}

function Footer10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[248px] items-center justify-between relative shrink-0 w-full" data-name="container">
      <Tagncount6 />
      <Contentgroup10 />
      <SectionItems11 />
      <Footer10 />
    </div>
  );
}

function CardDetail10() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-[256px] min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] min-w-[inherit] p-[16px] relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function QuestionTokenLabel11() {
  return (
    <div className="bg-[#e6f4fe] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d74ce] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Live</p>
      </div>
    </div>
  );
}

function Day35() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">23</p>
    </div>
  );
}

function Day36() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day37() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">17</p>
    </div>
  );
}

function Day38() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 w-[4px]" data-name="day">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5a687d] text-[14px]">:</p>
    </div>
  );
}

function Day39() {
  return (
    <div className="bg-[#fff7ed] content-stretch flex flex-col items-center justify-center px-0 py-[6px] relative rounded-[6px] shrink-0 size-[24px]" data-name="day">
      <div aria-hidden="true" className="absolute border border-[#ffdfb5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#334155] text-[12px]">49</p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <Day35 />
      <Day36 />
      <Day37 />
      <Day38 />
      <Day39 />
    </div>
  );
}

function Countdown7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="countdown">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Ending in</p>
      <Frame152 />
    </div>
  );
}

function Tagncount7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tagncount">
      <QuestionTokenLabel11 />
      <Countdown7 />
    </div>
  );
}

function Image11() {
  return (
    <div className="h-[136px] overflow-clip relative rounded-[6px] shrink-0 w-[82px]" data-name="image">
      <div className="absolute h-[138px] left-[calc(50%+0.4px)] top-[-2px] translate-x-[-50%] w-[102px]" data-name="image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-gradient-to-b from-[#231c09] inset-0 to-[#0043b2]" />
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function CategoryLabel17() {
  return (
    <div className="bg-[#fffefc] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Category Label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">Politics</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <CategoryLabel17 />
    </div>
  );
}

function Amount40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg relative shrink-0">9</p>
      <p className="css-ew64yg relative shrink-0">K</p>
    </div>
  );
}

function AmountFormat51() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-center leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]" data-name="Amount Format">
      <Amount40 />
      <p className="css-ew64yg relative shrink-0">participants</p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame59 />
      <AmountFormat51 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame155 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-start justify-center max-h-[65px] min-h-[56px] relative shrink-0 w-full">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] max-h-[64px] min-h-[56px] min-w-px not-italic overflow-hidden relative self-stretch text-[#020617] text-[14px] text-ellipsis">Will South Korea advance to the Round of 16 at the FIFA World Cup 2026?</p>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame60 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-start min-h-px min-w-px relative w-full">
      <div className="bg-[rgba(0,0,0,0.4)] h-full rounded-bl-[9999px] rounded-tl-[9999px] shrink-0 w-[120px]" />
      <div className="bg-[#f3f3f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-br-[9999px] rounded-tr-[9999px]" />
    </div>
  );
}

function Frame157() {
  return (
    <div className="h-[12px] relative rounded-[9999px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="content-stretch flex flex-col items-start p-[3px] relative size-full">
        <Frame158 />
      </div>
    </div>
  );
}

function Amount41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">6,250</p>
    </div>
  );
}

function AmountFormat52() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount41 />
    </div>
  );
}

function Amount42() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#c7c7c7] text-[12px]">/</p>
    </div>
  );
}

function AmountFormat53() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount42 />
    </div>
  );
}

function Amount43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0f172a] text-[12px]">10,000</p>
    </div>
  );
}

function AmountFormat54() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Amount43 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)]">USDX</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AmountFormat52 />
      <AmountFormat53 />
      <AmountFormat54 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-center flex flex-wrap gap-[2px] items-center justify-between min-w-[148px] relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px]">Softcap progress: 36%</p>
      <Frame23 />
    </div>
  );
}

function SoftcapBar11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="softcap bar">
      <Frame157 />
      <Frame22 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame154 />
      <Frame156 />
      <SoftcapBar11 />
    </div>
  );
}

function Contentgroup11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="contentgroup">
      <Image11 />
      <Frame153 />
    </div>
  );
}

function SectionItems12() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 412 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="412" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountFormat55() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#020617] text-[12px]">@CosmicRay7</p>
    </div>
  );
}

function Username11() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="username">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[12px]">By</p>
      <AmountFormat55 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 106 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-5.3 5.099e-16 -3.3051e-14 -1.6401 53 36)\\\'><stop stop-color=\\\'rgba(140,157,163,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(198,206,209,0.525)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(105, 82, 254) 0%, rgb(105, 82, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-white z-[3]">Join Presale</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="content">
      <Username11 />
      <Button7 />
    </div>
  );
}

function Footer11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center min-w-[240px] relative shrink-0 w-full" data-name="footer">
      <Content13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[248px] items-center justify-between relative shrink-0 w-full" data-name="container">
      <Tagncount7 />
      <Contentgroup11 />
      <SectionItems12 />
      <Footer11 />
    </div>
  );
}

function CardDetail11() {
  return (
    <div className="bg-[rgba(255,254,252,0.5)] flex-[1_0_0] min-h-[256px] min-w-[320px] relative rounded-[12px]" data-name="Card detail">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center min-h-[inherit] min-w-[inherit] p-[16px] relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <CardDetail10 />
      <CardDetail11 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame102 />
      <Frame115 />
      <Frame128 />
      <Frame141 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame148 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame149 />
      <Frame150 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1832px] items-start relative shrink-0 w-[900px]">
      <BlockHeader />
      <Frame31 />
      <Frame28 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[21.57%_-3.33%_11.07%_16.93%]">
      <div className="absolute inset-[21.57%_15.7%_11.07%_16.93%]" data-name="Blur Ellipse">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.8421 80.8421">
          <circle cx="40.4211" cy="40.4211" data-figma-bg-blur-radius="24" fill="var(--fill-0, #D7D7EE)" fillOpacity="0.3" id="Blur Ellipse" r="40.4211" />
          <defs>
            <clipPath id="bgblur_0_652_15403_clip_path" transform="translate(24 24)">
              <circle cx="40.4211" cy="40.4211" r="40.4211" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[24.28%_-3.33%_33.51%_61.12%] items-center justify-center">
        <div className="flex-none rotate-[334.426deg] size-[37.978px]">
          <div className="relative size-full" data-name="rocket">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRocket} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-11.86%_-24.89%_-35.46%_-24.84%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.355 124.217">
          <g id="Group 3950">
            <g id="Group 3952">
              <path d={svgPaths.p21d20770} fill="var(--fill-0, #0797B9)" id="Vector" stroke="var(--stroke-0, #0797B9)" strokeWidth="1.5" />
              <g data-figma-bg-blur-radius="16" filter="url(#filter0_d_652_15411)" id="Vector_2">
                <path d={svgPaths.p1c8dd600} fill="url(#paint0_linear_652_15411)" fillOpacity="0.6" shapeRendering="crispEdges" />
              </g>
            </g>
            <g id="Group 3951">
              <path d={svgPaths.p2bf0f80} fill="var(--fill-0, #0588F0)" id="Vector_3" stroke="var(--stroke-0, #0588F0)" strokeWidth="1.5" />
              <g data-figma-bg-blur-radius="16" filter="url(#filter1_d_652_15411)" id="Vector_4">
                <path d={svgPaths.p27edd1f0} fill="url(#paint1_linear_652_15411)" fillOpacity="0.6" shapeRendering="crispEdges" />
              </g>
              <path d={svgPaths.p1e58f780} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="1.5" />
            </g>
            <path d={svgPaths.p11a59cc0} fill="var(--fill-0, #3358D4)" id="Vector_6" stroke="var(--stroke-0, #3358D4)" strokeWidth="1.5" />
            <g data-figma-bg-blur-radius="16" filter="url(#filter2_d_652_15411)" id="Vector_7">
              <path d={svgPaths.pb9cd000} fill="url(#paint2_linear_652_15411)" fillOpacity="0.6" shapeRendering="crispEdges" />
            </g>
            <g clipPath="url(#clip3_652_15411)" id="chart-line">
              <path d={svgPaths.p134f4300} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2" />
              <path d={svgPaths.p1f29f7e0} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="100.467" id="filter0_d_652_15411" width="127.674" x="0.129976" y="23.7496">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="14" />
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.411503 0 0 0 0 0.321569 0 0 0 0 0.996078 0 0 0 0.16 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_652_15411" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_652_15411" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_0_652_15411_clip_path" transform="translate(-0.129976 -23.7496)">
              <path d={svgPaths.p1c8dd600} />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="100.403" id="filter1_d_652_15411" width="128.355" x="2.38419e-07" y="11.079">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="14" />
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.411503 0 0 0 0 0.321569 0 0 0 0 0.996078 0 0 0 0.16 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_652_15411" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_652_15411" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_1_652_15411_clip_path" transform="translate(-2.38419e-07 -11.079)">
              <path d={svgPaths.p27edd1f0} />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="98.9543" id="filter2_d_652_15411" width="126.121" x="1.4898" y="-6">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="14" />
              <feGaussianBlur stdDeviation="12" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.411503 0 0 0 0 0.321569 0 0 0 0 0.996078 0 0 0 0.16 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_652_15411" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_652_15411" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_2_652_15411_clip_path" transform="translate(-1.4898 6)">
              <path d={svgPaths.pb9cd000} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_652_15411" x1="61.1811" x2="66.6564" y1="39.9516" y2="85.176">
              <stop stopColor="#F1F5F9" />
              <stop offset="1" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_652_15411" x1="64.1777" x2="64.1777" y1="27.079" y2="72.6336">
              <stop stopColor="#F1F5F9" />
              <stop offset="1" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_652_15411" x1="64.5503" x2="64.5503" y1="10" y2="54.132">
              <stop stopColor="#F1F5F9" />
              <stop offset="1" stopColor="#E2E8F0" />
            </linearGradient>
            <clipPath id="clip3_652_15411">
              <rect fill="white" height="38.5784" transform="matrix(0.967718 -0.252034 0.702127 0.712052 32.2388 23.7054)" width="38.5784" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Presale1() {
  return (
    <div className="absolute contents inset-[12.5%_-3.33%_5.29%_0.42%]" data-name="Presale">
      <Group />
      <div className="absolute flex inset-[12.5%_16.44%_5.29%_0.42%] items-center justify-center">
        <div className="flex-none h-[84.324px] rotate-[10.598deg] w-[85.723px]">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Frame160() {
  return (
    <div className="relative shrink-0 size-[120px]">
      <Presale1 />
    </div>
  );
}

function StatusCardHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Status Card Header">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-full">Create Your Market</p>
    </div>
  );
}

function StatusCardContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Status Card Content">
      <StatusCardHeader />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#334155] text-[14px] w-full">Turn your ideas and insights into earnings, launch a prediction market and unlock rewards.</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative z-[2]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="plus">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 3.75V14.25" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px] z-[3]" data-name="Icon">
      <Plus />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 180 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.30000001192092896\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-9 5.6655e-16 -5.6124e-14 -1.8223 90 40)\\\'><stop stop-color=\\\'rgba(167,187,194,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(235, 242, 245) 0%, rgb(235, 242, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Icon3 />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] z-[2]">Create new market</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <StatusCardContent />
      <Button8 />
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame160 />
      <Frame25 />
    </div>
  );
}

function SectionItems13() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="320" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[4px] py-0 relative rounded-[8px] shrink-0" data-name="button">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0d74ce] text-[14px]">How does the presale market work?</p>
    </div>
  );
}

function Presale() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] max-w-[720px] relative rounded-[12px] shrink-0 w-full" data-name="Presale">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center max-w-[inherit] pb-[16px] pt-[24px] px-[20px] relative w-full">
          <Frame159 />
          <SectionItems13 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Mark() {
  return (
    <div className="absolute contents inset-[30.83%_20.83%_30.43%_20.83%]" data-name="mark">
      <div className="absolute inset-[46.1%_45.93%_45.77%_45.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.62554 1.62506">
          <path d={svgPaths.p2aceeb00} fill="var(--fill-0, #51CEB6)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.83%_53.98%_37.49%_20.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.03732 6.33454">
          <path d={svgPaths.p17ebe800} fill="var(--fill-0, #96EDE0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.9%_20.83%_30.43%_53.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.03733 6.33454">
          <path d={svgPaths.p3152c700} fill="var(--fill-0, #51CEB6)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Xef() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#0d9b8a] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="xef">
      <Mark />
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <Xef />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[16px]">0</p>
    </div>
  );
}

function AmountFormat56() {
  return (
    <div className="content-stretch flex gap-[2px] h-[28px] items-center relative shrink-0 w-[181px]" data-name="Amount Format">
      <Icon4 />
      <Amount44 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)]" style={{ fontFeatureSettings: "'case', 'lnum', 'tnum'" }}>
        XEF
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px]">Stake:</p>
      <AmountFormat56 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 62 40\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.30000001192092896\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-3.1 5.6655e-16 -1.9332e-14 -1.8223 31 40)\\\'><stop stop-color=\\\'rgba(167,187,194,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(235, 242, 245) 0%, rgb(235, 242, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] z-[2]">Stake</p>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame26 />
      <Button10 />
    </div>
  );
}

function SectionItems14() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StatusCardHeader1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Status Card Header">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#858585] text-[14px] w-full">Your remaining questions:</p>
    </div>
  );
}

function InfoSolid() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px overflow-clip relative z-[2]" data-name="info-solid">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-4.2%]" style={{ "--fill-0": "rgba(90, 104, 125, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0667 18.0667">
            <path d={svgPaths.p3fdf2780} fill="var(--fill-0, #5A687D)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-1/2 right-[45.83%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-14%_16%_-14%_-84%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.4 6.4">
            <path d="M0.7 5.7V0.7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.7px]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40833 1.4">
            <path d="M0.7 0.7H0.708334" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex isolate items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Icon">
      <InfoSolid />
      <div className="absolute bg-white left-1/2 opacity-0 rounded-[6px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-between leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[14px] w-full">
      <p className="css-ew64yg relative shrink-0">Total Quota:</p>
      <p className="css-ew64yg relative shrink-0">3</p>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-between leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[14px] w-full">
      <p className="css-ew64yg relative shrink-0">Already Created:</p>
      <p className="css-ew64yg relative shrink-0">2</p>
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-between leading-[20px] not-italic relative shrink-0 text-[#5a687d] text-[14px] w-full">
      <p className="css-ew64yg relative shrink-0">Remaining Questions:</p>
      <p className="css-ew64yg relative shrink-0">1</p>
    </div>
  );
}

function Tooltips() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-center px-[12px] py-[16px] right-0 rounded-[8px] top-[-103px] w-[190px]" data-name="tooltips">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.08),0px_2px_4px_-2px_rgba(0,0,0,0.04)]" />
      <Frame164 />
      <Frame165 />
      <Frame166 />
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#334155] text-[20px] tracking-[-0.1px]">
        <span className="leading-[28px]">2</span>
        <span className="leading-[28px] text-[#5a687d]">/3</span>
      </p>
      <Icon5 />
      <Tooltips />
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <StatusCardHeader1 />
      <Frame163 />
    </div>
  );
}

function StatusCardContent1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Status Card Content">
      <Frame162 />
    </div>
  );
}

function SectionItems15() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-[4px] py-0 relative rounded-[8px] shrink-0" data-name="button">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0d74ce] text-[14px]">How does the presale market work?</p>
    </div>
  );
}

function SectionItems16() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Usdx() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="usdx">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(105, 82, 254, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="usdx">
            <g clipPath="url(#clip0_652_15433)">
              <path d={svgPaths.p3aa02200} fill="var(--fill-0, #6952FE)" />
              <path d={svgPaths.p24e88d30} fill="url(#paint0_radial_652_15433)" id="bg 1" />
              <g id="Vector">
                <path d={svgPaths.p328bdc00} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3c95a080} fill="var(--fill-0, white)" />
                <path d={svgPaths.p24f9f600} fill="var(--fill-0, white)" />
              </g>
            </g>
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(10.0038 9.99991) scale(10.0001 10.0001)" gradientUnits="userSpaceOnUse" id="paint0_radial_652_15433" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
            <clipPath id="clip0_652_15433">
              <path d={svgPaths.p3aa02200} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="mr-[-6px] relative rounded-[16777200px] shrink-0 size-[24px] z-[2]" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(250, 250, 250) 100%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Usdx />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Xef1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="xef">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(13, 155, 138, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="xef">
            <path d={svgPaths.p3aa02200} fill="var(--fill-0, #0D9B8A)" />
            <g id="mark">
              <path d={svgPaths.p36b96a00} fill="var(--fill-0, #51CEB6)" id="Vector" />
              <path d={svgPaths.pd3499b0} fill="var(--fill-0, #96EDE0)" id="Vector_2" />
              <path d={svgPaths.p3f028b00} fill="var(--fill-0, #51CEB6)" id="Vector_3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-6px] p-px relative rounded-[16777200px] shrink-0 size-[24px] z-[1]" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(250, 250, 250) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[16777200px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]" />
      <Xef1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[28px] isolate items-center pl-0 pr-[6px] py-0 relative shrink-0" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Container13 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[16px]">Buy XEF</p>
    </div>
  );
}

function WalletInfoContainer() {
  return (
    <div className="content-stretch flex flex-col h-[28px] items-start relative shrink-0 w-[160px]" data-name="Wallet Info Container">
      <Frame169 />
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 80 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.30000001192092896\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-4 5.099e-16 -2.4944e-14 -1.6401 40 36)\\\'><stop stop-color=\\\'rgba(167,187,194,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(235, 242, 245) 0%, rgb(235, 242, 245) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px] z-[2]">Buy XEF</p>
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <WalletInfoContainer />
      <Button12 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame168 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[24px] relative w-full">
          <Frame161 />
          <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#525252] text-[0px] text-[14px] w-[min-content]">
            <li className="css-4hzbpn mb-[6px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[20px]">{`Stake `}</span>
              <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">100 XEF</span>
              <span className="leading-[20px]">{` to create `}</span>
              <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">1 market.</span>
            </li>
            <li className="css-4hzbpn ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
              <span className="leading-[20px]">{`Stake `}</span>
              <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">10,000 XEF</span>
              <span className="leading-[20px]">{` to create `}</span>
              <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">unlimited markets.</span>
            </li>
          </ul>
          <SectionItems14 />
          <StatusCardContent1 />
          <SectionItems15 />
          <Button11 />
          <SectionItems16 />
          <Frame167 />
        </div>
      </div>
    </div>
  );
}

function Staking() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Staking">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#334155] text-[20px] tracking-[-0.1px] w-full">Staking</p>
      <Frame24 />
    </div>
  );
}

function MarketParticipantCount() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Market Participant Count">
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#858585] text-[14px] w-[min-content]">Market created</p>
      <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#0f172a] text-[16px]">4</p>
    </div>
  );
}

function MarketParticipantCount1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Market Participant Count">
      <p className="css-4hzbpn leading-[20px] min-w-full relative shrink-0 text-[#858585] text-[14px] w-[min-content]">Market invested</p>
      <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#0f172a] text-[16px]">6</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[20px] items-start not-italic px-0 py-[4px] relative shrink-0 w-full">
      <MarketParticipantCount />
      <MarketParticipantCount1 />
    </div>
  );
}

function SectionItems17() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="320" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TotalInvestment() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic px-0 py-[4px] relative shrink-0 w-[176px]" data-name="Total Investment">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#858585] text-[14px] w-full">Total trading fees earned</p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] w-full">$4,000</p>
    </div>
  );
}

function SectionItems18() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="320" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CommissionEarned() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic px-0 py-[4px] relative shrink-0 w-full" data-name="Commission Earned">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#858585] text-[14px] w-full">Total invested</p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] w-full">$1,180</p>
    </div>
  );
}

function SectionItems19() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="320" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TotalEarnings() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic px-0 py-[4px] relative shrink-0 w-full" data-name="Total Earnings">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#858585] text-[14px] w-full">Total revenue earned</p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#0f172a] text-[20px] w-full">$12,500</p>
    </div>
  );
}

function OverviewDetails() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[12px] shrink-0 w-full" data-name="Overview Details">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[20px] py-[16px] relative w-full">
          <Frame29 />
          <SectionItems17 />
          <TotalInvestment />
          <SectionItems18 />
          <CommissionEarned />
          <SectionItems19 />
          <TotalEarnings />
        </div>
      </div>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#334155] text-[20px] tracking-[-0.1px] w-full">Statistics</p>
      <OverviewDetails />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#1e293b] text-[20px] tracking-[-0.1px]">Payout history</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="content">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#3358d4] text-[14px]">Trading fees share</p>
    </div>
  );
}

function TabUnderline() {
  return (
    <div className="content-stretch flex flex-col items-center p-[4px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0" data-name="tab underline">
      <Content14 />
      <div className="absolute bg-[#3358d4] bottom-0 h-[3px] left-[7.02%] right-[7.02%] rounded-tl-[4px] rounded-tr-[4px]" />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <TabUnderline />
    </div>
  );
}

function SectionItems20() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame65 />
      <SectionItems20 />
    </div>
  );
}

function Usdx1() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#6952fe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="usdx">
      <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute aspect-[10.31601619720459/14] left-[29.17%] right-[27.85%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g id="Vector">
              <path d={svgPaths.p31b83100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p373feec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b30c8c0} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Usdx1 />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">568</p>
    </div>
  );
}

function AmountFormat57() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Icon6 />
      <Amount45 />
    </div>
  );
}

function TimestampFormat() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[14px]" data-name="Timestamp Format">
      <p className="css-ew64yg relative shrink-0 text-[#525252]">21:44:09</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(0,0,0,0.15)]">-</p>
      <p className="css-ew64yg relative shrink-0 text-[#525252]">18 Sep, 2025</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <AmountFormat57 />
      <TimestampFormat />
    </div>
  );
}

function RowPresaleHistory() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="row presale history">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[10px] relative w-full">
          <Frame61 />
        </div>
      </div>
    </div>
  );
}

function SectionItems21() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Usdx2() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#6952fe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="usdx">
      <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute aspect-[10.31601619720459/14] left-[29.17%] right-[27.85%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g id="Vector">
              <path d={svgPaths.p31b83100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p373feec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b30c8c0} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Usdx2 />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">1,861</p>
    </div>
  );
}

function AmountFormat58() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Icon7 />
      <Amount46 />
    </div>
  );
}

function TimestampFormat1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[14px]" data-name="Timestamp Format">
      <p className="css-ew64yg relative shrink-0 text-[#525252]">13:22:56</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(0,0,0,0.15)]">-</p>
      <p className="css-ew64yg relative shrink-0 text-[#525252]">31 Jun, 2025</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <AmountFormat58 />
      <TimestampFormat1 />
    </div>
  );
}

function RowPresaleHistory1() {
  return (
    <div className="bg-[rgba(0,0,0,0.06)] relative rounded-[8px] shrink-0 w-full" data-name="row presale history">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[10px] relative w-full">
          <Frame62 />
        </div>
      </div>
    </div>
  );
}

function SectionItems22() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Usdx3() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#6952fe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="usdx">
      <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute aspect-[10.31601619720459/14] left-[29.17%] right-[27.85%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g id="Vector">
              <path d={svgPaths.p31b83100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p373feec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b30c8c0} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Usdx3 />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">1,394</p>
    </div>
  );
}

function AmountFormat59() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Icon8 />
      <Amount47 />
    </div>
  );
}

function TimestampFormat2() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[14px]" data-name="Timestamp Format">
      <p className="css-ew64yg relative shrink-0 text-[#525252]">08:15:33</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(0,0,0,0.15)]">-</p>
      <p className="css-ew64yg relative shrink-0 text-[#525252]">15 Sep, 2025</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <AmountFormat59 />
      <TimestampFormat2 />
    </div>
  );
}

function RowPresaleHistory2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="row presale history">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[10px] relative w-full">
          <Frame63 />
        </div>
      </div>
    </div>
  );
}

function SectionItems23() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Usdx4() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#6952fe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="usdx">
      <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute aspect-[10.31601619720459/14] left-[29.17%] right-[27.85%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g id="Vector">
              <path d={svgPaths.p31b83100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p373feec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b30c8c0} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Usdx4 />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount48() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">1,702</p>
    </div>
  );
}

function AmountFormat60() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Icon9 />
      <Amount48 />
    </div>
  );
}

function TimestampFormat3() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[14px]" data-name="Timestamp Format">
      <p className="css-ew64yg relative shrink-0 text-[#525252]">04:59:12</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(0,0,0,0.15)]">-</p>
      <p className="css-ew64yg relative shrink-0 text-[#525252]">15 Sep, 2025</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <AmountFormat60 />
      <TimestampFormat3 />
    </div>
  );
}

function RowPresaleHistory3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="row presale history">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[10px] relative w-full">
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

function SectionItems24() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Usdx5() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#6952fe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="usdx">
      <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute aspect-[10.31601619720459/14] left-[29.17%] right-[27.85%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g id="Vector">
              <path d={svgPaths.p31b83100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p373feec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b30c8c0} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Usdx5 />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">1,976</p>
    </div>
  );
}

function AmountFormat61() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Icon10 />
      <Amount49 />
    </div>
  );
}

function TimestampFormat4() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[14px]" data-name="Timestamp Format">
      <p className="css-ew64yg relative shrink-0 text-[#525252]">19:01:48</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(0,0,0,0.15)]">-</p>
      <p className="css-ew64yg relative shrink-0 text-[#525252]">02 Sep, 2025</p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <AmountFormat61 />
      <TimestampFormat4 />
    </div>
  );
}

function RowPresaleHistory4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="row presale history">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[10px] relative w-full">
          <Frame172 />
        </div>
      </div>
    </div>
  );
}

function SectionItems25() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Usdx6() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#6952fe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="usdx">
      <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute aspect-[10.31601619720459/14] left-[29.17%] right-[27.85%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g id="Vector">
              <path d={svgPaths.p31b83100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p373feec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b30c8c0} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Usdx6 />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">4,268</p>
    </div>
  );
}

function AmountFormat62() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Icon11 />
      <Amount50 />
    </div>
  );
}

function TimestampFormat5() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[14px]" data-name="Timestamp Format">
      <p className="css-ew64yg relative shrink-0 text-[#525252]">23:10:05</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(0,0,0,0.15)]">-</p>
      <p className="css-ew64yg relative shrink-0 text-[#525252]">29 Aug, 2025</p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <AmountFormat62 />
      <TimestampFormat5 />
    </div>
  );
}

function RowPresaleHistory5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="row presale history">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[10px] relative w-full">
          <Frame173 />
        </div>
      </div>
    </div>
  );
}

function SectionItems26() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Usdx7() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#6952fe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="usdx">
      <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute aspect-[10.31601619720459/14] left-[29.17%] right-[27.85%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g id="Vector">
              <path d={svgPaths.p31b83100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p373feec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b30c8c0} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Usdx7 />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">3,269</p>
    </div>
  );
}

function AmountFormat63() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Icon12 />
      <Amount51 />
    </div>
  );
}

function TimestampFormat6() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[14px]" data-name="Timestamp Format">
      <p className="css-ew64yg relative shrink-0 text-[#525252]">12:25:47</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(0,0,0,0.15)]">-</p>
      <p className="css-ew64yg relative shrink-0 text-[#525252]">27 Aug, 2025</p>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <AmountFormat63 />
      <TimestampFormat6 />
    </div>
  );
}

function RowPresaleHistory6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="row presale history">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[10px] relative w-full">
          <Frame174 />
        </div>
      </div>
    </div>
  );
}

function SectionItems27() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Usdx8() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#6952fe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="usdx">
      <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute aspect-[10.31601619720459/14] left-[29.17%] right-[27.85%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g id="Vector">
              <path d={svgPaths.p31b83100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p373feec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b30c8c0} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Usdx8 />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount52() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">1,551</p>
    </div>
  );
}

function AmountFormat64() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Icon13 />
      <Amount52 />
    </div>
  );
}

function TimestampFormat7() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[14px]" data-name="Timestamp Format">
      <p className="css-ew64yg relative shrink-0 text-[#525252]">12:25:47</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(0,0,0,0.15)]">-</p>
      <p className="css-ew64yg relative shrink-0 text-[#525252]">31 Jun, 2025</p>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <AmountFormat64 />
      <TimestampFormat7 />
    </div>
  );
}

function RowPresaleHistory7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="row presale history">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[10px] relative w-full">
          <Frame175 />
        </div>
      </div>
    </div>
  );
}

function SectionItems28() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Usdx9() {
  return (
    <div className="aspect-[58.66999816894531/58.66999816894531] bg-[#6952fe] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[9999px] z-[2]" data-name="usdx">
      <div className="absolute aspect-[24/24] left-0 right-0 top-1/2 translate-y-[-50%]" data-name="bg 1">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p1fb64680} fill="url(#paint0_radial_608_2617)" id="bg 1" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(9.00343 8.99992) scale(9.0001 9.00006)" gradientUnits="userSpaceOnUse" id="paint0_radial_608_2617" r="1">
              <stop offset="0.1358" stopColor="#646464" />
              <stop offset="0.7046" stopColor="#484848" />
              <stop offset="0.7248" stopColor="#434343" />
              <stop offset="0.7498" stopColor="#333333" />
              <stop offset="0.7623" stopColor="#292929" />
              <stop offset="0.7778" stopColor="#4A4A4A" />
              <stop offset="0.8078" stopColor="#515151" />
              <stop offset="0.8125" stopColor="#515151" />
              <stop offset="0.9109" stopColor="#4A4A4A" />
              <stop offset="0.949" stopColor="#494949" />
              <stop offset="0.9599" stopColor="#535353" />
              <stop offset="0.9806" stopColor="#606060" />
              <stop offset="1" stopColor="#646464" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute aspect-[10.31601619720459/14] left-[29.17%] right-[27.85%] top-1/2 translate-y-[-50%]" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73701 10.5">
            <g id="Vector">
              <path d={svgPaths.p31b83100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p373feec0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b30c8c0} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center p-px relative shrink-0 size-[20px]" data-name="Icon">
      <Usdx9 />
      <div className="absolute bg-[rgba(0,0,0,0.06)] left-1/2 opacity-0 rounded-[24px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]" data-name="hover" />
    </div>
  );
}

function Amount53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[14px]">5,663</p>
    </div>
  );
}

function AmountFormat65() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Amount Format">
      <Icon14 />
      <Amount53 />
    </div>
  );
}

function TimestampFormat8() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[14px]" data-name="Timestamp Format">
      <p className="css-ew64yg relative shrink-0 text-[#525252]">12:25:47</p>
      <p className="css-ew64yg relative shrink-0 text-[rgba(0,0,0,0.15)]">-</p>
      <p className="css-ew64yg relative shrink-0 text-[#525252]">31 Jun, 2025</p>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <AmountFormat65 />
      <TimestampFormat8 />
    </div>
  );
}

function RowPresaleHistory8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="row presale history">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[10px] relative w-full">
          <Frame176 />
        </div>
      </div>
    </div>
  );
}

function SectionItems29() {
  return (
    <div className="content-stretch flex flex-col h-0 items-center justify-center relative shrink-0 w-full" data-name="section items">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeOpacity="0.06" x2="328" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <RowPresaleHistory />
      <SectionItems21 />
      <RowPresaleHistory1 />
      <SectionItems22 />
      <RowPresaleHistory2 />
      <SectionItems23 />
      <RowPresaleHistory3 />
      <SectionItems24 />
      <RowPresaleHistory4 />
      <SectionItems25 />
      <RowPresaleHistory5 />
      <SectionItems26 />
      <RowPresaleHistory6 />
      <SectionItems27 />
      <RowPresaleHistory7 />
      <SectionItems28 />
      <RowPresaleHistory8 />
      <SectionItems29 />
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 95 36\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.20000000298023224\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-4.75 5.099e-16 -2.9621e-14 -1.6401 47.5 36)\\\'><stop stop-color=\\\'rgba(167,187,194,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,255,255,0.05)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#020617] text-[14px] z-[2]">Load more</p>
    </div>
  );
}

function BuySellBlock() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] min-h-[360px] relative rounded-[12px] shrink-0 w-full" data-name="buy sell block">
      <div className="flex flex-col items-end justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end justify-center min-h-[inherit] pb-[16px] pt-[8px] px-[16px] relative w-full">
          <Frame171 />
          <Frame36 />
          <Button13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-[-1px] pointer-events-none rounded-[13px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function OpenOrders() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start min-h-[360px] relative shrink-0 w-full" data-name="Open Orders">
      <Frame35 />
      <BuySellBlock />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start justify-center relative shrink-0 w-[360px]">
      <Presale />
      <Staking />
      <Frame170 />
      <OpenOrders />
    </div>
  );
}

function OverviewContainer() {
  return (
    <div className="content-stretch flex gap-[28px] items-start min-w-[1040px] relative shrink-0 w-[1296px]" data-name="Overview Container">
      <Frame32 />
      <Frame30 />
    </div>
  );
}

export default function ProfileContainer() {
  return (
    <div className="content-stretch flex flex-col items-center px-[36px] py-[56px] relative rounded-[12px] size-full" data-name="Profile Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1426 1996\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.800000011920929\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-2.707e-13 -206.67 509.16 0.000030147 1426 2066.7)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(241,243,243,1)\\\' offset=\\\'0.44818\\\'/><stop stop-color=\\\'rgba(255,254,252,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(244, 242, 244) 0%, rgb(244, 242, 244) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <OverviewContainer />
    </div>
  );
}