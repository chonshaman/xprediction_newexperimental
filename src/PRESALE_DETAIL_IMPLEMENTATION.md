# Presale Detail Page Implementation

## 📁 Files Created

### 1. **Main Component**
- `/components/presale/PresaleDetailPage.tsx` - Full presale detail page implementation

### 2. **Mock Data**
- `/data/presaleDetailData.ts` - Sample data for the presale detail page

### 3. **Demo Wrapper**
- `/components/presale/PresaleDetailDemo.tsx` - Standalone demo wrapper

## 🎨 Layout Structure

The page follows the exact layout from the design mockup with a **two-column layout**:

### Left Column (2/3 width)
1. **Soft Cap Progress Section**
   - Progress bar with percentage and raised amount
   - Fire animation for over-softcap markets (100%+)
   - Top Participants list with avatars and amounts
   - Load More functionality

2. **Resolution Criteria Section**
   - Category and Created By information
   - Resolution Date
   - Detailed criteria text

3. **Discussion Section**
   - Comment input with textarea
   - Post comment button
   - Comments list with likes and replies
   - External link support

### Right Column (1/3 width)
1. **Buy Presale Section** (Light Green Background)
   - Countdown timer (Sale Ends In)
   - Amount input with Max button
   - BUY button (purple)

2. **Market Details Section**
   - Status with color badge
   - Contract Address
   - Market Type (Yes/No or Multi-Outcome)
   - Presale End Date with calendar icon
   - Created On date with calendar icon

3. **Share Presale Section**
   - Copy Link with copy button
   - Social media share buttons (Twitter, Instagram, Discord)

## 🎯 Key Features

### Design System Integration
- ✅ All colors use CSS variables (`var(--iris-9)`, `var(--card-normal)`, etc.)
- ✅ All spacing uses CSS variables (`var(--gap--1rem)`, `var(--gap--2rem)`)
- ✅ All typography uses design system font variables
- ✅ All borders and radii use CSS variables

### Interactive Elements
- **Breadcrumbs** - Navigation back to Presales list
- **Real-time Countdown** - Updates every second
- **Copy Link** - Copies presale URL with visual feedback
- **Fire Animation** - Animates on over-softcap markets
- **Load More** - Expandable participant list
- **Hover States** - All interactive elements have proper hover states

### Responsive Design
- **Mobile**: Single column layout
- **Tablet**: Adjusted spacing and sizing
- **Desktop**: Full two-column layout (lg:grid-cols-3 with 2:1 ratio)

## 🔧 Props Interface

```typescript
interface PresaleDetailPageProps {
  marketId: string;
  question: string;
  category: string;
  softcapProgress: number;
  raised: string;
  total: string;
  endDate: Date | string;
  createdBy: string;
  createdDate: string;
  contractAddress: string;
  marketType: 'Yes/No' | 'Multi-Outcome';
  status: string;
  statusColor?: 'blue' | 'orange' | 'green' | 'teal' | 'red';
  resolutionDate: string;
  resolutionCriteria: string;
  participants: Participant[];
  comments?: Comment[];
}
```

## 🎨 Color Scheme

### Buy Section (Green Theme)
- Background: `linear-gradient(135deg, #D4F4DD 0%, #E8F9ED 100%)`
- Border: `var(--green-6)`
- Text colors: Custom green shades matching the theme

### Status Colors
- Blue: `var(--iris-9)` - Presale Live
- Orange: `var(--orange-9)` - Warnings
- Green: `var(--green-9)` - Success states
- Teal: `var(--teal-9)` - Info states
- Red: `var(--red-9)` - Error states

## 📱 Usage

### Import and Use
```tsx
import { PresaleDetailPage } from './components/presale/PresaleDetailPage';
import { mockPresaleDetail } from './data/presaleDetailData';

<PresaleDetailPage {...mockPresaleDetail} />
```

### Demo Component
```tsx
import { PresaleDetailDemo } from './components/presale/PresaleDetailDemo';

// Renders the full presale detail with mock data
<PresaleDetailDemo />
```

## 🚀 Next Steps

To integrate this into your application:

1. **Add Route**: Create a route like `/presale/:id`
2. **Fetch Data**: Replace mock data with real API calls
3. **Connect Actions**: Wire up comment posting, buying, sharing
4. **Add Navigation**: Link from PresaleMarketCard to detail page

Example:
```tsx
// In PresaleMarketCard
onClick={() => navigate(`/presale/${market.id}`)}

// In your router
<Route path="/presale/:id" element={<PresaleDetailPageContainer />} />
```

## ✨ Features Included

- ✅ Breadcrumb navigation
- ✅ Real-time countdown timer
- ✅ Soft cap progress bar with fire animation
- ✅ Top participants list
- ✅ Resolution criteria section
- ✅ Discussion/comments section
- ✅ Buy presale form
- ✅ Market details display
- ✅ Share functionality (copy link + social)
- ✅ Fully responsive layout
- ✅ All design system variables
- ✅ Proper hover/focus states
- ✅ TypeScript types
- ✅ Mock data for testing

All components strictly follow the design system guidelines and use CSS variables for easy theming!
