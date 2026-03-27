import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load all below-fold components — inhe tab hi load karo jab zarurat ho
const About       = lazy(() => import('./components/About'));
const Services    = lazy(() => import('./components/Services'));
const Menu        = lazy(() => import('./components/Menu'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact     = lazy(() => import('./components/Contact'));
const Footer      = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <>
      {/* Navbar + Hero: above fold — eager load */}
      <Navbar />
      <main>
        <Hero />
        {/* Suspense: fallback=null — no spinner flash, smooth load */}
        <Suspense fallback={null}>
          <About />
          <Services />
          <Menu />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}