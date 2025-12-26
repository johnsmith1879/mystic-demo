import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Loader2 } from 'lucide-react';

// ============================================
// BUTTON COMPONENT
// ============================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'secondary-light' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showArrow?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      showArrow = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange',
      'disabled:opacity-50 disabled:cursor-not-allowed'
    );

    const variants = {
      primary: cn(
        'bg-orange text-white',
        'hover:bg-orange-hover active:scale-[0.98]'
      ),
      secondary: cn(
        'border-2 border-gray-700 text-gray-700 bg-transparent',
        'hover:bg-gray-700 hover:bg-opacity-10'
      ),
      'secondary-light': cn(
        'border-2 border-white text-white bg-transparent',
        'hover:bg-white hover:bg-opacity-10'
      ),
      ghost: cn(
        'text-gray-700 bg-transparent',
        'hover:bg-gray-100'
      ),
      link: cn(
        'text-orange bg-transparent underline-offset-4',
        'hover:underline hover:text-orange-hover'
      ),
    };

    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
        {!isLoading && showArrow && <ArrowRight className="w-4 h-4" />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };

// ============================================
// LINK BUTTON (for Next.js Link)
// ============================================

export interface LinkButtonProps {
  href: string;
  variant?: 'primary' | 'secondary' | 'secondary-light' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className,
  children,
}: LinkButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange'
  );

  const variants = {
    primary: cn(
      'bg-orange text-white',
      'hover:bg-orange-hover active:scale-[0.98]'
    ),
    secondary: cn(
      'border-2 border-gray-700 text-gray-700 bg-transparent',
      'hover:bg-gray-700 hover:bg-opacity-10'
    ),
    'secondary-light': cn(
      'border-2 border-white text-white bg-transparent',
      'hover:bg-white hover:bg-opacity-10'
    ),
    ghost: cn(
      'text-gray-700 bg-transparent',
      'hover:bg-gray-100'
    ),
    link: cn(
      'text-orange bg-transparent',
      'hover:text-orange-hover'
    ),
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <a
      href={href}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </a>
  );
}

// ============================================
// TEXT LINK WITH ARROW
// ============================================

export interface TextLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function TextLink({ href, className, children }: TextLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-2 text-orange font-medium',
        'transition-all duration-150',
        'hover:text-orange-hover hover:gap-3',
        'group',
        className
      )}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
    </a>
  );
}
