import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ValueProps } from './components/sections/ValueProps';
import { ServicesTeaser } from './components/sections/ServicesTeaser';
import { CTASection } from './components/sections/CTASection';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="section" aria-label="Why Choose EGTex Broker LLC">
          <ValueProps />
        </section>
        <section className="section section--alt" aria-label="Services Overview">
          <ServicesTeaser />
        </section>
        <CTASection />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
