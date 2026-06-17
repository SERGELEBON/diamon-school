export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Amina Diallo',
    role: 'Makeup Artist Graduate, 2024',
    text: 'Diamond Secret Beauty School changed my life completely. The hands-on training and personalized attention from instructors helped me build the confidence to start my own freelance makeup business. Within months of graduating, I was booking bridal clients consistently.',
    image: '/images/founder.jpg',
  },
  {
    id: 2,
    name: 'Grace Okonkwo',
    role: 'Nail Technology Graduate, 2023',
    text: 'The nail technology program exceeded all my expectations. I came in knowing nothing about nail art, and now I create intricate designs that my clients absolutely love. I now run my own nail studio and could not be happier.',
    image: '/images/instructor.jpg',
  },
  {
    id: 3,
    name: 'Fatoumata Bamba',
    role: 'Hairdressing Graduate, 2024',
    text: 'What sets Diamond Secret apart is their focus on all hair types, especially textured and African hair. The protective styling module was incredibly detailed, and the business skills I gained gave me the confidence to open my own salon right after graduation.',
    image: '/images/students-training.jpg',
  },
  {
    id: 4,
    name: 'Marie Kouassi',
    role: 'Lash Extensions Graduate, 2023',
    text: 'The lash extension program was thorough and practical. I appreciated the emphasis on safety and eye health. The business startup toolkit was a game-changer. I recouped my tuition within two months of starting my lash business!',
    image: '/images/graduation.jpg',
  },
];
