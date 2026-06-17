export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  level: string;
  benefits: string[];
  curriculum: string[];
  icon: string;
}

export const courses: Course[] = [
  {
    id: '1',
    slug: 'maquillage',
    title: 'Makeup Artistry',
    subtitle: 'Master the Art of Professional Makeup',
    description:
      'Our comprehensive Makeup Artistry program is designed to transform passionate individuals into skilled professionals capable of creating stunning looks for any occasion. From everyday natural beauty to glamorous bridal and editorial styles, you will learn the techniques and business acumen needed to succeed in the competitive beauty industry. Our experienced instructors bring real-world expertise, guiding you through hands-on practice with premium products and tools.',
    image: '/images/hero-makeup.jpg',
    duration: '6 Months',
    price: 'Contact Us',
    level: 'Beginner to Advanced',
    benefits: [
      'Hands-on training with professional makeup kits',
      'Learn bridal, editorial, and special effects makeup',
      'Business and marketing skills for freelance artists',
      'Industry-recognized certification upon completion',
      'Portfolio development with professional photoshoots',
      'Networking opportunities with industry professionals',
    ],
    curriculum: [
      'Skin Analysis & Preparation Techniques',
      'Color Theory & Face Shape Analysis',
      'Day & Evening Makeup Applications',
      'Bridal Makeup & Consultation Skills',
      'Editorial & Fashion Makeup',
      'Special Effects & Creative Makeup',
      'Business Management & Client Relations',
      'Portfolio Building & Professional Photoshoot',
    ],
    icon: '💄',
  },
  {
    id: '2',
    slug: 'onglerie',
    title: 'Nail Technology',
    subtitle: 'Create Stunning Nail Art & Extensions',
    description:
      'Dive into the world of nail technology where creativity meets precision. Our Nail Technology program covers everything from basic manicure and pedicure techniques to advanced nail art, gel extensions, and acrylic applications. You will develop the artistic eye and technical skills to create intricate designs that keep clients coming back. With the booming demand for nail services, this program positions you for immediate career opportunities.',
    image: '/images/hero-nails.jpg',
    duration: '4 Months',
    price: 'Contact Us',
    level: 'Beginner to Advanced',
    benefits: [
      'Comprehensive training in gel, acrylic, and dip powder',
      'Advanced nail art techniques and trends',
      'Sanitation and safety certification',
      'Client consultation and retention strategies',
      'Hands-on practice with real clients',
      'Business startup guidance for nail technicians',
    ],
    curriculum: [
      'Nail Anatomy & Health Fundamentals',
      'Manicure & Pedicure Techniques',
      'Gel Extension Application & Removal',
      'Acrylic Nail Sculpting & Fills',
      'Nail Art: Freehand, Stamping & 3D',
      'Dip Powder & Overlay Techniques',
      'Sanitation, Safety & State Regulations',
      'Business & Marketing for Nail Techs',
    ],
    icon: '💅',
  },
  {
    id: '3',
    slug: 'coiffure',
    title: 'Hairdressing',
    subtitle: 'Transform Hair with Expert Styling Skills',
    description:
      'Our Hairdressing program equips you with the full spectrum of hair care and styling skills demanded by top salons worldwide. From precision cuts and creative coloring to protective styling and hair treatments, you will gain the confidence and expertise to work with all hair types and textures. Special emphasis is placed on African and textured hair techniques, ensuring you can serve a diverse clientele with excellence.',
    image: '/images/hero-hair.jpg',
    duration: '8 Months',
    price: 'Contact Us',
    level: 'Beginner to Professional',
    benefits: [
      'Training on all hair types including textured hair',
      'Color theory and advanced coloring techniques',
      'Protective styling and natural hair care',
      'Salon management and client retention',
      'Industry-recognized certification',
      'Internship placement opportunities',
    ],
    curriculum: [
      'Hair Anatomy & Scalp Health',
      'Basic to Advanced Cutting Techniques',
      'Color Theory, Foiling & Balayage',
      'Chemical Treatments: Relaxers & Perms',
      'Protective Styles: Braids, Weaves & Wigs',
      'Natural Hair Care & Styling',
      'Blow-drying & Thermal Styling',
      'Salon Management & Professional Ethics',
    ],
    icon: '✂️',
  },
  {
    id: '4',
    slug: 'extensions-cils',
    title: 'Lash Extensions',
    subtitle: 'Perfect the Art of Lash Enhancement',
    description:
      'The lash extension industry is booming, and our Lash Extensions program positions you at the forefront of this lucrative field. You will learn the precise techniques for applying classic, volume, and hybrid lash sets that enhance natural beauty. Our program emphasizes safety, sanitation, and client satisfaction, giving you the skills to build a thriving lash business or add this in-demand service to your existing beauty practice.',
    image: '/images/gallery-lash1.jpg',
    duration: '3 Months',
    price: 'Contact Us',
    level: 'Beginner',
    benefits: [
      'Classic, volume, and hybrid lash techniques',
      'Safety protocols and eye anatomy education',
      'Hands-on practice with live models',
      'Client consultation and aftercare guidance',
      'Lash business startup toolkit',
      'Ongoing mentorship and support',
    ],
    curriculum: [
      'Eye Anatomy & Lash Growth Cycle',
      'Safety, Sanitation & Allergy Management',
      'Classic Lash Application Techniques',
      'Volume & Fan-making Techniques',
      'Hybrid & Mega Volume Sets',
      'Lash Mapping & Styling for Eye Shapes',
      'Removal & Refill Procedures',
      'Business Building & Client Retention',
    ],
    icon: '👁️',
  },
  {
    id: '5',
    slug: 'esthetique',
    title: 'Esthetics & Skincare',
    subtitle: 'Master Professional Skincare Treatments',
    description:
      'Our Esthetics & Skincare program provides a deep understanding of skin science combined with practical skills in facial treatments, body care, and wellness therapies. You will learn to analyze skin conditions, perform advanced facials, and recommend personalized skincare regimens. This program prepares you for careers in spas, dermatology clinics, and private practice, with a strong foundation in both theory and hands-on application.',
    image: '/images/about-salon.jpg',
    duration: '6 Months',
    price: 'Contact Us',
    level: 'Beginner to Advanced',
    benefits: [
      'Comprehensive skin analysis training',
      'Advanced facial and body treatment techniques',
      'Product knowledge and ingredient science',
      'Spa and wellness industry insights',
      'Practical experience with real clients',
      'Professional skincare kit included',
    ],
    curriculum: [
      'Skin Anatomy & Physiology',
      'Skin Analysis & Condition Assessment',
      'Facial Treatments: European, Deep Cleansing, Anti-aging',
      'Chemical Peels & Microdermabrasion',
      'Body Treatments & Massage Basics',
      'Product Chemistry & Ingredient Analysis',
      'Client Consultation & Treatment Planning',
      'Spa Operations & Professional Standards',
    ],
    icon: '🧖‍♀️',
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
