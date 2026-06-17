export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'What are the admission requirements?',
    answer: 'Applicants must be at least 18 years old and have a high school diploma or equivalent. No prior beauty experience is required for our beginner programs. We welcome passionate individuals from all backgrounds who are eager to learn and build a career in the beauty industry.',
  },
  {
    id: 2,
    question: 'How long do the programs take to complete?',
    answer: 'Program durations vary: Makeup Artistry and Esthetics are 6 months, Hairdressing is 8 months, Nail Technology is 4 months, and Lash Extensions is 3 months. All programs include both theoretical instruction and extensive hands-on practice.',
  },
  {
    id: 3,
    question: 'Is financial aid or payment plans available?',
    answer: 'Yes, we offer flexible payment plans to make education accessible. Students can pay tuition in installments. We also have scholarship opportunities for outstanding applicants and early registration discounts.',
  },
  {
    id: 4,
    question: 'Do you provide job placement assistance?',
    answer: 'Absolutely. We have strong partnerships with leading salons, spas, and beauty brands. Our career services include resume building, interview preparation, and direct job referrals. Many students receive job offers before graduating.',
  },
  {
    id: 5,
    question: 'Are the certifications recognized internationally?',
    answer: 'Yes, our certifications are widely recognized across the beauty industry. We are an accredited institution meeting national and international standards. Our graduates have successfully built careers in multiple countries.',
  },
  {
    id: 6,
    question: 'Can I take multiple programs at the same time?',
    answer: 'While we recommend focusing on one program at a time, we offer combined course packages for motivated students. Speak with our academic advisor to create a personalized learning plan.',
  },
];
