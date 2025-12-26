import { Section, Container, SectionHeader, Grid } from '@/components/layout/Section';
import { Button, LinkButton, TextLink } from '@/components/ui/Button';
import { DifferentiatorCard, TestimonialCard, ProjectCard } from '@/components/ui/Card';
import { Award, Wrench, Users, Clock, Sparkles, ArrowRight } from 'lucide-react';

// ============================================
// HOME PAGE — MYSTIC CUSTOM FABRICATION
// ============================================

// Данные сегментов с изображениями (порядок важен: первые 2 — главные)
const services = [
  {
    title: "Broadcast & Media",
    description: "Studios for networks worldwide — from local stations to major cable news. LED integration, precision engineering, broadcast-ready builds.",
    image: "/images/categories/broadcast.jpg",
    href: "/services/broadcast/",
  },
  {
    title: "Millwork & Interiors",
    description: "Retail buildouts, restaurant millwork, corporate interiors. One-stop fabrication with in-house finishing and CNC precision.",
    image: "/images/categories/mill.avif",
    href: "/services/millwork/",
  },
  {
    title: "Museums & Exhibits",
    description: "Museum-grade installations for cultural institutions, national parks, and corporate lobbies.",
    image: "/images/categories/exhibits.avif",
    href: "/services/museums/",
  },
  {
    title: "Events & Trade Shows",
    description: "Design, fabrication, logistics, and warehousing. Rental inventory to keep projects under budget.",
    image: "/images/categories/events.avif",
    href: "/services/events/",
  },
  {
    title: "Theatre & Live Performance",
    description: "Stage scenery for live audiences. Theatre is in our DNA — founded by theatre professionals in 1989.",
    image: "/images/categories/theatre.avif",
    href: "/services/theatre/",
  },
];

// Логотипы клиентов
const clientLogos = [
  { name: 'ESPN', file: 'espn.png' },
  { name: 'CNN', file: 'cnn.png' },
  { name: 'MSNBC', file: 'msnbc.png' },
  { name: 'Fox', file: 'fox.png' },
  { name: 'CBS', file: 'cbs.png' },
  { name: 'NBC', file: 'nbc.png' },
  { name: 'Amazon', file: 'amazon.png' },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[90vh] flex items-center bg-charcoal">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/projects/espn-studio-x/sportscenter-studio-x-anchor-desk-wide.jfif"
            alt="ESPN Studio X - Broadcast Studio Fabrication"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/50" />
        </div>

        {/* Content */}
        <Container size="wide" className="relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-body-m mb-4 tracking-wide">
              BROADCAST • MILLWORK • EXHIBITS • EVENTS • THEATRE
            </p>
            <h1 className="text-display-mobile md:text-display text-white text-balance mb-6">
              Crafting Environments That Command Attention
            </h1>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl">
              A full-service fabrication and design partner delivering broadcast-ready environments and high-finish builds—engineered to perform on-site and on air.
            </p>
            <div className="flex flex-wrap gap-4">
              <LinkButton href="/projects/" variant="primary" size="lg" showArrow>
                View Projects
              </LinkButton>
              <LinkButton href="/contact/" variant="secondary-light" size="lg">
                Contact Us
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          SERVICES OVERVIEW — Bento Grid (2 + 3)
          ============================================ */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="What We Do"
            title="Full-Service Fabrication & Design"
            subtitle="Five markets, one standard of excellence. Each project built with broadcast-level precision."
          />
          
          {/* Bento Grid: 2 large + 3 smaller */}
          <div className="space-y-6">
            {/* Top row — 2 large cards (primary services) */}
            <div className="grid md:grid-cols-2 gap-6">
              {services.slice(0, 2).map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="group relative rounded-card overflow-hidden aspect-[4/3] md:aspect-[16/10]"
                >
                  {/* Background image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-h3 text-white mb-2 group-hover:text-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body-s text-gray-200 mb-4 max-w-md">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-orange font-medium text-body-s group-hover:gap-3 transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Bottom row — 3 smaller cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {services.slice(2).map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="group relative rounded-card overflow-hidden aspect-[4/3]"
                >
                  {/* Background image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Content — no line-clamp */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-h4 text-white mb-2 group-hover:text-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-body-s text-gray-200 mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-orange font-medium text-body-s group-hover:gap-3 transition-all">
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          FEATURED PROJECTS
          ============================================ */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Featured Work"
            title="Projects That Define Industries"
            subtitle="See how we've helped leading brands create environments that captivate audiences."
            variant="dark"
          />
          <Grid cols={3} gap="lg">
            <ProjectCard
              slug="espn-studio-x"
              title="ESPN Studio X — SportsCenter Flagship"
              client="ESPN / The Walt Disney Company"
              category="Broadcast"
              image="/images/projects/espn-studio-x/custom-anchor-desk-high-gloss-floor.jfif"
              tags={['LED Integration', 'Virtual Production', 'Flagship']}
              variant="dark"
            />
            <ProjectCard
              slug="amazon-nba-studio"
              title="Amazon NBA on Prime — Culver City"
              client="Amazon Prime Video"
              category="Broadcast"
              image="/images/projects/amazon-nba-studio/amazon-prime-nba-anchor-desk-fabrication.jpg"
              tags={['LED Floor', 'Multi-Level', 'Streaming']}
              variant="dark"
            />
            <ProjectCard
              slug="heisman-ceremony"
              title="Heisman Trophy Ceremony"
              client="ESPN / Heisman Trophy Trust"
              category="Theatre & Events"
              image="/images/projects/heisman-ceremony/scenic-carpentry-nyc-skyline-backdrop.jpg"
              tags={['Stage Scenic', 'Broadway-Caliber', 'Annual Event']}
              variant="dark"
            />
          </Grid>
          <div className="text-center mt-12">
            <TextLink href="/projects/">
              View All Projects
            </TextLink>
          </div>
        </Container>
      </Section>

      {/* ============================================
          WHY MYSTIC - DIFFERENTIATORS
          ============================================ */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Why Mystic"
            title="Why Leading Brands Choose Mystic"
            subtitle="Combining master craftsmanship with engineering precision for over 35 years."
          />
          <Grid cols={3} gap="md">
            <DifferentiatorCard
              title="Master Craftsmanship at Scale"
              description="Master craftsmanship for high-stakes, broadcast-level environments. Meticulous detail with capacity for complex, large-scale builds."
              icon={<Award className="w-12 h-12" />}
              metric="35+ years experience"
            />
            <DifferentiatorCard
              title="Engineering-Grade Problem Solving"
              description="We don't just build — we engineer solutions to complex studio challenges. Integrating structure, technology, and finish."
              icon={<Wrench className="w-12 h-12" />}
              metric="100,000+ sq ft facility"
            />
            <DifferentiatorCard
              title="Agile, Collaborative Delivery"
              description="Big-league quality with boutique agility and direct access to decision-makers. Fast, responsive collaboration."
              icon={<Users className="w-12 h-12" />}
            />
            <DifferentiatorCard
              title="Cross-Industry Expertise"
              description="Broadcast precision, museum-grade detail, and experiential impact in one team. Best practices from every sector."
              icon={<Sparkles className="w-12 h-12" />}
            />
            <DifferentiatorCard
              title="Rapid Turnaround Capability"
              description="Process efficiency and experienced team means speed without compromise. On-time delivery track record."
              icon={<Clock className="w-12 h-12" />}
            />
            <DifferentiatorCard
              title="Trusted Long-Term Partner"
              description="Built on long-term relationships, repeat business, and trust. Operating as your fabrication partner, not a one-off vendor."
              icon={<Award className="w-12 h-12" />}
            />
          </Grid>
          <div className="text-center mt-12">
            <TextLink href="/about/">
              Learn More About Our Approach
            </TextLink>
          </div>
        </Container>
      </Section>

      {/* ============================================
          CLIENT TESTIMONIALS
          ============================================ */}
      <Section variant="light" padding="lg" className="bg-white">
        <Container size="wide">
          <SectionHeader
            overline="Client Stories"
            title="What Our Clients Say"
            align="center"
          />
          <Grid cols={2} gap="lg">
            <TestimonialCard
              quote="To my knowledge, I don't know anybody else who's doing depth monitor all day long on their productions. So it feels pretty innovative to me, and I think that's the space we need to be in."
              author="Marti Hanzlik"
              title="Coordinating Director"
              company="ESPN"
            />
            <TestimonialCard
              quote="Very rarely do you get a true greenfield opportunity like this. That allowed us to bring in this stunning LED volume with unbelievable resolution to the point where it looks like you're in real life."
              author="Jared Stacy"
              title="VP, Worldwide Live Sports Production"
              company="Prime Video"
            />
          </Grid>
        </Container>
      </Section>

      {/* ============================================
          CLIENT LOGOS
          ============================================ */}
      <Section variant="light" padding="md">
        <Container size="wide">
          <p className="text-center text-overline uppercase tracking-wider text-gray-500 mb-10">
            Trusted By Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="h-10 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <img 
                  src={`/images/clients-logos/${client.file}`}
                  alt={client.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================
          KEY METRICS / STATS
          ============================================ */}
      <Section variant="dark" padding="md">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-h2-mobile md:text-h2 text-orange font-bold">35+</p>
              <p className="text-body-s text-gray-300">Years Experience</p>
            </div>
            <div>
              <p className="text-h2-mobile md:text-h2 text-orange font-bold">100k+</p>
              <p className="text-body-s text-gray-300">Sq Ft Facility</p>
            </div>
            <div>
              <p className="text-h2-mobile md:text-h2 text-orange font-bold">500+</p>
              <p className="text-body-s text-gray-300">Projects Delivered</p>
            </div>
            <div>
              <p className="text-h2-mobile md:text-h2 text-orange font-bold">Emmy</p>
              <p className="text-body-s text-gray-300">Award Winner</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <Section variant="dark" padding="lg">
        <Container size="default">
          <div className="text-center">
            <h2 className="text-h1-mobile md:text-h1 text-white text-balance mb-6">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">
              From concept to installation, we bring your vision to life. Let's discuss your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Start Your Project
              </LinkButton>
              <LinkButton href="/projects/" variant="secondary-light" size="lg">
                View Our Work
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
