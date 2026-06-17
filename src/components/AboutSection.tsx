'use client';

import {
  Sparkles,
  Heart,
  Star,
} from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export function AboutSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src="/images/about-salon.jpg" alt="School Interior" className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#FFD700] rounded-lg z-0" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FFD700]/10 rounded-lg z-0" />
        </div>
        <div>
          <SectionTitle subtitle="About Us" title="Where Beauty Meets Excellence" description="Diamond Secret Beauty School is a premier institution dedicated to transforming passionate individuals into skilled beauty professionals. Founded with a vision to elevate beauty education in West Africa, we combine world-class training techniques with a deep understanding of diverse beauty needs." light />
          <div className="grid grid-cols-3 gap-6 mt-8">
            {[
              { icon: Sparkles, num: '500+', label: 'Graduates' },
              { icon: Heart, num: '98%', label: 'Satisfaction' },
              { icon: Star, num: '5+', label: 'Programs' },
            ].map((s, i) => (
              <div key={i} className="text-center p-4 bg-[#1A1A1A] rounded-lg">
                <s.icon className="w-6 h-6 text-[#FFD700] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#FFD700]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
