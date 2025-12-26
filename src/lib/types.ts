// ============================================
// MYSTIC CUSTOM FABRICATION - TYPE DEFINITIONS
// ============================================

// ---------- Project / Case Study Types ----------

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface KeyFact {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  tags: string[];
  location: string;
  completionDate: string;
  
  // Images
  heroImage: string;
  cardImage: string;
  gallery: ProjectImage[];
  
  // Content
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  
  // Metrics
  keyFacts: KeyFact[];
  
  // Optional
  testimonial?: Testimonial;
  featured?: boolean;
  services?: string[];
}

export type ProjectCategory = 
  | 'broadcast'
  | 'museums'
  | 'corporate'
  | 'events'
  | 'all';

// ---------- Company Content Types ----------

export interface CompanyInfo {
  name: string;
  legacyName: string;
  tagline: string;
  location: string;
  founded: number;
  facilitySize: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
}

export interface Differentiator {
  id: string;
  title: string;
  shortDescription: string;
  expandedDescription: string;
  icon: string;
  metric?: string;
  relatedProjectSlug?: string;
}

export interface Capability {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
  heroImage: string;
}

export interface Market {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  heroImage: string;
}

// ---------- UI Component Types ----------

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  companyLogo?: string;
  photo?: string;
  projectSlug?: string;
}

export interface Award {
  name: string;
  year: number;
  category?: string;
  project?: string;
}

export interface PressItem {
  publication: string;
  publicationLogo?: string;
  title: string;
  date: string;
  url: string;
  category: string;
  credit: string;
}

export interface TeamMember {
  name: string;
  title: string;
  photo: string;
  bio?: string;
  linkedin?: string;
}

export interface ClientLogo {
  name: string;
  src: string;
  category: 'broadcast' | 'corporate' | 'cultural';
}

// ---------- Article / Insights Types ----------

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  thumbnail: string;
  heroImage: string;
  featured?: boolean;
}

// ---------- Form Types ----------

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  timeline?: string;
  budget?: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

// ---------- Navigation Types ----------

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ---------- Filter Types ----------

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

// ---------- SEO Types ----------

export interface PageMeta {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
