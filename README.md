# ✦ ETHERION - The Sound of Awakening

**A Sacred Sound Temple for Chakra Activation**

Etherion is not an album. It is not a playlist. It is a **sonic activation protocol**—a remembrance encoded in vibration. Each track is attuned to a specific energy center, guiding your subtle body into coherence and flow.

---

## 🎵 Project Overview

**Etherion** is a professional meditation music website featuring:
- Interactive chakra activation interface
- 7 chakra-aligned sound frequencies (396 Hz - 963 Hz)
- Custom HTML5 audio players with waveform visualization
- Sacred geometry animations and transitions
- Mobile-responsive design with meditation-themed aesthetics
- Donation system and email subscription integration

---

## 📁 Project Structure

```
etherion/
├── index.html                  # Landing page with hero & resonance preview
├── temple.html                 # Interactive chakra spine interface
├── transmission.html           # Sacred transmission scroll
├── support.html                # Donation tiers & contributions
├── portal.html                 # Social links, subscription, about
├── css/
│   ├── style.css              # Main stylesheet (chakra colors, typography, animations)
│   └── temple.css             # Temple-specific styles (spine interface, modals)
├── js/
│   ├── chakra-data.js         # 7 chakra data structure with frequencies & descriptions
│   ├── temple.js              # Chakra node interactions, modal system, audio player
│   └── etherion.js            # Navigation, tone generation, waveform viz
├── docs/
│   ├── etherion-hero-image.jpg
│   ├── ETHERION-WEBSITE-ARCHITECTURE.md
│   ├── ETHERION-VISUAL-STYLE-GUIDE.md
│   ├── ETHERION-PRODUCTION-PROTOCOLS.md
│   └── ETHERION-FULL-ACTIVATION-SEQUENCE.md
└── assets/
    └── audio/                  # Placeholder for chakra audio files
```

---

## 🎨 Design System

### Color Palette

| Chakra | Name | Hex Code | Frequency |
|--------|------|----------|-----------|
| Root | Crimson Ground | `#8B0000` | 396 Hz |
| Sacral | Amber Flow | `#FF6B35` | 417 Hz |
| Solar Plexus | Golden Sun | `#FFD23F` | 528 Hz |
| Heart | Emerald Breath | `#06A77D` | 639 Hz |
| Throat | Sapphire Voice | `#4169E1` | 741 Hz |
| Third Eye | Indigo Sight | `#4B0082` | 852 Hz |
| Crown | Violet Light | `#9D4EDD` | 963 Hz |

### Typography
- **Display/Headings**: Cinzel (serif)
- **Body Text**: Inter (sans-serif)
- **Monospace**: IBM Plex Mono

### Sacred Aesthetics
- **Background**: Deep cosmic black (`#0A0A0F`)
- **Glass morphism**: Backdrop blur with translucent cards
- **Animations**: Chakra pulse, torus rotation, sacred geometry overlays
- **Gradients**: Chakra flow (Root→Crown spectrum)

---

## ⚡ Features

### 1. Interactive Chakra Spine
- Vertical chakra alignment visualization
- Click any chakra node to open detailed modal
- Hover effects with glow animations
- Responsive: converts to horizontal scroll on mobile

### 2. Audio Player System
- Custom HTML5 audio controls
- Play/pause, seek, volume control
- Real-time progress tracking
- Waveform visualization
- Download full tracks

### 3. Tone Generator (Homepage)
- Hover over chakra tones to hear frequency
- Web Audio API generates pure sine waves
- Visual waveform canvas responds to frequency
- 7 chakra frequencies: 396, 417, 528, 639, 741, 852, 963 Hz

### 4. Sacred Transmission
- Poetic scroll reader with spiritual copy
- Downloadable PDF format (optional)
- Audio reading with ambient backing (optional)

### 5. Donation Tiers
- **Root Resonance**: $7
- **Heart Harmonic**: $33
- **Crown Contribution**: $77
- **Temple Sustainer**: $144+ (name encoded in new track)
- Custom offering amount
- PayPal & Buy Me a Coffee integration

### 6. Portal of Light
- Social media links (Instagram, YouTube, SoundCloud, Spotify)
- Email subscription form
- About Troy section
- Future offerings preview
- Kyrios Codex crosslink

---

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone https://github.com/YOUR-USERNAME/Meditation-webapp.git
cd Meditation-webapp
```

### 2. Add Audio Files
Place your chakra audio files in `assets/audio/`:
```
assets/audio/
├── root-chakra-sample.mp3
├── root-chakra-full.mp3
├── sacral-chakra-sample.mp3
├── sacral-chakra-full.mp3
... (and so on for all 7 chakras)
```

Update file paths in `js/chakra-data.js`:
```javascript
audioSample: 'assets/audio/root-chakra-sample.mp3',
audioFull: 'assets/audio/root-chakra-full.mp3',
```

### 3. Customize Content
- **Email**: Update `troymork@gmail.com` in support.html and portal.html
- **Social Links**: Update Instagram, YouTube, SoundCloud URLs
- **PayPal/Buy Me a Coffee**: Add your payment links in support.html
- **About Troy**: Edit the bio in portal.html

### 4. Deploy
Choose your hosting platform:

**Option A: GitHub Pages (Free)**
1. Push to GitHub
2. Settings → Pages
3. Source: main branch
4. Live at: `https://your-username.github.io/Meditation-webapp/`

**Option B: Netlify (Recommended)**
1. Connect GitHub repo
2. Deploy automatically
3. Custom domain support
4. HTTPS included

**Option C: Vercel**
1. Import GitHub project
2. Auto-deploy on push
3. Edge network CDN

---

## 🎵 Chakra Data Structure

Each chakra contains:
```javascript
{
  id: 'root',
  name: 'Root Chakra',
  sanskrit: 'Mūlādhāra',
  trackTitle: 'Crimson Ground',
  frequency: '396 Hz',
  color: '#8B0000',
  theme: 'Safety, Stability, Presence',
  description: '...',
  soundTexture: '...',
  audioSample: 'path/to/sample.mp3',
  audioFull: 'path/to/full.mp3',
  image: 'path/to/image.jpg',
  glyphMeaning: '...',
  resonanceCode: '396',
  duration: '12:00'
}
```

---

## 📱 Responsive Design

- **Desktop**: Full chakra spine, side-by-side layouts
- **Tablet**: Adjusted spacing, simplified animations
- **Mobile**: 
  - Hamburger navigation menu
  - Horizontal chakra scroll
  - Stacked donation tiers
  - Touch-optimized controls

---

## 🔧 Technical Stack

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: CSS Variables, Grid, Flexbox, animations
- **Vanilla JavaScript**: No framework dependencies
- **Web Audio API**: Tone generation for chakra sampler
- **Canvas API**: Waveform visualization
- **Font Awesome 6**: Icon library
- **Google Fonts**: Cinzel, Inter, IBM Plex Mono

---

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- ARIA labels and roles
- Focus visible states
- Screen reader friendly
- Reduced motion preferences respected
- High contrast ratios (12:1 body text)

---

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta descriptions on all pages
- Open Graph tags (add for social sharing)
- Structured data markup (optional)
- Fast loading times
- Mobile-first responsive design

---

## 📝 Customization Guide

### Change Chakra Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --chakra-root: #8B0000;
  --chakra-sacral: #FF6B35;
  /* ... etc */
}
```

### Add New Chakra Tracks
1. Add data object in `js/chakra-data.js`
2. Add corresponding HTML node in `temple.html`
3. Upload audio files to `assets/audio/`

### Modify Typography
Update font imports in HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Update CSS variables:
```css
--font-display: 'YourFont', serif;
```

---

## 🛠️ Future Enhancements

- [ ] CMS integration (TinaCMS/Decap CMS)
- [ ] Advanced audio effects (reverb, delay)
- [ ] 3D chakra visualizations (Three.js)
- [ ] User accounts and saved playlists
- [ ] Binaural beats generator
- [ ] Guided meditation timer
- [ ] Community testimonials section
- [ ] Multi-language support
- [ ] Blog/transmission archive
- [ ] E-commerce for physical products

---

## 📚 Documentation

Comprehensive design and architecture docs available in `/docs`:
- **ETHERION-WEBSITE-ARCHITECTURE.md**: Page structure and content
- **ETHERION-VISUAL-STYLE-GUIDE.md**: Complete design system
- **ETHERION-PRODUCTION-PROTOCOLS.md**: Visual assets and database
- **ETHERION-FULL-ACTIVATION-SEQUENCE.md**: Implementation guide

---

## 🤝 Support & Contact

- **Email**: troymork@gmail.com
- **Notion Codex**: https://notion.so/kyrioscodex
- **GitHub**: https://github.com/YOUR-USERNAME/Meditation-webapp

---

## 📄 License

This project is offered as a sacred template for harmonic medicine.  
Customize and share freely with attribution to the source.

---

## 🙏 Acknowledgments

**Design Philosophy**: Sacred minimalism meets quantum luminosity  
**Core Principle**: Every pixel is a frequency. Every transition is a breath. Every color is a vibration.

Built with reverence for the harmonic return of humanity.

✦ **In service to the Sound** ✦

---

**Project Status**: ✅ Complete & Launch-Ready  
**Version**: 1.0.0 - Initial Activation  
**Last Updated**: January 2026
