# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes!

### Step 1: Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages (~2-3 minutes).

### Step 2: Add Your Images

1. **Move your profile photo**:
   - Copy `Me.jpg` to the `public/` folder (it's currently in the root)
   - Or run: `Copy-Item "Me.jpg" -Destination "public\Me.jpg"`

2. **Add project screenshots**:
   - Place your project images in `public/Projects Pics/`
   - Name them to match your project IDs in `src/data/projectsData.js`

3. **Add workshop photos**:
   - Place workshop images in `public/Workshops/`

### Step 3: Test Locally

Start the development server:

```powershell
npm run dev
```

Open your browser to `http://localhost:5173`

**What to check**:
- ✅ All sections appear correctly
- ✅ Navigation works smoothly
- ✅ Your profile photo shows up
- ✅ Projects display with correct information
- ✅ Live demo links work
- ✅ Responsive on mobile (resize your browser)

### Step 4: Test Production Build

Build and preview the production version:

```powershell
npm run build
npm run preview
```

This creates an optimized build and serves it at `http://localhost:4173`

### Step 5: Deploy to GitHub Pages

#### First-time Setup:

1. **Create a GitHub repository** named `Khaldi-Abderrahmane-Portfiolio`

2. **Initialize git and push** (if not already done):
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M master
   git remote add origin https://github.com/KhaldiDataPanda/Khaldi-Abderrahmane-Portfiolio.git
   git push -u origin master
   ```

3. **Enable GitHub Pages**:
   - Go to your repo on GitHub
   - Settings → Pages
   - Under "Build and deployment" → Source: Select **"GitHub Actions"**

4. **Wait for deployment** (3-5 minutes):
   - Go to the "Actions" tab
   - Watch the workflow complete
   - Your site will be live at: `https://khaldidatapanda.github.io/Khaldi-Abderrahmane-Portfiolio/`

#### Future Updates:

Just push to master:
```powershell
git add .
git commit -m "Update portfolio"
git push
```

The site will automatically rebuild and redeploy!

## 🎨 Quick Customizations

### Update Your Email

Find and replace `your.email@example.com` in:
- `src/components/Footer.jsx`
- `src/components/sections/Contact.jsx`

### Add More Projects

Edit `src/data/projectsData.js` and add your project objects.

### Change Colors

Edit `tailwind.config.js` → `theme.extend.colors.primary`

## 🐛 Common Issues

### "npm: command not found"
- Install Node.js from https://nodejs.org/ (v18 or higher)

### Images not showing locally
- Make sure images are in the `public/` folder
- Paths in code should start with `/` (e.g., `/Me.jpg`)

### Site shows 404 on GitHub Pages
- Wait 5-10 minutes after first deployment
- Check Settings → Pages is set to "GitHub Actions"
- Verify the repo name matches the `base` in `vite.config.js`

### Port 5173 already in use
- Stop any running dev servers
- Or run on a different port: `npm run dev -- --port 3000`

## 📱 Testing Checklist

Before deploying, test these:

- [ ] Homepage loads
- [ ] All sections visible
- [ ] Navigation works (desktop & mobile menu)
- [ ] Project cards show correctly
- [ ] Click project → detail page loads
- [ ] Live demo links open in new tab
- [ ] Contact form opens email client
- [ ] Social links work
- [ ] Resize browser → responsive layout
- [ ] Check on mobile device or browser dev tools

## 🎯 Next Steps

1. **Update content**: Add more projects, update experience
2. **Add analytics**: Google Analytics or similar
3. **Custom domain**: Point your domain to GitHub Pages
4. **SEO**: Update meta tags in `index.html`
5. **Blog**: Add a blog section with MDX

## 💡 Tips

- **Development**: Changes auto-reload in dev mode
- **Performance**: Images are optimized during build
- **Animations**: Smooth by default with Framer Motion
- **Mobile**: Designed mobile-first for best UX

---

Need help? Check the main [README.md](README.md) for detailed documentation!
