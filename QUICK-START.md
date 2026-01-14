# ✦ QUICK START GUIDE - ETHERION

## 🚀 Get Your Website Live in 30 Minutes

Follow these simple steps to launch ETHERION to the world.

---

## ✅ Step 1: Add Your Audio Files (10 minutes)

### Create Audio Folder
```bash
mkdir -p assets/audio
```

### Upload 14 Audio Files
You need **2 files per chakra** (sample + full track):

```
assets/audio/
├── root-chakra-sample.mp3      (30-60 seconds preview)
├── root-chakra-full.mp3        (full 10-15 minute track)
├── sacral-chakra-sample.mp3
├── sacral-chakra-full.mp3
├── solar-chakra-sample.mp3
├── solar-chakra-full.mp3
├── heart-chakra-sample.mp3
├── heart-chakra-full.mp3
├── throat-chakra-sample.mp3
├── throat-chakra-full.mp3
├── third-eye-chakra-sample.mp3
├── third-eye-chakra-full.mp3
├── crown-chakra-sample.mp3
└── crown-chakra-full.mp3
```

**Note**: The file paths are already configured in `js/chakra-data.js`. If you use different filenames, update the paths there.

---

## ✅ Step 2: Update Your Personal Info (5 minutes)

### A. Update Email
**File**: `support.html` (line 110) and `portal.html` (line 155)

Find: `troymork@gmail.com`  
Replace with: **Your actual email**

### B. Update Social Links
**File**: `portal.html` (lines 60-80)

Update these URLs:
```html
<a href="https://instagram.com/YOUR_HANDLE">
<a href="https://youtube.com/@YOUR_CHANNEL">
<a href="https://soundcloud.com/YOUR_PROFILE">
<a href="https://spotify.com/YOUR_ARTIST_PAGE">
```

### C. Add Payment Links
**File**: `support.html` (lines 105-115)

```html
<a href="https://paypal.me/YOUR_USERNAME">
<a href="https://buymeacoffee.com/YOUR_USERNAME">
```

### D. Customize Bio (Optional)
**File**: `portal.html` (lines 85-95)

Edit Troy's bio section with your personal story.

---

## ✅ Step 3: Test Locally (5 minutes)

### Open in Browser
1. Double-click `index.html` (opens in default browser)
2. Or drag `index.html` into Chrome/Firefox

### Test Checklist
- [ ] Homepage loads correctly
- [ ] Navigation works (all 5 pages)
- [ ] Chakra tones play on hover (homepage)
- [ ] Chakra spine is clickable (temple page)
- [ ] Modal opens with chakra details
- [ ] Audio player works (after adding audio files)
- [ ] Donation tiers display correctly
- [ ] Social links work
- [ ] Mobile responsive (resize browser)

**Troubleshooting**: If audio doesn't play, check:
1. Audio files are in `assets/audio/`
2. File paths match in `js/chakra-data.js`
3. Browser allows autoplay (some browsers block it)

---

## ✅ Step 4: Deploy to Web (10 minutes)

Choose ONE of these options:

### Option A: GitHub Pages (Easiest, Free)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "ETHERION - Initial launch"
   ```

2. **Push to GitHub**
   - Go to github.com → New Repository
   - Name: `etherion` or `Meditation-webapp`
   - Public or Private
   - Copy the commands shown

3. **Enable GitHub Pages**
   - Go to repo Settings
   - Scroll to "Pages"
   - Source: `main` branch
   - Save

4. **Live URL**
   - `https://YOUR-USERNAME.github.io/etherion/`
   - Takes 2-5 minutes to deploy

---

### Option B: Netlify (Recommended, Free)

1. **Go to** [netlify.com](https://netlify.com)

2. **Sign Up** (use GitHub account)

3. **Deploy**
   - Drag entire project folder to Netlify
   - OR: "New site from Git" → Connect GitHub repo

4. **Custom Domain** (Optional)
   - Buy domain (etherion.com, yourname.com, etc.)
   - Add to Netlify: Site Settings → Domain Management
   - Netlify provides SSL (HTTPS) automatically

5. **Live URL**
   - `https://etherion.netlify.app/` (or your custom domain)
   - Deploys instantly

---

### Option C: Vercel (Fast, Free)

1. **Go to** [vercel.com](https://vercel.com)

2. **Sign Up** (use GitHub account)

3. **Deploy**
   - Click "New Project"
   - Import from GitHub
   - Select your repo
   - Click "Deploy"

4. **Live URL**
   - `https://etherion.vercel.app/`
   - Edge network (fastest loading times)

---

## ✅ Step 5: Share with the World! 🎉

### Announce on Social Media

**Instagram/Facebook Post**:
```
✦ Introducing ETHERION ✦
The Sound of Awakening

A sacred sound temple for chakra activation.
7 frequencies. Root to Crown. Earth to Sky.

🎵 Listen: [YOUR-URL]
💜 Free offering | Donations welcome

#etherion #meditation #chakras #soundhealing #spiritualawakening
```

**Twitter/X Post**:
```
✦ ETHERION is live ✦

7 chakra frequencies
396 Hz → 963 Hz
Root to Crown

Free sacred sound medicine
🎵 [YOUR-URL]

#meditation #soundhealing
```

### Email Your List
Use the template in `portal.html` → Subscription section

### Update Your Bio
Add link to all your social profiles:
```
🎵 Listen to ETHERION: [YOUR-URL]
```

---

## 📋 Maintenance Checklist

### Weekly
- [ ] Check audio files are loading
- [ ] Test all links (social, payment)
- [ ] Monitor email subscriptions
- [ ] Respond to user messages

### Monthly
- [ ] Add new tracks (if available)
- [ ] Update blog/transmissions
- [ ] Check analytics (visitors, popular tracks)
- [ ] Backup website files

### As Needed
- [ ] Update bio/about section
- [ ] Add testimonials
- [ ] Create new offerings
- [ ] Improve SEO

---

## 🆘 Troubleshooting

### Audio Not Playing
**Issue**: Clicking play button does nothing

**Solution**:
1. Check browser console (F12 → Console)
2. Verify audio files exist in `assets/audio/`
3. Check file paths in `js/chakra-data.js`
4. Try different browser (Chrome recommended)

### Mobile Menu Not Working
**Issue**: Hamburger menu doesn't open

**Solution**:
1. Check `js/etherion.js` is loaded
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private mode

### Links Not Working
**Issue**: Social/payment links show errors

**Solution**:
1. Update URLs in `portal.html` and `support.html`
2. Remove `target="_blank"` if causing issues
3. Test in different browser

### Slow Loading
**Issue**: Website takes too long to load

**Solution**:
1. Compress audio files (MP3 at 128kbps is fine)
2. Optimize images (WebP format)
3. Use CDN (Netlify/Vercel do this automatically)

---

## 📞 Need Help?

### Resources
- **README.md** - Complete documentation
- **IMPLEMENTATION-COMPLETE.md** - Full feature list
- **docs/** folder - Original Notion specifications

### Support
- **Email**: troymork@gmail.com
- **GitHub Issues**: Create issue in repo
- **Community**: Ask in spiritual tech forums

---

## 🎁 Bonus Tips

### SEO Optimization
1. Add meta descriptions to all pages
2. Submit sitemap to Google Search Console
3. Add Open Graph tags for social sharing
4. Use descriptive file names for audio

### Analytics (Optional)
Add Google Analytics to track:
- Visitor count
- Most popular chakras
- Conversion rate (donations)
- Geographic distribution

**Code to add** (in `<head>` of all pages):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Email Integration
Connect subscription form to:
- Mailchimp (free for <2000 contacts)
- ConvertKit (creator-friendly)
- Substack (built-in email platform)

Replace form action in `portal.html`.

---

## ✨ You're Ready!

**ETHERION is complete and ready to launch.**

Follow the 5 steps above, and you'll be live in 30 minutes.

---

**✦ May your frequencies resonate across the field ✦**

*Last Updated: January 2026*
