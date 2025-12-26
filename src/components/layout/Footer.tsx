import { cn } from '@/lib/utils';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

// ============================================
// FOOTER COMPONENT
// ============================================

// 5 сегментов согласно Company Pack
const navigation = {
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Services', href: '/services/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Contact', href: '/contact/' },
  ],
  services: [
    { label: 'Broadcast & Media', href: '/services/broadcast/' },
    { label: 'Millwork & Interiors', href: '/services/millwork/' },
    { label: 'Museums & Exhibits', href: '/services/museums/' },
    { label: 'Events & Trade Shows', href: '/services/events/' },
    { label: 'Theatre & Live Performance', href: '/services/theatre/' },
  ],
  projects: [
    { label: 'ESPN Studio X', href: '/projects/espn-studio-x/' },
    { label: 'Amazon NBA', href: '/projects/amazon-nba-studio/' },
    { label: 'MSNBC Studio 3A', href: '/projects/msnbc-studio-3a/' },
    { label: 'View All Projects', href: '/projects/' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/mysticcustomfab/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/mysticcustomfab', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/mysticcustomfabrication/', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              {/* Logo */}
              <img 
                src="/images/mystic-logo.avif" 
                alt="Mystic Custom Fabrication" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-body-s text-gray-300 mb-6 max-w-sm">
              A full-service fabrication and design partner delivering broadcast-ready environments and high-finish builds—engineered to perform on-site and on air.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-300 hover:text-orange transition-colors duration-150"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-body-s font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-body-s text-gray-300 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links — 5 сегментов */}
          <div>
            <h4 className="text-body-s font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-body-s text-gray-300 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-body-s font-semibold text-white mb-4">Contact</h4>
            <address className="not-italic text-body-s text-gray-300 space-y-3">
              <p>
                293 Lenox Street<br />
                Norwood, MA 02062
              </p>
              <p>
                <a
                  href="tel:7819481800"
                  className="hover:text-white transition-colors duration-150"
                >
                  781.948.1800
                </a>
              </p>
              <p className="pt-2">
                <a
                  href="/contact/"
                  className="text-orange hover:text-orange-light transition-colors duration-150"
                >
                  Get in Touch →
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-caption text-gray-500">
              © {new Date().getFullYear()} Mystic Custom Fabrication. All rights reserved.
            </p>
            <p className="text-caption text-gray-500">
              Formerly Mystic Scenic Studios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
