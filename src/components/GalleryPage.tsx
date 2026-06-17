'use client';

import { useState } from 'react';
import { XIcon } from 'lucide-react';
import { galleryItems, type GalleryItem } from '@/data/gallery';

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Makeup', value: 'makeup' },
    { label: 'Nails', value: 'nails' },
    { label: 'Hair', value: 'hair' },
    { label: 'Lashes', value: 'lashes' },
    { label: 'Graduation', value: 'graduation' },
    { label: 'Classroom', value: 'classroom' },
  ];
  const filtered = activeCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/about-salon.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 to-[#0A0A0A]" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4"><div className="h-px w-8 bg-[#FFD700]" /><span className="text-[#FFD700] text-xs uppercase tracking-[0.3em] font-semibold">Portfolio</span><div className="h-px w-8 bg-[#FFD700]" /></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Gallery</h1>
          <p className="text-white/60 max-w-lg mx-auto">Explore the creativity and talent of our students and graduates.</p>
        </div>
      </section>
      <section className="bg-white border-b border-[#888]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button key={cat.value} onClick={() => setActiveCategory(cat.value)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.value ? 'bg-[#FFD700] text-[#0A0A0A]' : 'bg-[#F5F5F5] text-[#888] hover:bg-[#FFD700]/10 hover:text-[#FFD700]'}`}>
              {cat.label}
            </button>
          ))}
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="masonry-grid">
            {filtered.map((item) => (
              <div key={item.id} className="masonry-item group cursor-pointer" onClick={() => setSelectedImage(item)}>
                <div className="relative overflow-hidden rounded-lg">
                  <img src={item.src} alt={item.alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>{item.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <div className="text-center py-16"><p className="text-[#888] text-lg">No images found in this category.</p></div>}
        </div>
      </section>
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0A]/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white/60 hover:text-[#FFD700] transition-colors" onClick={() => setSelectedImage(null)}><XIcon className="w-8 h-8" /></button>
          <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[85vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">{selectedImage.alt}</div>
        </div>
      )}
    </>
  );
}
