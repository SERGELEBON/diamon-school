'use client';

import Link from 'next/link';
import {
  CheckCircle,
  Calendar,
  FileText,
  Shirt,
  MapPin,
  Phone,
  Mail,
  Home as HomeIcon,
  BadgeCheck,
} from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export function PricingTuitionSection() {
  const plans = [
    {
      duration: '3 Months',
      price: '2,500',
      currency: 'GHS',
      description: 'Choose any 3 selected courses from our curriculum. Perfect for students who want to focus on specific beauty skills and build a strong foundation in their areas of interest.',
      features: [
        '3 Selected Courses',
        'Professional Certification',
        'Hands-on Practical Training',
        'Industry-Expert Instructors',
        'Starter Kit Included',
      ],
      highlight: false,
      badge: '',
    },
    {
      duration: '6 Months',
      price: '4,000',
      currency: 'GHS',
      description: 'Access all main courses in our comprehensive curriculum. Ideal for aspiring beauty professionals who want a well-rounded education covering every major discipline in the beauty industry.',
      features: [
        'All Main Courses',
        'Professional Certification',
        'Hands-on Practical Training',
        'Industry-Expert Instructors',
        'Complete Training Kit',
        'Portfolio Development',
      ],
      highlight: true,
      badge: 'Most Popular',
    },
    {
      duration: '1 Year',
      price: '5,500',
      currency: 'GHS',
      description: 'Our most comprehensive program with unlimited access to all main courses plus advanced masterclasses. Designed for serious professionals who want complete mastery and career readiness.',
      features: [
        'All Main Courses',
        'Advanced Masterclasses',
        'Professional Certification',
        'Hands-on Practical Training',
        'Complete Training Kit',
        'Portfolio Development',
        'Career Placement Support',
        'Business Starter Guide',
      ],
      highlight: false,
      badge: 'Best Value',
    },
  ];

  const additionalFees = [
    { icon: FileText, label: 'Registration Form', fee: 'GHS 100', description: 'One-time non-refundable registration fee payable upon enrollment.' },
    { icon: Shirt, label: 'Complete Uniform', fee: 'GHS 800', description: 'Professional uniform set including all required attire for practical sessions.' },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Tuition & Fees"
          title="Invest in Your Future"
          description="Transparent pricing with no hidden costs. Choose the plan that fits your career goals and start your journey to becoming a certified beauty professional."
        />

        {/* ─── PRICING CARDS ──────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlight
                  ? 'bg-[#0A0A0A] text-white border-2 border-[#FFD700] shadow-xl scale-[1.02]'
                  : 'bg-white text-[#0A0A0A] border border-[#888]/20 shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-[#FFD700] text-[#0A0A0A] text-xs font-bold px-4 py-1.5 uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className={`w-5 h-5 ${plan.highlight ? 'text-[#FFD700]' : 'text-[#FFD700]'}`} />
                  <span className={`text-sm uppercase tracking-widest font-semibold ${plan.highlight ? 'text-[#FFD700]' : 'text-[#FFD700]'}`}>
                    {plan.duration}
                  </span>
                </div>
                <div className="mb-4">
                  <span className={`text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-[#0A0A0A]'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/60' : 'text-[#888]'}`}>{plan.currency}</span>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-white/60' : 'text-[#888]'}`}>
                  {plan.description}
                </p>
                <div className="h-px bg-[#FFD700]/20 mb-6" />
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-[#FFD700]' : 'text-[#FFD700]'}`} />
                      <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-[#555]'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center w-full py-3.5 text-sm uppercase tracking-wider font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-[#FFD700] text-[#0A0A0A] hover:bg-[#E6C200]'
                      : 'bg-[#0A0A0A] text-white hover:bg-[#2A2A2A]'
                  }`}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ─── ADDITIONAL FEES ────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {additionalFees.map((item, i) => (
            <div key={i} className="flex items-start gap-5 p-6 bg-[#F5F5F5] rounded-xl border border-[#888]/10 hover:border-[#FFD700]/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center shrink-0 border border-[#FFD700]/30">
                <item.icon className="w-5 h-5 text-[#FFD700]" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="font-bold text-[#0A0A0A]" style={{ fontFamily: "'Playfair Display', serif" }}>{item.label}</h4>
                  <span className="text-[#FFD700] font-bold text-sm">{item.fee}</span>
                </div>
                <p className="text-[#888] text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── LOCATION & ACCOMMODATION ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-xl bg-[#0A0A0A] p-8 flex flex-col justify-between min-h-[260px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#FFD700]" />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Location</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-2">
                Diamond Secret Beauty School is conveniently located in <span className="text-[#FFD700] font-semibold">Lapaz, Accra</span> — a vibrant and easily accessible area with excellent transport links, making it simple for students from all across the city to attend classes daily.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Phone className="w-4 h-4 text-[#FFD700]" />
              <a href="tel:+233209461260" className="text-[#FFD700] text-sm hover:underline">+233 20 946 1260</a>
              <span className="text-white/30 mx-2">|</span>
              <Mail className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFD700] text-sm">info@diamondsecretbeauty.com</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-[#0A0A0A] p-8 flex flex-col justify-between min-h-[260px]">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFD700]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HomeIcon className="w-6 h-6 text-[#FFD700]" />
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Hostel Accommodation</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-2">
                For students traveling from outside Accra, we offer <span className="text-[#FFD700] font-semibold">comfortable hostel accommodation</span> at an affordable fee. Our hostel provides a safe, convenient, and supportive living environment so you can focus fully on your training without the stress of daily commuting.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <BadgeCheck className="w-4 h-4 text-[#FFD700]" />
              <span className="text-white/50 text-sm">Safe & Secure Environment</span>
              <span className="text-white/30 mx-2">|</span>
              <BadgeCheck className="w-4 h-4 text-[#FFD700]" />
              <span className="text-white/50 text-sm">Affordable Rates</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
