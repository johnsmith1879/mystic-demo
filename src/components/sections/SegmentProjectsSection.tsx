import { cn } from '@/lib/utils';
import { LinkButton } from '@/components/ui/Button';

// ============================================
// PROJECT DATA TYPE
// ============================================

export interface SegmentProject {
  slug: string;
  title: string;
  client: string;
  image: string;
  result: string;
  tags: string[];
}

// ============================================
// SEGMENT PROJECT CARD
// ============================================

interface ProjectCardProps {
  project: SegmentProject;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a 
      href={`/projects/${project.slug}/`}
      className="group block bg-white rounded-card overflow-hidden border border-gray-200 hover:border-orange/30 hover:shadow-lg transition-all"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p className="text-caption text-orange font-semibold mb-2">{project.client}</p>
        <h3 className="text-h4 text-charcoal mb-2 group-hover:text-orange transition-colors">
          {project.title}
        </h3>
        <p className="text-body-s text-gray-600 mb-4">{project.result}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-caption px-2 py-1 bg-gray-100 text-gray-600 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

// ============================================
// SEGMENT PROJECTS SECTION
// ============================================

interface SegmentProjectsSectionProps {
  overline: string;
  title: string;
  subtitle?: string;
  projects: SegmentProject[];
  category: string; // For filter link
  variant?: 'light' | 'dark';
}

export function SegmentProjectsSection({
  overline,
  title,
  subtitle,
  projects,
  category,
  variant = 'light',
}: SegmentProjectsSectionProps) {
  const isDark = variant === 'dark';
  
  // Show max 4 projects
  const displayProjects = projects.slice(0, 4);
  
  return (
    <section className={cn(
      'section-padding',
      isDark ? 'bg-charcoal' : 'bg-white'
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
        
        {/* Projects Grid — 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {displayProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <LinkButton 
            href={`/projects/?category=${category}`} 
            variant={isDark ? 'secondary-light' : 'secondary'} 
            size="lg"
          >
            View All Projects
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export default SegmentProjectsSection;
