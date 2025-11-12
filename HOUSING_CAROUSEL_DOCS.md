# Housing Carousel Component Documentation

## Overview
The Housing Carousel component displays a responsive carousel of housing listings with auto-play functionality, arrow navigation buttons, and beautiful card designs. It's integrated into the main home page before the footer.

---

## File Structure

### 1. **Component File**
**Location:** `app/components/HousingCarousel.tsx`

**Size:** ~14.8 KB (539 lines)

**Exports:**
- `HousingCarousel` - Main carousel component
- `HousingCard` - Individual card component (internal)

---

## 2. **Hook File**
**Location:** `app/utils/useCarousel.ts`

**Size:** ~2.4 KB (85 lines)

**Exports:**
- `useCarousel()` - Custom hook for carousel functionality

---

## Component Features

### HousingCarousel Component

#### Props
None - Carousel data is hardcoded internally for now.

#### Features
- ✅ **Auto-play Animation** - Scrolls every 5 seconds
- ✅ **Manual Navigation** - Left/right arrow buttons
- ✅ **Responsive Design** - Works on mobile, tablet, desktop, and 4K
- ✅ **Smooth Scrolling** - CSS smooth scroll behavior
- ✅ **Scroll Detection** - Arrows disable at boundaries
- ✅ **Beautiful Header** - Centered title section
- ✅ **Custom Scrollbar** - Styled blue scrollbar

#### Structure
```
HousingCarousel
├── Header Section
│   ├── Subtitle (blue)
│   ├── Main Title
│   └── Secondary Title (blue)
├── Carousel Container
│   ├── Left Arrow Button
│   ├── Carousel Track
│   │   └── Multiple HousingCard components
│   └── Right Arrow Button
```

---

## HousingCard Component

### Card Content
Each housing card displays:

1. **Image Section**
   - Image from `/public` folder
   - Badge (top-left) - e.g., "Per Night", "Monthly Rent", "List Now"
   - Rating badge (top-right, if available) - Star rating with emoji

2. **Content Section**
   - Posted date
   - Title (e.g., "Short Term Rental")
   - Location with 🔴 icon
   - Date range with 📅 icon
   - Inquiry count with 👥 icon
   - Price (if available) with label
   - Two action buttons

3. **Buttons**
   - Primary button (outlined) - e.g., "Reserve Now", "Rent Now", "List Now"
   - Secondary button (solid dark) - e.g., "Become A Host", "Sublet Your Property", "Mortgage Support"

---

## Data Structure

### HousingItem Interface
```typescript
interface HousingItem {
  id: string;                      // Unique identifier
  title: string;                   // e.g., "Short Term Rental"
  image: string;                   // Path from /public, e.g., "/h1.png"
  location: string;                // e.g., "Malmö", "Stockholm"
  startDate: string;               // e.g., "21 - 28 Feb 2026"
  endDate?: string;                // Optional, e.g., "31 Jan 2029"
  inquiries: number;               // Number of inquiries/applications
  price?: string;                  // Optional, e.g., "€89"
  priceLabel?: string;             // Optional, e.g., "Per Night"
  badgeLabel?: string;             // Badge text on image
  rating?: number;                 // Optional, e.g., 4.9
  primaryButtonText: string;       // e.g., "Reserve Now"
  primaryButtonAction: string;     // Action identifier
  secondaryButtonText: string;     // e.g., "Become A Host"
  secondaryButtonAction: string;   // Action identifier
}
```

### Default Housing Data
The component includes 5 sample listings:

1. **Short Term Rental** (Malmö)
   - €89 per night, Rating: 4.9
   - Dates: 21-28 Feb 2026
   - 221 inquiries

2. **Long Term Rental** (Malmö)
   - €850 monthly
   - Dates: 1 Feb 2026 - 31 Jan 2029
   - 153 inquiries

3. **Sell Your Property** (Malmö)
   - Dates: 15-15 Sept 2025
   - 202 inquiries

4. **Short Term Rental** (Stockholm)
   - €99 per night, Rating: 4.8
   - Dates: 15 Mar 2026 - 30 Apr 2026
   - 187 inquiries

5. **Long Term Rental** (Stockholm)
   - €1200 monthly
   - Dates: 1 Apr 2026 - 31 Mar 2027
   - 176 inquiries

---

## useCarousel Hook

### Purpose
Manages carousel scroll state, auto-play functionality, and arrow button controls.

### Parameters
```typescript
config: CarouselConfig = {
  autoPlay?: boolean;           // Default: true
  autoPlayInterval?: number;    // Default: 5000ms (5 seconds)
}
```

### Returns
```typescript
{
  carouselRef: RefObject<HTMLDivElement>;  // Ref to scroll container
  canScrollLeft: boolean;                   // Can scroll left flag
  canScrollRight: boolean;                  // Can scroll right flag
  onScroll: () => void;                     // Scroll event handler
  scroll: (direction) => void;              // Manual scroll function
}
```

### Features
- Detects scroll boundaries
- Auto-plays in intervals
- Resets to start when reaching end
- Smooth scroll animations
- Handles window resize events

---

## Styling & Design

### Colors
- **Primary Blue:** #3b82f6
- **Dark Text:** #1e293b
- **Dark Buttons:** #1e293b (hover: #0f172a)
- **Light Background:** #f8fafc
- **Card Background:** #ffffff
- **Borders:** #e2e8f0
- **Red Location Icon:** #ef4444
- **Star Rating Yellow:** #fbbf24

### Typography Sizes (Responsive)
```
Header Title:   1.75rem (xs) → 2.25rem (sm) → 2.75rem (lg) → 4rem (4k)
Subtitle:       0.875rem (xs) → 1rem (sm) → 1.125rem (lg) → 1.5rem (4k)
Card Title:     1.125rem (xs) → 1.25rem (sm)
Card Text:      0.875rem (xs) → 0.95rem (sm)
```

### Spacing
- Section padding: 6rem (xs) → 12rem (xl)
- Container max-widths: 1400px (lg), 1600px (2xl), 2400px (4k)
- Card gaps: 3rem (xs) → 5rem (lg)
- Card padding: 3rem (xs) → 4rem (md)

### Responsive Breakpoints
```
xs:   0px - 640px    (mobile)
sm:   640px - 768px  (tablet)
md:   768px - 1024px (tablet landscape)
lg:   1024px - 1280px (small desktop)
xl:   1280px - 1536px (desktop)
2xl:  1536px - 1920px (large desktop)
4k:   1920px+ (4K)
```

### Hover Effects
- Cards lift: `translateY(-4px)`
- Card shadow increases
- Arrow buttons darken on hover
- Button backgrounds change on hover

---

## Required Images

The component expects these images in the `/public` folder:
- `h1.png` - Short term rental building image
- `h2.png` - Long term rental house image
- `h3.png` - Property selling/pavilion image

**Image Format:** PNG (or any web-compatible format)
**Recommended Size:** 600x400px or higher (16:9 aspect ratio)

---

## Integration

### How It's Integrated
The `HousingCarousel` component is imported and called in `Home.tsx`:

```typescript
import { HousingCarousel } from './HousingCarousel';

export default function Home() {
  return (
    <>
      <Hero />
      <CountrySelector />
      <Services />
      <Offers />
      <HousingCarousel />
      {/* Footer component renders in layout.tsx */}
    </>
  );
}
```

### Placement
- **Position:** Between `Offers` component and `Footer`
- **Rendering:** Client-side (`'use client'` directive)
- **Dependencies:** Material-UI, custom hook

---

## Material-UI Components Used

| Component | Purpose |
|-----------|---------|
| `Box` | Layout container with sx props |
| `Card` | Card wrapper with elevation |
| `Button` | Action buttons (outlined, contained) |
| `Typography` | Text content with variants |
| `IconButton` | Arrow navigation buttons |
| `ArrowBackIcon` | Left arrow icon |
| `ArrowForwardIcon` | Right arrow icon |
| `LocationOnIcon` | Location marker icon |
| `EventIcon` | Date/calendar icon |
| `GroupIcon` | People/inquiries icon |

---

## Auto-Play Behavior

### Timeline
1. **Load:** Carousel initializes, auto-play starts
2. **Every 5 seconds:** Carousel scrolls right by ~400px
3. **At End:** When scrolled to end, resets to position 0
4. **Manual Interaction:** User clicks arrow → auto-play resumes after 10 seconds
5. **Smooth Transition:** All movements use `scrollBehavior: 'smooth'`

### Example Flow
```
[Card1][Card2][Card3][Card4][Card5] → scrolls right
[Card2][Card3][Card4][Card5] → ... continues
[Card5] → reaches end
[Card1][Card2][...] → resets to start
```

---

## Customization Guide

### Add More Housing Items
Edit the `housingData` array in `HousingCarousel.tsx`:

```typescript
const housingData: HousingItem[] = [
  // ... existing items
  {
    id: '6',
    title: 'Your Property Title',
    image: '/your-image.png',
    location: 'Your Location',
    startDate: 'Your Dates',
    inquiries: 100,
    price: '€999',
    priceLabel: 'Per Month',
    badgeLabel: 'Your Badge',
    rating: 4.5,
    primaryButtonText: 'Your Button',
    primaryButtonAction: 'action',
    secondaryButtonText: 'Your Second Button',
    secondaryButtonAction: 'action2',
  },
];
```

### Change Auto-Play Interval
In `HousingCarousel.tsx`:
```typescript
const carousel = useCarousel({
  autoPlay: true,
  autoPlayInterval: 3000, // Change from 5000 to 3000ms
});
```

### Disable Auto-Play
```typescript
const carousel = useCarousel({
  autoPlay: false,
  autoPlayInterval: 5000,
});
```

### Modify Scroll Amount
In `useCarousel.ts`, change the `scrollAmount` variable (line 26):
```typescript
const scrollAmount = 400; // Change to your preferred amount
```

---

## Performance Considerations

1. **Image Loading:** Images are loaded from `/public` folder (fast)
2. **Carousel Rendering:** Only visible cards + adjacent cards are rendered
3. **Animations:** CSS-based (GPU accelerated)
4. **Auto-Play:** Uses intervals (lightweight)
5. **Memory:** Hook cleanup on unmount

---

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Smooth scroll support required
- ✅ CSS Flexbox support required
- ✅ ES6+ JavaScript support

---

## Known Limitations

1. Data is hardcoded (consider moving to props or API in future)
2. Button click handlers are not implemented (add `onClick` handlers as needed)
3. Carousel doesn't support touch/swipe on mobile (can be added with touch event listeners)

---

## Future Enhancements

1. **API Integration** - Fetch housing data from backend
2. **Filter/Search** - Add filters for location, price, date range
3. **Swipe Support** - Add touch/swipe gestures on mobile
4. **Pagination Dots** - Show current position with dot indicators
5. **Dynamic Heights** - Adjust card heights based on content
6. **Advanced Animations** - Add fade/scale effects on scroll
7. **Accessibility** - Add ARIA labels and keyboard navigation

---

## Troubleshooting

### Carousel Not Scrolling
- Check if images are loading correctly in `/public` folder
- Verify `carousel.carouselRef` is properly attached to scroll container
- Check browser console for errors

### Images Not Showing
- Ensure image files exist: `/public/h1.png`, `/public/h2.png`, `/public/h3.png`
- Check file format (PNG, JPG, WebP supported)
- Verify path in `image` property matches file name

### Auto-Play Not Starting
- Verify `useCarousel({ autoPlay: true })` is set
- Check browser console for JavaScript errors
- Ensure component is mounted on page

### Arrows Not Appearing
- Check if `ArrowBackIcon` and `ArrowForwardIcon` are imported from `@mui/icons-material`
- Verify MUI v5 is installed in `package.json`
- Check z-index doesn't conflict with other elements

---

## Testing

To test the component:

1. **Run development server:** `npm run dev`
2. **Navigate to:** http://localhost:3000
3. **Observe:**
   - Cards should auto-scroll every 5 seconds
   - Arrows should be clickable and functional
   - Hover effects should work on cards and buttons
   - Carousel should reset to start after reaching end
   - Arrows should disable at scroll boundaries

---

## Summary

The Housing Carousel is a fully-featured, responsive component that:
- Displays housing listings in an auto-playing carousel
- Provides manual navigation with left/right arrows
- Shows detailed information (price, location, dates, inquiries)
- Maintains beautiful, modern design
- Integrates seamlessly with the existing Sweden Relocators website
- Supports responsive design from mobile to 4K screens
