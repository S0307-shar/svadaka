# 📧 Formspree Setup Instructions

Your contact form is now integrated with Formspree! Follow these steps to complete the setup:

## Step 1: Sign Up for Formspree (FREE)
1. Go to https://formspree.io
2. Click "Get Started" or "Sign Up"
3. Create a free account (you can use your GitHub account or email)

## Step 2: Create Your Form
1. Once logged in, click "New Form" or "+ New Project"
2. Give it a name like "Portfolio Contact Form"
3. Add your email: **svadakaa@gmail.com** (where you want to receive messages)
4. Click "Create Form"

## Step 3: Get Your Form ID
After creating the form, you'll see a form endpoint that looks like:
```
https://formspree.io/f/XXXXXXXX
```

The part after `/f/` is your **Form ID** (e.g., `mldejkpr`)

## Step 4: Update Your Code
Open this file:
```
src/app/components/contact/contact.component.ts
```

Find this line (around line 14):
```typescript
private formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```

Replace `YOUR_FORM_ID` with your actual form ID:
```typescript
private formspreeEndpoint = 'https://formspree.io/f/mldejkpr'; // Example
```

## Step 5: Test It!
1. Save the file
2. Your app will automatically rebuild
3. Fill out the contact form on your website
4. Check your email (svadakaa@gmail.com) for the message!

## 📩 What You'll Receive
Every time someone fills out your contact form, you'll get an email with:
- Their name
- Their email address
- Subject
- Message content

You can reply directly to them from your email!

## ⚙️ Formspree Features (Free Plan)
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (if you add them later)
- ✅ Submission dashboard

## 🔒 Security
- Formspree handles all the backend securely
- Your email stays private
- Built-in spam protection
- No server needed on your side!

## 🆘 Need Help?
If you have any issues:
1. Check the Formspree dashboard for submissions
2. Verify your form ID is correct
3. Make sure your email is verified in Formspree
4. Check spam folder for notifications

---

**That's it!** Your contact form is ready to receive messages. 🎉

