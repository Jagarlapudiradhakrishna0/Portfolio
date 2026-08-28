# Jagarlapudi Radha Krishna — Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Site-Visit_Portfolio-blue?style=for-the-badge&logo=github)](https://jagarlapudiradhakrishna0.github.io/Portfolio/)
[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> **Live Demo:** [https://jagarlapudiradhakrishna0.github.io/Portfolio/](https://jagarlapudiradhakrishna0.github.io/Portfolio/)

---

## 🚀 Overview

A high-performance, futuristic personal portfolio engineered with **React 18**, **TypeScript**, **Three.js / React Three Fiber**, **Framer Motion**, and **Vite**. Features a signature dark glassmorphism design (Black × White × Electric Blue), interactive 3D particle background scene, infinite-scrolling marquee for technical skills, verified certificate showcase with interactive modal viewer, and featured project case studies.

---

## ✨ Key Features

- **⚡ 3D Interactive Canvas**: Dynamic, floating particle & geometric wireframe mesh powered by `@react-three/fiber` and `three`.
- **💎 Glassmorphic UI**: Tailored dark-mode palette with blur filters, subtle glowing borders, and fluid micro-animations.
- **🔄 Infinite Technical Skills Marquee**: 3 continuously moving marquee rows with authentic vector brand logos, hover-pause mechanics, and interactive domain filtering (`Programming`, `Web`, `Backend`, `Database`, `Cloud & Tools`, `AI / ML`).
- **📜 Verified Credentials Showcase**: Sliding-window carousel and full-screen modal viewer displaying 4 Virtual Internship certificates and 17 specialized Course credentials.
- **💼 Featured Projects**: Highlights real-world platforms including *Lost & Found*, *RYDO* (in development), *Mia AI Assistant*, and *Luxe Store*.
- **📱 Fully Responsive**: Optimized layouts and fluid typography across mobile, tablet, laptop, and ultra-wide screens with full `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

### Core & Framework
- **Frontend Library:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 5](https://vitejs.dev/)

### 3D & Animation
- **3D Graphics:** [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) / [@react-three/drei](https://github.com/pmndrs/drei)
- **Transitions & Micro-animations:** [Framer Motion](https://www.framer.com/motion/)

### Styling & Icons
- **Styles:** Vanilla CSS Modules with custom design tokens (`globals.css`)
- **Icons:** Custom SVG vector logos & Lucide icons

---

## 📂 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── certificates/
│   │   ├── internships/          # Virtual Internship PDFs
│   │   └── courses/              # Specialized Course PDFs
│   ├── Jagarlapudi_Radha_Krishna_Resume.pdf
│   ├── profile.png
│   ├── project1.png - project3.png
│   ├── rydo.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── 3d/                   # Three.js BackgroundScene
│   │   ├── layout/               # Navbar, Footer, CustomCursor, LoadingScreen
│   │   ├── sections/             # Hero, About, Skills, Experience, Projects, Certificates, Contact
│   │   └── ui/                   # CertificateViewer, TechLogos
│   ├── data/
│   │   └── portfolio.ts          # Central source of truth for portfolio data
│   ├── styles/
│   │   └── globals.css           # Global design system & theme tokens
│   ├── App.tsx
│   └── main.tsx
├── dist/                         # Generated production build
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) and `npm` installed.

### 2. Clone the Repository
```bash
git clone https://github.com/Jagarlapudiradhakrishna0/Portfolio.git
cd Portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Local Dev Server
```bash
npm run dev
```
Open [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/) in your browser.

### 5. Build for Production
```bash
npm run build
```
Generates the optimized static build in the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment

The project is configured for automated deployment to **GitHub Pages**:
- Pushes to the `main` branch trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`.
- The production build is hosted at: `https://jagarlapudiradhakrishna0.github.io/Portfolio/`

---

## 📬 Contact & Connect

**Jagarlapudi Radha Krishna**  
Full Stack Developer & AI/ML Engineer  

- **GitHub:** [@jagarlapudiradhakrishna0](https://github.com/jagarlapudiradhakrishna0)
- **LinkedIn:** [linkedin.com/in/jagarlapudiradhakrishna](https://www.linkedin.com/in/jagarlapudiradhakrishna/)
- **Email:** [radhakrishnajagarlapudi@gmail.com](mailto:radhakrishnajagarlapudi@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
