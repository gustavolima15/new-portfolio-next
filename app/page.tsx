import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import { ScrollProgress, ScrollToTop, SectionIndicator } from './components/ui/ScrollIndicators';
import FloatingThemeToggle from './components/ui/FloatingThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <SectionIndicator />
      <Header />
      <Hero />
      <About />
      <Education />
      <Technologies />
      <Projects />
      <Experiences />
      <Footer />
      <ScrollToTop />
      <FloatingThemeToggle />
    </div>
  );
}
