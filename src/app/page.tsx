'use client';

import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Internships } from '@/components/Internships';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { FloatingParticles } from '@/components/FloatingParticles';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Internships />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
