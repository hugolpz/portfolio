# Vue.js Portfolio

This is a modern Vue.js portfolio website showcasing projects, skills, and contact information.

## 🚀 Tech Stack

- **Frontend**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **UI Framework**: Bootstrap Vue Next
- **Animations**: Animate.css
- **Carousel**: Vue3-Carousel
- **Backend**: Express.js + Nodemailer

## 🛠️ Setup & Installation

```bash
npm install    # Install dependencies
npm run dev    # Start development server at http://localhost:3001
npm run build  # Build for production
npm run server # Start Express server (serves built Vue.js app on port 5000)
```

## 📁 Project Structure

```
├── index.html           # Main HTML file
├── package.json         # Vue.js dependencies
├── vite.config.js       # Vite configuration
├── server.js           # Express server for contact form
├── public/             # Static assets
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── main.js         # Vue.js entry point
    ├── App.vue         # Main application component
    ├── assets/
    │   ├── styles/     # CSS files
    │   ├── img/        # Images
    │   └── font/       # Custom fonts
    └── components/
        ├── NavBar.vue      # Navigation component
        ├── Banner.vue      # Hero section with typewriter effect
        ├── Skills.vue      # Skills carousel
        ├── Projects.vue    # Projects showcase
        ├── ProjectCard.vue # Individual project card
        └── Footer.vue      # Footer component
```

## ✨ Features

- **Responsive Design**: Fully responsive layout using Bootstrap
- **Smooth Animations**: CSS animations and transitions
- **Typewriter Effect**: Animated text in the banner section
- **Skills Carousel**: Interactive skills showcase
- **Project Gallery**: Grid layout for project showcase
- **Contact Form**: Email integration via Nodemailer
- **Modern Vue.js**: Uses Composition API and reactive patterns

## 🔄 Migration from React

This project was converted from React to Vue.js with the following key changes:

- **State Management**: `useState` → `ref`/`reactive`
- **Lifecycle**: `useEffect` → `onMounted`/`onUnmounted`
- **Components**: JSX → Vue SFC (Single File Components)
- **Props**: React props → Vue props with validation
- **Events**: React event handlers → Vue event listeners
- **Routing**: React Router → Vue Router (if needed)

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
