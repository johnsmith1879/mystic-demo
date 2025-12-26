import { Section, Container, Grid, SectionHeader } from '@/components/layout/Section';
import { LinkButton } from '@/components/ui/Button';
import { DepartmentsGrid } from '@/components/sections/DepartmentsSection';
import { ArrowRight } from 'lucide-react';
import { 
  Building2, 
  Users, 
  Award, 
  Zap, 
  Handshake, 
  Layers,
  Clock,
  MapPin,
  Factory,
  Sparkles
} from 'lucide-react';

// ============================================
// DATA
// ============================================

const timeline = [
  { year: "1989", title: "Founded", description: "Started by theatre professionals to build stage scenery" },
  { year: "1995", title: "Broadcast Expansion", description: "First major TV studio project" },
  { year: "2005", title: "New Facility", description: "Moved to 100,000 sq ft Norwood location" },
  { year: "2014", title: "Emmy Recognition", description: "ESPN SportsCenter wins Sports Emmy for Studio Design" },
  { year: "2019", title: "National Stage", description: "Presidential Debate stage, CCTV 13 Award, industry acclaim" },
  { year: "2025", title: "New Chapter", description: "Rebrand to Mystic Custom Fabrication" },
];

const stats = [
  { value: "35+", label: "Years in Business", icon: Clock },
  { value: "100k", label: "Sq Ft Facility", icon: Factory },
  { value: "500+", label: "Projects Completed", icon: Layers },
  { value: "Emmy", label: "Award Winner", icon: Award },
];

const differentiators = [
  {
    title: "Master Craftsmanship at Scale",
    short: "Master craftsmanship for high-stakes, broadcast-level environments.",
    expanded: "For over 30 years, Mystic has delivered craftsmanship comparable to the industry's largest players—combining meticulous detail with capacity for complex, large-scale builds where there's zero margin for error.",
    icon: Award,
  },
  {
    title: "Engineering-Grade Problem Solving",
    short: "We don't just build — we engineer solutions to complex studio challenges.",
    expanded: "Technically demanding projects require more than simple fabrication. We turn ambitious creative concepts into safe, reliable, buildable environments—integrating structure, technology, and finish so everything performs on air and on site.",
    icon: Zap,
  },
  {
    title: "Agile, Collaborative Delivery",
    short: "Big-league quality with boutique agility and direct access to decision-makers.",
    expanded: "Fast, responsive collaboration with direct communication between your team and the people building the project. Decisions are made quickly, issues are solved proactively, and work doesn't get stuck in bureaucracy.",
    icon: Users,
  },
  {
    title: "Cross-Industry Expertise",
    short: "Broadcast precision, museum-grade detail, and experiential impact in one team.",
    expanded: "Experience across broadcast studios, museums, corporate media spaces, and live events lets us bring best practices from each world—reliability, durability, and visual impact.",
    icon: Layers,
  },
  {
    title: "Trusted Long-Term Partner",
    short: "Built on long-term relationships, repeat business, and trust.",
    expanded: "Clients return project after project because we deliver reliably, communicate clearly, and maintain consistent quality—operating as a long-term fabrication partner, not a one-off vendor.",
    icon: Handshake,
  },
];

const pressFeatures = [
  { publication: "NewscastStudio", headline: "NBCUniversal Boston Media Center technology", date: "Jan 2020" },
  { publication: "NewscastStudio", headline: "CBS Sports begins Super Bowl week from Atlanta", date: "Jan 2019" },
  { publication: "NewscastStudio", headline: "NBC's debate stage design creates outline using LED panels", date: "Jun 2019" },
  { publication: "NewscastStudio", headline: "Fox Business' updated home in Studio G", date: "Jul 2019" },
  { publication: "NewscastStudio", headline: "ESPN brings 'SportsCenter' to Washington", date: "Aug 2020" },
  { publication: "NewscastStudio", headline: "CBSN Boston launches from fresh, custom set", date: "Sep 2019" },
];

// Данные для Markets — Bento Grid
const markets = [
  {
    title: "Broadcast & Media",
    description: "Studios for networks worldwide — from local stations to major cable news. LED integration, precision engineering.",
    image: "/images/categories/broadcast.jpg",
    href: "/services/broadcast/",
  },
  {
    title: "Millwork & Interiors",
    description: "Retail buildouts, restaurant millwork, corporate interiors. One-stop fabrication with in-house finishing.",
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

// ============================================
// PAGE
// ============================================

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-charcoal pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal-light opacity-90" />
        <Container size="wide" className="relative z-10 py-16">
          <div className="max-w-3xl">
            <p className="text-orange font-semibold text-body-m mb-4 tracking-wide">
              ABOUT US
            </p>
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              35 Years of Crafting Environments That Captivate
            </h1>
            <p className="text-body-l text-gray-300 mb-8">
              A full-service fabrication and design partner delivering broadcast-ready environments 
              and high-finish builds—engineered to perform on-site and on air.
            </p>
            <p className="text-body-m text-gray-400">
              Formerly <span className="text-gray-300">Mystic Scenic Studios</span>
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <Section variant="dark" padding="md" className="border-t border-white/10">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-orange mx-auto mb-3" />
                <p className="text-h2-mobile md:text-h2 text-white font-bold">{stat.value}</p>
                <p className="text-body-s text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange font-semibold text-body-m mb-4 tracking-wide">OUR STORY</p>
              <h2 className="text-h2-mobile md:text-h2 text-charcoal mb-6">
                From Theatre Roots to Broadcast Excellence
              </h2>
              <div className="space-y-4 text-body-m text-gray-700">
                <p>
                  Theatre is in our DNA. Mystic was founded in 1989 by theatre professionals 
                  who brought their passion for stagecraft to a new industry. What started 
                  as building stage scenery evolved into creating environments for the world's 
                  leading broadcast networks.
                </p>
                <p>
                  Today, our work appears on TV news channels worldwide, in museums, restaurants, 
                  corporate spaces, and at major live events. From ESPN's flagship SportsCenter 
                  studio to the Heisman Trophy ceremony at Lincoln Center, we deliver craftsmanship 
                  where there's zero margin for error.
                </p>
                <p>
                  Based just outside Boston in Norwood, Massachusetts, our 100,000+ square foot 
                  facility houses every capability needed to take projects from concept to 
                  installation — all under one roof.
                </p>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="bg-white border border-gray-200 rounded-card p-8">
              <h3 className="text-h4 text-charcoal mb-8">Our Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center font-bold text-body-s">
                        {item.year.slice(-2)}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-px h-full bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-caption text-orange font-semibold">{item.year}</p>
                      <p className="text-body-m font-semibold text-charcoal">{item.title}</p>
                      <p className="text-body-s text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Facility */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-charcoal-light rounded-card flex items-center justify-center border border-white/10 overflow-hidden">
                <img 
                  src="/images/departments/main-deck.jpg" 
                  alt="The Main Deck - 13,000 sq ft assembly space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-orange font-semibold text-body-m mb-4 tracking-wide">THE FACILITY</p>
              <h2 className="text-h2-mobile md:text-h2 text-white mb-6">
                The Main Deck
              </h2>
              <div className="space-y-4 text-body-m text-gray-300">
                <p>
                  Our primary assembly space features <span className="text-white font-semibold">40-foot 
                  ceilings</span> and <span className="text-white font-semibold">13,000 square feet</span> of 
                  open floor space — allowing full pre-assembly of most projects before installation.
                </p>
                <p>
                  This capability helps identify issues early and dramatically reduces on-site risk. 
                  When your studio arrives at location, it's already been built, tested, and refined.
                </p>
              </div>
              
              <div className="mt-8 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="text-body-m text-white font-semibold">293 Lenox Street</p>
                  <p className="text-body-s text-gray-400">Norwood, MA 02062</p>
                  <p className="text-body-s text-gray-500 mt-1">Just outside Boston</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities — с изображениями, все 9 отделов */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Capabilities"
            title="Everything Under One Roof"
            subtitle="From initial concept to final installation, our in-house departments handle every aspect of fabrication."
          />
          
          <DepartmentsGrid variant="light" columns={3} showAll={true} />
          
          <div className="mt-12 text-center">
            <LinkButton href="/services/" variant="secondary" size="lg">
              Explore Our Services
            </LinkButton>
          </div>
        </Container>
      </Section>

      {/* Why Mystic */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Why Mystic"
            title="What Sets Us Apart"
            variant="dark"
          />
          
          <div className="space-y-8">
            {differentiators.map((diff, index) => (
              <div 
                key={diff.title}
                className="grid lg:grid-cols-12 gap-6 items-start p-6 rounded-card bg-white/5 border border-white/10"
              >
                <div className="lg:col-span-1 flex items-center justify-center">
                  <diff.icon className="w-10 h-10 text-orange" />
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-h4 text-white">{diff.title}</h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-body-m text-gray-300">{diff.expanded}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Markets — Bento Grid (2 + 3) */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <SectionHeader
            overline="Markets We Serve"
            title="Cross-Industry Expertise"
            subtitle="Best practices from broadcast, museums, corporate spaces, and live events — all in one team."
          />
          
          {/* Bento Grid: 2 large + 3 smaller */}
          <div className="space-y-6">
            {/* Top row — 2 large cards (primary markets) */}
            <div className="grid md:grid-cols-2 gap-6">
              {markets.slice(0, 2).map((market) => (
                <a
                  key={market.title}
                  href={market.href}
                  className="group relative rounded-card overflow-hidden aspect-[4/3] md:aspect-[16/10]"
                >
                  {/* Background image */}
                  <img 
                    src={market.image} 
                    alt={market.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-h3 text-white mb-2 group-hover:text-orange transition-colors">
                      {market.title}
                    </h3>
                    <p className="text-body-s text-gray-200 mb-4 max-w-md">
                      {market.description}
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
              {markets.slice(2).map((market) => (
                <a
                  key={market.title}
                  href={market.href}
                  className="group relative rounded-card overflow-hidden aspect-[4/3]"
                >
                  {/* Background image */}
                  <img 
                    src={market.image} 
                    alt={market.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-h4 text-white mb-2 group-hover:text-orange transition-colors">
                      {market.title}
                    </h3>
                    <p className="text-body-s text-gray-200 mb-3">
                      {market.description}
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

      {/* Press / Recognition */}
      <Section variant="light" padding="lg" className="bg-white">
        <Container size="wide">
          <SectionHeader
            overline="Recognition"
            title="Featured In"
            subtitle="Our work has been covered by leading industry publications."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressFeatures.map((press, index) => (
              <div 
                key={index}
                className="p-6 rounded-card border border-gray-200 hover:border-orange/30 transition-colors"
              >
                <p className="text-caption text-orange font-semibold mb-2">{press.publication}</p>
                <p className="text-body-m font-medium text-charcoal mb-2">{press.headline}</p>
                <p className="text-caption text-gray-500">{press.date}</p>
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
              Ready to Work Together?
            </h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">
              From concept to installation, we bring your vision to life. 
              Let's discuss your next project.
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
