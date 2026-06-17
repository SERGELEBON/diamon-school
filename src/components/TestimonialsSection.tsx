'use client';

import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { SectionTitle } from './SectionTitle';

export function TestimonialsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Testimonials" title="What Our Students Say" description="Hear from our graduates who have transformed their passion into successful careers in the beauty industry." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="w-10 h-10 text-[#FFD700]/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFD700]">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A0A0A]" style={{ fontFamily: "'Playfair Display', serif" }}>{t.name}</h4>
                  <p className="text-[#FFD700] text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-[#888] text-sm leading-relaxed mb-4">{t.text}</p>
              <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <span key={i} className="text-[#FFD700] text-sm">★</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
