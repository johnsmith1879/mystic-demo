'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// ============================================
// HEADER COMPONENT
// ============================================

const navigation = [
  { 
    label: 'Services', 
    href: '/services/',
    submenu: [
      { label: 'Broadcast & Media', href: '/services/broadcast/' },
      { label: 'Millwork & Interiors', href: '/services/millwork/' },
      { label: 'Museums & Exhibits', href: '/services/museums/' },
      { label: 'Events & Trade Shows', href: '/services/events/' },
      { label: 'Theatre & Live Performance', href: '/services/theatre/' },
    ]
  },
  { label: 'Projects', href: '/projects/' },
  { label: 'About', href: '/about/' },
  { label: 'People', href: '/people/' },
  { label: 'Contact', href: '/contact/' },
];

export interface HeaderProps {
  variant?: 'light' | 'dark' | 'transparent';
}

export function Header({ variant = 'light' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isTransparent = variant === 'transparent';
  const isDark = variant === 'dark' || variant === 'transparent';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isTransparent ? 'bg-transparent' : isDark ? 'bg-charcoal' : 'bg-white',
        !isTransparent && 'border-b',
        isDark ? 'border-gray-700' : 'border-gray-300'
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo — увеличенный */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src="/images/mystic-logo.avif" 
              alt="Mystic Custom Fabrication" 
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div 
                key={item.href}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 text-body-s font-medium transition-colors duration-150',
                    isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-charcoal'
                  )}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Dropdown Submenu */}
                {item.submenu && openSubmenu === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-card shadow-lg border border-gray-200 py-2 min-w-[220px]">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2 text-body-s text-gray-700 hover:bg-gray-50 hover:text-orange transition-colors"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.location.href = '/contact/'}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'lg:hidden p-2',
              isDark ? 'text-white' : 'text-charcoal'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={cn(
          'lg:hidden border-t',
          isDark ? 'bg-charcoal border-gray-700' : 'bg-white border-gray-300'
        )}>
          <div className="container-wide py-6">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      'text-body-m font-medium py-2 transition-colors duration-150 block',
                      isDark
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-700 hover:text-charcoal'
                    )}
                    onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.href}
                          href={subitem.href}
                          className={cn(
                            'text-body-s py-1 transition-colors duration-150 block',
                            isDark
                              ? 'text-gray-400 hover:text-orange'
                              : 'text-gray-500 hover:text-orange'
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-300">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => window.location.href = '/contact/'}
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
