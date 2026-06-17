'use client';

import Link from 'next/link';
import {
  Clock,
  Award,
  ArrowRight,
} from 'lucide-react';
import { courses } from '@/data/courses';
import { SectionTitle } from './SectionTitle';

export function FormationsSection() {
  return (
    <section id="formations" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Our Programs" title="Professional Formations" description="Choose from our range of industry-leading beauty programs designed to equip you with the skills and confidence to thrive in the beauty industry." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.id} href={`/formation/${course.slug}`} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-left">
              <div className="relative h-56 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#FFD700] text-[#0A0A0A] text-xs font-bold px-3 py-1 uppercase">{course.level}</div>
                <div className="absolute bottom-4 left-4 text-3xl">{course.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 group-hover:text-[#FFD700] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{course.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed mb-4 line-clamp-2">{course.subtitle}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#888]/10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[#888] text-xs"><Clock className="w-3 h-3" /><span>{course.duration}</span></div>
                    <div className="flex items-center gap-1 text-[#888] text-xs"><Award className="w-3 h-3" /><span>Certified</span></div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
