# ⚡ Quick Deployment Checklist

## 1️⃣ GitHub Setup (5 minutes)

```bash
# In your terminal, run these commands:
cd /Users/sharanyavadakapur/Desktop/website
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

**Then:**
1. Go to https://github.com/new
2. Create repo called `portfolio-website` (Public)
3. Run these (replace YOUR_USERNAME):
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

---

## 2️⃣ Vercel Deployment (3 minutes)

1. Go to https://vercel.com/signup
2. **Sign up with GitHub**
3. Click "Add New..." → "Project"
4. Select your `portfolio-website` repo
5. Click **Deploy**
6. Wait 2-3 minutes... **DONE!** 🎉

Your site will be live at: `https://portfolio-website-xxx.vercel.app`

---

## 3️⃣ Google Analytics (5 minutes)

1. Go to https://analytics.google.com
2. Click "Start measuring"
3. Create account & property
4. Get your **Measurement ID** (looks like: `G-ABC123XYZ`)
5. Open `src/index.html` and replace:
   ```
   G-XXXXXXXXXX  →  G-ABC123XYZ
   ```
6. Commit and push:
```bash
git add .
git commit -m "Add Google Analytics"
git push
```

---

## 4️⃣ Formspree (2 minutes)

1. Go to https://formspree.io
2. Sign up and create a form
3. Add email: `svadakaa@gmail.com`
4. Get Form ID (like: `mldejkpr`)
5. Open `src/app/components/contact/contact.component.ts`
6. Replace `YOUR_FORM_ID` with your actual ID
7. Commit and push:
```bash
git add .
git commit -m "Add Formspree form ID"
git push
```

---

## ✅ Total Time: ~15 minutes

**What you'll have:**
- ✅ Live website on Vercel
- ✅ Auto-deploys from GitHub
- ✅ Analytics tracking views & clicks
- ✅ Working contact form
- ✅ Custom domain ready (optional)

---

## 🔗 Your URLs

After deployment:
- **Live Site**: Check Vercel dashboard
- **Analytics**: https://analytics.google.com
- **GitHub Repo**: https://github.com/YOUR_USERNAME/portfolio-website

---

## 📱 Share Your Portfolio

Once live, share it on:
- LinkedIn profile (featured section)
- GitHub profile README
- Resume (website link)
- Twitter/X bio
- Email signature

---

**Need help? Check `DEPLOYMENT_GUIDE.md` for detailed instructions!**

