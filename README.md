# PopX — React JS Intern/Fresher Qualifier Task

A pixel-perfect mobile app UI built with **React JS**, centered on the webpage like a real phone interface. Navigation between all pages works seamlessly using React Router.

---

## 📱 Live Demo

> **Hosted Link:** `https://your-app.netlify.app` *(replace after deploying)*

---


## 🖼️ Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Welcome screen with Create Account & Login buttons |
| Register | `/register` | Sign up form with floating labels & agency radio |
| Login | `/login` | Sign in with email & password |
| Account Settings | `/account` | Profile card with avatar, name, email & bio |

---

## 🛠️ Tech Stack

- **React JS** (v18)
- **React Router DOM** (v6) — client-side navigation
- **CSS Modules** — scoped, component-level styles
- **Google Fonts** — Inter typeface
- No external UI libraries — built from scratch

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 14
- npm >= 6

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/popx-app.git

# 2. Navigate into the project
cd popx-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output is in the `/build` folder — ready to deploy.

---

## ☁️ Deployment (Netlify)

### Option 1 — Drag & Drop
1. Run `npm run build`
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag the `/build` folder onto the page

### Option 2 — CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Option 3 — Connect GitHub
1. Push code to GitHub
2. Log in to [netlify.com](https://netlify.com)
3. Click **"Add new site" → "Import from Git"**
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Click **Deploy**

---

## 📁 Project Structure

```
popx/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Landing.js        # Welcome screen
│   │   ├── Landing.css
│   │   ├── Register.js       # Sign up form
│   │   ├── Register.css
│   │   ├── Login.js          # Sign in form
│   │   ├── Login.css
│   │   ├── AccountSettings.js # Profile page
│   │   └── AccountSettings.css
│   ├── App.js                # Router setup
│   ├── index.js              # Entry point
│   └── index.css             # Global styles & phone shell
├── .gitignore
├── package.json
└── README.md
```

---

## 🎨 Design Reference

Original design: [Adobe XD Link](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd)

### Design Tokens

| Token | Value |
|-------|-------|
| Primary (Purple) | `#6C25FF` |
| Secondary (Pink) | `#F48BB0` |
| Background | `#EEF2FB` |
| Text Dark | `#1A1A2E` |
| Text Gray | `#888888` |
| Label Purple | `#7B4FE0` |
| Border | `#D0D7F5` |
| Font | Inter (Google Fonts) |

---


## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your@email.com
