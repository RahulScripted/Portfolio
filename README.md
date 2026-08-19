<div align="center">

# 📰 The Rahul Goswami Times

### A vintage editorial newspaper / detective dossier themed personal portfolio

Cream paper background · Serif headlines · Monospace metadata · Red rubber-stamp accents

<br/>

![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.0-4B32C3?style=flat-square&logo=eslint&logoColor=white)

<br/>

<img src="https://skillicons.dev/icons?i=vite,react,tailwindcss,framer,vercel,typescript&theme=dark" alt="tech stack icons" />

</div>

<br/>

---

## 🧱 Tech Stack

<div align="center">

| Layer | Technology | |
|---|---|---|
| **Build Tool** | Vite 6.4 | ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **Framework** | React 18.3 | ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) |
| **Language** | TypeScript 5.0 | ![TS](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Styling** | Tailwind CSS 3.4 | ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| **Animations** | Framer Motion 11.1 | ![Framer](https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) |
| **Forms** | Web3Forms (no-server) | ![Web3Forms](https://img.shields.io/badge/-Web3Forms-00C853?style=flat-square) |
| **APIs** | Vercel Serverless Functions | ![Vercel](https://img.shields.io/badge/-Serverless-black?style=flat-square&logo=vercel&logoColor=white) |
| **Fonts** | Playfair Display + Space Mono | ![Google Fonts](https://img.shields.io/badge/-Google_Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white) |
| **Deployment** | Vercel | ![Vercel](https://img.shields.io/badge/-Vercel-black?style=flat-square&logo=vercel&logoColor=white) |

</div>

---

## 📁 Project Structure

<details open>
<summary><b>Click to expand / collapse the full directory tree</b></summary>

```
Portfolio/
├── public/
│   └── logo.svg
│
├── src/
│   ├── animations/
│   │   └── index.jsx              ← shared animation utilities
│   │
│   ├── assets/
│   │   ├── jpeg/
│   │   │   └── profile.png
│   │   ├── projects/
│   │   │   ├── projects1.png
│   │   │   ├── projects2.png
│   │   │   └── projects3.png
│   │   └── cv.pdf
│   │
│   ├── components/
│   │   ├── book-call/
│   │   │   ├── components/        ← book-call sub-components
│   │   │   └── index.jsx
│   │   ├── career/
│   │   │   └── index.jsx          ← career ledger section
│   │   ├── contact/
│   │   │   ├── components/        ← contact form components
│   │   │   └── index.jsx          ← letters & commissions section
│   │   ├── education/
│   │   │   └── index.jsx
│   │   ├── footer/
│   │   │   ├── parts/             ← footer sub-components
│   │   │   └── index.jsx
│   │   ├── hero/
│   │   │   └── index.jsx          ← hero masthead section (#top)
│   │   ├── lab-report/
│   │   │   ├── components/        ← tech stack components
│   │   │   └── index.jsx          ← lab report section (#stack)
│   │   ├── loader/
│   │   │   └── index.jsx
│   │   ├── masthead/
│   │   │   └── index.jsx
│   │   ├── nav/
│   │   │   └── index.jsx          ← navigation component
│   │   ├── projects/
│   │   │   ├── components/        ← project card components
│   │   │   └── index.jsx          ← the evidence section (#work)
│   │   └── scroll-link/
│   │       └── index.jsx
│   │
│   ├── types/
│   │   ├── carrers/               ← career type definitions
│   │   ├── contact/               ← contact form types
│   │   ├── education/             ← education types
│   │   ├── hero/                  ← hero section types
│   │   ├── projects/              ← project types
│   │   ├── shared/                ← shared type definitions
│   │   └── stack/
│   │       ├── labels/            ← stack label components
│   │       ├── nodes/             ← stack node components
│   │       ├── threads/           ← stack thread components
│   │       ├── zones/             ← stack zone components
│   │       └── index.js           ← stack type definitions
│   │
│   ├── App.jsx
│   ├── index.css                  ← base styles & Tailwind imports
│   └── main.jsx
│
├── api/
│   ├── codechef.js                ← Vercel serverless: CodeChef stats
│   ├── github.js                  ← Vercel serverless: GitHub stats
│   └── leetcode.js                ← Vercel serverless: LeetCode stats
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js             ← theme colors & customisation
├── vercel.json                    ← Vercel configuration
└── vite.config.js
```

</details>

---

## 🗺️ App Flow

```mermaid
flowchart TD
    A([🚀 Landing]) --> B

    B["📰 Hero Masthead<br/>(#top)"] --> C{Explore}

    C -->|About| D["📋 The Full Story<br/>(#about)"]
    C -->|Work| E["🔍 The Evidence<br/>(#work)"]
    C -->|Stack| F["🧪 Lab Report<br/>(#stack)"]
    C -->|Experience| G["📒 Career Ledger<br/>(#ledger)"]
    C -->|Contact| H["✉️ Letters & Commissions<br/>(#contact)"]

    D --> I[Scroll Navigation]
    E --> I
    F --> I
    G --> I
    H --> I

    I -.->|Click nav link| B

    style A fill:#F5F5DC,color:#1a1a1a,stroke:#8B0000,stroke-width:2px
    style B fill:#FFF8DC,color:#1a1a1a,stroke:#8B0000,stroke-width:2px
    style C fill:#FFF8DC,color:#1a1a1a,stroke:#8B0000,stroke-width:2px
    style D fill:#FFF8DC,color:#1a1a1a,stroke:#8B0000,stroke-width:2px
    style E fill:#FFF8DC,color:#1a1a1a,stroke:#8B0000,stroke-width:2px
    style F fill:#FFF8DC,color:#1a1a1a,stroke:#8B0000,stroke-width:2px
    style G fill:#FFF8DC,color:#1a1a1a,stroke:#8B0000,stroke-width:2px
    style H fill:#FFF8DC,color:#1a1a1a,stroke:#8B0000,stroke-width:2px
    style I fill:#FFE4B5,color:#1a1a1a,stroke:#8B0000,stroke-width:2px
```

---

## 📰 Sections

| Anchor | Section | Description |
|--------|---------|-------------|
| `#top` | Hero Masthead | Main landing area with newspaper-style masthead |
| `#about` | The Full Story | Biography and skills overview |
| `#work` | The Evidence | Project showcase with case-file styling |
| `#stack` | Lab Report | Technology stack in tabular format |
| `#ledger` | Career Ledger | Work experience timeline |
| `#contact` | Letters & Commissions | Contact form (Web3Forms) |

---

## 🚀 Getting Started

### Prerequisites

![Node](https://img.shields.io/badge/Node.js-%3E%3D18-339933?style=flat-square&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-10.x-CB3837?style=flat-square&logo=npm&logoColor=white)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview   # preview the dist/ output locally
```

---

## 🏗️ Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🎨 Customisation

### Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Content
Edit the data arrays at the top of each component file in `src/components/`

### Contact Form
Update `src/components/contact/index.jsx` → `access_key` value (Web3Forms)

---

## 🤝 Contributing

```bash
# 1. Create a feature branch
git checkout -b feature/<short-description>

# 2. Make your changes
npm run lint

# 3. Stage and commit
git add .
git commit -m "feat: add new section"

# 4. Push and open a PR
git push origin feature/<short-description>
```

---

## 📜 License

Personal portfolio — open source for reference.

---

<div align="center">

Made by Rahul Goswami 📰

</div>