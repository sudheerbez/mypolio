# Sudheer Bezawada's Portfolio - React Integration

This portfolio has been successfully converted to support React components with shadcn/ui, Tailwind CSS, and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── card.tsx        # Card component
│   │   │   ├── spotlight.tsx   # Spotlight effect component
│   │   │   └── spline.tsx     # Spline 3D scene component
│   │   └── SplineSceneBasic.tsx # Main demo component
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn helper)
│   ├── App.tsx                # Main React app
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles with Tailwind
├── package.json              # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts          # Vite build configuration
└── postcss.config.js       # PostCSS configuration
```

## 🎨 Components Added

### 1. SplineScene Component (`src/components/ui/spline.tsx`)
- **Purpose**: Renders 3D scenes using Spline
- **Props**: 
  - `scene`: URL to the Spline scene file
  - `className`: Optional CSS classes
- **Features**: Lazy loading with Suspense fallback

### 2. Spotlight Component (`src/components/ui/spotlight.tsx`)
- **Purpose**: Interactive spotlight effect that follows mouse movement
- **Props**:
  - `className`: Optional CSS classes
  - `size`: Spotlight size (default: 200px)
  - `springOptions`: Framer Motion spring configuration
- **Features**: Smooth mouse tracking with Framer Motion

### 3. Card Component (`src/components/ui/card.tsx`)
- **Purpose**: shadcn/ui Card component with all variants
- **Components**: Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Features**: Fully accessible and customizable

### 4. SplineSceneBasic Component (`src/components/SplineSceneBasic.tsx`)
- **Purpose**: Demo component showcasing the 3D interactive scene
- **Features**: 
  - Responsive layout
  - Spotlight effect
  - 3D Spline scene integration
  - Gradient text effects

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Framer Motion** - Animation library
- **Spline** - 3D scene rendering
- **Lucide React** - Icon library

## 🎯 Key Features

1. **3D Interactive Scenes**: Using Spline for immersive 3D experiences
2. **Responsive Design**: Mobile-first approach with Tailwind CSS
3. **Type Safety**: Full TypeScript support
4. **Modern Build**: Vite for fast development and optimized builds
5. **Component Library**: shadcn/ui for consistent, accessible components
6. **Animations**: Smooth animations with Framer Motion

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📝 Usage Example

```tsx
import { SplineSceneBasic } from './components/SplineSceneBasic'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <SplineSceneBasic />
    </div>
  )
}
```

## 🌟 Integration Notes

- The `/components/ui` folder follows shadcn/ui conventions
- All components are fully typed with TypeScript
- Tailwind CSS provides consistent styling
- Components are designed to be reusable and customizable
- The 3D scene URL can be easily changed in the SplineSceneBasic component

## 🚀 Next Steps

1. **Customize the 3D scene**: Replace the Spline scene URL with your own
2. **Add more components**: Extend the UI component library
3. **Integrate with existing portfolio**: Merge with your current HTML/CSS portfolio
4. **Deploy**: Use Vercel, Netlify, or any static hosting service

The React integration is now complete and ready for development! 🎉
