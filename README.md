# Sudheer Bezawada's Portfolio

A modern, interactive portfolio website showcasing my work as a software engineer specializing in backend systems, distributed infrastructure, and AI-driven solutions.

## 🌟 Features

- **Pure Black Theme** - Minimalist design with high contrast for maximum readability
- **Apple-Style Navigation Dock** - Smooth, interactive navigation with hover effects
- **Interactive Hero Section** - Animated text reveals and 3D elements
- **Project Showcase** - Highlighted projects with GitHub links
- **Experience Timeline** - Visual timeline of professional experience
- **Skills Grid** - Interactive skills display
- **Resume Download** - Animated download experience
- **Contact Section** - Multiple ways to connect
- **Fully Responsive** - Optimized for all devices
- **Smooth Animations** - Framer Motion powered transitions

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI Components**: shadcn/ui, Lucide React icons
- **3D Graphics**: Spline (optional)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sudheerbez/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Resume.pdf          # Resume file
├── src/
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── Skills.tsx       # Skills section
│   ├── assets/             # Images and static assets
│   ├── lib/                # Utilities
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── tailwind.config.js      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

## 🎨 Design Features

### Color Scheme
- **Background**: Pure black (`#000000`)
- **Text**: White (`#ffffff`) for maximum contrast
- **Accents**: Clean white borders and highlights

### Interactive Elements
- Smooth hover effects on all clickable elements
- Animated transitions between sections
- Responsive navigation with active state indicators
- Loading states for async operations

## 🔗 Links

- **LinkedIn**: [https://www.linkedin.com/in/sudheerbez](https://www.linkedin.com/in/sudheerbez)
- **GitHub**: [https://github.com/sudheerbez](https://github.com/sudheerbez)
- **Email**: [sudheerbez9@gmail.com](mailto:sudheerbez9@gmail.com)

## 🎯 Key Sections

1. **Hero** - Introduction with animated name display and social links
2. **About** - Personal story and professional philosophy
3. **Experience** - Work history and achievements
4. **Projects** - Featured projects with descriptions and links
5. **Skills** - Technical skills and expertise
6. **Contact** - Contact information and booking options

## 📝 Recent Updates

- ✅ Fixed clickable elements (navigation, buttons, links)
- ✅ Improved resume download functionality
- ✅ Updated social media links
- ✅ Enhanced UI with loading states
- ✅ Optimized z-index and pointer-events for better interactivity

## 🔧 Development

### Adding New Sections
1. Create component in `src/components/`
2. Add route/section in `src/App.tsx`
3. Update navigation in `src/components/ui/tubelight-navbar.tsx`

### Customizing Styles
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline Tailwind classes

### Building for Production
```bash
npm run build
```
Output will be in the `dist/` directory.

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Sudheer Bezawada**
- Backend Systems Engineer
- Distributed Systems Enthusiast
- AI/ML Practitioner

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
