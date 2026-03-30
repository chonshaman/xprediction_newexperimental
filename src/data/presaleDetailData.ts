// Mock data for Presale Detail Page

export const mockPresaleDetail = {
  marketId: '93923481212',
  question: 'Will Solana (SOL) Surpass $250 by December 2025?',
  category: 'Politics',
  softcapProgress: 100,
  raised: '10,000',
  total: '10,000',
  endDate: new Date(Date.now() + 17 * 60 * 60 * 1000 + 29 * 60 * 1000 + 21 * 1000), // 17:29:21 from now
  createdBy: 'Username',
  createdDate: 'March 28, 2025',
  contractAddress: '0x4BFC...D12A',
  marketType: 'Yes/No' as const,
  status: 'Presale Live',
  statusColor: 'blue' as const,
  resolutionDate: 'May 31, 2025(3 days left)',
  resolutionCriteria: "This market will resolve to 'Yes' if the Los Angeles Lakers win the NBA Championship in the 2025-2026 season. Otherwise, it will resolve to 'No'.",
  
  participants: [
    {
      id: '1',
      name: 'John Doe',
      initials: 'JD',
      color: '#8145b5',
      amount: '300',
    },
    {
      id: '2',
      name: 'John Doe',
      initials: 'CN',
      color: '#F4C430',
      amount: '300',
    },
    {
      id: '3',
      name: 'John Doe',
      initials: 'CN',
      color: '#F4C430',
      amount: '300',
    },
    {
      id: '4',
      name: 'John Doe',
      initials: 'AM',
      color: '#16433c',
      amount: '300',
    },
    {
      id: '5',
      name: 'Jane Smith',
      initials: 'JS',
      color: '#FF6B6B',
      amount: '250',
    },
  ],
  
  comments: [
    {
      id: '1',
      author: 'John Doe',
      authorInitials: 'JD',
      authorColor: '#8145b5',
      content: 'Why do I keep hearing the sovereigist side talking about vote fraud? Almost every person I meet who is pro-GS tells me they will make "dead people vote" and that ND will win. What\'s with the sudden change? They were so sure they would win not long ago.',
      timestamp: '12:25:47',
      date: '31 Jun, 2025',
      likes: 9,
      replies: 0,
      link: 'https://x.com/YUPLAY_CoM/status/1942216282018288889/photo/1',
    },
  ],
};
