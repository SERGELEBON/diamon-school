'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/faq';
import { SectionTitle } from './SectionTitle';

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="FAQ" title="Frequently Asked Questions" description="Find answers to the most common questions about our programs, admissions, and career opportunities." />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className={`border rounded-lg transition-all duration-300 ${openId === item.id ? 'border-[#FFD700]/30 bg-[#FFD700]/5 shadow-sm' : 'border-[#888]/10 bg-white hover:border-[#FFD700]/20'}`}>
              <button onClick={() => setOpenId(openId === item.id ? null : item.id)} className="w-full flex items-center justify-between p-6 text-left">
                <span className={`font-semibold pr-4 transition-colors ${openId === item.id ? 'text-[#FFD700]' : 'text-[#0A0A0A]'}`} style={{ fontFamily: "'Playfair Display', serif" }}>{item.question}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-all duration-300 ${openId === item.id ? 'rotate-180 text-[#FFD700]' : 'text-[#888]'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
