# Khaldi Abderrahmane - Portfolio

A modern, production-ready developer portfolio built with React, Vite, Tailwind CSS, and MDX. Featuring automated deployment to GitHub Pages via GitHub Actions.

![Portfolio Preview](https://img.shields.io/badge/Built%20with-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?style=for-the-badge&logo=github)

## 🚀 Live Demo

Visit the live portfolio: [https://khaldidatapanda.github.io/Khaldi-Abderrahmane-Portfiolio/](https://khaldidatapanda.github.io/Khaldi-Abderrahmane-Portfiolio/)

## ✨ Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid transitions
- **MDX Support**: Write project pages in Markdown
- **Fully Responsive**: Mobile-first design
- **SEO Optimized**: Meta tags and semantic HTML
- **Dark Theme**: Professional dark color scheme
- **GitHub Actions CI/CD**: Automated deployment
- **Performance Optimized**: Fast loading and smooth interactions

## 📋 Sections

1. **Hero** - Eye-catching introduction with profile photo
2. **About** - Professional summary and skills showcase
3. **Projects** - Featured work with live demos and detailed pages
4. **Experience** - Professional work history
5. **Education** - Academic background and achievements
6. **Workshops** - Speaking engagements and teaching experience
7. **Certificates** - Professional certifications with filtering
8. **Contact** - Get in touch form and social links

## 🛠️ Technologies

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX for rich content pages
- **Icons**: React Icons
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/KhaldiDataPanda/Khaldi-Abderrahmane-Portfiolio.git
   cd Khaldi-Abderrahmane-Portfiolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

The site will automatically reload when you make changes to the source files.

## 🧪 Testing Locally

### Test the Development Build
```bash
npm run dev
```
- Check all sections load correctly
- Test navigation between pages
- Verify responsive design on different screen sizes
- Test all external links
- Check project detail pages

### Test the Production Build
```bash
npm run build
npm run preview
```
This builds the production version and serves it locally at `http://localhost:4173`

### Manual Testing Checklist

- [ ] All sections visible and styled correctly
- [ ] Navigation menu works on desktop and mobile
- [ ] Project cards display properly with images
- [ ] Live demo links open correctly
- [ ] Project detail pages load and display information
- [ ] Contact form mailto link works
- [ ] Social media links are correct
- [ ] Site is responsive on mobile devices
- [ ] Images load correctly (or show placeholders)
- [ ] Animations are smooth
- [ ] No console errors

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `master` branch.

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"

2. **Push to master branch**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin master
   ```

3. **Wait for deployment**
   - Go to Actions tab in your repository
   - Watch the deployment workflow run
   - Once complete, your site will be live!

4. **Access your site**
   ```
   https://khaldidatapanda.github.io/Khaldi-Abderrahmane-Portfiolio/
   ```

### Option 2: Manual Deployment with gh-pages

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

This builds the project and pushes it to the `gh-pages` branch.

### Important Configuration

Make sure the `base` in `vite.config.js` matches your repository name:

```javascript
export default defineConfig({
  base: '/Khaldi-Abderrahmane-Portfiolio/',
  // ... other config
})
```

## 📁 Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── favicon.svg             # Site favicon
│   ├── Me.jpg                  # Profile photo
│   ├── Projects Pics/          # Project screenshots
│   └── Workshops/              # Workshop photos
├── src/
│   ├── components/
│   │   ├── sections/           # Section components
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Workshops.jsx
│   │   │   ├── Certificates.jsx
│   │   │   └── Contact.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── projectsData.js     # Projects data
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── ProjectDetailPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Profile Photo**: Replace `/public/Me.jpg` with your photo
2. **Projects**: Edit `src/data/projectsData.js`
3. **Certificates**: Update `src/components/sections/Certificates.jsx`
4. **Experience**: Modify `src/components/sections/Experience.jsx`
5. **Contact Info**: Update links in `src/components/sections/Contact.jsx`

### Add Project Screenshots

1. Place images in `/public/Projects Pics/`
2. Name them according to project IDs in `projectsData.js`
3. Update image paths in the data file

### Change Color Scheme

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

## 📝 Adding New Projects

Edit `src/data/projectsData.js`:

```javascript
{
  id: 'your-project-slug',
  title: 'Project Title',
  category: 'Category',
  tags: ['Tag1', 'Tag2'],
  description: 'Project description',
  demoLink: 'https://demo-link.com',
  image: '/Projects Pics/project-image.jpg',
  hasDemo: true,
  hasPic: true,
  priority: 1  // 1=demo+pic, 2=pic only, 3=no pic
}
```

## 🐛 Troubleshooting

### Site shows 404 on GitHub Pages
- Ensure GitHub Pages is enabled and set to "GitHub Actions"
- Check that the `base` in `vite.config.js` matches your repo name
- Wait a few minutes after deployment

### Images not loading
- Verify images are in `/public/` directory
- Check image paths start with `/`
- Ensure images are pushed to the repository

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check for console errors in the terminal
- Ensure Node.js version is 18 or higher

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **GitHub**: [@KhaldiDataPand](https://github.com/KhaldiDataPand)
- **LinkedIn**: [Abderrahmane Khaldi](https://linkedin.com/in/abderrahmane-khaldi)
- **Kaggle**: [Abdelrahmane Khaldi](https://kaggle.com/abdelrahmanekhaldi)

---

Built with ❤️ by Khaldi Abderrahmane
