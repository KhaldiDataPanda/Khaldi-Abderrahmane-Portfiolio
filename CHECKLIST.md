# ✅ Final Verification Checklist

Run through this checklist before deploying to ensure everything works perfectly.

## 📋 Pre-Deployment Checklist

### Setup Phase
- [ ] Node.js installed (v18+): `node --version`
- [ ] npm installed: `npm --version`
- [ ] Dependencies installed: `npm install` completed
- [ ] Setup script run: `.\setup.ps1` executed
- [ ] Images copied: `Me.jpg` in `public/` folder
- [ ] Project screenshots: Files in `public/Projects Pics/`
- [ ] Workshop photos: Files in `public/Workshops/`

### Local Development Test
```powershell
npm run dev
```

#### Hero Section
- [ ] Profile photo (Me.jpg) displays
- [ ] Name: "Khaldi Abderrahmane"
- [ ] Title: "AI Engineer & Data Scientist"
- [ ] Bio text is readable
- [ ] 3 action buttons visible
- [ ] Social links (GitHub, LinkedIn, Kaggle) work

#### Navigation
- [ ] Navbar fixed at top
- [ ] Logo "KA" in top left
- [ ] Menu items clickable (Home, About, Projects, etc.)
- [ ] Smooth scroll to sections
- [ ] Mobile: Hamburger menu appears < 768px
- [ ] Mobile: Menu opens/closes correctly

#### About Section
- [ ] Professional summary displays
- [ ] 5 skill categories shown
- [ ] Skill tags rendered correctly
- [ ] Languages section (Arabic, English, French)
- [ ] Kaggle Top-700 badge visible

#### Projects Section
- [ ] 13 project cards display
- [ ] Projects ordered correctly:
  - [ ] First 5: Have "Live Demo" badge
  - [ ] Next 7: Have images
  - [ ] Last 1: Text only
- [ ] Project images load (or show placeholder)
- [ ] Tags display correctly
- [ ] "View Details" button works
- [ ] "Demo" button opens external link
- [ ] Click card → Detail page loads
- [ ] Detail page shows full info
- [ ] Back button returns to homepage

#### Experience Section
- [ ] 3 experiences display
- [ ] Timeline with dots
- [ ] CM Consulting (Dec 2024 – Apr 2025)
- [ ] ITC & CSCC (Sep 2022 – Present)
- [ ] Freelance (Jan 2023 – Present)
- [ ] Achievement bullet points visible

#### Education Section
- [ ] Master's degree (2023-2025, Grade 18/20)
- [ ] Bachelor's degree (2020-2023, Grade 17/20, Top 3)
- [ ] 3 achievement cards:
  - [ ] Kaggle Top-700 🏆
  - [ ] 2nd Place DataHack 🥈
  - [ ] 5th Place DevFest 🎖️

#### Workshops Section
- [ ] 4 workshop cards display
- [ ] Workshop images load
- [ ] Algeria 2.0 (1000+ participants)
- [ ] ITC ABC Programming
- [ ] ITC Tour
- [ ] ITC Podcast
- [ ] Topics tags visible

#### Certificates Section
- [ ] Certificates display (16 shown, expandable)
- [ ] Filter buttons work:
  - [ ] "All" shows all certificates
  - [ ] "Deep Learning" filters correctly
  - [ ] "Machine Learning" filters correctly
  - [ ] Other categories work
- [ ] Featured badges on DataCamp & NVIDIA
- [ ] Credential IDs visible
- [ ] Issuer names correct
- [ ] Dates formatted properly

#### Contact Section
- [ ] Contact form fields work
- [ ] Name input functional
- [ ] Email input functional
- [ ] Message textarea functional
- [ ] Submit button opens email client
- [ ] Location: "Aïn Naâdja, Algeria"
- [ ] Email link works
- [ ] Social icons (GitHub, LinkedIn, Kaggle) work
- [ ] Green "Available" indicator shows

#### Footer
- [ ] Copyright year: 2025
- [ ] Name: "Khaldi Abderrahmane"
- [ ] Social links work
- [ ] "Built with React, Vite, Tailwind CSS" text

### Responsive Design Test

Test at these breakpoints (use DevTools F12 → Toggle Device):

#### Desktop (1920px)
- [ ] Full layout, all columns visible
- [ ] Navbar fully expanded
- [ ] Images at full quality
- [ ] Project cards in 3 columns

#### Laptop (1366px)
- [ ] Layout adjusts smoothly
- [ ] Everything still readable
- [ ] No horizontal scroll

#### Tablet (768px)
- [ ] Hamburger menu appears
- [ ] 2 columns for projects
- [ ] Images scale appropriately
- [ ] Touch-friendly button sizes

#### Mobile (375px - iPhone SE)
- [ ] Single column layout
- [ ] Hamburger menu works
- [ ] Text is readable (not too small)
- [ ] Buttons are tappable
- [ ] No content cut off
- [ ] Profile photo scales down

### Performance Test
- [ ] No console errors (F12 → Console)
- [ ] No console warnings
- [ ] Page loads < 3 seconds
- [ ] Smooth scrolling
- [ ] Animations don't stutter
- [ ] Images load progressively

### Link Verification

**External Links:**
- [ ] GitHub: github.com/KhaldiDataPand
- [ ] LinkedIn: linkedin.com/in/abderrahmane-khaldi
- [ ] Kaggle: kaggle.com/abdelrahmanekhaldi

**Demo Links:**
- [ ] Music Generation: huggingface.co/spaces/KhaldiAbderrhmane/ABO_Tears
- [ ] Emotion Recognition: huggingface.co/spaces/KhaldiAbderrhmane/Text-Emotion-Recognition
- [ ] Churn Prediction: banking-and-telecom-churn-predection.streamlit.app
- [ ] Metaheuristic: frequent-items-mining.streamlit.app
- [ ] Crack Detection: crack-detection-fastapi-production.up.railway.app

### Production Build Test
```powershell
npm run build
npm run preview
```

- [ ] Build completes without errors
- [ ] Preview server starts (localhost:4173)
- [ ] Re-test all functionality above
- [ ] Check Network tab: Assets load fast
- [ ] Total size < 500KB (gzipped)

---

## 🚀 Deployment Checklist

### GitHub Setup
- [ ] GitHub account ready
- [ ] Repository created: `Khaldi-Abderrahmane-Portfiolio`
- [ ] Repository is **public**

### Git Configuration
```powershell
# Run these commands
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M master
git remote add origin https://github.com/KhaldiDataPanda/Khaldi-Abderrahmane-Portfiolio.git
git push -u origin master
```

- [ ] All files pushed to GitHub
- [ ] Check repository on GitHub: All files visible

### GitHub Pages Setup
- [ ] Go to Settings → Pages
- [ ] Source: "GitHub Actions" (NOT "Deploy from a branch")
- [ ] Settings saved

### Deployment Verification
- [ ] Go to Actions tab
- [ ] "Deploy to GitHub Pages" workflow running
- [ ] Wait for green checkmark (3-5 minutes)
- [ ] Both jobs complete: "build" and "deploy"

### Live Site Test
```
https://khaldidatapanda.github.io/Khaldi-Abderrahmane-Portfiolio/
```

- [ ] Site loads
- [ ] No 404 error
- [ ] All sections visible
- [ ] Navigation works
- [ ] Projects display
- [ ] Demo links work
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] HTTPS (secure connection)

---

## 🐛 Common Issues & Fixes

### Issue: Images Don't Show Locally
**Fix:**
```powershell
.\setup.ps1
```
This copies images to `public/` folder.

### Issue: Port 5173 Already in Use
**Fix:**
```powershell
npm run dev -- --port 3000
```

### Issue: Build Fails
**Fix:**
```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run build
```

### Issue: 404 on GitHub Pages
**Fixes:**
1. Check Settings → Pages → Source is "GitHub Actions"
2. Verify `vite.config.js` base: `/Khaldi-Abderrahmane-Portfiolio/`
3. Wait 5-10 minutes after first deployment
4. Hard refresh browser: Ctrl + F5

### Issue: Workflow Fails in Actions
**Fixes:**
1. Check error message in Actions tab
2. Settings → Actions → Workflow permissions → "Read and write permissions"
3. Re-run workflow from Actions tab

### Issue: Changes Not Appearing on Live Site
**Fix:**
```powershell
# Hard refresh
Ctrl + F5  (Windows)
Cmd + Shift + R  (Mac)

# Or push again
git add .
git commit -m "Update"
git push
```

---

## ✅ Post-Deployment Checklist

### Test Live Site
- [ ] Visit live URL
- [ ] Test on real mobile device
- [ ] Share with friend for feedback
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on different devices (phone, tablet, laptop)

### Share Your Portfolio
- [ ] Add to LinkedIn profile
- [ ] Add to GitHub profile README
- [ ] Add to resume
- [ ] Share on social media
- [ ] Add to Kaggle profile

### Maintenance
- [ ] Bookmark repository URL
- [ ] Note down live site URL
- [ ] Set reminder to update regularly
- [ ] Plan next projects to add

---

## 📝 Before You Deploy - Final Updates

### Important: Update Email Address

Replace `your.email@example.com` with your real email in:

1. **src/components/Footer.jsx** (Line ~35)
2. **src/components/sections/Contact.jsx** (Lines ~76, 89)

Search and replace:
```powershell
# Use VS Code Find & Replace (Ctrl+H)
Find: your.email@example.com
Replace: your-actual-email@example.com
```

### Optional: Add Missing Project Images

If you have project screenshots, name them:
- `music-generation.jpg`
- `emotion-recognition.jpg`
- `churn-prediction.jpg`
- etc.

Place in `public/Projects Pics/`

---

## 🎉 You're Ready!

Once all checks pass:

```powershell
# Deploy!
git add .
git commit -m "Ready for production"
git push
```

Watch your portfolio go live in the Actions tab! 🚀

---

**Time to Deploy: 5-10 minutes**
**Time to First Visit: Immediate after deployment** ✨
