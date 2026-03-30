function StatusLabel() {
  return (
    <div className="bg-[#3e63dd] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Status label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white">
        <p className="css-ew64yg leading-[24px]">All</p>
      </div>
    </div>
  );
}

function StatusLabel1() {
  return (
    <div className="bg-[#fffefc] content-stretch flex gap-[4px] h-full items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Status label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#353b3d] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">My Created</p>
      </div>
    </div>
  );
}

function StatusLabel2() {
  return (
    <div className="bg-[#fffefc] content-stretch flex gap-[4px] h-full items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Status label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#353b3d] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">My Invested</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative size-full">
      <StatusLabel />
      <div className="flex flex-row items-center self-stretch">
        <StatusLabel1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <StatusLabel2 />
      </div>
    </div>
  );
}