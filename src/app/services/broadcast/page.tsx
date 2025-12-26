import { Section, Container, Grid, SectionHeader } from '@/components/layout/Section';
import { LinkButton, TextLink } from '@/components/ui/Button';
import { DepartmentsGrid } from '@/components/sections/DepartmentsSection';
import { SegmentProjectsSection, SegmentProject } from '@/components/sections/SegmentProjectsSection';
import { 
  Tv, 
  Clock, 
  Shield, 
  CheckCircle2, 
  Zap,
  Users,
  Wrench,
  ArrowRight,
  Play,
  Calendar,
  AlertTriangle,
  Target
} from 'lucide-react';

// ============================================
// BROADCAST & MEDIA - SEGMENT LANDING PAGE
// ============================================

// Релевантные проекты для этого сегмента
const segmentProjects: SegmentProject[] = [
  {
    slug: "espn-studio-x",
    title: "ESPN Studio X — SportsCenter Flagship",
    client: "ESPN",
    image: "/images/projects/espn-studio-x/sportscenter-studio-x-anchor-desk-wide.jfif",
    result: "Launched on ESPN's 44th anniversary — on schedule",
    tags: ["LED Integration", "Virtual Production"],
  },
  {
    slug: "amazon-nba-studio",
    title: "Amazon NBA on Prime",
    client: "Amazon Prime Video",
    image: "/images/projects/amazon-nba-studio/nba-on-prime-studio-atrium-wide-shot-set-design.jfif",
    result: "13,000 sq ft delivered for streaming debut",
    tags: ["LED Floor", "Multi-Level"],
  },
  {
    slug: "msnbc-studio-3a",
    title: "MSNBC Studio 3A — 30 Rock",
    client: "NBCUniversal",
    image: "/images/projects/msnbc-studio-3a/msnbc-flagship-studio-wide-view-fabrication.jpg",
    result: "40M pixels, first-of-its-kind LED arch",
    tags: ["Art Deco", "Cable News"],
  },
  {
    slug: "ms-now",
    title: "MS NOW — Times Square",
    client: "MS NOW",
    image: "/images/projects/ms-now/times-square-studio-wide-led-walls.jpg",
    result: "3 studios delivered in 3 months",
    tags: ["Accelerated Timeline", "Network Rebrand"],
  },
];

const defined = {
  // Страхи этой аудитории
  fears: [
    { fear: "Missing air date", solution: "Pre-assembly at our facility means we catch issues before your install window" },
    { fear: "Install failures on-site", solution: "Every element tested and documented before it leaves our shop" },
    { fear: "Hidden technical risks", solution: "Engineering review integrated into our build process" },
    { fear: "Communication gaps", solution: "Direct access to project leads — no layers of account managers" },
  ],
  
  // Процесс для broadcast
  process: [
    { step: "01", title: "Technical Review", description: "Engineering assessment of designs, identification of risks, and scope confirmation", duration: "Week 1" },
    { step: "02", title: "Shop Drawings", description: "Detailed fabrication drawings with sign-off checkpoints", duration: "Weeks 2-3" },
    { step: "03", title: "Fabrication", description: "Build in our 100,000 sq ft facility with regular progress updates", duration: "Weeks 4-10" },
    { step: "04", title: "Pre-Assembly", description: "Full mock-up in The Main Deck — your studio built before install", duration: "Week 11" },
    { step: "05", title: "Install", description: "Our crews on-site, or supervision of local labor", duration: "Week 12+" },
  ],
};

export default function BroadcastPage() {
  return (
    <>
      {/* Hero — speaks to their pain */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/projects/espn-studio-x/broadcast-studio-depth-monitor-array.jfif"
            alt="Broadcast Studio Fabrication"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
        </div>
        
        <Container size="wide" className="relative z-10 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center">
                <Tv className="w-6 h-6 text-orange" />
              </div>
              <span className="text-orange font-semibold">BROADCAST & MEDIA</span>
            </div>
            
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              Your Air Date Is Non-Negotiable.<br />
              <span className="text-orange">We Get That.</span>
            </h1>
            
            <p className="text-body-l text-gray-300 mb-8 max-w-2xl">
              Studios for ESPN, Amazon, MSNBC, NBC, and Fox — delivered on schedule, 
              engineered for broadcast, built to perform under the pressure of live television.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Discuss Your Project
              </LinkButton>
              <LinkButton href="#projects" variant="secondary-light" size="lg">
                See Our Work
              </LinkButton>
            </div>
            
            {/* Trust indicators specific to broadcast */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-h3 text-orange font-bold">50+</p>
                <p className="text-body-s text-gray-400">Broadcast Studios</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">100%</p>
                <p className="text-body-s text-gray-400">On-Time Delivery</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">35+</p>
                <p className="text-body-s text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-h3 text-orange font-bold">Emmy</p>
                <p className="text-body-s text-gray-400">Award Winner</p>
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
                Broadcast Fabrication Is Unforgiving
              </h2>
              <div className="space-y-4 text-body-m text-gray-700">
                <p>
                  You've got an air date. A network counting on you. Talent schedules locked in. 
                  And a fabrication partner who's never worked under broadcast pressure before 
                  can derail everything.
                </p>
                <p>
                  We've been building studios for major networks for over three decades. 
                  We understand that "close enough" doesn't exist in broadcast — and that 
                  your reputation rides on every project.
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

      {/* Broadcast-Specific Capabilities */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Broadcast Capabilities"
            title="Built for the Demands of Live Television"
            variant="dark"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Tv,
                title: "LED Integration",
                description: "From 2.5mm pixel pitch to large-format displays, we engineer scenic to work seamlessly with your LED architecture."
              },
              {
                icon: Zap,
                title: "Virtual Production",
                description: "Scenic elements designed for camera tracking, AR graphics, and real-time content — like ESPN's pioneering depth monitor."
              },
              {
                icon: Wrench,
                title: "Precision Engineering",
                description: "Tolerances measured in millimeters. Every joint, every finish, every mechanism built for broadcast scrutiny."
              },
              {
                icon: Clock,
                title: "Accelerated Timelines",
                description: "When you need 3 studios in 3 months (like MS NOW), we have the capacity and expertise to deliver."
              },
              {
                icon: Users,
                title: "Installation Teams",
                description: "Our crews travel worldwide, or we supervise local labor. Either way, we're accountable for the result."
              },
              {
                icon: Shield,
                title: "Pre-Assembly QA",
                description: "The Main Deck: 13,000 sq ft where we build your studio before install. Problems found here, not on-site."
              },
            ].map((capability) => (
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
          overline="Broadcast Projects"
          title="Studios We've Delivered"
          subtitle="From flagship network facilities to accelerated-timeline builds"
          projects={segmentProjects}
          category="broadcast"
        />
      </div>

      {/* Process */}
      <Section variant="light" padding="lg" className="bg-gray-50">
        <Container size="wide">
          <SectionHeader
            overline="Our Process"
            title="How We Deliver Broadcast Projects"
            subtitle="Transparent milestones, documented quality control, no surprises"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />
            
            <div className="grid lg:grid-cols-5 gap-8">
              {defined.process.map((phase, index) => (
                <div key={phase.step} className="relative">
                  <div className="lg:text-center">
                    <div className="w-16 h-16 rounded-full bg-orange text-white flex items-center justify-center text-h4 font-bold mx-auto mb-4 relative z-10">
                      {phase.step}
                    </div>
                    <p className="text-caption text-orange font-semibold mb-1">{phase.duration}</p>
                    <h3 className="text-body-m font-semibold text-charcoal mb-2">{phase.title}</h3>
                    <p className="text-body-s text-gray-500">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Departments — с изображениями */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="In-House Capabilities"
            title="Everything Under One Roof"
            subtitle="The departments that make broadcast projects possible"
            variant="dark"
          />
          
          <DepartmentsGrid 
            variant="dark" 
            columns={3}
            showAll={false}
            selectedIds={['main-deck', 'metal-shop', 'cnc', 'finish', 'electrics', 'acrylic']}
          />
          
          <div className="mt-12 text-center">
            <LinkButton href="/about/" variant="secondary-light" size="lg">
              Tour Our Full Facility
            </LinkButton>
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      <Section variant="light" padding="lg">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <Tv className="w-12 h-12 text-orange mx-auto mb-6" />
            <blockquote className="text-h3 text-charcoal mb-8">
              "To my knowledge, I don't know anybody else who's doing depth monitor 
              all day long on their productions. So it feels pretty innovative to me, 
              and I think that's the space we need to be in."
            </blockquote>
            <p className="text-body-m font-semibold text-charcoal">Marti Hanzlik</p>
            <p className="text-body-s text-gray-500">Coordinating Director, ESPN</p>
          </div>
        </Container>
      </Section>

      {/* FAQ - addressing objections */}
      <Section variant="light" padding="lg" className="bg-gray-50">
        <Container size="default">
          <SectionHeader
            overline="Common Questions"
            title="What Production Managers Ask Us"
          />
          
          <div className="space-y-6">
            {[
              {
                q: "How do you handle accelerated timelines?",
                a: "Our 100,000 sq ft facility allows us to run multiple stations in parallel. For MS NOW, we delivered 3 complete studios in 3 months. We'll give you an honest assessment upfront — if a timeline isn't achievable, we'll tell you before you commit."
              },
              {
                q: "What happens if there's an issue during install?",
                a: "Our pre-assembly process catches most issues before install. When we build your studio in The Main Deck first, we verify fit, function, and finish. On-site, our crews carry backup components and have direct lines to our shop for rapid problem-solving."
              },
              {
                q: "Do you work with our existing vendors (LED, lighting, etc.)?",
                a: "Yes. We regularly coordinate with LED manufacturers, lighting designers, and systems integrators. We'll work from their specs to ensure our scenic integrates seamlessly with their equipment."
              },
              {
                q: "How do you handle changes mid-project?",
                a: "Broadcast projects evolve — we get it. We maintain clear change order processes with documented impact on timeline and budget. No surprises, no scope creep without your explicit approval."
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
              Let's Talk About Your Studio
            </h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether you're planning a flagship rebuild or a rapid-turnaround project, 
              we're ready to discuss scope, timeline, and how we can support your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>
                Start a Conversation
              </LinkButton>
              <LinkButton href="/projects/" variant="secondary-light" size="lg">
                Explore More Projects
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
