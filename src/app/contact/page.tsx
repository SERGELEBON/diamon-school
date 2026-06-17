'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { ContactPage } from '@/components/ContactPage';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main className="flex-1">
        <ContactPage />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
