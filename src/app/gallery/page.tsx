'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { GalleryPage } from '@/components/GalleryPage';

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main className="flex-1">
        <GalleryPage />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
