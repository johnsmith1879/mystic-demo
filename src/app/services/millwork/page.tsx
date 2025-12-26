import { Section, Container, Grid, SectionHeader } from '@/components/layout/Section';
import { LinkButton, TextLink } from '@/components/ui/Button';
import { DepartmentsGrid } from '@/components/sections/DepartmentsSection';
import { SegmentProjectsSection, SegmentProject } from '@/components/sections/SegmentProjectsSection';
import { 
  Hammer, 
  Clock, 
  Shield, 
  CheckCircle2, 
  Ruler,
  Building,
  Store,
  UtensilsCrossed,
  ArrowRight,
  Layers,
  Paintbrush,
  Cpu,
  Factory,
  Eye
} from 'lucide-react';

// ============================================
// MILLWORK & INTERIORS - SEGMENT LANDING PAGE
// ============================================

// Проекты для этого сегмента (placeholder — можно обновить когда будут реальные кейсы)
const segmentProjects: SegmentProject[] = [
  {
    slug: "sheraton-goodnight-moon",
    title: "Goodnight Moon Suite — Sheraton Boston",
    client: "Sheraton / Marriott",
    image: "/images/projects/sheraton-goodnight-moon/goodnight-moon-suite-sheraton-boston-wide-view.webp",
    result: "IP-licensed immersive suite with national media coverage",
    tags: ["Hospitality", "Custom Millwork", "Themed Environment"],
  },
  {
    slug: "espn-studio-x",
    title: "ESPN Studio X — Custom Furniture",
    client: "ESPN",
    image: "/images/projects/espn-studio-x/custom-anchor-desk-high-gloss-floor.jfif",
    result: "High-gloss anchor desk with integrated technology",
    tags: ["Custom Furniture", "Broadcast", "High-Gloss Finish"],
  },
  {
    slug: "amazon-nba-studio",
    title: "Amazon NBA — Analyst Desk",
    client: "Amazon Prime Video",
    image: "/images/projects/amazon-nba-studio/amazon-prime-nba-anchor-desk-fabrication.jpg",
    result: "Multi-level desk system with LED integration",
    tags: ["Custom Furniture", "LED Integration", "Broadcast"],
  },
  {
    slug: "msnbc-studio-3a",
    title: "MSNBC Studio 3A — Architectural Millwork",
    client: "NBCUniversal",
    image: "/images/projects/msnbc-studio-3a/msnbc-flagship-studio-wide-view-fabrication.jpg",
    result: "Art Deco-inspired architectural elements",
    tags: ["Architectural Millwork", "Art Deco", "Broadcast"],
  },
];

const defined = {
  // Страхи этой аудитории (Architects, Interior Designers, Retail Managers)
  fears: [
    { fear: "Opening day delays", solution: "Pre-assembly at our facility catches issues before your site install window" },
    { fear: "On-site surprises", solution: "Detailed shop drawings and approval process prevent costly field changes" },
    { fear: "Inconsistent finishes", solution: "In-house Finish Department with documented quality control at every stage" },
    { fear: "Coordination chaos", solution: "Single-source fabrication — millwork, metal, finishes all under one roof" },
  ],
  
  // What they build
  projectTypes: [
    { title: "Retail Store Buildouts", description: "Fixtures, displays, and custom millwork for retail environments", icon: Store },
    { title: "Restaurant Millwork", description: "Bars, banquettes, host stands, and architectural woodwork", icon: UtensilsCrossed },
    { title: "Corporate Interiors", description: "Reception desks, conference rooms, executive offices", icon: Building },
    { title: "Retail Kiosks", description: "Freestanding units for malls, airports, and public spaces", icon: Layers },
    { title: "Architectural Millwork", description: "Custom cabinetry, wall panels, and historic reproduction", icon: Ruler },
    { title: "Hospitality", description: "Hotels, lobbies, and guest-facing environments", icon: Building },
  ],
  
  // Process
  process: [
    { step: "01", title: "Scope Review", description: "Detailed review of drawings, specs, and site conditions" },
    { step: "02", title: "Shop Drawings", description: "Fabrication drawings with dimensions, materials, and finish callouts" },
    { step: "03", title: "Sample Approval", description: "Finish samples and material selections for stakeholder sign-off" },
    { step: "04", title: "Fabrication", description: "In-house production with staged quality checkpoints" },
    { step: "05", title: "Delivery & Install", description: "Coordinated delivery and professional installation" },
  ],
};

export default function MillworkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal opacity-90" />
        
        <Container size="wide" className="relative z-10 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <Hammer className="w-6 h-6 text-orange" />
              </div>
              <span className="text-orange font-semibold">MILLWORK & INTERIORS</span>
            </div>
            
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              Your Opening Date Is Set.<br />
              <span className="text-orange">We'll Be Ready.</span>
            </h1>
            
            <p className="text-body-l text-gray-300 mb-8 max-w-2xl">
              One-stop millwork for retail, restaurants, and corporate interiors — 
              from custom cabinetry to architectural woodwork. Fabricated in-house, 
              delivered on schedule, installed right the first time.
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
                <p className="text-h3 text-orange font-bold">In-House</p>
                <p className="text-body-s text-gray-400">Finish Department</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">CNC</p>
                <p className="text-body-s text-gray-400">Precision Cutting</p>
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
                Millwork Projects Have No Room for Error
              </h2>
              <div className="space-y-4 text-body-m text-gray-700">
                <p>
                  You've got an opening date. Tenants waiting. A schedule that can't slip. 
                  And millwork that arrives wrong — or late — derails everything downstream.
                </p>
                <p>
                  We've been fabricating custom millwork for over three decades, 
                  alongside broadcast studios where tolerances are measured in millimeters 
                  and deadlines are measured in hours. That precision translates directly 
                  to your retail buildout or restaurant project.
                </p>
                <p>
                  When your millwork, metal work, and finishes all come from one source, 
                  there's no finger-pointing between vendors. One team, one responsibility, 
                  one standard of quality.
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

      {/* What We Build */}
      <Section variant="light" padding="lg" className="bg-gray-50">
        <Container size="wide">
          <SectionHeader
            overline="What We Build"
            title="Millwork for Every Environment"
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

      {/* Projects — унифицированный блок */}
      <div id="projects">
        <SegmentProjectsSection
          overline="Millwork Projects"
          title="Custom Millwork in Action"
          subtitle="See how we apply broadcast-level precision to architectural millwork and custom furniture"
          projects={segmentProjects}
          category="millwork"
        />
      </div>

      {/* Capabilities — с изображениями, только релевантные отделы */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="In-House Capabilities"
            title="Everything Under One Roof"
            subtitle="No subcontractor coordination. No finger-pointing. One team responsible for your entire project."
            variant="dark"
          />
          
          <DepartmentsGrid 
            variant="dark" 
            columns={3}
            showAll={false}
            selectedIds={['main-deck', 'mill', 'cnc', 'finish', 'metal-shop', 'acrylic']}
          />
          
          <div className="mt-12 text-center">
            <LinkButton href="/about/" variant="secondary-light" size="lg">
              Tour Our Full Facility
            </LinkButton>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Our Process"
            title="From Drawings to Installation"
            subtitle="Transparent milestones, documented approvals, no surprises"
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

      {/* The Mystic Advantage */}
      <Section variant="light" padding="lg" className="bg-gray-50">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange font-semibold text-body-m mb-4">THE MYSTIC ADVANTAGE</p>
              <h2 className="text-h2-mobile md:text-h2 text-charcoal mb-6">
                Broadcast Precision.<br />
                Millwork Application.
              </h2>
              <div className="space-y-4 text-body-m text-gray-700">
                <p>
                  Our primary business is broadcast fabrication — building studios for 
                  ESPN, Amazon, and major networks where every surface is scrutinized in HD 
                  and every deadline is absolute.
                </p>
                <p>
                  That same precision, those same quality standards, and that same 
                  commitment to deadlines applies to your millwork project. 
                  When you work with Mystic, you get broadcast-level craftsmanship 
                  applied to commercial interiors.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                {[
                  "Pre-assembly catches problems before installation",
                  "In-house finishing eliminates coordination delays",
                  "CNC precision ensures repeatable accuracy",
                  "Single-source responsibility for quality"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0" />
                    <span className="text-body-m text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-charcoal rounded-card p-8">
              <Factory className="w-12 h-12 text-orange mb-6" />
              <h3 className="text-h3 text-white mb-4">100,000+ Sq Ft Facility</h3>
              <p className="text-body-m text-gray-300 mb-6">
                Our production facility in Norwood, Massachusetts houses every 
                department under one roof — from raw material storage to finished 
                goods staging.
              </p>
              <div className="space-y-4 text-body-s text-gray-400">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>The Main Deck</span>
                  <span className="text-white">13,000 sq ft, 40' ceilings</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Location</span>
                  <span className="text-white">Norwood, MA (near Boston)</span>
                </div>
                <div className="flex justify-between">
                  <span>Founded</span>
                  <span className="text-white">1989</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="light" padding="lg">
        <Container size="default">
          <SectionHeader
            overline="Common Questions"
            title="What Architects & Designers Ask Us"
          />
          
          <div className="space-y-6">
            {[
              {
                q: "Can you match existing millwork or historic profiles?",
                a: "Yes. Our Mill department has experience reproducing historic millwork and matching existing conditions. We'll work from samples, photos, or field measurements to create accurate reproductions."
              },
              {
                q: "How do you handle finish matching across multiple pieces?",
                a: "Our Finish Department maintains documented processes and samples for every project. We can create reference samples for approval and ensure consistency across all pieces — even if they're produced in different batches."
              },
              {
                q: "Do you install, or just fabricate?",
                a: "We offer both. We can deliver to your site for installation by your GC, or we can provide our own installation crews. For complex projects, we recommend our crews to ensure everything fits as tested."
              },
              {
                q: "What's your typical lead time?",
                a: "Lead times vary by project complexity, but typically 6-10 weeks from approved shop drawings to delivery. For rush projects, we can often accommodate accelerated schedules — we regularly meet broadcast deadlines that can't move."
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
              Let's Discuss Your Millwork Project
            </h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether it's a retail buildout, restaurant renovation, or corporate interior — 
              we're ready to review scope, timeline, and how we can support your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Start a Conversation
              </LinkButton>
              <LinkButton href="/about/" variant="secondary-light" size="lg">
                Tour Our Facility
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
