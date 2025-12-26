import { Section, Container, Grid, SectionHeader } from '@/components/layout/Section';
import { LinkButton, TextLink } from '@/components/ui/Button';
import { DepartmentsGrid } from '@/components/sections/DepartmentsSection';
import { SegmentProjectsSection, SegmentProject } from '@/components/sections/SegmentProjectsSection';
import { 
  Landmark, 
  Clock, 
  Shield, 
  CheckCircle2, 
  Paintbrush,
  Users,
  Eye,
  ArrowRight,
  Gem,
  Layers,
  Accessibility,
  Hammer
} from 'lucide-react';

// ============================================
// MUSEUMS & EXHIBITS - SEGMENT LANDING PAGE
// ============================================

// Проекты для этого сегмента
const segmentProjects: SegmentProject[] = [
  {
    slug: "sheraton-goodnight-moon",
    title: "Goodnight Moon Suite — Sheraton Boston",
    client: "Sheraton / Marriott",
    image: "/images/projects/sheraton-goodnight-moon/goodnight-moon-suite-sheraton-boston-wide-view.webp",
    result: "IP-licensed immersive suite, national media coverage",
    tags: ["Immersive Environment", "Themed Installation"],
  },
  {
    slug: "heisman-ceremony",
    title: "Heisman Trophy Ceremony",
    client: "ESPN / Heisman Trophy Trust",
    image: "/images/projects/heisman-ceremony/scenic-carpentry-nyc-skyline-backdrop.jpg",
    result: "Broadway-caliber scenic at Lincoln Center",
    tags: ["Scenic Installation", "Annual Event"],
  },
  {
    slug: "espn-studio-x",
    title: "ESPN Studio X — Architectural Elements",
    client: "ESPN",
    image: "/images/projects/espn-studio-x/studio-architecture-ribbed-ceiling-detail.jfif",
    result: "Museum-grade finishes for broadcast environment",
    tags: ["Architectural Detail", "Premium Finish"],
  },
  {
    slug: "msnbc-studio-3a",
    title: "MSNBC Studio 3A — Art Deco Design",
    client: "NBCUniversal",
    image: "/images/projects/msnbc-studio-3a/msnbc-studio-scenic-fabrication-art-deco.jpg",
    result: "Period-accurate Art Deco reproduction",
    tags: ["Historic Style", "Architectural Detail"],
  },
];

const defined = {
  // Страхи этой аудитории (Curators, Exhibit Designers)
  fears: [
    { fear: "\"Event prop\" quality", solution: "Museum-grade finishes and materials that stand up to years of public interaction" },
    { fear: "Damage during installation", solution: "Climate-controlled transport and trained installation crews who understand artifact adjacency" },
    { fear: "Accessibility non-compliance", solution: "ADA-compliant construction integrated from design phase, not retrofitted" },
    { fear: "Interpretive ineffectiveness", solution: "We work with your content team to ensure fabrication supports — not fights — the visitor experience" },
  ],
  
  // Capabilities
  capabilities: [
    {
      icon: Gem,
      title: "Archival-Quality Finishes",
      description: "Multi-step finishing processes from our dedicated department. Automotive-grade clear coats to period-accurate patinas — whatever the story demands."
    },
    {
      icon: Paintbrush,
      title: "Scenic Paint Expertise",
      description: "Theatrical training meets museum standards. Faux finishes, aging techniques, and surface treatments that hold up under close inspection."
    },
    {
      icon: Layers,
      title: "Complex Material Integration",
      description: "Acrylic, metal, wood, fabric, interactive components — our in-house departments handle it all, ensuring seamless material transitions."
    },
    {
      icon: Eye,
      title: "Detail-Obsessed Fabrication",
      description: "CNC precision combined with hand-finishing by skilled artisans. Every visible edge, every joint, every surface finished to museum standards."
    },
    {
      icon: Accessibility,
      title: "ADA-Compliant Construction",
      description: "Accessibility requirements built in from the start. Proper clearances, tactile elements, and durable construction for high-traffic public spaces."
    },
    {
      icon: Shield,
      title: "Durability Engineering",
      description: "Built for hundreds of thousands of visitors. We specify materials and construction methods that maintain appearance over years of use."
    },
  ],
  
  // Процесс
  process: [
    { step: "01", title: "Design Collaboration", description: "Working with your exhibit designers to understand interpretive goals and technical requirements" },
    { step: "02", title: "Material Specification", description: "Selecting materials for durability, appearance, and visitor safety" },
    { step: "03", title: "Prototype & Approval", description: "Sample finishes and mock-ups for stakeholder sign-off before full production" },
    { step: "04", title: "Fabrication", description: "Phased production with documented quality control at each stage" },
    { step: "05", title: "Installation", description: "Careful handling, trained crews, and coordination with your schedule" },
  ],
};

export default function MuseumsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/projects/sheraton-goodnight-moon/immersive-hotel-suite-fireplace-mantel-detail.webp"
            alt="Museum-Grade Fabrication"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
        </div>
        
        <Container size="wide" className="relative z-10 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <Landmark className="w-6 h-6 text-orange" />
              </div>
              <span className="text-orange font-semibold">MUSEUMS & EXHIBITS</span>
            </div>
            
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              Not "Good Enough for a Trade Show."<br />
              <span className="text-orange">Built for Generations.</span>
            </h1>
            
            <p className="text-body-l text-gray-300 mb-8 max-w-2xl">
              Museum-grade fabrication for institutions that demand durability, 
              precision, and finishes that hold up to millions of visitors — 
              and close inspection.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Discuss Your Exhibit
              </LinkButton>
              <LinkButton href="#projects" variant="secondary-light" size="lg">
                See Our Work
              </LinkButton>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-h3 text-orange font-bold">35+</p>
                <p className="text-body-s text-gray-400">Years Craftsmanship</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">100k</p>
                <p className="text-body-s text-gray-400">Sq Ft Facility</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">In-House</p>
                <p className="text-body-s text-gray-400">Finish Department</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">ADA</p>
                <p className="text-body-s text-gray-400">Compliant Builds</p>
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
                Your Exhibits Need to Last — Not Just Launch
              </h2>
              <div className="space-y-4 text-body-m text-gray-700">
                <p>
                  You've seen it before: fabrication that looked great on opening day, 
                  then showed wear within months. Finishes that couldn't handle curious 
                  hands. Materials that weren't specified for public spaces.
                </p>
                <p>
                  We bring broadcast-level precision to museum environments — where 
                  every surface is scrutinized, every edge touched, and every element 
                  must maintain its integrity for years.
                </p>
                <p>
                  Our background in high-stakes television fabrication means we understand 
                  that "close enough" isn't acceptable — and that our work will be 
                  examined under the harshest conditions.
                </p>
              </div>
            </div>
            
            <div className="bg-charcoal rounded-card p-8">
              <h3 className="text-h4 text-white mb-6">We Understand Your Concerns</h3>
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

      {/* Capabilities */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Our Capabilities"
            title="Museum-Grade Fabrication, In-House"
            subtitle="Every department needed to deliver archival-quality exhibits — under one roof"
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
          overline="Museum & Exhibit Projects"
          title="Precision Fabrication in Action"
          subtitle="See how we apply museum-grade craftsmanship to immersive environments"
          projects={segmentProjects}
          category="exhibits"
        />
      </div>

      {/* Departments — с изображениями */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="In-House Departments"
            title="Everything Under One Roof"
            subtitle="No subcontractor finger-pointing. We control quality from raw material to final finish."
            variant="dark"
          />
          
          <DepartmentsGrid 
            variant="dark" 
            columns={3}
            showAll={false}
            selectedIds={['main-deck', 'mill', 'finish', 'scenic-paint', 'cnc', 'acrylic', 'graphics']}
          />
        </Container>
      </Section>

      {/* Process */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Our Process"
            title="From Design to Installation"
            subtitle="Collaborative, transparent, with quality checkpoints at every stage"
          />
          
          <div className="grid md:grid-cols-5 gap-8">
            {defined.process.map((phase, index) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange text-white flex items-center justify-center text-h4 font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-body-m font-semibold text-charcoal mb-2">{phase.title}</h3>
                <p className="text-body-s text-gray-500">{phase.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="light" padding="lg" className="bg-gray-50">
        <Container size="default">
          <SectionHeader
            overline="Common Questions"
            title="What Exhibit Designers Ask Us"
          />
          
          <div className="space-y-6">
            {[
              {
                q: "How do you ensure finishes hold up to public interaction?",
                a: "We specify materials and finishing processes based on expected visitor traffic. Our Finish Department uses multi-step processes — including commercial-grade clear coats — that maintain appearance despite constant touching. We can provide material samples and finish specifications for your review before production."
              },
              {
                q: "Can you work within our phased installation schedule?",
                a: "Yes. Museum projects often require phased delivery around operational schedules. We'll work with your timeline, fabricating elements in sequence and coordinating delivery windows with your facilities team."
              },
              {
                q: "Do you handle interactive exhibit elements?",
                a: "We fabricate the physical components and can coordinate with interactive technology vendors. Our Electrics department includes licensed electricians for power and lighting integration. For specialized AV or interactive systems, we work closely with your technology partners."
              },
              {
                q: "What about climate and conservation requirements?",
                a: "We understand the sensitivity of museum environments. We can specify inert materials, UV-stable finishes, and low-VOC options. For artifact-adjacent installations, we'll work with your conservation team on material approvals."
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
              Let's Discuss Your Exhibit
            </h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether you're planning a new permanent installation or refreshing 
              existing galleries, we're ready to talk about scope, materials, and timeline.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Start a Conversation
              </LinkButton>
              <LinkButton href="/about/" variant="secondary-light" size="lg">
                Learn About Our Facility
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
