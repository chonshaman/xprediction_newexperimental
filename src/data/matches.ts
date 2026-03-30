// Mock match data for sports betting markets
export interface MatchTeam {
  name: string;
  code: string;
  flag: string;
  color?: string;
}

export interface Match {
  id: number;
  time: string;
  date: string;
  volume: string;
  team1: MatchTeam;
  team2: MatchTeam;
  odds: {
    team1: string;
    draw: string;
    team2: string;
  };
  category: string; // For filtering
}

export const allMatches: Match[] = [
  // Premier League
  {
    id: 1,
    time: '23:00',
    date: 'Sat, Nov 22',
    volume: '308.59K',
    team1: { name: 'Arsenal', code: 'ARS', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#EF0107' },
    team2: { name: 'Chelsea', code: 'CHE', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#034694' },
    odds: { team1: '16', draw: '22', team2: '67' },
    category: 'sports'
  },
  {
    id: 2,
    time: '23:00',
    date: 'Sat, Nov 22',
    volume: '308.59K',
    team1: { name: 'Chelsea', code: 'CHE', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#034694' },
    team2: { name: 'Crystal Palace', code: 'CRY', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#1B458F' },
    odds: { team1: '45', draw: '28', team2: '32' },
    category: 'sports'
  },
  {
    id: 3,
    time: '20:30',
    date: 'Sat, Nov 22',
    volume: '256.43K',
    team1: { name: 'Brighton', code: 'BRI', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#0057B8' },
    team2: { name: 'Aston Villa', code: 'AST', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#670E36' },
    odds: { team1: '38', draw: '30', team2: '35' },
    category: 'sports'
  },
  {
    id: 4,
    time: '18:00',
    date: 'Sat, Nov 22',
    volume: '192.78K',
    team1: { name: 'Leicester City', code: 'LEI', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#003090' },
    team2: { name: 'Wolverhampton', code: 'WOL', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#FDB913' },
    odds: { team1: '52', draw: '25', team2: '28' },
    category: 'sports'
  },
  // Ligue 1
  {
    id: 5,
    time: '21:00',
    date: 'Sat, Nov 22',
    volume: '145.32K',
    team1: { name: 'PSG', code: 'PSG', flag: '🇫🇷', color: '#004170' },
    team2: { name: 'Marseille', code: 'MAR', flag: '🇫🇷', color: '#2FAEE0' },
    odds: { team1: '62', draw: '20', team2: '22' },
    category: 'sports'
  },
  // Bundesliga
  {
    id: 6,
    time: '19:30',
    date: 'Sat, Nov 22',
    volume: '178.90K',
    team1: { name: 'Bayern Munich', code: 'BAY', flag: '🇩🇪', color: '#DC052D' },
    team2: { name: 'Dortmund', code: 'DOR', flag: '🇩🇪', color: '#FDE100' },
    odds: { team1: '55', draw: '24', team2: '26' },
    category: 'sports'
  },
  // E-Sports matches
  {
    id: 7,
    time: '15:00',
    date: 'Sat, Nov 22',
    volume: '412.78K',
    team1: { name: 'Team Liquid', code: 'TL', flag: '🎮', color: '#0E2C75' },
    team2: { name: 'FaZe Clan', code: 'FZ', flag: '🎮', color: '#E11D48' },
    odds: { team1: '48', draw: '10', team2: '52' },
    category: 'e-sports'
  },
  {
    id: 8,
    time: '17:30',
    date: 'Sat, Nov 22',
    volume: '356.21K',
    team1: { name: 'G2 Esports', code: 'G2', flag: '🎮', color: '#FF5733' },
    team2: { name: 'Fnatic', code: 'FNC', flag: '🎮', color: '#FF9000' },
    odds: { team1: '42', draw: '15', team2: '58' },
    category: 'e-sports'
  },
  {
    id: 9,
    time: '20:00',
    date: 'Sat, Nov 22',
    volume: '298.45K',
    team1: { name: 'Cloud9', code: 'C9', flag: '🎮', color: '#0098FF' },
    team2: { name: 'TSM', code: 'TSM', flag: '🎮', color: '#000000' },
    odds: { team1: '55', draw: '12', team2: '45' },
    category: 'e-sports'
  },
];

// Function to shuffle array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to distribute matches across categories
export function getMatchesForCategory(category: string): Match[] {
  if (category === 'all') {
    return shuffleArray(allMatches);
  }
  return shuffleArray(allMatches.filter(m => m.category === category));
}
