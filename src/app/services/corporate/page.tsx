import { Section, Container, Grid, SectionHeader } from '@/components/layout/Section';
import { LinkButton, TextLink } from '@/components/ui/Button';
import { DepartmentsGrid } from '@/components/sections/DepartmentsSection';
import { SegmentProjectsSection, SegmentProject } from '@/components/sections/SegmentProjectsSection';
import { 
  Sparkles, 
  Target, 
  Shield, 
  CheckCircle2, 
  TrendingUp,
  Users,
  Eye,
  ArrowRight,
  Building,
  Palette,
  Megaphone,
  BarChart3,
  Repeat,
  Truck
} from 'lucide-react';

// ============================================
// CORPORATE & EXPERIENTIAL - SEGMENT LANDING PAGE
// ============================================

// Проекты для этого сегмента
const segmentProjects: SegmentProject[] = [
  {
    slug: "sheraton-goodnight-moon",
    title: "Goodnight Moon Suite — Sheraton Boston",
    client: "Sheraton / Marriott",
    image: "/images/projects/sheraton-goodnight-moon/goodnight-moon-suite-sheraton-boston-wide-view.webp",
    result: "National PR coverage, social media magnet",
    tags: ["Branded Experience", "Hospitality", "IP-Licensed"],
  },
  {
    slug: "heisman-ceremony",
    title: "Heisman Trophy Ceremony",
    client: "ESPN / Heisman Trophy Trust",
    image: "/images/projects/heisman-ceremony/scenic-carpentry-nyc-skyline-backdrop.jpg",
    result: "5 consecutive years, flagship annual event",
    tags: ["Corporate Event", "Broadway-Caliber"],
  },
  {
    slug: "espn-studio-x",
    title: "ESPN Studio X — Brand Environment",
    client: "ESPN",
    image: "/images/projects/espn-studio-x/large-format-led-display-wood-trim.jfif",
    result: "Flagship brand expression for ESPN",
    tags: ["Brand Environment", "Premium Finish"],
  },
  {
    slug: "amazon-nba-studio",
    title: "Amazon NBA — Prime Video Experience",
    client: "Amazon Prime Video",
    image: "/images/projects/amazon-nba-studio/amazon-prime-nba-anchor-desk-fabrication.jpg",
    result: "First-of-its-kind streaming broadcast environment",
    tags: ["Brand Launch", "Experiential"],
  },
];

const defined = {
  // Страхи Marketing/Brand Directors
  fears: [
    { fear: "Off-brand execution", solution: "We work from your brand guidelines and get finish approvals before production" },
    { fear: "Underwhelming impact", solution: "Broadcast-level quality ensures your environment commands attention" },
    { fear: "Budget surprises", solution: "Transparent pricing with change order documentation — no hidden costs" },
    { fear: "Logistics chaos", solution: "End-to-end project management from fabrication through installation and strike" },
  ],
  
  // Capabilities
  capabilities: [
    {
      icon: Palette,
      title: "Brand-Accurate Execution",
      description: "Custom color matching, finish samples, and stakeholder approval process before we cut a single piece of material."
    },
    {
      icon: Eye,
      title: "Wow-Factor Quality",
      description: "The same precision we bring to broadcast studios — where every surface is scrutinized on camera — applied to your brand experience."
    },
    {
      icon: Megaphone,
      title: "PR-Worthy Installations",
      description: "Environments designed to be photographed and shared. We've created experiences that earned national media coverage."
    },
    {
      icon: Truck,
      title: "Turnkey Logistics",
      description: "Fabrication, shipping, installation, and strike — managed end-to-end. One partner, one point of accountability."
    },
    {
      icon: Repeat,
      title: "Reusable & Modular Systems",
      description: "When ROI matters, we can design elements for multiple deployments — road shows, seasonal updates, multi-location rollouts."
    },
    {
      icon: BarChart3,
      title: "Lifecycle Support",
      description: "Storage, maintenance, refresh, and redeployment. We can be your ongoing fabrication partner, not just a one-time vendor."
    },
  ],
  
  // Use cases
  useCases: [
    { title: "Executive Briefing Centers", description: "Immersive brand environments for high-stakes client visits" },
    { title: "Brand Activations", description: "Pop-up experiences, product launches, experiential marketing" },
    { title: "Corporate Events", description: "Galas, conferences, shareholder meetings — premium staging and scenic" },
    { title: "Showrooms & Lobbies", description: "Permanent branded installations that impress every visitor" },
    { title: "Trade Show Exhibits", description: "Modular, reusable systems designed for multiple deployments" },
    { title: "Themed Environments", description: "Immersive spaces that tell your brand story" },
  ],
};

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/projects/sheraton-goodnight-moon/custom-fabrication-tiger-rug-rocking-chair.jfif"
            alt="Corporate & Experiential Fabrication"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
        </div>
        
        <Container size="wide" className="relative z-10 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-orange" />
              </div>
              <span className="text-orange font-semibold">CORPORATE & EXPERIENTIAL</span>
            </div>
            
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              Your Brand Deserves More Than<br />
              <span className="text-orange">"Good Enough."</span>
            </h1>
            
            <p className="text-body-l text-gray-300 mb-8 max-w-2xl">
              Broadcast-quality fabrication for brand experiences, corporate events, 
              and experiential installations — environments that earn attention, 
              media coverage, and real ROI.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Discuss Your Project
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
                <p className="text-h3 text-orange font-bold">100k</p>
                <p className="text-body-s text-gray-400">Sq Ft Facility</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">End-to-End</p>
                <p className="text-body-s text-gray-400">Project Management</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">National</p>
                <p className="text-body-s text-gray-400">PR Coverage</p>
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
                Your Brand Is Your Reputation.<br />
                Execution Matters.
              </h2>
              <div className="space-y-4 text-body-m text-gray-700">
                <p>
                  You've invested in the creative vision. The concept is brilliant. 
                  The stakeholders are excited. Now everything rides on execution — 
                  and the wrong fabrication partner can turn your vision into a 
                  brand-damaging disappointment.
                </p>
                <p>
                  We bring the precision and quality standards of broadcast television 
                  to corporate environments. When ESPN and Amazon trust us with their 
                  flagship studios, it's because we understand that every detail matters — 
                  and that's the same standard we apply to your brand experience.
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

      {/* Use Cases */}
      <Section variant="light" padding="lg" className="bg-gray-50">
        <Container size="wide">
          <SectionHeader
            overline="What We Build"
            title="Environments That Elevate Your Brand"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defined.useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white p-6 rounded-card border border-gray-200">
                <h3 className="text-body-m font-semibold text-charcoal mb-2">{useCase.title}</h3>
                <p className="text-body-s text-gray-500">{useCase.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Our Approach"
            title="Why Brands Choose Mystic"
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
          overline="Corporate Projects"
          title="Brand Experiences That Made an Impact"
          subtitle="See how we've helped leading brands create environments that captivate"
          projects={segmentProjects}
          category="corporate"
        />
      </div>

      {/* Departments — с изображениями */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="In-House Capabilities"
            title="Everything Under One Roof"
            subtitle="The departments that bring brand experiences to life"
            variant="dark"
          />
          
          <DepartmentsGrid 
            variant="dark" 
            columns={3}
            showAll={false}
            selectedIds={['main-deck', 'metal-shop', 'cnc', 'finish', 'graphics', 'acrylic']}
          />
          
          <div className="mt-12 text-center">
            <LinkButton href="/about/" variant="secondary-light" size="lg">
              Tour Our Full Facility
            </LinkButton>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="light" padding="lg">
        <Container size="default">
          <SectionHeader
            overline="Common Questions"
            title="What Brand Managers Ask Us"
          />
          
          <div className="space-y-6">
            {[
              {
                q: "How do you ensure brand consistency across elements?",
                a: "We work directly from your brand guidelines and get explicit approvals on colors, finishes, and materials before production. Our in-house Finish department can custom-match any Pantone color, and we provide physical samples for stakeholder sign-off."
              },
              {
                q: "Can you manage the entire project, not just fabrication?",
                a: "Yes. We offer end-to-end project management including logistics, installation crews, and strike. One partner, one point of accountability — you don't have to coordinate between multiple vendors."
              },
              {
                q: "What if we need to use this for multiple events?",
                a: "We can design modular, reusable systems optimized for transport and redeployment. We also offer warehousing, maintenance, and refresh services for ongoing programs."
              },
              {
                q: "How do you handle tight timelines?",
                a: "Our 100,000 sq ft facility allows us to run parallel production. We've delivered complex broadcast studios in accelerated timeframes — we can do the same for corporate projects when needed."
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
              Let's Create Something Remarkable
            </h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether you're planning a brand activation, corporate event, or permanent 
              installation — we're ready to discuss how we can bring your vision to life.
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
