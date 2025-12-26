import Image from 'next/image';
import Link from 'next/link';
import { Section, Container } from '@/components/layout/Section';
import { LinkButton } from '@/components/ui/Button';
import { Heart, Users, ArrowRight } from 'lucide-react';

// ============================================
// TYPES
// ============================================

interface TeamMember {
  name: string;
  role: string;
  image: string;
  department?: string;
}

// ============================================
// DATA
// ============================================

const leadership: TeamMember[] = [
  { name: "Gregg Harvey", role: "COO", image: "/images/people/GREGG-HARVEY.avif" },
  { name: "Jim Fitzgerald", role: "CEO", image: "/images/people/JIM-FITZGERALD.avif" },
  { name: "Bill LaCouture", role: "Controller", image: "/images/people/Bill-LaCouture.avif" },
];

const projectManagement: TeamMember[] = [
  { name: "Ben Jacobson", role: "Senior Project Manager", image: "/images/people/BJacobson.avif" },
  { name: "Mark Howes", role: "Senior Project Manager", image: "/images/people/MARK-HOWES.avif" },
  { name: "Keith Archer", role: "Designer / Project Manager", image: "/images/people/Keith-Archer.avif" },
  { name: "Allan McNab", role: "Project Manager", image: "/images/people/ALLAN-McNAB.avif" },
  { name: "Ashley Zulla", role: "Project Manager", image: "/images/people/Ashley-Zulla.avif" },
  { name: "Conor Fitzgerald", role: "Project Manager", image: "/images/people/Conor-Fitzgerald.avif" },
  { name: "Eric Friedman", role: "Project Manager", image: "/images/people/Eric-Friedman.avif" },
  { name: "Lauren Sousa", role: "Project Manager", image: "/images/people/Lauren-Sousa.avif" },
];

const operations: TeamMember[] = [
  { name: "Garrett Harvey", role: "Operations Manager", image: "/images/people/Garrett-Harvey.avif" },
  { name: "Alicia Schneider", role: "Office Manager", image: "/images/people/ALICIA-SCHNEIDER.avif" },
  { name: "Allie Gillaspie-Williams", role: "Purchasing Manager", image: "/images/people/Allie-Gillaspie-Williams.avif" },
  { name: "Michelle Clow", role: "Accountant", image: "/images/people/Michelle-Clow.avif" },
];

const designDrafting: TeamMember[] = [
  { name: "Rich Dugdale", role: "Lead Draftsperson", image: "/images/people/Rich-Dugdale.avif" },
  { name: "Scott Wagner", role: "Draftsperson", image: "/images/people/Scott-Wagner.avif" },
];

const officeCompanions: TeamMember[] = [
  { name: "Cora Lee", role: "Special Assistant to the COO", image: "/images/people/CORA-LEE.avif" },
  { name: "Khloé Catdashian", role: "Facility Intrusion Specialist", image: "/images/people/KHLOÉ-CATDASHIAN.avif" },
  { name: "Kylie Catdashian", role: "Facility Intrusion Specialist", image: "/images/people/KYLIE-CATDASHIAN.avif" },
];

const inMemory: TeamMember = {
  name: "Bella",
  role: "Forever in our hearts",
  image: "/images/people/Bella.avif"
};

// ============================================
// COMPONENTS
// ============================================

function PersonCard({ member, size = 'default' }: { member: TeamMember; size?: 'large' | 'default' | 'small' }) {
  const sizeClasses = {
    large: 'aspect-[3/4]',
    default: 'aspect-square',
    small: 'aspect-square',
  };
  
  const imageSizeClasses = {
    large: 'w-full h-full',
    default: 'w-full h-full',
    small: 'w-full h-full',
  };

  return (
    <div className="group">
      <div className={`relative ${sizeClasses[size]} rounded-xl overflow-hidden bg-gray-100 mb-4`}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-body-m font-semibold text-charcoal group-hover:text-orange transition-colors">
        {member.name}
      </h3>
      <p className="text-body-s text-gray-600">{member.role}</p>
    </div>
  );
}

function TeamSection({ 
  title, 
  description, 
  members, 
  columns = 4,
  cardSize = 'default'
}: { 
  title: string; 
  description?: string; 
  members: TeamMember[]; 
  columns?: 2 | 3 | 4 | 5;
  cardSize?: 'large' | 'default' | 'small';
}) {
  const gridClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  };

  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-8">
        <h2 className="text-h3 text-charcoal mb-2">{title}</h2>
        {description && (
          <p className="text-body-m text-gray-600">{description}</p>
        )}
      </div>
      <div className={`grid ${gridClasses[columns]} gap-6 lg:gap-8`}>
        {members.map((member) => (
          <PersonCard key={member.name} member={member} size={cardSize} />
        ))}
      </div>
    </div>
  );
}

// ============================================
// PAGE
// ============================================

export default function PeoplePage() {
  return (
    <>
      {/* Hero with Team Photo */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/mystic-team.jpg"
            alt="Mystic Custom Fabrication Team"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        
        {/* Content */}
        <Container size="wide" className="relative h-full flex items-center">
          <div className="max-w-2xl">
            <p className="text-orange font-semibold text-body-m mb-4 tracking-wide">
              OUR PEOPLE
            </p>
            <h1 className="text-h1-mobile md:text-h1 text-white mb-6">
              The Team Behind the Craft
            </h1>
            <p className="text-body-l text-gray-300 mb-6">
              Meet the skilled professionals who bring creative visions to life. 
              With over 97 team members across 9 departments, we combine decades 
              of experience with fresh perspectives.
            </p>
            <div className="flex items-center gap-3 text-white/80">
              <Users className="w-5 h-5 text-orange" />
              <span className="text-body-m">One team. Endless possibilities.</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <Section variant="light" padding="sm">
        <Container size="wide">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-4">
            <div className="text-center">
              <p className="text-h2 text-orange font-bold">97+</p>
              <p className="text-body-s text-gray-600">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-h2 text-orange font-bold">9</p>
              <p className="text-body-s text-gray-600">Departments</p>
            </div>
            <div className="text-center">
              <p className="text-h2 text-orange font-bold">35+</p>
              <p className="text-body-s text-gray-600">Years Combined Leadership</p>
            </div>
            <div className="text-center">
              <p className="text-h2 text-orange font-bold">500+</p>
              <p className="text-body-s text-gray-600">Projects Delivered</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Team Sections */}
      <Section variant="white" padding="lg">
        <Container size="wide">
          {/* Leadership */}
          <TeamSection
            title="Leadership"
            description="Guiding vision and strategy for over three decades"
            members={leadership}
            columns={3}
            cardSize="large"
          />

          {/* Project Management */}
          <TeamSection
            title="Project Management"
            description="Your dedicated partners from concept to installation"
            members={projectManagement}
            columns={4}
          />

          {/* Operations & Administration */}
          <TeamSection
            title="Operations & Administration"
            description="Keeping everything running smoothly behind the scenes"
            members={operations}
            columns={4}
          />

          {/* Design & Drafting */}
          <TeamSection
            title="Design & Drafting"
            description="Translating creative concepts into buildable plans"
            members={designDrafting}
            columns={4}
          />
        </Container>
      </Section>

      {/* Office Companions - Fun Section */}
      <Section variant="light" padding="md">
        <Container size="wide">
          <div className="text-center mb-10">
            <p className="text-orange font-semibold text-body-s mb-2 tracking-wide">
              AND OF COURSE...
            </p>
            <h2 className="text-h3 text-charcoal mb-3">Office Companions</h2>
            <p className="text-body-m text-gray-600 max-w-2xl mx-auto">
              They may not weld or operate CNC machines, but they're essential 
              members of the Mystic family.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {officeCompanions.map((companion) => (
              <PersonCard key={companion.name} member={companion} size="default" />
            ))}
            
            {/* In Memory */}
            <div className="group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={inMemory.image}
                  alt={inMemory.name}
                  fill
                  className="object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <Heart className="w-5 h-5 text-white/80" />
                </div>
              </div>
              <h3 className="text-body-m font-semibold text-charcoal">
                {inMemory.name}
              </h3>
              <p className="text-body-s text-gray-500 italic">{inMemory.role}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Join the Team CTA */}
      <Section variant="dark" padding="lg">
        <Container size="narrow">
          <div className="text-center">
            <Users className="w-12 h-12 text-orange mx-auto mb-6" />
            <h2 className="text-h2 text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-body-l text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented craftspeople, project managers, 
              and creative problem-solvers to join the Mystic family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton href="/contact/" variant="primary" size="lg">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </LinkButton>
              <LinkButton href="/about/" variant="secondary" size="lg">
                Learn About Us
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
