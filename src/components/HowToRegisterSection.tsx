'use client';

import Link from 'next/link';
import {
  UserCheck,
  FileText,
  CreditCard,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export function HowToRegisterSection() {
  const steps = [
    { icon: UserCheck, title: 'Choose Your Program', desc: 'Browse our range of professional beauty formations and select the program that aligns with your career goals.' },
    { icon: FileText, title: 'Submit Your Application', desc: 'Complete our simple online registration form. No prior experience required for beginner programs.' },
    { icon: CreditCard, title: 'Secure Your Spot', desc: 'Choose from our flexible payment plans to secure your enrollment with installment options.' },
    { icon: GraduationCap, title: 'Start Your Journey', desc: 'Begin your transformation with hands-on training from industry experts and graduate with certification.' },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Enrollment" title="How to Register" description="Getting started at Diamond Secret Beauty School is simple. Follow these four easy steps to begin your beauty career journey." light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center p-6 bg-[#1A1A1A] rounded-lg border border-white/5 hover:border-[#FFD700]/20 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FFD700]/10 flex items-center justify-center border border-[#FFD700]/30">
                <step.icon className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div className="text-[#FFD700] text-4xl font-bold mb-4 opacity-20" style={{ fontFamily: "'Playfair Display', serif" }}>0{i + 1}</div>
              <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="bg-[#FFD700] text-[#0A0A0A] font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#E6C200] transition-all inline-flex items-center gap-2">
            Start Your Registration <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
