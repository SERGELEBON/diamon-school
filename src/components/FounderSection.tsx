'use client';

import {
  Heart,
  Star,
  Users,
  Diamond,
} from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export function FounderSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <SectionTitle subtitle="Our Founder" title="Meet the Visionary Behind Diamond Secret" description="With over a decade of experience in the beauty industry, our founder established Diamond Secret Beauty School with a powerful vision: to create a world-class institution that empowers African women with the skills, knowledge, and confidence to build successful careers in beauty." />
          <p className="text-[#888] leading-relaxed mb-8">
            She has trained hundreds of professionals who now operate successful salons, freelance businesses, and beauty brands across the continent and beyond. Her commitment to excellence, innovation, and inclusivity continues to drive Diamond Secret Beauty School forward.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Heart, label: 'Passion-Driven' },
              { icon: Star, label: 'Excellence First' },
              { icon: Users, label: 'Community Focus' },
              { icon: Diamond, label: 'Integrity Always' },
            ].map((v, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-[#FFD700]/5 rounded-lg">
                <v.icon className="w-5 h-5 text-[#FFD700] shrink-0" />
                <span className="text-[#0A0A0A] text-sm font-medium">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <img src="/images/founder-portrait.jpg" alt="Founder" className="relative z-10 w-full h-[550px] object-cover rounded-lg shadow-xl" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-[#FFD700]/30 rounded-lg z-0" />
          <div className="absolute -top-6 -right-6 bg-[#FFD700] w-24 h-24 rounded-lg z-0 flex items-center justify-center">
            <Diamond className="w-10 h-10 text-[#0A0A0A]" />
          </div>
        </div>
      </div>
    </section>
  );
}
