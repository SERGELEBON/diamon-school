'use client';

import Link from 'next/link';
import {
  Clock,
  Award,
  Star,
  CheckCircle,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { getCourseBySlug } from '@/data/courses';

export function FormationPage({ slug }: { slug: string }) {
  const course = getCourseBySlug(slug);
  if (!course) return <div className="pt-32 text-center"><h2 className="text-2xl font-bold">Course not found</h2><Link href="/" className="mt-4 text-[#FFD700]">Go Home</Link></div>;

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/" className="text-white/60 hover:text-[#FFD700] text-sm transition-colors">Formations</Link>
                <span className="text-white/30">/</span>
                <span className="text-[#FFD700] text-sm">{course.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{course.title}</h1>
              <p className="text-white/70 text-lg mb-6">{course.subtitle}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-[#FFD700]"><Clock className="w-4 h-4" /><span className="text-sm font-medium">{course.duration}</span></div>
                <div className="flex items-center gap-2 text-[#FFD700]"><Award className="w-4 h-4" /><span className="text-sm font-medium">{course.level}</span></div>
                <div className="flex items-center gap-2 text-[#FFD700]"><Star className="w-4 h-4" /><span className="text-sm font-medium">{course.price}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>About This Program</h2>
              <p className="text-[#888] leading-relaxed">{course.description}</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Program Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#FFD700]/5 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                    <span className="text-[#0A0A0A] text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6"><BookOpen className="w-6 h-6 text-[#FFD700]" /><h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]" style={{ fontFamily: "'Playfair Display', serif" }}>Curriculum</h2></div>
              <div className="space-y-3">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-[#888]/10 rounded-lg hover:border-[#FFD700]/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center shrink-0">
                      <span className="text-[#FFD700] text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <span className="text-[#0A0A0A] text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#0A0A0A] rounded-lg p-8 text-white">
              <h3 className="text-xl font-bold text-[#FFD700] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Enroll Now</h3>
              <p className="text-white/50 text-sm mb-6">Start your journey in {course.title} today</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Registration submitted! We will contact you soon.'); }} className="space-y-4">
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" required className="w-full bg-[#1A1A1A] border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#FFD700] focus:outline-none placeholder:text-white/30" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Email</label>
                  <input type="email" required className="w-full bg-[#1A1A1A] border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#FFD700] focus:outline-none placeholder:text-white/30" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" required className="w-full bg-[#1A1A1A] border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#FFD700] focus:outline-none placeholder:text-white/30" placeholder="+233 XX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Program</label>
                  <select className="w-full bg-[#1A1A1A] border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#FFD700] focus:outline-none" defaultValue={course.title}>
                    <option>{course.title}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Message (Optional)</label>
                  <textarea rows={3} className="w-full bg-[#1A1A1A] border border-white/10 rounded px-4 py-3 text-white text-sm focus:border-[#FFD700] focus:outline-none placeholder:text-white/30 resize-none" placeholder="Any questions?" />
                </div>
                <button type="submit" className="bg-[#FFD700] text-[#0A0A0A] font-semibold px-8 py-3 w-full text-sm uppercase tracking-wider hover:bg-[#E6C200] transition-all inline-flex items-center justify-center gap-2">
                  Submit Registration <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
