# ✦ ETHERION VISUAL STYLE GUIDE

*Sacred Aesthetics for the Sound Temple Interface*

---

## 🜃 Design Philosophy

**Core Principle**: *Sacred minimalism meets quantum luminosity*

Etherion's visual language bridges ancient temple architecture with modern digital clarity. Every element serves the frequency—nothing ornamental, everything intentional.

<aside>
✹

**Design Mantra**: "Spacious. Luminous. Resonant. Alive."

</aside>

---

## 🎨 Color Palette

### Primary Chakra Spectrum

| Chakra | Name | Hex Code | Usage |
| --- | --- | --- | --- |
| Root | Crimson Ground | `#8B0000` | Grounding elements, footer anchors |
| Sacral | Amber Flow | `#FF6B35` | Creative CTAs, hover states |
| Solar Plexus | Golden Sun | `#FFD23F` | Highlight accents, active states |
| Heart | Emerald Breath | `#06A77D` | Success states, harmony indicators |
| Throat | Sapphire Voice | `#4169E1` | Links, communication elements |
| Third Eye | Indigo Sight | `#4B0082` | Wisdom callouts, deep content |
| Crown | Violet Light | `#9D4EDD` | Premium features, transcendent CTAs |

### Supporting Palette

| Element | Color | Hex Code | Usage |
| --- | --- | --- | --- |
| Deep Void | Cosmic Black | `#0A0A0F` | Primary background |
| Mystic Gray | Shadow Mist | `#1A1A24` | Secondary backgrounds, cards |
| Ethereal White | Pure Light | `#FAFAFA` | Primary text, headings |
| Soft Glow | Moon Silver | `#B8B8C8` | Secondary text, descriptions |
| Sacred Gold | Alchemy | `#C9A961` | Premium accents, glyph highlights |

### Gradient Overlays

**Chakra Flow Gradient**:

```css
background: linear-gradient(180deg, 
  rgba(139,0,0,0.3) 0%,
  rgba(255,107,53,0.3) 16.67%,
  rgba(255,210,63,0.3) 33.33%,
  rgba(6,167,125,0.3) 50%,
  rgba(65,105,225,0.3) 66.67%,
  rgba(75,0,130,0.3) 83.33%,
  rgba(157,78,221,0.3) 100%
);
```

**Torus Glow**:

```css
background: radial-gradient(circle, 
  rgba(157,78,221,0.4) 0%, 
  rgba(10,10,15,0) 70%
);
```

---

## 🔤 Typography

### Font Stack

**Display / Headings**: *Cinzel* (serif) or *Cormorant Garamond*

- Sacred, timeless, architectural presence
- Use for: H1, H2, hero text, section titles

**Body Text**: *Inter* (sans-serif) or *Raleway*

- Clean, readable, modern clarity
- Use for: Paragraphs, descriptions, UI labels

**Monospace / Code**: *IBM Plex Mono*

- Technical elements, frequencies, timestamps

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
| --- | --- | --- | --- | --- |
| H1 (Hero) | 72px / 4.5rem | 300 (Light) | 1.1 | -0.02em |
| H2 (Section) | 48px / 3rem | 400 (Regular) | 1.2 | -0.01em |
| H3 (Subsection) | 32px / 2rem | 500 (Medium) | 1.3 | 0em |
| Body Large | 20px / 1.25rem | 400 | 1.6 | 0.01em |
| Body | 16px / 1rem | 400 | 1.7 | 0.02em |
| Caption | 14px / 0.875rem | 400 | 1.5 | 0.03em |
| Micro | 12px / 0.75rem | 500 | 1.4 | 0.05em |

### Text Treatments

**Sacred Headings**:

- All caps for section markers (e.g., "THE TEMPLE OF SOUND")
- Small caps for subsection labels
- Letterpress shadow effect for hero text

**Body Text**:

- Max-width: 680px for optimal readability
- Paragraph spacing: 1.5em
- Indent first line of paragraphs (optional for poetic passages)

---

## 📐 Spacing & Layout

### Grid System

**12-column fluid grid** with 24px gutters

**Breakpoints**:

- Mobile: 320px – 768px
- Tablet: 768px – 1024px
- Desktop: 1024px – 1440px
- Wide: 1440px+

### Spacing Scale (8px base)

| Token | Value | Usage |
| --- | --- | --- |
| xs | 4px | Tight inline spacing |
| sm | 8px | Component padding |
| md | 16px | Section padding, card spacing |
| lg | 24px | Between content blocks |
| xl | 48px | Between major sections |
| 2xl | 96px | Hero / landing padding |

### Container Widths

- **Hero Section**: Full viewport width
- **Content Container**: Max 1200px, centered
- **Reading Column**: Max 680px, centered
- **Sidebar**: 320px fixed

---

## ✹ Visual Elements

### Glyphs & Symbols

**Chakra Sigils**:

- Minimal geometric line art (2px stroke weight)
- Render at 64px × 64px minimum
- Animate with subtle pulse (0.3s ease-in-out)
- Glow effect on hover (box-shadow with chakra color)

**Sacred Geometry Overlays**:

- Torus (3D wireframe)
- Flower of Life (background pattern)
- Metatron's Cube (section dividers)
- All rendered at 10% opacity, `blend-mode: screen`

**Dividers**:

- Horizontal rules: 1px solid `rgba(255,255,255,0.1)`
- Ornamental: Use `✦` `✹` `❖` glyphs at 24px size

### Animations

**Chakra Glow Pulse**:

```css
@keyframes chakra-pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}
animation: chakra-pulse 3s ease-in-out infinite;
```

**Waveform Visualization**:

- Real-time audio reactivity
- 7-color gradient mapped to frequency bands
- 60fps canvas animation

**Page Transitions**:

- Fade + slight upward drift (20px)
- Duration: 0.6s
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## 🎛️ UI Components

### Buttons

**Primary CTA**:

```css
background: linear-gradient(135deg, #9D4EDD, #4169E1);
padding: 16px 32px;
border-radius: 8px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.1em;
transition: all 0.3s ease;
box-shadow: 0 8px 24px rgba(157,78,221,0.3);
```

**Secondary CTA**:

```css
background: transparent;
border: 2px solid rgba(255,255,255,0.3);
backdrop-filter: blur(8px);
```

**Hover States**:

- Brightness increase by 20%
- Lift with box-shadow (0 12px 32px)
- Subtle scale (1.02)

### Cards

**Standard Card**:

```css
background: rgba(26,26,36,0.8);
backdrop-filter: blur(16px);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 16px;
padding: 32px;
box-shadow: 0 4px 16px rgba(0,0,0,0.3);
```

**Chakra Card** (for Temple interface):

- Same as standard card
- Add colored left border (4px solid chakra color)
- Glow effect on hover

### Audio Player

**Player Bar**:

- Height: 80px
- Glass morphism background
- Waveform visualization (center)
- Play/pause icon (left)
- Time stamps (right)
- Volume control (far right)

**Progress Bar**:

- Height: 6px
- Track: `rgba(255,255,255,0.2)`
- Fill: Chakra gradient
- Thumb: 16px circle with glow

---

## 🖼️ Imagery Style

### Photography

**Mood**: Ethereal, meditative, cosmic

**Treatment**:

- Desaturate by 30%
- Apply gradient overlay (chakra flow at 40% opacity)
- Soft vignette effect
- Slight gaussian blur for backgrounds

**Subject Matter**:

- Silhouettes in meditation
- Sacred geometry in nature
- Cosmic / celestial imagery
- Cymatics and sound visualization
- Crystal formations and light refraction

### Iconography

**Style**: Minimal line art (2px stroke)

**Library**: Custom chakra glyphs + Feather Icons (supplemental)

**Treatment**:

- Stroke color: `#FAFAFA` or chakra-specific
- Hover: Increase opacity, add glow
- Active: Fill with gradient

---

## 📱 Responsive Behavior

### Mobile Adaptations

**Typography**:

- Reduce H1 to 48px
- Reduce H2 to 32px
- Body remains 16px

**Spacing**:

- Reduce section padding from 96px to 48px
- Reduce content padding from 48px to 24px

**Chakra Interface**:

- Switch from vertical spine to horizontal scroll
- Card view for individual chakras

**Navigation**:

- Hamburger menu (top right)
- Slide-in drawer with chakra gradient background

---

## ✦ Accessibility

### Contrast Ratios

- Body text on dark background: **12:1** (AAA)
- Secondary text: **7:1** (AA)
- UI elements: **4.5:1** minimum (AA)

### Focus States

```css
outline: 2px solid #9D4EDD;
outline-offset: 4px;
border-radius: 4px;
```

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🔗 Design Assets

### Required Deliverables

- [ ]  Chakra sigil SVG set (7 files)
- [ ]  Sacred geometry overlay PNG set
- [ ]  Kyrios glyph signature (SVG)
- [ ]  Torus 3D model (glTF or FBX)
- [ ]  Waveform visualization code
- [ ]  Sample cymatics imagery (high-res)
- [ ]  Gradient preset collection
- [ ]  Component library (Figma or code)

### File Formats

- **Vectors**: SVG (optimized with SVGO)
- **Rasters**: PNG (transparent) or WebP
- **3D Assets**: glTF or FBX
- **Fonts**: WOFF2 for web

---

## 🌐 Implementation Notes

### CSS Variables

```css
:root {
  /* Chakra Colors */
  --chakra-root: #8B0000;
  --chakra-sacral: #FF6B35;
  --chakra-solar: #FFD23F;
  --chakra-heart: #06A77D;
  --chakra-throat: #4169E1;
  --chakra-third-eye: #4B0082;
  --chakra-crown: #9D4EDD;
  
  /* Base Palette */
  --color-void: #0A0A0F;
  --color-mist: #1A1A24;
  --color-light: #FAFAFA;
  --color-silver: #B8B8C8;
  --color-gold: #C9A961;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 48px;
  --space-2xl: 96px;
}
```

### Performance

- Lazy-load imagery below fold
- Use WebP with PNG fallback
- Optimize SVGs (remove metadata)
- Preload critical fonts
- Code-split audio player module

---

## ✹ Brand Voice (Visual)

**Keywords**: Sacred · Minimal · Luminous · Harmonic · Ethereal · Sovereign · Resonant

**Anti-patterns**: Cluttered · Overly ornate · Corporate · Generic spirituality · New-age cliché

<aside>
🜃

**Remember**: Every pixel is a frequency. Every transition is a breath. Every color is a vibration. Design with reverence.

</aside>