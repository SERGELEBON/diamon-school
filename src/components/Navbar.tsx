'use client';

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import { courses } from '@/data/courses';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formationsOpen, setFormationsOpen] = useState(false);
  const formationsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const scrolled = useSyncExternalStore(
    useCallback((onStoreChange) => {
      const handleScroll = () => onStoreChange();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []),
    () => typeof window !== 'undefined' ? window.scrollY > 50 : false,
    () => false
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (formationsRef.current && !formationsRef.current.contains(e.target as Node)) {
        setFormationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToFormations = useCallback(() => {
    if (pathname === '/') {
      document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/');
      setTimeout(() => {
        document.getElementById('formations')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMenuOpen(false);
    setFormationsOpen(false);
  }, [pathname, router]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setFormationsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group" onClick={closeMobileMenu}>
            <img
              src="/images/logo.png"
              alt="Diamond Secret Beauty School"
              className="h-14 w-14 sm:h-16 sm:w-16 object-cover rounded-full border-2 border-[#FFD700]/50 shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-[#FFD700] ${isActive('/') ? 'text-[#FFD700]' : 'text-white/80'}`}>
              Home
            </Link>
            <div ref={formationsRef} className="relative">
              <button onClick={() => setFormationsOpen(!formationsOpen)} className="flex items-center gap-1 text-sm uppercase tracking-widest font-medium transition-colors hover:text-[#FFD700] text-white/80">
                Formations <ChevronDown className={`w-3 h-3 transition-transform ${formationsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#0A0A0A]/95 backdrop-blur-md rounded-lg border border-white/10 shadow-xl transition-all duration-300 origin-top ${formationsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="p-2">
                  <button onClick={scrollToFormations} className="w-full text-left px-4 py-3 text-white/60 hover:text-[#FFD700] hover:bg-[#FFD700]/5 rounded transition-colors text-sm">
                    View All Programs
                  </button>
                  <div className="h-px bg-white/5 my-1" />
                  {courses.map((c) => (
                    <Link key={c.id} href={`/formation/${c.slug}`} onClick={() => setFormationsOpen(false)} className="flex items-center gap-3 px-4 py-3 text-white/60 hover:text-[#FFD700] hover:bg-[#FFD700]/5 rounded transition-colors text-sm w-full text-left">
                      <span className="text-lg">{c.icon}</span><span>{c.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/gallery" className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-[#FFD700] ${isActive('/gallery') ? 'text-[#FFD700]' : 'text-white/80'}`}>
              Gallery
            </Link>
            <Link href="/contact" className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-[#FFD700] ${isActive('/contact') ? 'text-[#FFD700]' : 'text-white/80'}`}>
              Contact
            </Link>
            <Link href="/contact" className="bg-[#FFD700] text-[#0A0A0A] font-semibold px-8 py-3 text-xs uppercase tracking-wider hover:bg-[#E6C200] transition-all duration-300 inline-flex items-center gap-2">
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-white hover:text-[#FFD700] transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-6 pt-2 space-y-1 bg-[#0A0A0A]/95 backdrop-blur-md rounded-b-lg">
            <Link href="/" onClick={closeMobileMenu} className="block w-full text-left px-4 py-3 text-white/80 hover:text-[#FFD700] text-sm uppercase tracking-widest">Home</Link>
            <button onClick={scrollToFormations} className="block w-full text-left px-4 py-3 text-white/80 hover:text-[#FFD700] text-sm uppercase tracking-widest">Formations</button>
            {courses.map((c) => (
              <Link key={c.id} href={`/formation/${c.slug}`} onClick={closeMobileMenu} className="flex items-center gap-2 pl-8 pr-4 py-2 text-white/50 hover:text-[#FFD700] text-sm w-full text-left">
                <span>{c.icon}</span><span>{c.title}</span>
              </Link>
            ))}
            <Link href="/gallery" onClick={closeMobileMenu} className="block w-full text-left px-4 py-3 text-white/80 hover:text-[#FFD700] text-sm uppercase tracking-widest">Gallery</Link>
            <Link href="/contact" onClick={closeMobileMenu} className="block w-full text-left px-4 py-3 text-white/80 hover:text-[#FFD700] text-sm uppercase tracking-widest">Contact</Link>
            <div className="px-4 pt-2">
              <Link href="/contact" onClick={closeMobileMenu} className="bg-[#FFD700] text-[#0A0A0A] font-semibold px-8 py-3 w-full text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
