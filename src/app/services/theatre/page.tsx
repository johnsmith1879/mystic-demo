import { Section, Container, Grid, SectionHeader } from '@/components/layout/Section';
import { LinkButton, TextLink } from '@/components/ui/Button';
import { DepartmentsGrid } from '@/components/sections/DepartmentsSection';
import { SegmentProjectsSection, SegmentProject } from '@/components/sections/SegmentProjectsSection';
import { 
  Theater, 
  Clock, 
  Shield, 
  CheckCircle2, 
  Zap,
  Users,
  Repeat,
  ArrowRight,
  Heart,
  Sparkles,
  Paintbrush,
  Wrench,
  Star,
  Eye
} from 'lucide-react';

// ============================================
// THEATRE & LIVE PERFORMANCE - SEGMENT LANDING PAGE
// ============================================

// Проекты для этого сегмента
const segmentProjects: SegmentProject[] = [
  {
    slug: "heisman-ceremony",
    title: "Heisman Trophy Ceremony",
    client: "ESPN / Heisman Trophy Trust",
    image: "/images/projects/heisman-ceremony/scenic-carpentry-nyc-skyline-backdrop.jpg",
    result: "5 consecutive years at Lincoln Center",
    tags: ["Broadway-Caliber", "Annual Production"],
  },
  {
    slug: "stanley-cup",
    title: "Stanley Cup Presentation Stage",
    client: "NHL",
    image: "/images/projects/stanley-cup/nhl-stanley-cup-presentation-set-fireworks.jpg",
    result: "Rapid deployment for live broadcast",
    tags: ["Live Performance", "Modular Stage"],
  },
  {
    slug: "espn-get-up",
    title: "ESPN Get Up — Live Studio",
    client: "ESPN",
    image: "/images/projects/espn-get-up/espn-get-up-set-brick-wall-urban-design.jpg",
    result: "Daily live production environment",
    tags: ["Live Broadcast", "Performance Space"],
  },
  {
    slug: "nba-on-nbc",
    title: "NBA on NBC — Studio Build",
    client: "NBCUniversal",
    image: "/images/projects/nba-on-nbc/nbc-sports-studio-set-design-state-farm-branding.jpg",
    result: "High-profile sports broadcasting",
    tags: ["Live Sports", "Broadcast Theatre"],
  },
];

const defined = {
  // DNA story
  heritage: {
    title: "Theatre Is in Our DNA",
    subtitle: "We didn't start in broadcast. We started backstage.",
    story: [
      "Mystic was founded in 1989 by theatre professionals who built stage scenery. Before we ever touched a broadcast studio, we were building sets for live audiences — understanding the unique demands of theatrical production.",
      "That heritage shapes everything we do. We understand quick changes. We know what performers need. We build scenic that works under show conditions, night after night.",
      "Today, we still love projects built for live audiences. When you work with Mystic, you're working with a team that genuinely understands theatre."
    ],
  },
  
  // Страхи этой аудитории (Production Managers, Technical Directors)
  fears: [
    { fear: "Safety under show conditions", solution: "Structural engineering review on every build. Load ratings documented. Built for performers." },
    { fear: "Won't hold up on tour", solution: "Designed for repeated setup and strike. Road-tested construction methods." },
    { fear: "Doesn't work in the space", solution: "We understand sightlines, masking, and backstage constraints. We've been there." },
    { fear: "Quick changes impossible", solution: "Purpose-built mechanisms for fast transitions. Tested timing before load-in." },
  ],
  
  // What they build
  projectTypes: [
    { title: "Stage Scenery", description: "Sets, backdrops, and scenic elements for theatrical productions", icon: Theater },
    { title: "Touring Productions", description: "Road-ready scenic designed for repeated setup and strike", icon: Repeat },
    { title: "Regional Theatre", description: "Custom fabrication for regional and community theatres", icon: Star },
    { title: "Broadway & Off-Broadway", description: "High-end scenic for professional productions", icon: Sparkles },
    { title: "Concert & Tour Support", description: "Staging elements for music tours and live performances", icon: Zap },
    { title: "Dance & Opera", description: "Scenic elements for ballet, opera, and dance productions", icon: Heart },
  ],
  
  // Capabilities
  capabilities: [
    {
      icon: Shield,
      title: "Safety Engineering",
      description: "Every build gets structural review. Load ratings documented. We don't guess when performers' safety is at stake."
    },
    {
      icon: Paintbrush,
      title: "Scenic Paint Department",
      description: "Theatrical training meets professional execution. Faux finishes, aging, backdrops — we speak your language."
    },
    {
      icon: Wrench,
      title: "Metal Shop",
      description: "Structural and decorative metalwork. Steel frames, aluminum truss mounts, custom hardware for your specific needs."
    },
    {
      icon: Repeat,
      title: "Touring-Ready Construction",
      description: "Built to come apart and go back together. Labeled components, road cases, documentation for your crew."
    },
    {
      icon: Zap,
      title: "Quick-Change Mechanisms",
      description: "Automation, fly-ready elements, and transition-tested builds. We time it before you do."
    },
    {
      icon: Eye,
      title: "Pre-Assembly Testing",
      description: "The Main Deck gives us 13,000 sq ft and 40' ceilings. We build it, test it, time it — before load-in."
    },
  ],
};

export default function TheatrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal opacity-90" />
        
        <Container size="wide" className="relative z-10 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <Theater className="w-6 h-6 text-orange" />
              </div>
              <span className="text-orange font-semibold">THEATRE & LIVE PERFORMANCE</span>
            </div>
            
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              We Started Backstage.<br />
              <span className="text-orange">We Never Forgot.</span>
            </h1>
            
            <p className="text-body-l text-gray-300 mb-8 max-w-2xl">
              Founded by theatre professionals in 1989, we still love projects built 
              for live audiences. Stage scenery engineered for safety, built for quick 
              changes, designed to perform night after night.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Discuss Your Production
              </LinkButton>
              <LinkButton href="#projects" variant="secondary-light" size="lg">
                See Our Work
              </LinkButton>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-h3 text-orange font-bold">1989</p>
                <p className="text-body-s text-gray-400">Founded by Theatre Pros</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">35+</p>
                <p className="text-body-s text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">Scenic</p>
                <p className="text-body-s text-gray-400">Paint Department</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">100%</p>
                <p className="text-body-s text-gray-400">Safety Record</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Heritage Story */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange font-semibold text-body-m mb-4">OUR ROOTS</p>
              <h2 className="text-h2-mobile md:text-h2 text-charcoal mb-2">
                {defined.heritage.title}
              </h2>
              <p className="text-body-l text-gray-500 mb-6">{defined.heritage.subtitle}</p>
              
              <div className="space-y-4 text-body-m text-gray-700">
                {defined.heritage.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div className="bg-charcoal rounded-card p-8">
              <h3 className="text-h4 text-white mb-6">We Understand Your World</h3>
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

      {/* What We Build */}
      <Section variant="light" padding="lg" className="bg-gray-50">
        <Container size="wide">
          <SectionHeader
            overline="What We Build"
            title="Scenic for Every Stage"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defined.projectTypes.map((type) => (
              <div key={type.title} className="bg-white p-6 rounded-card border border-gray-200 hover:border-orange/30 transition-colors">
                <type.icon className="w-10 h-10 text-orange mb-4" />
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
            overline="Theatre Capabilities"
            title="Built for the Demands of Live Performance"
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
          overline="Theatre Projects"
          title="Productions We've Supported"
          subtitle="From annual ceremonies to touring productions"
          projects={segmentProjects}
          category="theatre"
        />
      </div>

      {/* Departments — с изображениями */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="In-House Departments"
            title="The Scenic Paint Difference"
            subtitle="Our Scenic Paint Department isn't staffed by industrial painters — it's staffed by people with theatrical training."
            variant="dark"
          />
          
          <DepartmentsGrid 
            variant="dark" 
            columns={3}
            showAll={false}
            selectedIds={['main-deck', 'scenic-paint', 'metal-shop', 'finish', 'electrics', 'acrylic']}
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
            title="What Production Managers Ask Us"
          />
          
          <div className="space-y-6">
            {[
              {
                q: "Do you work with union crews?",
                a: "Yes. We regularly coordinate with IATSE crews for load-in and strike. Our documentation is designed to work with union call structures, and our builds are engineered for the way theatre crews actually work."
              },
              {
                q: "Can you handle touring productions?",
                a: "Absolutely. We design for repeated setup and strike — proper road cases, labeled components, tested assembly sequences. We can also provide documentation and training for your road crew."
              },
              {
                q: "How do you approach safety for performer-contact scenic?",
                a: "Every build gets structural engineering review. We document load ratings, test mechanisms, and build with performer safety as the primary constraint. If someone's climbing it, standing on it, or moving around it — it's engineered for that use."
              },
              {
                q: "What's your relationship with designers?",
                a: "Collaborative. We started as theatre people working with designers, and that's still how we approach every project. We're not just building to print — we're problem-solving with you to make the design work within budget and timeline."
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
              Let's Build Something for the Stage
            </h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether it's a regional production, a touring show, or a one-night event — 
              we're ready to discuss your scenic needs with people who understand theatre.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Start a Conversation
              </LinkButton>
              <LinkButton href="/projects/" variant="secondary-light" size="lg">
                See Our Work
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
