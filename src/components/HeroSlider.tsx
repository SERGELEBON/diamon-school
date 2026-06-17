'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

export function HeroSlider() {
  const slides = [
    { image: '/images/hero-makeup.jpg', title: 'Master the Art of Beauty', subtitle: 'Professional makeup artistry training with industry experts', cta: 'Explore Makeup Program', slug: 'maquillage' },
    { image: '/images/hero-nails.jpg', title: 'Create Stunning Nail Art', subtitle: 'From basic techniques to advanced creative designs', cta: 'Explore Nail Program', slug: 'onglerie' },
    { image: '/images/hero-hair.jpg', title: 'Transform with Hairdressing', subtitle: 'Expert training for all hair types and textures', cta: 'Explore Hair Program', slug: 'coiffure' },
    { image: '/images/hero-graduation.jpg', title: 'Your Future Starts Here', subtitle: 'Join our graduates building successful beauty careers', cta: 'Start Your Journey', slug: '' },
  ];
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/50 to-[#0A0A0A]/30" />
        </div>
      ))}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#FFD700]" />
              <span className="text-[#FFD700] text-xs uppercase tracking-[0.3em] font-semibold">Diamond Secret Beauty School</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              {slides[current].title}
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed">{slides[current].subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={slides[current].slug ? `/formation/${slides[current].slug}` : '/contact'} className="bg-[#FFD700] text-[#0A0A0A] font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#E6C200] transition-all duration-300 inline-flex items-center gap-2">
                {slides[current].cta}
              </Link>
              <button onClick={() => document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-[#FFD700] text-[#FFD700] font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#FFD700] hover:text-[#0A0A0A] transition-all duration-300 inline-flex items-center gap-2">
                View Programs
              </button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:border-[#FFD700] hover:text-[#FFD700] transition-all backdrop-blur-sm" aria-label="Previous">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:border-[#FFD700] hover:text-[#FFD700] transition-all backdrop-blur-sm" aria-label="Next">
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-300 ${i === current ? 'w-8 h-2 bg-[#FFD700] rounded-full' : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/60'}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
