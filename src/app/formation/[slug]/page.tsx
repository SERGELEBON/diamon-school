'use client';

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { FormationPage } from '@/components/FormationPage';

export default function FormationSlug() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main className="flex-1">
        <FormationPage slug={slug} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
