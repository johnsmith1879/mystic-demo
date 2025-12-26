import { Section, Container, Grid, SectionHeader } from '@/components/layout/Section';
import { LinkButton, TextLink } from '@/components/ui/Button';
import { DepartmentsSection } from '@/components/sections/DepartmentsSection';
import { 
  Tv, 
  Building, 
  Calendar, 
  Landmark,
  Theater,
  Hammer,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

// ============================================
// DATA — 5 сегментов согласно Company Pack
// ============================================

const services = [
  {
    id: "broadcast",
    title: "Broadcast & Media",
    tagline: "From local stations to major networks",
    description: "Project Managers, Metal Fabricators, Carpenters, and Artisans build and install studios worldwide. We've delivered environments for ESPN, MSNBC, CNN, Fox, NBC, CBS, and Amazon — from flagship news studios to sports broadcast facilities.",
    icon: Tv,
    features: [
      "LED integration and virtual production",
      "Anchor desks and custom furniture",
      "Architectural scenic elements",
      "AR/VR ready infrastructure",
      "Full pre-assembly at our facility",
      "On-site installation teams"
    ],
    projects: ["ESPN Studio X", "Amazon NBA", "MSNBC Studio 3A"],
    href: "/services/broadcast/",
    color: "from-blue-500/20 to-blue-600/10"
  },
  {
    id: "millwork",
    title: "Millwork & Interiors",
    tagline: "One-stop custom millwork",
    description: "Retail store buildouts, restaurant millwork, retail kiosks, corporate interiors, and architectural millwork. From simple cabinetry to historic reproduction — all fabricated in-house with broadcast-level precision.",
    icon: Hammer,
    features: [
      "Retail store buildouts",
      "Restaurant millwork",
      "Retail kiosks",
      "Corporate interiors",
      "Historic reproduction",
      "Custom cabinetry"
    ],
    projects: ["Retail Environments", "Restaurant Interiors", "Corporate Offices"],
    href: "/services/millwork/",
    color: "from-orange-500/20 to-orange-600/10"
  },
  {
    id: "exhibits",
    title: "Museums & Exhibits",
    tagline: "From artifact mounting to multi-phase build-outs",
    description: "Museums, national parks, and corporate lobbies trust us to bring their stories to life. We combine museum-grade attention to detail with broadcast-proven durability and finish quality.",
    icon: Landmark,
    features: [
      "Interactive display fabrication",
      "Archival-quality finishes",
      "ADA-compliant construction",
      "Multi-phase installation capability",
      "Climate-controlled transport",
      "Artifact mounting and cases"
    ],
    projects: ["Corporate Visitor Centers", "National Park Exhibits", "Museum Installations"],
    href: "/services/museums/",
    color: "from-amber-500/20 to-amber-600/10"
  },
  {
    id: "events",
    title: "Events & Trade Shows",
    tagline: "Design, fabrication, logistics, and warehousing",
    description: "Complete event fabrication with design, build, logistics management, and warehousing. Our rental inventory helps keep projects under budget with turntables, lecterns, projection screens, platforms, and more.",
    icon: Calendar,
    features: [
      "Custom booth and stage design",
      "Modular reusable systems",
      "Logistics and warehousing",
      "Rental inventory available",
      "Rapid turnaround capability",
      "On-site installation crew"
    ],
    projects: ["Stanley Cup Presentation", "Super Bowl Sets", "Trade Show Exhibits"],
    href: "/services/events/",
    color: "from-purple-500/20 to-purple-600/10"
  },
  {
    id: "theatre",
    title: "Theatre & Live Performance",
    tagline: "Built for live audiences",
    description: "Theatre is in our DNA. Founded by theatre professionals to build stage scenery, we still love projects built for live audiences. From regional productions to touring shows — scenic engineered for safety and built for quick changes.",
    icon: Theater,
    features: [
      "Stage scenery fabrication",
      "Touring-ready construction",
      "Quick-change mechanisms",
      "Safety engineering",
      "Scenic paint department",
      "Soft goods and drapery"
    ],
    projects: ["Heisman Trophy Ceremony", "Regional Theatre Productions", "Concert Tours"],
    href: "/services/theatre/",
    color: "from-red-500/20 to-red-600/10"
  }
];

// ============================================
// PAGE
// ============================================

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-charcoal pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal-light" />
        <Container size="wide" className="relative z-10 py-16">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-body-m mb-4 tracking-wide">
              SERVICES
            </p>
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              Full-Service Fabrication & Design
            </h1>
            <p className="text-body-l text-gray-300">
              Five markets, one standard of excellence. From broadcast studios to stage scenery — 
              we deliver craftsmanship where there's zero margin for error.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Navigation */}
      <Section variant="light" padding="md" className="border-b border-gray-200">
        <Container size="wide">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={service.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-orange hover:bg-orange/5 transition-colors"
              >
                <service.icon className="w-4 h-4 text-orange" />
                <span className="text-body-s font-medium text-charcoal">{service.title}</span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start p-8 rounded-card bg-gradient-to-br ${service.color} border border-gray-200`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-orange" />
                      </div>
                      <div>
                        <h2 className="text-h3 text-charcoal">{service.title}</h2>
                        <p className="text-body-s text-gray-500">{service.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-body-m text-gray-700 mb-8">
                      {service.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                          <span className="text-body-s text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <LinkButton href={service.href} variant="primary" size="md" showArrow>
                      Learn More
                    </LinkButton>
                  </div>
                  
                  {/* Related Projects */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-white rounded-card p-6 border border-gray-200">
                      <p className="text-caption text-gray-500 mb-4">RELATED PROJECTS</p>
                      <div className="space-y-3">
                        {service.projects.map((project) => (
                          <div 
                            key={project}
                            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <span className="text-body-s font-medium text-charcoal">{project}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <TextLink href="/projects/">View All Projects</TextLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Departments — новый компонент с изображениями */}
      <DepartmentsSection />

      {/* Process */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Our Process"
            title="From Concept to Installation"
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision, requirements, and constraints" },
              { step: "02", title: "Design", description: "Engineering solutions and refining the approach" },
              { step: "03", title: "Fabrication", description: "Building and pre-assembling at our facility" },
              { step: "04", title: "Installation", description: "On-site delivery, setup, and handoff" },
            ].map((phase, index) => (
              <div key={phase.step} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gray-300 -translate-x-1/2" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange text-white flex items-center justify-center text-h4 font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-body-m font-semibold text-charcoal mb-2">{phase.title}</h3>
                  <p className="text-body-s text-gray-500">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
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
              Tell us about your vision. We'll show you how we can bring it to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Contact Us
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
