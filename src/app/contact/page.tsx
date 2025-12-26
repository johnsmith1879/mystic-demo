'use client';

import { useState } from 'react';
import { Section, Container, Grid } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  Building2,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

// ============================================
// CONTACT FORM COMPONENT
// ============================================

function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormState('success');
  };

  if (formState === 'success') {
    return (
      <div className="bg-white rounded-card p-8 border border-gray-200 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-h3 text-charcoal mb-4">Message Sent!</h3>
        <p className="text-body-m text-gray-600 mb-6">
          Thank you for reaching out. Our team will review your inquiry and get back to you within 24-48 hours.
        </p>
        <Button 
          variant="secondary" 
          onClick={() => {
            setFormState('idle');
            setFormData({
              name: '', email: '', company: '', phone: '',
              projectType: '', budget: '', timeline: '', message: ''
            });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-card p-8 border border-gray-200">
      <h3 className="text-h3 text-charcoal mb-6">Tell Us About Your Project</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-body-s font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors"
            placeholder="John Smith"
          />
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-body-s font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors"
            placeholder="john@company.com"
          />
        </div>
        
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-body-s font-medium text-charcoal mb-2">
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors"
            placeholder="ABC Company"
          />
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-body-s font-medium text-charcoal mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
        
        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-body-s font-medium text-charcoal mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            required
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors bg-white"
          >
            <option value="">Select a category</option>
            <option value="broadcast">Broadcast & Media</option>
            <option value="exhibits">Museums & Exhibits</option>
            <option value="events">Events & Trade Shows</option>
            <option value="corporate">Corporate & Experiential</option>
            <option value="millwork">Architectural Millwork</option>
            <option value="theatre">Theatre & Live Performance</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-body-s font-medium text-charcoal mb-2">
            Target Timeline
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors bg-white"
          >
            <option value="">Select timeline</option>
            <option value="urgent">Urgent (under 1 month)</option>
            <option value="short">1-3 months</option>
            <option value="medium">3-6 months</option>
            <option value="long">6+ months</option>
            <option value="exploring">Just exploring</option>
          </select>
        </div>
      </div>
      
      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-body-s font-medium text-charcoal mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors resize-none"
          placeholder="Tell us about your project, goals, and any specific requirements..."
        />
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        fullWidth
        disabled={formState === 'submitting'}
      >
        {formState === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
      
      <p className="text-caption text-gray-500 mt-4 text-center">
        We typically respond within 24-48 business hours.
      </p>
    </form>
  );
}

// ============================================
// PAGE
// ============================================

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal pt-24 pb-16">
        <Container size="wide">
          <div className="max-w-2xl">
            <p className="text-orange font-semibold text-body-m mb-4 tracking-wide">
              CONTACT US
            </p>
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              Let's Build Something Extraordinary
            </h1>
            <p className="text-body-l text-gray-300">
              Ready to start your project? Have questions about our capabilities? 
              We'd love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Address */}
              <div className="bg-white rounded-card p-6 border border-gray-200">
                <h3 className="text-h4 text-charcoal mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p className="text-body-s font-semibold text-charcoal">Address</p>
                      <p className="text-body-s text-gray-600">293 Lenox Street</p>
                      <p className="text-body-s text-gray-600">Norwood, MA 02062</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p className="text-body-s font-semibold text-charcoal">Phone</p>
                      <a href="tel:781-948-1800" className="text-body-s text-orange hover:underline">
                        781.948.1800
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <p className="text-body-s font-semibold text-charcoal">Hours</p>
                      <p className="text-body-s text-gray-600">Monday – Friday</p>
                      <p className="text-body-s text-gray-600">8:00 AM – 5:00 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social */}
              <div className="bg-white rounded-card p-6 border border-gray-200">
                <h3 className="text-body-m font-semibold text-charcoal mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/mysticcustomfab/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange hover:text-white transition-colors text-gray-600"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/mysticcustomfab" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange hover:text-white transition-colors text-gray-600"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/mysticcustomfabrication/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange hover:text-white transition-colors text-gray-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Facility Tour */}
              <div className="bg-charcoal rounded-card p-6">
                <Building2 className="w-10 h-10 text-orange mb-4" />
                <h3 className="text-body-m font-semibold text-white mb-2">
                  Schedule a Facility Tour
                </h3>
                <p className="text-body-s text-gray-400 mb-4">
                  See our 100,000 sq ft production facility in person. 
                  We'd love to show you where the magic happens.
                </p>
                <a 
                  href="tel:781-948-1800" 
                  className="text-orange text-body-s font-semibold hover:underline"
                >
                  Call to Schedule →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Placeholder */}
      <Section variant="dark" padding="none">
        <div className="h-80 bg-charcoal-light flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-orange mx-auto mb-4" />
            <p className="text-body-m text-white mb-2">293 Lenox Street, Norwood, MA 02062</p>
            <p className="text-body-s text-gray-400">Just outside Boston</p>
            <a 
              href="https://maps.google.com/?q=293+Lenox+Street+Norwood+MA+02062" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-orange text-body-s font-semibold hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
