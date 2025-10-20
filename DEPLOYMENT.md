# 🚀 Complete Deployment Guide

## Table of Contents
1. [Local Testing](#local-testing)
2. [GitHub Pages Deployment](#github-pages-deployment)
3. [Custom Domain Setup](#custom-domain-setup)
4. [Troubleshooting](#troubleshooting)

---

## Local Testing

### Initial Setup

1. **Install Node.js**
   - Download from https://nodejs.org/ (LTS version)
   - Verify installation:
     ```powershell
     node --version  # Should show v18+ or higher
     npm --version
     ```

2. **Prepare Images**
   
   Run the setup script:
   ```powershell
   .\setup.ps1
   ```
   
   Or manually:
   ```powershell
   # Copy profile photo
   Copy-Item "Me.jpg" -Destination "public\Me.jpg"
   
   # Copy project screenshots
   Copy-Item "Projects Pics\*" -Destination "public\Projects Pics\" -Recurse
   
   # Copy workshop photos
   Copy-Item "Workshops\*" -Destination "public\Workshops\" -Recurse
   ```

3. **Install Dependencies**
   ```powershell
   npm install
   ```
   
   This installs:
   - React & React Router
   - Vite (build tool)
   - Tailwind CSS (styling)
   - Framer Motion (animations)
   - MDX (rich content)
   - And more...

### Development Server

Start the development server:
```powershell
npm run dev
```

**Expected output:**
```
VITE v5.4.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

**Features:**
- ✅ Hot Module Replacement (instant updates)
- ✅ Fast refresh (preserves component state)
- ✅ Error overlay (shows build errors)

**Testing Checklist:**

Open http://localhost:5173 and verify:

- [ ] **Hero Section**: Profile photo, name, title appear
- [ ] **Navigation**: Click menu items, smooth scroll works
- [ ] **Mobile Menu**: Resize browser, hamburger menu appears
- [ ] **About Section**: Skills and bio display correctly
- [ ] **Projects Section**: 
  - [ ] Project cards show (with images if added)
  - [ ] Live demo badges appear on projects with demos
  - [ ] Projects are ordered (demos first, then pics, then others)
  - [ ] Click "View Details" opens project page
  - [ ] Click "Demo" opens external link in new tab
- [ ] **Experience Section**: Timeline displays correctly
- [ ] **Education Section**: Degrees and achievements show
- [ ] **Workshops Section**: Workshop cards with photos
- [ ] **Certificates Section**: 
  - [ ] All certificates display
  - [ ] Filter buttons work
  - [ ] Featured badges on DataCamp and NVIDIA certs
- [ ] **Contact Section**: 
  - [ ] Form fields work
  - [ ] Submit button opens email client
  - [ ] Social links are correct
- [ ] **Footer**: Year and links appear

**Responsive Testing:**

1. Desktop (1920px): Full layout with all columns
2. Tablet (768px): Collapsed grid, hamburger menu
3. Mobile (375px): Single column, touch-friendly buttons

Use browser DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)

### Production Build Test

Build for production:
```powershell
npm run build
```

**Expected output:**
```
vite v5.4.0 building for production...
✓ 1234 modules transformed.
dist/index.html                   1.23 kB │ gzip: 0.45 kB
dist/assets/index-abc123.css     45.67 kB │ gzip: 12.34 kB
dist/assets/index-def456.js     234.56 kB │ gzip: 78.90 kB
✓ built in 3.45s
```

Preview the build:
```powershell
npm run preview
```

Opens at http://localhost:4173

**What's different from dev:**
- ✅ Minified and optimized code
- ✅ Code splitting for faster loading
- ✅ CSS is extracted and compressed
- ✅ Images are optimized
- ✅ Source maps for debugging

Test everything again on the preview server!

---

## GitHub Pages Deployment

### Method 1: Automatic (Recommended)

Uses GitHub Actions for CI/CD - deploys automatically on every push.

#### Setup Steps:

1. **Create GitHub Repository**
   
   On GitHub.com:
   - Click "New repository"
   - Name: `Khaldi-Abderrahmane-Portfiolio`
   - Description: "Personal portfolio showcasing AI/ML projects"
   - Public repository
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Connect Local to GitHub**
   
   ```powershell
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial portfolio commit"
   
   # Rename branch to master (if needed)
   git branch -M master
   
   # Add remote
   git remote add origin https://github.com/KhaldiDataPanda/Khaldi-Abderrahmane-Portfiolio.git
   
   # Push
   git push -u origin master
   ```

3. **Enable GitHub Pages**
   
   On your GitHub repository:
   - Go to **Settings** (top right)
   - Scroll to **Pages** (left sidebar)
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions" (not Deploy from a branch)
   - Click Save (if prompted)

4. **Trigger Deployment**
   
   The GitHub Action should run automatically. If not:
   ```powershell
   # Make a small change and push
   git commit --allow-empty -m "Trigger deployment"
   git push
   ```

5. **Monitor Deployment**
   
   - Go to **Actions** tab in your repository
   - You'll see a workflow run called "Deploy to GitHub Pages"
   - Click it to see progress
   - Wait for both "build" and "deploy" jobs to complete (✅ green checkmark)
   - Takes 3-5 minutes

6. **Access Your Site**
   
   Once deployment is complete:
   ```
   https://khaldidatapanda.github.io/Khaldi-Abderrahmane-Portfiolio/
   ```

#### Future Updates:

Just push to master:
```powershell
git add .
git commit -m "Update projects"
git push
```

The site rebuilds automatically! ✨

### Method 2: Manual with gh-pages Package

Uses the `gh-pages` npm package.

```powershell
# Build and deploy in one command
npm run deploy
```

This:
1. Builds the production version
2. Creates/updates `gh-pages` branch
3. Pushes to GitHub

**Setup GitHub Pages:**
- Settings → Pages
- Source: "Deploy from a branch"
- Branch: "gh-pages" / (root)

---

## Custom Domain Setup

Want to use your own domain (e.g., `khaldiabdo.com`)?

### 1. Update Vite Config

Edit `vite.config.js`:
```javascript
export default defineConfig({
  base: '/',  // Change from repo name to just /
  // ... rest of config
})
```

### 2. Add CNAME File

Create `public/CNAME`:
```
your-domain.com
```

### 3. Configure DNS

At your domain registrar, add DNS records:

**For apex domain (example.com):**
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

**For subdomain (www.example.com):**
```
CNAME    www    khaldidatapanda.github.io
```

### 4. Enable in GitHub

- Settings → Pages
- Custom domain: Enter your domain
- Wait for DNS check (can take up to 48 hours)
- Enable "Enforce HTTPS"

### 5. Rebuild and Deploy

```powershell
npm run build
git add .
git commit -m "Add custom domain"
git push
```

---

## Troubleshooting

### Build Errors

**Error: "npm: command not found"**
- Install Node.js from https://nodejs.org/

**Error: "Module not found"**
```powershell
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

**Error: "Out of memory"**
```powershell
# Increase Node memory
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Deployment Issues

**Site shows 404 page**

Possible causes:
1. GitHub Pages not enabled correctly
   - Check Settings → Pages → Source is "GitHub Actions"
   
2. Base path mismatch
   - `vite.config.js` base should match repo name
   - Should be: `/Khaldi-Abderrahmane-Portfiolio/`
   
3. Deployment not complete
   - Check Actions tab for errors
   - Wait 5-10 minutes after first deploy

**Workflow fails in Actions**

Check the error in Actions tab:
- Build errors: Fix code issues, push again
- Permission errors: Settings → Actions → Workflow permissions → "Read and write"
- Pages not enabled: Settings → Pages → Enable GitHub Pages

**Changes not appearing**

```powershell
# Hard refresh browser
Ctrl + F5  # Windows
Cmd + Shift + R  # Mac

# Or clear cache
# Chrome: Ctrl + Shift + Delete → Clear cached images and files
```

**Images not loading**

1. Check files are in `public/` folder
2. Paths should start with `/`
   ```jsx
   // ✅ Correct
   <img src="/Me.jpg" />
   
   // ❌ Wrong
   <img src="Me.jpg" />
   <img src="./Me.jpg" />
   ```
3. Verify images are committed to git:
   ```powershell
   git add public/Me.jpg
   git commit -m "Add profile photo"
   git push
   ```

### Performance Issues

**Slow loading**

1. Optimize images before adding:
   - Use JPEG for photos (smaller)
   - Max width: 1920px
   - Compress with tools like TinyPNG

2. Check bundle size:
   ```powershell
   npm run build
   # Look at asset sizes in output
   ```

3. Use browser DevTools:
   - Network tab → See what's slow
   - Lighthouse → Performance audit

**Animations laggy**

- Reduce `motion-reduce` for accessibility
- Test on actual mobile devices, not just DevTools

### Development Issues

**Port already in use**

```powershell
# Use different port
npm run dev -- --port 3000
```

**Hot reload not working**

```powershell
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

**Styles not updating**

```powershell
# Rebuild Tailwind
# Stop server (Ctrl+C)
Remove-Item -Recurse -Force .vite
npm run dev
```

---

## Getting Help

If you encounter issues:

1. **Check the README**: Main [README.md](README.md)
2. **Check browser console**: F12 → Console tab
3. **Check terminal output**: Look for error messages
4. **GitHub Issues**: Check if others had similar problems
5. **Vite Docs**: https://vitejs.dev/
6. **React Docs**: https://react.dev/

---

## Useful Commands Reference

```powershell
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Deployment
npm run deploy           # Manual deploy to gh-pages
git push                 # Automatic deploy (if set up)

# Maintenance
npm install              # Install dependencies
npm update               # Update dependencies
npm audit fix            # Fix security issues

# Git
git status               # Check changes
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push                 # Push to GitHub
git log --oneline        # View commit history
```

---

## Next Steps After Deployment

✅ Your portfolio is live! Now:

1. **Share it**: Add link to LinkedIn, GitHub profile, resume
2. **Monitor**: Check Google Search Console, analytics
3. **Update regularly**: Keep projects and experience current
4. **SEO**: Submit sitemap to search engines
5. **Backup**: Keep local backup of your content

---

**Congratulations! Your portfolio is now live! 🎉**

Visit: https://khaldidatapanda.github.io/Khaldi-Abderrahmane-Portfiolio/
