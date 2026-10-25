import { Nav } from './components/site/Nav';
import { Hero } from './components/site/Hero';
import { About } from './components/site/About';
import { Experience } from './components/site/Experience';
import { Work } from './components/site/Work';
import { Skills } from './components/site/Skills';
import { Contact } from './components/site/Contact';

function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-navy-900"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
      </main>
      <Contact />
    </>
  );
}

export default App;
