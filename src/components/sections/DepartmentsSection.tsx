import { cn } from '@/lib/utils';

// ============================================
// DEPARTMENTS DATA — 9 отделов по Company Pack
// ============================================

export const departments = [
  {
    id: 'main-deck',
    title: 'The Main Deck',
    description: '40\' ceilings, 13,000 sq ft. Full pre-assembly of most projects before installation — issues found here, not on-site.',
    image: '/images/departments/main-deck.jpg',
  },
  {
    id: 'mill',
    title: 'The Mill',
    description: 'From simple cabinetry to historic millwork reproduction. Custom woodwork at any scale.',
    image: '/images/departments/mill.avif',
  },
  {
    id: 'metal-shop',
    title: 'Metal Shop',
    description: 'Structural and artistic fabrication in aluminum, steel, and brass. Engineering meets craftsmanship.',
    image: '/images/departments/metal-shop.jpg',
  },
  {
    id: 'cnc',
    title: 'CNC Department',
    description: 'Two routers, waterjet, plasma table, press brake, and CNC mill. Precision cutting for complex geometry.',
    image: '/images/departments/cnc.avif',
  },
  {
    id: 'finish',
    title: 'Finish Department',
    description: 'Multi-step automotive processes to basic clear coat. Custom color matching and specialty finishes.',
    image: '/images/departments/finish.avif',
  },
  {
    id: 'scenic-paint',
    title: 'Scenic Paint',
    description: 'Theatrical training meets professional execution. Faux finishes, aging, backdrops — we speak your language.',
    image: '/images/departments/scenic-paint.avif',
  },
  {
    id: 'electrics',
    title: 'Electrics Department',
    description: 'Full staff including licensed Master Electrician. Scenic wiring and lighting integration made easy.',
    image: '/images/departments/electrics.avif',
  },
  {
    id: 'graphics',
    title: 'Graphics & Signage',
    description: 'Vinyl lettering, screen printing, laser cutting. From wayfinding to branded environments.',
    image: '/images/departments/graphics-signage.avif',
  },
  {
    id: 'acrylic',
    title: 'Acrylic & Specialty',
    description: 'The crew with creativity and skill to build projects that feel impossible. Primary focus on acrylic work.',
    image: '/images/departments/acrylic-specialty.avif',
  },
];

// ============================================
// DEPARTMENT CARD COMPONENT
// ============================================

interface DepartmentCardProps {
  title: string;
  description: string;
  image: string;
  variant?: 'light' | 'dark';
}

function DepartmentCard({ title, description, image, variant = 'dark' }: DepartmentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-card">
      {/* Image */}
      <div className="aspect-[3/2] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient overlay — stronger for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-body-m font-semibold text-white mb-2">{title}</h3>
        <p className="text-body-s text-gray-200 line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

// ============================================
// DEPARTMENTS GRID COMPONENT
// ============================================

interface DepartmentsGridProps {
  variant?: 'light' | 'dark';
  columns?: 3 | 4 | 5;
  showAll?: boolean;
  selectedIds?: string[];
  className?: string;
}

export function DepartmentsGrid({ 
  variant = 'dark', 
  columns = 3,
  showAll = true,
  selectedIds,
  className 
}: DepartmentsGridProps) {
  const displayDepartments = showAll 
    ? departments 
    : departments.filter(d => selectedIds?.includes(d.id));
  
  const gridCols = {
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
    5: 'md:grid-cols-2 lg:grid-cols-5',
  };
  
  return (
    <div className={cn(
      'grid grid-cols-1 gap-6',
      gridCols[columns],
      className
    )}>
      {displayDepartments.map((dept) => (
        <DepartmentCard
          key={dept.id}
          title={dept.title}
          description={dept.description}
          image={dept.image}
          variant={variant}
        />
      ))}
    </div>
  );
}

// ============================================
// DEPARTMENTS SECTION — Full section with header
// ============================================

interface DepartmentsSectionProps {
  variant?: 'light' | 'dark';
  overline?: string;
  title?: string;
  subtitle?: string;
}

export function DepartmentsSection({
  variant = 'dark',
  overline = 'In-House Capabilities',
  title = 'Everything Under One Roof',
  subtitle = 'Our 100,000 sq ft facility houses every department needed to take projects from concept to installation.',
}: DepartmentsSectionProps) {
  const isDark = variant === 'dark';
  
  return (
    <section className={cn(
      'section-padding',
      isDark ? 'bg-charcoal' : 'bg-gray-50'
    )}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange font-semibold text-body-m mb-4 tracking-wide uppercase">
            {overline}
          </p>
          <h2 className={cn(
            'text-h2-mobile md:text-h2 mb-4',
            isDark ? 'text-white' : 'text-charcoal'
          )}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn(
              'text-body-l max-w-3xl mx-auto',
              isDark ? 'text-gray-300' : 'text-gray-600'
            )}>
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Grid */}
        <DepartmentsGrid variant={variant} columns={3} />
      </div>
    </section>
  );
}

export default DepartmentsSection;
