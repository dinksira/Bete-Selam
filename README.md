# 🏥 Bete Selam Hospital - Modern Healthcare Platform

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://bete-selam.vercel.app/)

**A modern, bilingual healthcare platform serving the Ethiopian community**

[Live Demo](https://bete-selam.vercel.app/) · [Report Bug](https://github.com/dinksira/Bete-Selam/issues) · [Request Feature](https://github.com/dinksira/Bete-Selam/issues)

</div>

## ✨ Features

### 🌐 Bilingual Support
- **Amharic & English** - Seamlessly switch between languages
- **Cultural Sensitivity** - Designed specifically for Ethiopian patients
- **Accessible Interface** - Clear navigation in both languages

### 🎯 Core Functionalities
- **🏠 Home** - Welcome and introduction to hospital services
- **👨‍⚕️ Find Doctors** - Search and browse medical specialists
- **🩺 Services** - Comprehensive medical services overview
- **🚑 Emergency** - 24/7 emergency contact and information
- **📅 Book Appointments** - Easy appointment scheduling
- **📞 Contact** - Multiple location contacts and directions
- **ℹ️ About** - Hospital history and values

### 🎨 Modern Design
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Ethiopian Aesthetics** - Cultural patterns and color schemes
- **Fast Performance** - Optimized with Next.js and Turbopack
- **Accessible** - WCAG compliant design principles

## 🚀 Live Demo

Visit the live application: **[https://bete-selam.vercel.app/](https://bete-selam.vercel.app/)**

## 🛠 Tech Stack

**Frontend:**
- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better developer experience
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Reusable component library
- [Lucide React](https://lucide.dev/) - Beautiful icons

**Deployment & Infrastructure:**
- [Vercel](https://vercel.com/) - Global deployment platform
- **Continuous Deployment** - Automatic deployments from GitHub

## 📦 Project Structure

```
src/
├── app/                 # Next.js App Router
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── ...
├── components/         # Reusable components
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx
│   └── Footer.tsx
└── lib/               # Utilities and configurations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dinksira/Bete-Selam.git
   cd beteselam
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌍 Deployment

The project is automatically deployed on **Vercel**:

- **Main Branch**: Every push to `main` triggers production deployment
- **Preview Deployments**: Every pull request gets a preview URL
- **Global CDN**: Deployed across Vercel's global edge network

## 🎯 Key Features in Detail

### Bilingual Implementation
```typescript
// Example of bilingual component
interface PageProps {
  currentLang: "en" | "am";
  onBack: () => void;
}

const title = currentLang === "en" ? "Find Your Doctor" : "ሐኪም ይፈልጉ";
```

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interfaces

### Performance Optimizations
- Next.js Image optimization
- Code splitting and lazy loading
- Fast refresh development

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact & Support

**Project Maintainer:** [Dinksira](https://github.com/dinksira)

For hospital-related inquiries, please use the contact form on the live website.

## 🙏 Acknowledgments

- **Bete Selam Hospital** - For their vision in modern healthcare
- **Next.js Team** - For the amazing framework
- **Vercel** - For seamless deployment experience
- **Ethiopian Community** - For cultural inspiration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for the Ethiopian healthcare community**

*"Where Healing Begins - House of Peace"*

</div>
```
