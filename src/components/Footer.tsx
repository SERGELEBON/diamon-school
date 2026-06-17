'use client';

import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { courses } from '@/data/courses';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/logo.png"
                alt="Diamond Secret Beauty School"
                className="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-full border-2 border-[#FFD700]/50 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">Empowering beauty professionals with world-class education and hands-on training.</p>
          </div>
          <div>
            <h4 className="text-[#FFD700] text-lg font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm">Home</Link></li>
              <li><Link href="/#formations" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm">Our Formations</Link></li>
              <li><Link href="/gallery" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFD700] text-lg font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Formations</h4>
            <ul className="space-y-3">
              {courses.map((c) => (
                <li key={c.id}><Link href={`/formation/${c.slug}`} className="text-white/60 hover:text-[#FFD700] transition-colors text-sm">{c.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFD700] text-lg font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-[#FFD700] mt-1 shrink-0" /><span className="text-white/60 text-sm">Accra, Ghana</span></li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#FFD700] shrink-0" /><a href="tel:+233209461260" className="text-white/60 hover:text-[#FFD700] text-sm">+233 20 946 1260</a></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#FFD700] shrink-0" /><span className="text-white/60 text-sm">info@diamondsecretbeauty.com</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs" suppressHydrationWarning>&copy; {new Date().getFullYear()} Diamond Secret Beauty School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
