import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { NavBarDemo } from './components/NavBarDemo';
import { Hero } from './components/Hero';

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <motion.div
      className="min-h-screen bg-pure-black text-accent-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <NavBarDemo />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </motion.div>
  );
}

export default App;
