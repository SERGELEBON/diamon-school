export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'makeup' | 'nails' | 'hair' | 'lashes' | 'graduation' | 'classroom';
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: '/images/gallery-makeup1.jpg', alt: 'Bridal Makeup Artistry', category: 'makeup' },
  { id: 2, src: '/images/gallery-nails1.jpg', alt: 'Creative Nail Art Designs', category: 'nails' },
  { id: 3, src: '/images/gallery-hair1.jpg', alt: 'African Braiding Hairstyles', category: 'hair' },
  { id: 4, src: '/images/gallery-class1.jpg', alt: 'Students in Training', category: 'classroom' },
  { id: 5, src: '/images/gallery-makeup2.jpg', alt: 'Evening Glamour Makeup', category: 'makeup' },
  { id: 6, src: '/images/gallery-lash1.jpg', alt: 'Lash Extension Application', category: 'lashes' },
  { id: 7, src: '/images/gallery-grad1.jpg', alt: 'Graduation Celebration', category: 'graduation' },
  { id: 8, src: '/images/hero-makeup.jpg', alt: 'Professional Makeup Session', category: 'makeup' },
  { id: 9, src: '/images/hero-nails.jpg', alt: 'Nail Technology Showcase', category: 'nails' },
  { id: 10, src: '/images/hero-hair.jpg', alt: 'Hairdressing Training', category: 'hair' },
  { id: 11, src: '/images/hero-graduation.jpg', alt: 'Diploma Ceremony', category: 'graduation' },
  { id: 12, src: '/images/students-training.jpg', alt: 'Beauty School Classroom', category: 'classroom' },
];
