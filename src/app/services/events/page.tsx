import { Section, Container, Grid, SectionHeader } from '@/components/layout/Section';
import { LinkButton, TextLink } from '@/components/ui/Button';
import { DepartmentsGrid } from '@/components/sections/DepartmentsSection';
import { SegmentProjectsSection, SegmentProject } from '@/components/sections/SegmentProjectsSection';
import { 
  Calendar, 
  Clock, 
  Shield, 
  CheckCircle2, 
  Zap,
  Users,
  Truck,
  ArrowRight,
  Theater,
  Repeat,
  Timer,
  Package,
  Wrench,
  AlertTriangle
} from 'lucide-react';

// ============================================
// EVENTS & TRADE SHOWS - SEGMENT LANDING PAGE
// ============================================

// Проекты для этого сегмента
const segmentProjects: SegmentProject[] = [
  {
    slug: "stanley-cup",
    title: "Stanley Cup 2025 Presentation Set",
    client: "NHL",
    image: "/images/projects/stanley-cup/nhl-stanley-cup-presentation-set-fireworks.jpg",
    result: "Sub-5-minute deployment on ice",
    tags: ["Rapid Deployment", "Modular Stage"],
  },
  {
    slug: "heisman-ceremony",
    title: "Heisman Trophy Ceremony",
    client: "ESPN / Heisman Trophy Trust",
    image: "/images/projects/heisman-ceremony/scenic-carpentry-nyc-skyline-backdrop.jpg",
    result: "5 consecutive years of flawless execution",
    tags: ["Annual Event", "Broadway-Caliber"],
  },
  {
    slug: "espn-first-take",
    title: "ESPN First Take — Remote Productions",
    client: "ESPN",
    image: "/images/projects/espn-first-take/espn-first-take-stephen-a-smith-set.jpg",
    result: "Touring-ready broadcast set",
    tags: ["Remote Production", "Modular"],
  },
  {
    slug: "nesn-fenway",
    title: "NESN at Fenway Park",
    client: "NESN",
    image: "/images/projects/nesn-fenway/fenway-park-broadcast-booth-field-view.jpg",
    result: "Live event broadcast integration",
    tags: ["Sports Venue", "Live Production"],
  },
];

const defined = {
  // Страхи Event Producers / Production Managers
  fears: [
    { fear: "Safety under show conditions", solution: "Structural engineering review on every build. Certified for load capacity and performer safety." },
    { fear: "Logistics chaos", solution: "End-to-end management: fabrication, crating, shipping, installation, strike. One point of accountability." },
    { fear: "Deployment failures", solution: "Every mechanism tested and documented. Mock-ups before the real thing." },
    { fear: "Can't meet the changeover", solution: "Purpose-built for rapid deployment. The Stanley Cup set deploys in under 5 minutes." },
  ],
  
  // Capabilities
  capabilities: [
    {
      icon: Shield,
      title: "Safety-First Engineering",
      description: "Every build gets structural review. Load ratings documented. We don't guess when safety is at stake."
    },
    {
      icon: Timer,
      title: "Rapid Deployment Design",
      description: "When you have minutes, not hours, we design for speed. Modular systems, labeled components, tested assembly sequences."
    },
    {
      icon: Repeat,
      title: "Reusable Systems",
      description: "Designed for repeated setup and strike. Road cases, crating, and documentation for your crews."
    },
    {
      icon: Truck,
      title: "Turnkey Logistics",
      description: "Fabrication through installation and strike. We manage shipping, handle customs, and coordinate with your venue."
    },
    {
      icon: Package,
      title: "Warehousing & Storage",
      description: "Secure storage, seasonal refresh, and maintenance. Keep your investment ready for next year."
    },
    {
      icon: Wrench,
      title: "On-Site Support",
      description: "Our crews travel worldwide. Technical supervision, installation, and troubleshooting when it matters most."
    },
  ],
  
  // Event types
  eventTypes: [
    { title: "Award Shows", description: "Stage scenic for televised ceremonies and galas" },
    { title: "Championship Events", description: "Presentation stages and ceremonial moments" },
    { title: "Corporate Events", description: "Premium staging and environmental design" },
    { title: "Trade Shows", description: "Booth fabrication with modular reusability" },
    { title: "Conferences", description: "Keynote stages and breakout environments" },
    { title: "Product Launches", description: "Experiential environments that showcase your brand" },
  ],
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/projects/stanley-cup/nhl-championship-celebration-stage-design.jpg"
            alt="Live Events Fabrication"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
        </div>
        
        <Container size="wide" className="relative z-10 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange" />
              </div>
              <span className="text-orange font-semibold">EVENTS & TRADE SHOWS</span>
            </div>
            
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              Design. Fabrication. Logistics.<br />
              <span className="text-orange">All Under One Roof.</span>
            </h1>
            
            <p className="text-body-l text-gray-300 mb-8 max-w-2xl">
              Complete event fabrication with design, build, logistics management, and warehousing. 
              From the Stanley Cup presentation to trade show booths — built safe, deployed fast, 
              executed flawlessly.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Discuss Your Event
              </LinkButton>
              <LinkButton href="#projects" variant="secondary-light" size="lg">
                See Our Work
              </LinkButton>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-h3 text-orange font-bold">35+</p>
                <p className="text-body-s text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">&lt;5 min</p>
                <p className="text-body-s text-gray-400">Deployment Time</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">Rental</p>
                <p className="text-body-s text-gray-400">Inventory Available</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">100%</p>
                <p className="text-body-s text-gray-400">Safety Record</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Problem We Solve */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange font-semibold text-body-m mb-4">THE CHALLENGE</p>
              <h2 className="text-h2-mobile md:text-h2 text-charcoal mb-6">
                Events Have No Second Chances
              </h2>
              <div className="space-y-4 text-body-m text-gray-700">
                <p>
                  Your event happens once. The audience is there. The cameras are rolling. 
                  And everything rides on execution — from the scenic that needs to deploy 
                  in minutes to the logistics that need to work flawlessly.
                </p>
                <p>
                  We've been building for live events since 1989, starting as theatre 
                  professionals who understood backstage realities. Today we bring that 
                  same expertise — plus broadcast-level precision — to every event project.
                </p>
              </div>
            </div>
            
            <div className="bg-charcoal rounded-card p-8">
              <h3 className="text-h4 text-white mb-6">We Address Your Core Concerns</h3>
              <div className="space-y-4">
                {defined.fears.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-orange" />
                    </div>
                    <div>
                      <p className="text-body-s font-semibold text-white">{item.fear}</p>
                      <p className="text-body-s text-gray-400">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Event Types */}
      <Section variant="light" padding="lg" className="bg-gray-50">
        <Container size="wide">
          <SectionHeader
            overline="What We Build"
            title="Event Fabrication for Every Occasion"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defined.eventTypes.map((type) => (
              <div key={type.title} className="bg-white p-6 rounded-card border border-gray-200">
                <h3 className="text-body-m font-semibold text-charcoal mb-2">{type.title}</h3>
                <p className="text-body-s text-gray-500">{type.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Event Capabilities"
            title="End-to-End Event Support"
            variant="dark"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defined.capabilities.map((capability) => (
              <div key={capability.title} className="p-6 rounded-card bg-white/5 border border-white/10">
                <capability.icon className="w-10 h-10 text-orange mb-4" />
                <h3 className="text-body-m font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-body-s text-gray-400">{capability.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects — унифицированный блок */}
      <div id="projects">
        <SegmentProjectsSection
          overline="Event Projects"
          title="Events We've Delivered"
          subtitle="From championship presentations to annual ceremonies"
          projects={segmentProjects}
          category="events"
        />
      </div>

      {/* Rental Inventory Callout */}
      <Section variant="dark" padding="md">
        <Container size="wide">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-h3 text-white mb-4">Rental Inventory Available</h3>
              <p className="text-body-m text-gray-300">
                Keep your project under budget with our rental inventory: turntables, 
                lecterns, projection screens, platforms, and other event basics.
              </p>
            </div>
            <div className="text-right">
              <LinkButton href="/contact/" variant="primary" size="md">
                Ask About Rentals
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      {/* Departments */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="In-House Capabilities"
            title="Everything Under One Roof"
            subtitle="The departments that make events happen"
          />
          
          <DepartmentsGrid 
            variant="light" 
            columns={3}
            showAll={false}
            selectedIds={['main-deck', 'metal-shop', 'graphics', 'electrics', 'scenic-paint', 'acrylic']}
          />
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="light" padding="lg" className="bg-gray-50">
        <Container size="default">
          <SectionHeader
            overline="Common Questions"
            title="What Event Producers Ask Us"
          />
          
          <div className="space-y-6">
            {[
              {
                q: "How do you ensure scenic is safe for use?",
                a: "Every build gets structural engineering review. We document load ratings, test mechanisms, and certify that scenic meets safety requirements. We understand what performers need to do on and around scenic elements."
              },
              {
                q: "Can you meet our tight changeover window?",
                a: "We design for deployment speed. The Stanley Cup presentation set deploys in under 5 minutes during a commercial break. We'll discuss your changeover requirements upfront and engineer the solution accordingly."
              },
              {
                q: "Do you handle recurring annual events?",
                a: "Yes. For recurring events like the Heisman Trophy ceremony, we provide ongoing support — storing scenic between shows, refreshing elements as needed, and ensuring everything is ready for next year."
              },
              {
                q: "What about international events?",
                a: "We've shipped and installed worldwide. We handle crating, customs documentation, and can either send our crews or supervise local labor on-site."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-card p-6 border border-gray-200">
                <h3 className="text-body-m font-semibold text-charcoal mb-3">{faq.q}</h3>
                <p className="text-body-s text-gray-600">{faq.a}</p>
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
              Let's Talk About Your Event
            </h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether it's an annual ceremony, a trade show, or a one-time spectacular — 
              we're ready to discuss scope, timeline, and logistics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Start a Conversation
              </LinkButton>
              <LinkButton href="/projects/" variant="secondary-light" size="lg">
                Explore Our Work
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
