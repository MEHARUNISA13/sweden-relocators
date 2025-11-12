# Sweden Relocators - Project Structure & Code Documentation

## Project Overview

**Sweden Relocators** is a modern, responsive web application built with **Next.js 16** and **React 19** that provides comprehensive relocation and immigration support services for individuals, employees, and companies relocating to Sweden and the Nordic region.

### Key Technologies
- **Framework**: Next.js 16.0.1
- **UI Library**: Material-UI (MUI) v5
- **React Version**: 19.2.0
- **Styling**: Tailwind CSS 4.1.17 + Emotion (MUI styling)
- **Language**: TypeScript & JavaScript (JSX)
- **Build Tool**: PostCSS with Tailwind

---

## Project Directory Structure

```
swedenrelocaters/
├── app/
│   ├── components/              # React components
│   │   ├── Navbar.tsx          # Navigation bar with language selector
│   │   ├── Hero.tsx            # Hero section with video
│   │   ├── Home.tsx            # Home page wrapper
│   │   ├── CountrySelector.jsx # Country selection with plane animation
│   │   ├── Services.tsx        # Services grid display
│   │   ├── Offers.tsx          # Carousel of service offers
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── LanguageSelector.tsx# Language selection modal
│   │   └── iconify/            # Icon utilities
│   │       ├── index.js
│   │       ├── iconify.jsx
│   │       ├── flag-icon.jsx
│   │       └── classes.js
│   ├── data/
│   │   └── countries.ts        # Countries data with phone codes
│   ├── utils/                  # Utility functions
│   │   ├── axios.js
│   │   ├── change-case.js
│   │   ├── format-number.js
│   │   ├── format-time.js
│   │   ├── helper.js
│   │   ├── storage-available.js
│   │   ├── uuidv4.js
│   │   └── with-loading-props.jsx
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── theme.ts                # MUI theme configuration
│   ├── globals.css             # Global styles
│   └── favicon.ico
├── public/                      # Static assets
├── node_modules/               # Dependencies
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── eslint.config.mjs
├── .gitignore
└── README.md
```

---

## Core Files Documentation

### 1. **Root Layout** (`app/layout.tsx`)
- Sets up the Next.js 14 App Router cache provider
- Applies Material-UI theme provider
- Includes global CSS
- Renders: Navbar → Children → Footer
- Metadata: Page title and description

### 2. **Home Page** (`app/page.tsx`)
- Main entry point
- Wraps the Home component
- Sets background to white

### 3. **Home Component** (`app/components/Home.tsx`)
- Client-side component (`'use client'`)
- Orchestrates main page sections:
  1. Hero section
  2. Country selector
  3. Services
  4. Offers carousel

---

## Component Breakdown

### **Navbar.tsx** (200 lines)
**Purpose**: Fixed navigation bar with multi-level features

**Key Features**:
- **Top Info Bar**: Scrolling animation of Sweden statistics
  - Employment rate, education rate, gender ratio, GDP, population
  - Auto-scrolling with pause on hover
- **Main Navigation**: Logo + desktop menu + language selector
  - Navigation items: New in Sweden, Services, About Us, Housing, Assessment, Contact
  - Desktop CTA buttons: Book Appointment, Login
  - Mobile hamburger menu with collapsible nav
- **Language Selector**: Opens modal with 17+ languages
- **Responsive**: Tailored for mobile, tablet, desktop, and 4K screens

**Styling**:
- Fixed positioning (z-50)
- Tailwind CSS with custom breakpoints
- Smooth animations and transitions

---

### **Hero.tsx** (98 lines)
**Purpose**: Eye-catching hero section with video

**Key Features**:
- Gradient background (white → light blue)
- Fade-in animation on load
- Left side: Headline, description, CTA buttons
- Right side: Embedded video iframe
  - Synthesia video URL: https://share.synthesia.io/embeds/videos/7ffc5155-81ff-4153-b235-6fa60d54a4ef
- Wave SVG at bottom for smooth transition
- Responsive typography sizing

**Content**:
- Headline: "Relocate To Sweden" + "With an Expert Advise"
- Description: Services for individuals, employees, companies
- Buttons: Our Services, Book Appointment

---

### **CountrySelector.jsx** (317 lines)
**Purpose**: Interactive country selection with animated plane

**Key Features**:
- **From/To Fields**: Autocomplete dropdowns
  - From countries: EU countries (AD, AL, AT, BY, BE, BA, BG, HR, CY, CZ)
  - To countries: SE (Sweden), DK (Denmark)
- **Animated Plane**: Moves along dashed line based on selections
  - Position logic: 0% (start) → 50% (from selected) → 100% (both selected)
  - Smooth transitions (cubic-bezier)
- **Flag Icons**: Country flags from flagcdn.com
- **Watermark**: "RELOCATION" text behind (opacity: 0.15)
- **MUI Components**: Autocomplete, TextField, InputAdornment

**Animations**:
- Plane position: 0.8s cubic-bezier transition
- Icon hover: Scale(1.15) + rotate(5deg)

---

### **Services.tsx** (275 lines)
**Purpose**: Display relocation service categories

**Key Features**:
- Grid layout (1 column mobile, 2 columns desktop)
- 6 Service cards with animations
- Each card includes:
  - Icon/Image
  - Title
  - Description
  - "View Details" button
  
**Services Offered**:
1. Family Reunification
2. Business Relocation
3. Work Permit Relocation
4. Dependent Parents
5. Study in Sweden
6. LTR Permit Relocation

**Animations**:
- Staggered slide-up animation (0.1s to 0.6s delay)
- Hover effect: Shadow + translateY(-4px)
- Icon hover: Scale + rotate

---

### **Offers.tsx** (441 lines)
**Purpose**: Horizontal carousel of service offerings

**Key Features**:
- **Carousel with Auto-scroll**: Moves every 4 seconds
- **Manual Navigation**: Left/right arrow buttons
- **11 Offer Cards**:
  - Au Pair Services
  - Departure/Arrival Services
  - Entrepreneur Resources
  - Health Insurance
  - Host Family Services
  - Pet Relocation
  - Financial Management
  - Tax Services
  - Legal Support
  - Integration Program

**Each Card Shows**:
- Image
- Meta info (duration, count)
- Title & Description
- Price (€49)
- "Send Request" button

**Scrolling Logic**:
- Auto-scroll pauses on manual interaction
- Resumes after 10 seconds
- Smooth scroll behavior

---

### **LanguageSelector.tsx** (157 lines)
**Purpose**: Multi-language selection modal

**Languages Supported** (17 total):
- English, Swedish, Danish, Norwegian, Finnish
- German, French, Italian, Spanish, Greek
- Dutch, Arabic, Persian, Urdu, Punjabi, Pashto
- Telugu, Tamil

**UI**:
- Dialog modal with close button
- Grid layout (2 cols mobile, 4 cols desktop)
- Flag + language name + native name
- Current language highlighted (blue background)

---

### **Footer.tsx** (80 lines)
**Purpose**: Footer with links and company info

**Sections**:
1. **Company Info**: About Sweden Relocators
2. **Services**: Residence Permits, Housing, School Placement, Integration
3. **Quick Links**: About Us, New in Sweden, Contact, Blog
4. **Contact**: Email, Phone, Region info
5. **Bottom**: Copyright + Legal links (Privacy, Terms, Cookies)

---

## Theme Configuration (`app/theme.ts`)

**Material-UI Theme**:
```typescript
Palette:
  - Primary: #2563eb (Blue)
  - Secondary: #10b981 (Green)
  - Background: #ffffff (White)
  - Text: #1e293b (Dark) / #64748b (Light)
  - Grey: #cbd5e1, #94a3b8, #64748b

Typography:
  - Font family: inherit
  
Shadows:
  - Custom shadow layers (0-6)
```

---

## Data Files

### **countries.ts**
- 251 country entries
- Each entry: `{ code, label, phone }`
- Used in CountrySelector, LanguageSelector
- Includes all UN-recognized countries

---

## Utility Functions (`app/utils/`)

| File | Purpose |
|------|---------|
| `axios.js` | HTTP client setup |
| `change-case.js` | String case conversion |
| `format-number.js` | Number formatting |
| `format-time.js` | Time formatting |
| `helper.js` | General utilities |
| `storage-available.js` | Check localStorage support |
| `uuidv4.js` | UUID generation |
| `with-loading-props.jsx` | Loading state wrapper |

---

## Styling Approach

### Tailwind CSS
- Responsive breakpoints: xs, sm, md, lg, xl, 2xl, 3xl, 4k
- Color palette: Slate, blue, green, red, etc.
- Custom spacing and sizing

### Material-UI (MUI) Components
- `Box`, `Typography`, `Button`, `Card`, `TextField`, `Autocomplete`
- `Dialog`, `IconButton`, `InputAdornment`
- Styled components with `@emotion/styled`

### Emotion Animation Keyframes
- Fade-in effects
- Slide-up animations
- Staggered delays

---

## Responsive Design Breakpoints

The project supports 4K screens and multiple device sizes:

```
xs:   0px    (mobile)
sm:   640px  (tablet)
md:   768px  (tablet landscape)
lg:   1024px (small desktop)
xl:   1280px (desktop)
2xl:  1536px (large desktop)
3xl:  1920px (4K base)
4k:   custom (4K ultra)
```

---

## Key Features & Interactions

### 1. **Scrolling Info Bar** (Navbar top)
- Continuous loop animation
- Shows Sweden statistics
- Pause on hover

### 2. **Country Selector Plane Animation**
- Dynamic position based on selections
- Flag icons with real-time updates
- Responsive layout (stacked mobile, inline desktop)

### 3. **Service Cards**
- Staggered entrance animations
- Lift effect on hover
- Icon rotation animation

### 4. **Offers Carousel**
- Auto-scrolling with manual controls
- Smooth scroll behavior
- Custom scrollbar styling

### 5. **Responsive Typography**
- Scales from mobile to 4K
- Maintains readability at all sizes
- Proportional sizing using Tailwind scales

---

## Performance Optimizations

1. **Image Optimization**:
   - Next.js Image component
   - Lazy loading flags from flagcdn.com
   - Responsive image sizing

2. **Component Code-Splitting**:
   - `'use client'` directives for client components
   - Server-side rendering where possible

3. **Animations**:
   - CSS-based animations (not JavaScript)
   - GPU-accelerated transforms
   - Efficient keyframe definitions

4. **Styling**:
   - Tailwind CSS purging unused styles
   - Emotion CSS-in-JS for dynamic styles
   - Minimal CSS bundle

---

## Running the Project

### Development
```bash
npm run dev
```
Opens http://localhost:3000

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

### Lint
```bash
npm run lint
```

---

## Browser Support

- Modern browsers with ES2017 support
- CSS Grid and Flexbox required
- CSS Custom Properties support needed
- CSS Animations support

---

## Future Enhancement Possibilities

1. **Backend Integration**:
   - API endpoints for form submissions
   - Database for user data
   - Authentication system

2. **Features**:
   - Multi-language content (currently buttons only)
   - Dark mode toggle
   - Accessibility improvements (ARIA labels)
   - Additional pages (About, Services detail, etc.)

3. **Performance**:
   - Image optimization
   - Code splitting by route
   - Service worker for PWA

4. **Analytics**:
   - Track user interactions
   - Monitor performance metrics
   - Conversion tracking

---

## Notes

- **Responsive**: Fully responsive from mobile (320px) to 4K (2400px)
- **Accessibility**: Uses semantic HTML and MUI accessible components
- **SEO**: Metadata configured in layout
- **Type Safety**: TypeScript for most components
- **Design Pattern**: Component-based architecture with clear separation of concerns
