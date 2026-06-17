'use client';

export function PartnersSection() {
  const partners = [
    { id: 1, name: 'MAC Cosmetics', logo: '💄 MAC' },
    { id: 2, name: "L'Oréal Professionnel", logo: "✨ L'Oréal" },
    { id: 3, name: 'OPI Nail Products', logo: '💅 OPI' },
    { id: 4, name: 'Wella Hair Care', logo: '💇 Wella' },
    { id: 5, name: 'Dermalogica Skincare', logo: '🧖 Dermalogica' },
    { id: 6, name: 'Sephora Pro', logo: '🌟 Sephora' },
    { id: 7, name: 'Schwarzkopf Professional', logo: '✂️ Schwarzkopf' },
    { id: 8, name: 'CND Nail Systems', logo: '💎 CND' },
  ];
  const doubled = [...partners, ...partners];
  return (
    <section className="py-12 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-[#FFD700]" />
          <span className="text-[#FFD700] text-xs uppercase tracking-[0.3em] font-semibold">Partners</span>
          <div className="h-px w-8 bg-[#FFD700]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Our Trusted Partners</h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
        <div className="partner-scroll flex gap-8 items-center whitespace-nowrap">
          {doubled.map((p, i) => (
            <div key={`${p.id}-${i}`} className="flex-shrink-0 px-8 py-4 bg-[#1A1A1A] rounded-lg border border-white/5 hover:border-[#FFD700]/30 transition-colors flex items-center justify-center min-w-[180px]">
              <span className="text-white/60 text-sm font-medium">{p.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
