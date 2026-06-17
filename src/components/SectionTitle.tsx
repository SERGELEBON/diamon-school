'use client';

import { Diamond } from 'lucide-react';

export function SectionTitle({ subtitle, title, description, light = false }: { subtitle?: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#FFD700]" />
          <span className="text-[#FFD700] text-xs uppercase tracking-[0.3em] font-semibold">{subtitle}</span>
          <div className="h-px w-8 bg-[#FFD700]" />
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-[#0A0A0A]'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl mx-auto text-sm md:text-base leading-relaxed ${light ? 'text-white/60' : 'text-[#888]'}`}>
          {description}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="h-px w-12 bg-[#FFD700]/40" />
        <Diamond className="w-4 h-4 text-[#FFD700]" />
        <div className="h-px w-12 bg-[#FFD700]/40" />
      </div>
    </div>
  );
}
