import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Schedule from '../components/Schedule';
import Gallery from '../components/Gallery';
import Members from '../components/Members';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Gallery />
        <Members />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;