import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

// ============================================
// BASE CARD COMPONENT
// ============================================

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  variant = 'light',
  hover = true,
  padding = 'none',
}: CardProps) {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-card overflow-hidden transition-all duration-300',
        variant === 'light' && 'bg-white border border-gray-300',
        variant === 'dark' && 'bg-[#222222] border border-[#333333]',
        hover && 'hover:border-gray-500 hover:shadow-card-hover hover:-translate-y-1',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

// ============================================
// PROJECT CARD COMPONENT
// ============================================

export interface ProjectCardProps {
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  tags?: string[];
  variant?: 'light' | 'dark';
  featured?: boolean;
}

export function ProjectCard({
  slug,
  title,
  client,
  category,
  image,
  tags = [],
  variant = 'light',
  featured = false,
}: ProjectCardProps) {
  return (
    <a
      href={`/projects/${slug}/`}
      className={cn(
        'block rounded-card overflow-hidden transition-all duration-300',
        'group',
        variant === 'light' && 'bg-white border border-gray-300 hover:border-gray-500',
        variant === 'dark' && 'bg-[#222222] border border-[#333333] hover:border-gray-500',
        'hover:shadow-card-hover hover:-translate-y-1'
      )}
    >
      {/* Image */}
      <div className="aspect-card overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category tag */}
        <span className={cn(
          'inline-block text-overline uppercase tracking-wider mb-2',
          variant === 'light' ? 'text-orange' : 'text-orange'
        )}>
          {category}
        </span>

        {/* Title */}
        <h3 className={cn(
          'text-h4 mb-1',
          variant === 'light' ? 'text-charcoal' : 'text-white'
        )}>
          {title}
        </h3>

        {/* Client */}
        <p className={cn(
          'text-body-s mb-4',
          variant === 'light' ? 'text-gray-500' : 'text-gray-300'
        )}>
          {client}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={cn(
                  'text-caption px-2 py-1 rounded',
                  variant === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-charcoal text-gray-300'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        <span className="inline-flex items-center gap-2 text-orange font-medium text-body-s group-hover:gap-3 transition-all duration-150">
          View Case
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

// ============================================
// SERVICE CARD COMPONENT
// ============================================

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  variant?: 'light' | 'dark';
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  variant = 'light',
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className={cn(
        'block p-6 rounded-card border transition-all duration-300',
        'group',
        variant === 'light' && 'border-gray-300 hover:border-orange',
        variant === 'dark' && 'border-[#333333] hover:border-orange'
      )}
    >
      {/* Icon */}
      <div className={cn(
        'w-10 h-10 mb-4 transition-colors duration-200',
        variant === 'light' ? 'text-gray-700 group-hover:text-orange' : 'text-gray-300 group-hover:text-orange'
      )}>
        {icon}
      </div>

      {/* Title */}
      <h3 className={cn(
        'text-body-m font-semibold mb-2',
        variant === 'light' ? 'text-charcoal' : 'text-white'
      )}>
        {title}
      </h3>

      {/* Description — no clamp, show full text */}
      <p className={cn(
        'text-body-s mb-4',
        variant === 'light' ? 'text-gray-500' : 'text-gray-300'
      )}>
        {description}
      </p>

      {/* Link */}
      <span className="inline-flex items-center gap-2 text-orange font-medium text-body-s group-hover:gap-3 transition-all duration-150">
        Explore
        <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
      </span>
    </a>
  );
}

// ============================================
// DIFFERENTIATOR CARD COMPONENT
// ============================================

export interface DifferentiatorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  metric?: string;
  variant?: 'light' | 'dark';
}

export function DifferentiatorCard({
  title,
  description,
  icon,
  metric,
  variant = 'light',
}: DifferentiatorCardProps) {
  return (
    <div className={cn(
      'p-8 rounded-card',
      variant === 'light' && 'bg-white',
      variant === 'dark' && 'bg-[#222222]'
    )}>
      {/* Icon */}
      <div className="w-12 h-12 mb-6 text-orange">
        {icon}
      </div>

      {/* Title */}
      <h3 className={cn(
        'text-h4 mb-3',
        variant === 'light' ? 'text-charcoal' : 'text-white'
      )}>
        {title}
      </h3>

      {/* Description */}
      <p className={cn(
        'text-body-s mb-4',
        variant === 'light' ? 'text-gray-500' : 'text-gray-300'
      )}>
        {description}
      </p>

      {/* Metric */}
      {metric && (
        <p className="text-orange font-bold text-body-m">
          {metric}
        </p>
      )}
    </div>
  );
}

// ============================================
// TESTIMONIAL CARD COMPONENT
// ============================================

export interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  photo?: string;
  variant?: 'light' | 'dark';
}

export function TestimonialCard({
  quote,
  author,
  title,
  company,
  photo,
  variant = 'light',
}: TestimonialCardProps) {
  return (
    <div className={cn(
      'p-8 rounded-card',
      variant === 'light' && 'bg-white border border-gray-300',
      variant === 'dark' && 'bg-[#222222] border border-[#333333]'
    )}>
      {/* Quote mark */}
      <span className={cn(
        'block text-display mb-4',
        variant === 'light' ? 'text-orange/20' : 'text-orange/30'
      )}>
        "
      </span>

      {/* Quote */}
      <blockquote className={cn(
        'text-body-l mb-6',
        variant === 'light' ? 'text-gray-700' : 'text-white'
      )}>
        {quote}
      </blockquote>

      {/* Divider */}
      <div className={cn(
        'w-10 h-px mb-6',
        variant === 'light' ? 'bg-gray-300' : 'bg-gray-500'
      )} />

      {/* Attribution */}
      <div className="flex items-center gap-4">
        {photo && (
          <img
            src={photo}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className={cn(
            'font-semibold',
            variant === 'light' ? 'text-charcoal' : 'text-white'
          )}>
            {author}
          </p>
          <p className={cn(
            'text-body-s',
            variant === 'light' ? 'text-gray-500' : 'text-gray-300'
          )}>
            {title}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
