# 🚀 Deployment Guide - GitHub + Vercel + Firebase

## Part 1: Push to GitHub 📦

### Step 1: Initialize Git Repository
```bash
cd /Users/sharanyavadakapur/Desktop/website
git init
git add .
git commit -m "Initial commit: Portfolio website with Angular + Tailwind + SSR"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio-website` (or whatever you prefer)
3. Description: "Personal portfolio website built with Angular, Tailwind CSS, and Angular Universal"
4. Keep it **Public** (so Vercel can access it for free)
5. **DON'T** initialize with README (you already have files)
6. Click "Create repository"

### Step 3: Push to GitHub
After creating the repo, GitHub will show you commands. Use these:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username!

---

## Part 2: Deploy to Vercel 🚀

### Step 1: Sign Up for Vercel
1. Go to https://vercel.com/signup
2. **Sign up with GitHub** (easiest!)
3. Authorize Vercel to access your repositories

### Step 2: Import Your Project
1. Click "Add New..." → "Project"
2. Find your `portfolio-website` repository
3. Click "Import"

### Step 3: Configure Build Settings
Vercel should auto-detect Angular. If not, use these settings:
- **Framework Preset**: Angular
- **Build Command**: `npm run build`
- **Output Directory**: `dist/portfolio-website/browser`
- **Install Command**: `npm install`

Click **Deploy**! 🎉

### Step 4: Wait for Deployment
- First deployment takes 2-5 minutes
- You'll get a live URL like: `https://portfolio-website-xxx.vercel.app`
- Every git push will auto-deploy!

---

## Part 3: Firebase Setup (Optional - for Firebase Analytics) 📊

### Step 1: Install Firebase Tools
```bash
npm install -g firebase-tools
```

### Step 2: Login to Firebase
```bash
firebase login
```

### Step 3: Create Firebase Project
1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Name it: `portfolio-website`
4. **Disable Google Analytics for now** (we'll use Google Analytics 4 directly)
5. Click "Create project"

### Step 4: Initialize Firebase
```bash
firebase init hosting
```

Select:
- **Use existing project** → Choose your project
- **Public directory**: `dist/portfolio-website/browser`
- **Single-page app**: **Yes**
- **Overwrite index.html**: **No**

### Step 5: Deploy to Firebase (Alternative to Vercel)
```bash
npm run build
firebase deploy
```

You'll get a URL like: `https://portfolio-website.web.app`

---

## Part 4: Google Analytics Setup 📈

### Step 1: Create Google Analytics Account
1. Go to https://analytics.google.com
2. Click "Start measuring"
3. Account name: "Portfolio"
4. Property name: "Portfolio Website"
5. Choose your timezone and currency
6. Click "Create"

### Step 2: Get Your Measurement ID
1. After creating, go to **Admin** → **Data Streams**
2. Click "Add stream" → "Web"
3. Enter your website URL (from Vercel or Firebase)
4. Click "Create stream"
5. Copy your **Measurement ID** (looks like: `G-XXXXXXXXXX`)

### Step 3: Update Your Code
Open `src/index.html` and replace `G-XXXXXXXXXX` with your actual Measurement ID:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ACTUAL-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-ACTUAL-ID');
</script>
```

### Step 4: Push Changes
```bash
git add .
git commit -m "Add Google Analytics tracking"
git push
```

Vercel will auto-deploy the changes! 🎉

---

## 📊 What You'll Track with Google Analytics:

✅ **Page views** - How many people visit your site  
✅ **Unique visitors** - How many different people  
✅ **Bounce rate** - If people leave quickly  
✅ **Session duration** - How long they stay  
✅ **Traffic sources** - Where visitors come from (LinkedIn, GitHub, etc.)  
✅ **Geographic data** - Where your visitors are located  
✅ **Device breakdown** - Mobile vs Desktop  
✅ **Real-time visitors** - See who's on your site right now!  

---

## 🎯 Recommended: Use Vercel (Not Firebase)

**Why Vercel over Firebase for this project:**
- ✅ Better Angular Universal (SSR) support
- ✅ Automatic GitHub integration
- ✅ Faster deployments
- ✅ Free forever for personal projects
- ✅ Better performance (global CDN)

**Use Firebase only if you need:**
- Firebase Authentication
- Firestore Database
- Firebase Functions

For your portfolio, **Vercel + Google Analytics is perfect!**

---

## 🔗 Quick Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Google Analytics**: https://analytics.google.com
- **Firebase Console**: https://console.firebase.google.com
- **GitHub Repo**: https://github.com/YOUR_USERNAME/portfolio-website

---

## 🆘 Troubleshooting

### Build fails on Vercel?
- Check Node.js version (should be 18.x or higher)
- Make sure all dependencies are in `package.json`
- Check build logs for specific errors

### Analytics not working?
- Wait 24-48 hours for data to appear
- Check browser console for errors
- Make sure you replaced `G-XXXXXXXXXX` with real ID
- Test in Incognito mode (ad blockers can block GA)

### Need help?
- Check Vercel docs: https://vercel.com/docs
- Check Angular docs: https://angular.io/guide/deployment

---

**That's it! Your portfolio will be live and tracked! 🎉**

