import { cn } from '@/lib/utils';

// ============================================
// CONTAINER COMPONENT
// ============================================

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'narrow' | 'default' | 'wide' | 'full';
}

export function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  const sizes = {
    narrow: 'max-w-narrow',
    default: 'max-w-default',
    wide: 'max-w-wide',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto px-5 md:px-10 lg:px-20',
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}

// ============================================
// SECTION COMPONENT
// ============================================

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  id?: string;
}

export function Section({
  children,
  className,
  variant = 'light',
  padding = 'md',
  id,
}: SectionProps) {
  const paddings = {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
  };

  return (
    <section
      id={id}
      className={cn(
        variant === 'light' && 'bg-light-base text-gray-700',
        variant === 'dark' && 'bg-charcoal text-white',
        paddings[padding],
        className
      )}
    >
      {children}
    </section>
  );
}

// ============================================
// SECTION HEADER COMPONENT
// ============================================

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  overline?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  overline,
  align = 'left',
  variant = 'light',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {overline && (
        <span className={cn(
          'inline-block text-overline uppercase tracking-wider mb-4',
          variant === 'light' ? 'text-orange' : 'text-orange'
        )}>
          {overline}
        </span>
      )}
      <h2 className={cn(
        'text-h2-mobile md:text-h2 text-balance',
        variant === 'light' ? 'text-charcoal' : 'text-white'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 text-body-m max-w-2xl',
          align === 'center' && 'mx-auto',
          variant === 'light' ? 'text-gray-500' : 'text-gray-300'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ============================================
// GRID COMPONENT
// ============================================

export interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}

export function Grid({
  children,
  className,
  cols = 3,
  gap = 'md',
}: GridProps) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapClass = {
    sm: 'gap-4 md:gap-6',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
  };

  return (
    <div
      className={cn(
        'grid',
        colsClass[cols],
        gapClass[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
