# Vue.js Portfolio

This is a modern Vue.js portfolio website showcasing projects, skills, and contact information with internationalization support.

## 🚀 Tech Stack

- **Frontend**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **UI Framework**: Bootstrap Vue Next
- **Internationalization**: Vue I18n
- **Animations**: Animate.css
- **Carousel**: Vue3-Carousel
- **Backend**: Express.js + Nodemailer
- **Deployment**: GitHub Pages

## 🛠️ Setup & Installation

```bash
npm install    # Install dependencies
npm run dev    # Start development server at http://localhost:3001
npm run build  # Build for production
npm run deploy # Deploy to GitHub Pages
npm run server # Start Express server (serves built Vue.js app on port 5000)
```

## 📁 Project Structure

```
├── .github/workflows/deploy.yml      # GitHub Actions workflow for deployment
├── index.html             # Main HTML file
├── package.json           # Vue.js dependencies
├── vite.config.js         # Vite configuration with GitHub Pages base
├── server.js              # Express server for contact form
├── public/                # Static assets
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── main.js            # Vue.js entry point with i18n
    ├── App.vue            # Main application component
    ├── assets/
    │   ├── styles/        # Global styles and CSS overrides
    │   ├── img/           # Images and icons
    │   └── font/          # Custom fonts (Centra)
    ├── i18n/              # Internationalization
    │   ├── index.js       # i18n configuration
    │   └── locales/       # Translations
    └── components/
        ├── NavBar.vue         # Navigation with language switcher
        ├── Banner.vue         # Hero section with typewriter effect
        ├── Skills.vue         # Skills carousel with external logos
        ├── Projects.vue       # Projects showcase with tabs
        ├── ProjectCard.vue    # Individual project card with conditional rendering
        ├── Footer.vue         # Footer component
        └── LanguageSwitcher.vue # Language selection dropdown
```

## ✨ Features

- **🌍 Internationalization**: Support for English and French languages
- **📱 Responsive Design**: Fully responsive layout using Bootstrap
- **🎨 Smooth Animations**: CSS animations and transitions with Animate.css
- **⌨️ Typewriter Effect**: Animated text in the banner section (i18n compatible)
- **🎠 Skills Carousel**: Interactive skills showcase with external organization logos
- **📂 Project Gallery**: Tabbed layout for web projects and MOOCs
- **📧 Contact Form**: Email integration via Nodemailer
- **🚀 Modern Vue.js**: Uses Composition API and reactive patterns
- **🔄 Auto-deployment**: GitHub Actions workflow for seamless deployment

## 🌐 Internationalization

The portfolio supports multiple languages:

- **English** 🇺🇸 (default)
- **French** 🇫🇷

Language switching is handled via a dropdown in the navigation bar with persistent storage.

## 🚀 Deployment

### GitHub Pages (Automatic)
1. Push to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site available at: `https://hugolpz.github.io/portfolio/`

### Manual Deployment
```bash
npm run deploy
```

## 🔄 Migration from React

This project was converted from React to Vue.js with the following key changes:

- **State Management**: `useState` → `ref`/`reactive`
- **Lifecycle**: `useEffect` → `onMounted`/`onUnmounted`
- **Components**: JSX → Vue SFC (Single File Components)
- **Props**: React props → Vue props with validation
- **Events**: React event handlers → Vue event listeners
- **Internationalization**: Added Vue I18n for multi-language support
- **Build Tool**: Create React App → Vite

## 🏗️ Skills & Organizations

The portfolio showcases partnerships and experience with:
- **Organizations**: Wikimedia France, DGLFLF, Wikimedia Foundation, URFIST Occitanie, Google Summer of Code
- **Technologies**: GitHub, GitLab, Vue.js, Node.js, MongoDB, Docker, Python, and more

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

- **LinkedIn**: [Hugo Lopez](https://linkedin.com/in/lopez-hugo-a9402022/)
- **GitHub**: [hugolpz](https://github.com/hugolpz)
- **Email**: hugo.lpz@gmail.com

---

Built with ❤️ using Vue.js 3 and Vite
