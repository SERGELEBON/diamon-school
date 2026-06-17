'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#FFD700]" />
      <div className="absolute inset-0 bg-[url('/images/about-salon.jpg')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className="w-10 h-10 text-[#0A0A0A] mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Your Beauty Career Awaits</h2>
        <p className="text-[#0A0A0A]/70 text-lg max-w-2xl mx-auto mb-8">Join hundreds of successful graduates who have transformed their passion into a thriving career.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-[#0A0A0A] text-white font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#2A2A2A] transition-all">Enroll Now</Link>
          <button onClick={() => document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#0A0A0A]/10 text-[#0A0A0A] font-semibold px-8 py-3 text-sm uppercase tracking-wider border border-[#0A0A0A]/20 hover:bg-[#0A0A0A]/20 transition-all">View Programs</button>
        </div>
      </div>
    </section>
  );
}
