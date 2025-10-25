# Sharanya Vadakapur - Portfolio Website Setup Guide

## 🎉 Your Website is Ready!

Your portfolio website has been built with:
- ✅ Angular 18
- ✅ Tailwind CSS (Blue & Emerald color scheme)
- ✅ Angular Universal (SSR)
- ✅ Dark Mode Design
- ✅ Fully Responsive

## 🚀 Quick Start

The development server should already be running. If not:

```bash
npm start
```

Then open: **http://localhost:4200**

## 📝 What's Included

### ✅ Your Information
- **Name:** Sharanya Vadakapur
- **Title:** Product Engineer | Data & AI Technologist
- **Email:** svadakaa@gmail.com
- **Tagline:** "Building data-driven, scalable, and user-centric solutions."

### ✅ Sections
1. **Hero** - Big name with gradient effect, Resume/LinkedIn/GitHub CTAs
2. **About** - Professional summary + Education (Purdue University)
3. **Experience** - Workcuit AI, Purdue, IBM-Kyndryl
4. **Projects** - 6 real projects (AI CCTV, Profit Prediction, etc.)
5. **Skills** - Programming, Data & Cloud, AI & Tools
6. **Certifications** - Oracle, Google, Azure, GenAI, Python
7. **Contact** - Email & social links

### 🎨 Design Features
- **Colors:** Metallic Blue (#3B82F6) & Emerald Green (#10B981)
- **Dark Mode:** Complete dark theme throughout
- **Animations:** Smooth scroll, fade-in, slide-up effects
- **Typography:** Clean, modern font hierarchy
- **Responsive:** Mobile-first design

## 📂 Key Files to Customize

### Update Your Resume
```
src/assets/resume.pdf  ← Replace with your actual resume
```

### Update Project URLs
```
src/app/components/projects/projects.component.ts  ← Add your GitHub/demo links
```

### Update Social Links
Currently set to:
- LinkedIn: https://linkedin.com/in/sharanyavadakapur
- GitHub: https://github.com/sharanyavadakapur

## 🔧 Development Commands

```bash
# Start development server
npm start

# Start with SSR (Server-Side Rendering)
npm run dev:ssr

# Build for production
npm run build

# Build with SSR
npm run build:ssr

# Run production SSR server
npm run serve:ssr
```

## 🌐 Deployment

### Option 1: Standard Build (Netlify/Vercel)
```bash
npm run build
# Deploy the dist/portfolio-website/browser folder
```

### Option 2: SSR Build (Node.js hosting)
```bash
npm run build:ssr
# Deploy entire dist folder
# Start command: node dist/portfolio-website/server/server.mjs
```

## 📋 Next Steps

1. ✅ **Test the site** - Open http://localhost:4200
2. 📄 **Add your resume** - Replace src/assets/resume.pdf
3. 🔗 **Update project links** - Add real GitHub/demo URLs
4. 📸 **Add project images** - Replace Unsplash placeholders with your screenshots
5. 🎨 **Fine-tune colors** - Edit tailwind.config.js if needed
6. 🚀 **Deploy** - Choose your hosting platform

## 🎨 Color Scheme

Primary Colors:
- **Blue:** #3B82F6 (buttons, accents)
- **Emerald:** #10B981 (secondary accents)
- **Background:** #111827 (dark gray)
- **Text:** White and gray shades

## 💡 Tips

- All sections scroll smoothly
- Header becomes solid on scroll
- Hover effects on all interactive elements
- Mobile menu toggles automatically
- Contact form logs to console (connect to backend API)

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

---

**Built with ❤️ using Angular + Tailwind + Universal SSR**

Need help? Check the README.md for more detailed instructions!

