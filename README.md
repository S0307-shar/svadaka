# Portfolio Website

A modern, responsive portfolio website built with Angular 18, Tailwind CSS, and Angular Universal for server-side rendering.

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Server-side rendering with Angular Universal
- 📱 Mobile-friendly and accessible
- 🚀 Fast performance and SEO optimized
- 💼 Sections: Hero, About, Projects, Skills, Contact

## Tech Stack

- **Frontend Framework:** Angular 18
- **Styling:** Tailwind CSS
- **SSR:** Angular Universal
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Development with SSR

To run the application with server-side rendering in development mode:
```bash
npm run dev:ssr
```

Navigate to `http://localhost:4200/`.

### Build

Build the project for production:
```bash
npm run build
```

Build with SSR:
```bash
npm run build:ssr
```

### Running the Production Server

After building with SSR, you can run the production server:
```bash
npm run serve:ssr
```

The application will be available at `http://localhost:4000/`.

## Customization

### Update Personal Information

1. **Hero Section:** Edit `src/app/components/hero/hero.component.html`
2. **About Section:** Edit `src/app/components/about/about.component.ts` and `.html`
3. **Projects:** Update the projects array in `src/app/components/projects/projects.component.ts`
4. **Skills:** Modify skills in `src/app/components/skills/skills.component.ts`
5. **Contact Info:** Update contact details in `src/app/components/contact/contact.component.html`

### Styling

- Global styles: `src/styles.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Each component has its own `.css` file

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── skills/
│   │   │   ├── contact/
│   │   │   └── footer/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   ├── main.server.ts
│   └── styles.css
├── angular.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── server.ts
```

## Deployment

### Deploy to Netlify/Vercel

1. Build the project: `npm run build`
2. Deploy the `dist/portfolio-website/browser` directory

### Deploy with SSR

For platforms that support Node.js:
1. Build with SSR: `npm run build:ssr`
2. Deploy the entire `dist` folder
3. Set the start command to: `node dist/portfolio-website/server/server.mjs`

## License

MIT License - feel free to use this project for your own portfolio!


