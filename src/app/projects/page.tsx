import { Section, Container, SectionHeader, Grid } from '@/components/layout/Section';
import { ProjectCard } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';

// ============================================
// PROJECTS DATA
// ============================================

const projects = [
  {
    slug: "espn-studio-x",
    title: "ESPN Studio X — SportsCenter Flagship",
    client: "ESPN / The Walt Disney Company",
    category: "Broadcast",
    image: "/images/projects/espn-studio-x/custom-anchor-desk-high-gloss-floor.jfif",
    tags: ["LED Integration", "Virtual Production", "Flagship"],
    featured: true,
  },
  {
    slug: "amazon-nba-studio",
    title: "Amazon NBA on Prime — Culver City",
    client: "Amazon Prime Video",
    category: "Broadcast",
    image: "/images/projects/amazon-nba-studio/amazon-prime-nba-anchor-desk-fabrication.jpg",
    tags: ["LED Floor", "Multi-Level", "Streaming"],
    featured: true,
  },
  {
    slug: "msnbc-studio-3a",
    title: "MSNBC Studio 3A — 30 Rock",
    client: "NBCUniversal News Group",
    category: "Broadcast",
    image: "/images/projects/msnbc-studio-3a/chris-hayes-set-curved-led-video-wall-integration.jpg",
    tags: ["Art Deco", "LED Arch", "Cable News"],
    featured: true,
  },
  {
    slug: "ms-now",
    title: "MS NOW — Times Square Facility",
    client: "MS NOW / Versant",
    category: "Broadcast",
    image: "/images/projects/ms-now/msnbc-studio-set-fabrication-side-angle.jpg",
    tags: ["Multi-Studio", "Network Rebrand", "3 Months"],
    featured: true,
  },
  {
    slug: "espn-first-take",
    title: "ESPN First Take — Studio Y",
    client: "ESPN / The Walt Disney Company",
    category: "Broadcast",
    image: "/images/projects/espn-first-take/first-take-anchor-desk-live-broadcast-set.jpg",
    tags: ["Manhattan Penthouse", "360° Studio"],
    featured: false,
  },
  {
    slug: "espn-get-up",
    title: "ESPN Get Up — Studio X",
    client: "ESPN / The Walt Disney Company",
    category: "Broadcast",
    image: "/images/projects/espn-get-up/espn-get-up-studio-anchor-desk-city-backdrop.jpg",
    tags: ["NYC Aesthetic", "Epoxy Table"],
    featured: false,
  },
  {
    slug: "nba-on-nbc",
    title: "NBA on NBC — Studio 1 Stamford",
    client: "NBC Sports",
    category: "Broadcast",
    image: "/images/projects/nba-on-nbc/nba-showtime-studio-anchor-desk-fabrication.jpg",
    tags: ["Multi-Property", "LED Architecture"],
    featured: false,
  },
  {
    slug: "nesn-fenway",
    title: "NESN Red Sox Studio — Fenway Park",
    client: "NESN",
    category: "Broadcast",
    image: "/images/projects/nesn-fenway/nesn-studio-feature-wall-baseball-texture.jpg",
    tags: ["In-Stadium", "Heritage Design"],
    featured: false,
  },
  {
    slug: "heisman-ceremony",
    title: "Heisman Trophy Ceremony",
    client: "ESPN / Heisman Trophy Trust",
    category: "Events",
    image: "/images/projects/heisman-ceremony/3d-scenic-design-heisman-statue-detail.jpg",
    tags: ["Awards", "Broadway Design"],
    featured: false,
  },
  {
    slug: "stanley-cup",
    title: "NHL Stanley Cup Presentation",
    client: "National Hockey League",
    category: "Events",
    image: "/images/projects/stanley-cup/nhl-championship-celebration-stage-design.jpg",
    tags: ["Championship", "Rapid Deploy"],
    featured: false,
  },
  {
    slug: "sheraton-goodnight-moon",
    title: "Goodnight Moon Suite",
    client: "Sheraton Boston / Marriott",
    category: "Experiential",
    image: "/images/projects/sheraton-goodnight-moon/immersive-hotel-suite-fireplace-mantel-detail.webp",
    tags: ["Themed Suite", "Immersive"],
    featured: false,
  },
];

// ============================================
// PROJECTS PAGE
// ============================================

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const allProjects = projects;

  return (
    <>
      {/* Header */}
      <Section variant="light" padding="lg" className="pt-32">
        <Container size="wide">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-body-m mb-4 tracking-wide">
              OUR WORK
            </p>
            <h1 className="text-h1-mobile md:text-h1 text-charcoal mb-6">
              Projects That Define Industries
            </h1>
            <p className="text-body-l text-gray-500">
              From flagship broadcast studios to immersive experiences — see how we've helped leading brands create environments that captivate audiences.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Featured"
            title="Flagship Projects"
            variant="dark"
          />
          <Grid cols={2} gap="lg">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                client={project.client}
                category={project.category}
                image={project.image}
                tags={project.tags}
                variant="dark"
                featured
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* All Projects */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="All Projects"
            title="Complete Portfolio"
            subtitle="Explore our full range of broadcast, event, and experiential projects."
          />
          <Grid cols={3} gap="lg">
            {allProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                client={project.client}
                category={project.category}
                image={project.image}
                tags={project.tags}
                variant="light"
              />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="dark" padding="lg">
        <Container size="default">
          <div className="text-center">
            <h2 className="text-h2-mobile md:text-h2 text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">
              From concept to installation, we bring your vision to life.
            </p>
            <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
              Contact Us
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
