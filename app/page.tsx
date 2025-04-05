import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import LuxuryFeatures from './components/LuxuryFeatures';
import ExperienceExcellence from './components/ExperienceExcellence';
import ServicesCopy from './components/ServicesCopy';
import FloatingButtons from './components/FloatingButtons';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LuxuryFeatures />
      <ExperienceExcellence />
      <ServicesCopy />
      <Facilities />
      <About />
      <Gallery />
      <Contact />
      <FloatingButtons />
    </main>
  );
}
