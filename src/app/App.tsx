import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <Hero />
      <Services />
      <Approach />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
