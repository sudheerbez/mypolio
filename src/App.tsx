import { lazy, Suspense } from 'react';
import { NavBarDemo } from './components/NavBarDemo';
import { Hero } from './components/Hero';

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <div className="min-h-screen bg-pure-black text-accent-white">
      <NavBarDemo />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
