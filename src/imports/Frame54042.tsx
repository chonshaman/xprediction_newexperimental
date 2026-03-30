function QuestionTokenLabel() {
  return (
    <div className="absolute bg-[#e6f4fe] content-stretch flex items-center left-[77px] px-[12px] py-[4px] rounded-[9999px] top-[72px]" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d74ce] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Live</p>
      </div>
    </div>
  );
}

function QuestionTokenLabel1() {
  return (
    <div className="absolute bg-[#feebec] content-stretch flex items-center left-[189px] px-[12px] py-[4px] rounded-[9999px] top-[72px]" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ce2c31] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Presale Unsuccessful</p>
      </div>
    </div>
  );
}

function QuestionTokenLabel2() {
  return (
    <div className="absolute bg-[#e6f6eb] content-stretch flex items-center left-[357px] px-[12px] py-[4px] rounded-[9999px] top-[72px]" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#193b2d] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Market Live</p>
      </div>
    </div>
  );
}

function QuestionTokenLabel3() {
  return (
    <div className="absolute bg-[#ffefd6] content-stretch flex items-center left-[467px] px-[12px] py-[4px] rounded-[9999px] top-[72px]" data-name="Question token label">
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

function QuestionTokenLabel4() {
  return (
    <div className="absolute bg-[#f2f0e7] content-stretch flex items-center left-[621px] px-[12px] py-[4px] rounded-[9999px] top-[72px]" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3b352b] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Payout in Progress</p>
      </div>
    </div>
  );
}

function QuestionTokenLabel5() {
  return (
    <div className="absolute bg-[#e6f6eb] content-stretch flex items-center left-[772px] px-[12px] py-[4px] rounded-[9999px] top-[72px]" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#193b2d] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Payout Completed</p>
      </div>
    </div>
  );
}

function QuestionTokenLabel6() {
  return (
    <div className="absolute bg-[#f2f0e7] content-stretch flex items-center left-[921px] px-[12px] py-[4px] rounded-[9999px] top-[72px]" data-name="Question token label">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.06)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3b352b] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Resolved</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <QuestionTokenLabel />
      <QuestionTokenLabel1 />
      <QuestionTokenLabel2 />
      <QuestionTokenLabel3 />
      <QuestionTokenLabel4 />
      <QuestionTokenLabel5 />
      <QuestionTokenLabel6 />
    </div>
  );
}