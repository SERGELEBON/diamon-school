'use client';

import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/about-salon.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 to-[#0A0A0A]" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4"><div className="h-px w-8 bg-[#FFD700]" /><span className="text-[#FFD700] text-xs uppercase tracking-[0.3em] font-semibold">Get In Touch</span><div className="h-px w-8 bg-[#FFD700]" /></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h1>
          <p className="text-white/60 max-w-lg mx-auto">Have questions about our programs? We would love to hear from you.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MapPin, title: 'Visit Us', info: 'Accra, Ghana', detail: 'Diamond Secret Beauty School' },
              { icon: Phone, title: 'Call Us', info: '+233 20 946 1260', detail: '+233 54 379 5688' },
              { icon: Mail, title: 'Email Us', info: 'info@diamondsecretbeauty.com', detail: 'admissions@diamondsecretbeauty.com' },
              { icon: Clock, title: 'Working Hours', info: 'Mon - Sat: 8AM - 6PM', detail: 'Sunday: Closed' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0A0A] p-6 rounded-lg text-center hover:-translate-y-1 transition-transform">
                <item.icon className="w-8 h-8 text-[#FFD700] mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-[#FFD700] text-sm font-medium">{item.info}</p>
                <p className="text-white/50 text-xs mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Send Us a Message</h2>
            <p className="text-[#888] text-sm mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#0A0A0A] text-xs uppercase tracking-wider mb-2 font-medium">Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full border border-[#888]/20 rounded px-4 py-3 text-[#0A0A0A] text-sm focus:border-[#FFD700] focus:outline-none placeholder:text-[#888]/50" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-[#0A0A0A] text-xs uppercase tracking-wider mb-2 font-medium">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border border-[#888]/20 rounded px-4 py-3 text-[#0A0A0A] text-sm focus:border-[#FFD700] focus:outline-none placeholder:text-[#888]/50" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#0A0A0A] text-xs uppercase tracking-wider mb-2 font-medium">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-[#888]/20 rounded px-4 py-3 text-[#0A0A0A] text-sm focus:border-[#FFD700] focus:outline-none placeholder:text-[#888]/50" placeholder="+233 XX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-[#0A0A0A] text-xs uppercase tracking-wider mb-2 font-medium">Subject *</label>
                  <select name="subject" required value={formData.subject} onChange={handleChange} className="w-full border border-[#888]/20 rounded px-4 py-3 text-[#0A0A0A] text-sm focus:border-[#FFD700] focus:outline-none">
                    <option value="">Select a subject</option>
                    <option value="enrollment">Program Enrollment</option>
                    <option value="info">General Information</option>
                    <option value="pricing">Pricing & Payment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[#0A0A0A] text-xs uppercase tracking-wider mb-2 font-medium">Message *</label>
                <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full border border-[#888]/20 rounded px-4 py-3 text-[#0A0A0A] text-sm focus:border-[#FFD700] focus:outline-none placeholder:text-[#888]/50 resize-none" placeholder="Tell us how we can help you..." />
              </div>
              <button type="submit" className="bg-[#FFD700] text-[#0A0A0A] font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#E6C200] transition-all inline-flex items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-sm h-[350px] bg-[#888]/10">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932537498!2d-0.3575877!3d5.5912087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a777%3A0x22e4fbfa3a5a2f3b!2sAccra%2C%20Ghana!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location" />
            </div>
            <div className="bg-[#0A0A0A] rounded-lg p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Response via WhatsApp</h3>
                <p className="text-white/50 text-sm mb-4">Get instant answers directly on WhatsApp</p>
                <a href="https://wa.me/233209461260?text=Hello%20Diamond%20Secret%20Beauty%20School!" target="_blank" rel="noopener noreferrer" className="bg-[#FFD700] text-[#0A0A0A] font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#E6C200] transition-all inline-flex items-center gap-2">
                  Chat on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
