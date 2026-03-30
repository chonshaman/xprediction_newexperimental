function Container() {
  return (
    <div className="relative shrink-0 w-[100.759px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px]">🗳️ Cabinet Resign</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['JetBrains_Mono:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#caff7a] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">56%</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#caff7a] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">↑</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[100.763px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.002px] items-center relative w-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

export default function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.06)] relative rounded-[12px] size-full" data-name="Overlay+Border+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[3.995px] items-start overflow-clip pb-[17px] pt-[16.252px] px-[17px] relative rounded-[inherit] size-full">
        <Container />
        <Container1 />
        <div className="absolute inset-[0.99px_1.01px_1px_0.99px] opacity-0" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 132.76 79.251\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(9.3876 0 0 5.6039 66.38 39.626)\'><stop stop-color=\'rgba(137,87,255,0.15)\' offset=\'0\'/><stop stop-color=\'rgba(137,87,255,0)\' offset=\'0.7\'/></radialGradient></defs></svg>')" }} />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}