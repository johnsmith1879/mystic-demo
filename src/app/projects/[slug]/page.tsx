import { Section, Container, Grid } from '@/components/layout/Section';
import { LinkButton, TextLink } from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/Card';
import { ProjectGallery } from '@/components/ui/ProjectGallery';
import { ArrowLeft, MapPin, Calendar, Building2 } from 'lucide-react';
import { notFound } from 'next/navigation';

// ============================================
// PROJECT DATA - COMPLETE GALLERIES
// ============================================

const projects: Record<string, any> = {
  "espn-studio-x": {
    slug: "espn-studio-x",
    title: "ESPN Studio X — SportsCenter Flagship",
    client: "ESPN / The Walt Disney Company",
    category: "Broadcast",
    location: "Bristol, Connecticut",
    completionDate: "September 2023",
    heroImage: "/images/projects/espn-studio-x/sportscenter-studio-x-anchor-desk-wide.jfif",
    
    summary: "Future-proofing sports broadcasting's most iconic program with cutting-edge virtual production technology.",
    
    challenge: "ESPN sought to future-proof the studio while maintaining the show's established identity — integrating cutting-edge virtual production technology, expanding LED capabilities, and softening the existing 'spaceship' aesthetic, all while keeping SportsCenter on-air throughout a two-year construction cycle.",
    
    approach: "Working with Jack Morton Worldwide, Mystic delivered scenic fabrication for the comprehensive second phase including curved wall treatments, wood feature wrapping around the new 'catwalk' area with six motorized tracking monitors, pendant lighting integration, and dimensional wall effects. The signature innovation — a 'depth monitor' creating a virtual fifth wall using ESPN's proprietary GRACE platform.",
    
    result: "The Studio X refresh launched on September 7, 2023 — ESPN's 44th anniversary — maintaining SportsCenter's position as the industry benchmark for sports news presentation.",
    
    keyFacts: [
      { value: "48 ft", label: "Main LED Display" },
      { value: "38M", label: "Pixels" },
      { value: "2 Years", label: "Phased Build" },
      { value: "1st", label: "Daily Depth Monitor" }
    ],
    
    gallery: [
      { src: "/images/projects/espn-studio-x/sportscenter-studio-x-anchor-desk-wide.jfif", alt: "Main stage wide shot", caption: "Custom anchor desk with multi-level LED walls and high-gloss floor" },
      { src: "/images/projects/espn-studio-x/custom-anchor-desk-high-gloss-floor.jfif", alt: "Anchor desk from above", caption: "Complex radial desk form with 'floating' construction and AR-ready floor" },
      { src: "/images/projects/espn-studio-x/broadcast-studio-depth-monitor-array.jfif", alt: "Depth monitor tunnel", caption: "Architectural ribs create infinite corridor effect with vertical screens" },
      { src: "/images/projects/espn-studio-x/concrete-finish-video-wall-surround.jfif", alt: "Video wall with concrete finish", caption: "LED panel framed by architectural concrete portal" },
      { src: "/images/projects/espn-studio-x/interactive-analyst-area-pendant-lighting.jfif", alt: "Analyst area", caption: "Intimate analysis zone with cylindrical pendant lighting" },
      { src: "/images/projects/espn-studio-x/large-format-led-display-wood-trim.jfif", alt: "Media portal close-up", caption: "Presentation wall with wood veneer interior adding warmth" },
      { src: "/images/projects/espn-studio-x/live-broadcast-lighting-integration.jfif", alt: "Studio in broadcast", caption: "RGB lighting synchronized with on-screen graphics" },
      { src: "/images/projects/espn-studio-x/stand-up-area-led-floor-graphics.jfif", alt: "Stand-up area", caption: "Multi-functional area with integrated LED floor modules" },
      { src: "/images/projects/espn-studio-x/studio-architecture-ribbed-ceiling-detail.jfif", alt: "Ceiling architecture", caption: "Stadium-scale ribs with hidden lighting equipment" },
      { src: "/images/projects/espn-studio-x/vertical-led-strip-set-cladding.jfif", alt: "Wall panel detail", caption: "Precision LED strips integrated flush with metal profiles" },
    ],
    
    testimonial: {
      quote: "To my knowledge, I don't know anybody else who's doing depth monitor all day long on their productions. So it feels pretty innovative to me.",
      author: "Marti Hanzlik",
      title: "Coordinating Director",
      company: "ESPN"
    },
    
    services: ["Scenic Fabrication", "LED Integration", "Virtual Production Support"],
    tags: ["ESPN", "SportsCenter", "Virtual Production", "Flagship Studio"],
  },
  
  "amazon-nba-studio": {
    slug: "amazon-nba-studio",
    title: "Amazon NBA on Prime — Culver City Studio",
    client: "Amazon Prime Video",
    category: "Broadcast",
    location: "Culver City, California",
    completionDate: "October 2025",
    heroImage: "/images/projects/amazon-nba-studio/nba-on-prime-studio-atrium-wide-shot-set-design.jfif",
    
    summary: "The largest high-resolution LED studio floor in America — a two-story 'NBA House' for streaming's biggest sports deal.",
    
    challenge: "When Amazon secured an 11-year NBA rights deal, they needed more than a studio — they needed a statement. Competing with TNT's legendary 'Inside the NBA' required something that would make viewers forget they were watching streaming.",
    
    approach: "Working with Jack Morton Worldwide, Mystic fabricated an 'NBA House' — a two-story environment where every inch serves storytelling. The upper mezzanine hosts the main broadcast desk; the lower lounge creates casual atmosphere for postgame. At the center: a regulation LED half-court.",
    
    result: "The studio launched October 24, 2025 — the first NBA regular season telecasts to air exclusively on streaming.",
    
    keyFacts: [
      { value: "13,000", label: "sq ft Studio" },
      { value: "2,300+", label: "LED Tiles" },
      { value: "22", label: "Cameras" },
      { value: "2", label: "Story Levels" }
    ],
    
    gallery: [
      { src: "/images/projects/amazon-nba-studio/nba-on-prime-studio-atrium-wide-shot-set-design.jfif", alt: "Two-story NBA House", caption: "Complete two-story broadcast environment" },
      { src: "/images/projects/amazon-nba-studio/amazon-prime-nba-anchor-desk-fabrication.jpg", alt: "Mezzanine anchor desk", caption: "Premium mezzanine position with arena-style vantage" },
      { src: "/images/projects/amazon-nba-studio/amazon-nba-studio-basketball-video-wall.jfif", alt: "LED court", caption: "Largest high-resolution LED studio floor in America" },
      { src: "/images/projects/amazon-nba-studio/studio-set-fabrication-wood-staircase-mezzanine-detail.jfif", alt: "Wood staircase", caption: "Custom fabricated staircase connecting levels" },
      { src: "/images/projects/amazon-nba-studio/amazon-prime-video-nba-studio-green-room-lounge.jfif", alt: "Lounge area", caption: "Casual environment for NBA Nightcap postgame" },
    ],
    
    testimonial: {
      quote: "Very rarely do you get a true greenfield opportunity like this. That allowed us to bring in this stunning LED volume with unbelievable resolution.",
      author: "Jared Stacy",
      title: "VP/Head of Worldwide Live Sports Production",
      company: "Prime Video"
    },
    
    services: ["Scenic Fabrication", "LED Integration", "Multi-Level Construction"],
    tags: ["Amazon", "NBA", "LED Floor", "Streaming"],
  },
  
  "msnbc-studio-3a": {
    slug: "msnbc-studio-3a",
    title: "MSNBC Studio 3A — 30 Rockefeller Center",
    client: "MSNBC / NBCUniversal News Group",
    category: "Broadcast",
    location: "New York City, New York",
    completionDate: "September 2021",
    heroImage: "/images/projects/msnbc-studio-3a/msnbc-flagship-studio-wide-view-fabrication.jpg",
    
    summary: "Where 1930s Art Deco meets 40 million pixels — a complete reimagining honoring 30 Rock's heritage.",
    
    challenge: "The design must honor 30 Rockefeller Center's Art Deco legacy while appearing thoroughly modern. A single studio must serve diverse formats: panels, single anchor, remote interviews, breaking news.",
    
    approach: "Working with Clickspring Design, Mystic translated the vision into reality — deconstructed archways in light wood tones, gold accent patterns with NBC peacock motifs, and a first-of-its-kind 30+ foot LED arch spanning floor-to-ceiling-to-floor.",
    
    result: "Studio 3A relaunched September 20, 2021, serving MSNBC's full primetime lineup. The Art Deco design creates distinctive identity in the competitive cable news landscape.",
    
    keyFacts: [
      { value: "40M", label: "Pixels" },
      { value: "30+ ft", label: "LED Arch Span" },
      { value: "500+", label: "LED Lights" },
      { value: "Full", label: "AR/VR Capability" }
    ],
    
    gallery: [
      { src: "/images/projects/msnbc-studio-3a/msnbc-flagship-studio-wide-view-fabrication.jpg", alt: "Studio wide view", caption: "Full multi-zone layout with Art Deco elements" },
      { src: "/images/projects/msnbc-studio-3a/chris-hayes-set-curved-led-video-wall-integration.jpg", alt: "Curved LED wall", caption: "30+ foot curved LED arch — first of its kind" },
      { src: "/images/projects/msnbc-studio-3a/msnbc-studio-main-archway-entrance-design.jpg", alt: "Art Deco archway", caption: "Deconstructed archways in light wood tones" },
      { src: "/images/projects/msnbc-studio-3a/custom-thermoformed-acrylic-broadcast-desk.jpg", alt: "Anchor desk", caption: "L-shaped desk with integrated LED front panel" },
      { src: "/images/projects/msnbc-studio-3a/anchor-desk-wood-and-acrylic-joinery-detail.jpg", alt: "Desk detail", caption: "Premium wood and acrylic craftsmanship" },
    ],
    
    testimonial: {
      quote: "The new Studio 3A captures exactly what we envisioned — a space that honors our home at 30 Rock while giving our programming the visual canvas modern news demands.",
      author: "NBCUniversal News Group",
      title: "Executive Statement",
      company: "NBCUniversal"
    },
    
    services: ["Scenic Fabrication", "LED Integration", "Architectural Scenic"],
    tags: ["MSNBC", "Art Deco", "Cable News", "30 Rock"],
  },
  
  "ms-now": {
    slug: "ms-now",
    title: "MS NOW — Times Square Broadcast Facility",
    client: "MS NOW / Versant",
    category: "Broadcast",
    location: "Times Square, New York City",
    completionDate: "November 2025",
    heroImage: "/images/projects/ms-now/times-square-studio-wide-led-walls.jpg",
    
    summary: "Three months. Three studios. One network rebrand. Zero compromises.",
    
    challenge: "MSNBC was forced to leave 30 Rock and rebrand as 'MS NOW.' The network needed a complete facility in three months.",
    
    approach: "Mystic delivered complete scenic for three studios: 9A (modern/polished), 9C (urban/organic), and 9B (virtual production with 60 million pixels).",
    
    result: "MS NOW debuted November 15, 2025, exactly on schedule — a remarkable achievement given the three-month timeline.",
    
    keyFacts: [
      { value: "3", label: "Months Timeline" },
      { value: "3", label: "Studios Built" },
      { value: "1,782", label: "sq ft LED" },
      { value: "60M", label: "Pixels Virtual Studio" }
    ],
    
    gallery: [
      { src: "/images/projects/ms-now/times-square-studio-wide-led-walls.jpg", alt: "Studio 9A", caption: "Curved LED ribbon display echoing MS NOW flag logo" },
      { src: "/images/projects/ms-now/msnbc-studio-set-fabrication-side-angle.jpg", alt: "Studio side angle", caption: "Modern polished aesthetic with integrated technology" },
      { src: "/images/projects/ms-now/broadcast-studio-brick-wall-loft-design.jpg", alt: "Urban loft design", caption: "Studio 9C with faux brick and steel columns" },
    ],
    
    testimonial: {
      quote: "Timing was, of course, a challenge, but we have an incredible team that built a fully functional facility in an incredibly short period of time.",
      author: "Andy Barsh",
      title: "SVP Creative Operations",
      company: "MS NOW"
    },
    
    services: ["Scenic Fabrication", "LED Integration", "Virtual Production"],
    tags: ["MS NOW", "Network Rebrand", "Accelerated Timeline"],
  },
  
  "espn-first-take": {
    slug: "espn-first-take",
    title: "ESPN First Take — Studio Y at 7 Hudson Square",
    client: "ESPN / The Walt Disney Company",
    category: "Broadcast",
    location: "New York City, New York",
    completionDate: "June 2025",
    heroImage: "/images/projects/espn-first-take/espn-first-take-studio-wide-master-shot.jpg",
    
    summary: "Elevating sports debate to Manhattan penthouse sophistication for Stephen A. Smith and Molly Qerim.",
    
    challenge: "'First Take' required an aesthetic conveying sophistication and gravitas, contrasting with the casual 'Get Up' nearby.",
    
    approach: "Mystic delivered warm tobacco panels, illuminated columns, Art Deco window casings for LED 'windows,' and a signature circular anchor desk for 360° camera access.",
    
    result: "First Take debuted from Studio Y on June 23, 2025, completing ESPN's transition to 7 Hudson Square.",
    
    keyFacts: [
      { value: "360°", label: "In-the-Round Format" },
      { value: "50ft", label: "LED Skyline Views" },
      { value: "2025", label: "Launch Year" },
      { value: "Art Deco", label: "Design Language" }
    ],
    
    gallery: [
      { src: "/images/projects/espn-first-take/espn-first-take-studio-wide-master-shot.jpg", alt: "Studio wide shot", caption: "Manhattan penthouse-inspired environment" },
      { src: "/images/projects/espn-first-take/first-take-anchor-desk-live-broadcast-set.jpg", alt: "Live broadcast", caption: "Circular desk with edge-lit First Take logo" },
      { src: "/images/projects/espn-first-take/custom-anchor-desk-copper-acrylic-fabrication.jpg", alt: "Desk detail", caption: "Premium copper and acrylic fabrication" },
      { src: "/images/projects/espn-first-take/vertical-led-feature-wall-metal-frame.jpg", alt: "LED feature wall", caption: "Floor-to-ceiling LED creating skyline views" },
      { src: "/images/projects/espn-first-take/textured-wall-paneling-and-millwork-detail.jpg", alt: "Wall paneling", caption: "Warm tobacco panels with custom millwork" },
      { src: "/images/projects/espn-first-take/espn-set-shelving-display-joinery.jpg", alt: "Shelving display", caption: "Custom joinery and display shelving" },
      { src: "/images/projects/espn-first-take/lifestyle-set-area-custom-cabinetry.jpg", alt: "Lifestyle area", caption: "Custom cabinetry in lifestyle set area" },
      { src: "/images/projects/espn-first-take/studio-set-video-wall-industrial-design.jpg", alt: "Video wall", caption: "Industrial design elements with video integration" },
    ],
    
    testimonial: {
      quote: "Andre Durette really leaned into the upscale Manhattan high-rise penthouse design. Sophisticated.",
      author: "Joe Ferretti",
      title: "Director of Studio Design & Development",
      company: "ESPN"
    },
    
    services: ["Scenic Fabrication", "LED Integration", "Custom Millwork"],
    tags: ["ESPN", "First Take", "Manhattan Penthouse"],
  },
  
  "espn-get-up": {
    slug: "espn-get-up",
    title: "ESPN Get Up — Studio X at 7 Hudson Square",
    client: "ESPN / The Walt Disney Company",
    category: "Broadcast",
    location: "New York City, New York",
    completionDate: "June 2025",
    heroImage: "/images/projects/espn-get-up/espn-get-up-studio-wide-shot-seaport.jpg",
    
    summary: "Creating the ultimate sports hangout in Lower Manhattan — like Central Perk meets sports broadcasting.",
    
    challenge: "ESPN's morning show needed a home reflecting its conversational format, inspired by Central Perk and the Seinfeld diner.",
    
    approach: "Mystic created a custom poured resin 'river table' depicting Lower Manhattan, plus subway tile installations, ESPN mosaic wall, and curved anchor desk.",
    
    result: "Studio X launched June 9, 2025, with column-free sightlines eliminating camera obstructions.",
    
    keyFacts: [
      { value: "2,100", label: "sq ft Studio" },
      { value: "Custom", label: "Epoxy Table" },
      { value: "AR", label: "Ready Infrastructure" },
      { value: "NYC", label: "Authentic Finishes" }
    ],
    
    gallery: [
      { src: "/images/projects/espn-get-up/espn-get-up-studio-wide-shot-seaport.jpg", alt: "Studio wide shot", caption: "The ultimate sports hangout environment" },
      { src: "/images/projects/espn-get-up/espn-get-up-studio-anchor-desk-city-backdrop.jpg", alt: "Anchor desk", caption: "Curved anchor desk with LED city views" },
      { src: "/images/projects/espn-get-up/custom-anchor-desk-wood-led-fabrication.jpg", alt: "Desk fabrication", caption: "Integrated LED inlay in curved desk" },
      { src: "/images/projects/espn-get-up/espn-studio-brick-wall-mosaic-logo.jpg", alt: "Mosaic wall", caption: "Subway tile and ESPN mosaic for NYC authenticity" },
      { src: "/images/projects/espn-get-up/studio-demonstration-area-sliding-monitor.jpg", alt: "Demo area", caption: "Custom Manhattan epoxy table for segments" },
      { src: "/images/projects/espn-get-up/broadcast-set-interview-zone-brick-design.jpg", alt: "Interview zone", caption: "Brick design in interview zone" },
      { src: "/images/projects/espn-get-up/broadcast-set-led-floor-graphics-nba.jpg", alt: "LED floor", caption: "LED floor graphics for NBA coverage" },
      { src: "/images/projects/espn-get-up/espn-panel-discussion-set-lighting.jpg", alt: "Panel discussion", caption: "Lighting setup for panel discussions" },
      { src: "/images/projects/espn-get-up/sports-studio-stand-up-area-led-graphics.jpg", alt: "Stand-up area", caption: "Stand-up area with LED graphics" },
      { src: "/images/projects/espn-get-up/studio-feature-wall-led-segment-graphics.jpg", alt: "Feature wall", caption: "Feature wall with segment graphics" },
    ],
    
    testimonial: {
      quote: "We wanted that kind of feel for 'Get Up' — like Central Perk or the Seinfeld diner.",
      author: "Joe Ferretti",
      title: "Director of Studio Design & Development",
      company: "ESPN"
    },
    
    services: ["Scenic Fabrication", "Custom Furniture", "LED Integration"],
    tags: ["ESPN", "Get Up", "NYC Aesthetic"],
  },
  
  "nba-on-nbc": {
    slug: "nba-on-nbc",
    title: "NBA on NBC — Studio 1 Stamford",
    client: "NBC Sports",
    category: "Broadcast",
    location: "Stamford, Connecticut",
    completionDate: "November 2025",
    heroImage: "/images/projects/nba-on-nbc/nba-on-nbc-studio-wide-shot-led-video-wall.jpg",
    
    summary: "After 22 years, basketball comes home to NBC — and brings a half-court with it.",
    
    challenge: "NBC needed a studio honoring the 22-year legacy while serving NBA, NCAA, and Olympics with distinct identities.",
    
    approach: "Mystic fabricated four floor-to-ceiling LED bands, reconfigurable tracking screens, and 30 etched glass NBA team logo panels.",
    
    result: "Studio 1 launched with 'NBA Showtime' in November 2025, blending nostalgia with modern innovation.",
    
    keyFacts: [
      { value: "7,000", label: "sq ft Studio" },
      { value: "30", label: "Team Logo Panels" },
      { value: "22", label: "Years Since NBC NBA" },
      { value: "4", label: "LED Bands" }
    ],
    
    gallery: [
      { src: "/images/projects/nba-on-nbc/nba-on-nbc-studio-wide-shot-led-video-wall.jpg", alt: "Studio wide shot", caption: "Floor-to-ceiling LED bands wrapping the studio" },
      { src: "/images/projects/nba-on-nbc/nba-showtime-studio-anchor-desk-fabrication.jpg", alt: "Anchor desk", caption: "Home base anchor desk configuration" },
      { src: "/images/projects/nba-on-nbc/nba-on-nbc-set-design-led-wall-diamond-pattern.jpg", alt: "LED wall pattern", caption: "Reconfigurable LED architecture" },
      { src: "/images/projects/nba-on-nbc/nba-studio-stand-up-area-basketball-rack-decor.jpg", alt: "Demo area", caption: "Demo half-court with regulation hoop" },
      { src: "/images/projects/nba-on-nbc/custom-studio-fabrication-wood-archway-detail.jpg", alt: "Wood archway", caption: "30 etched glass NBA team logo panels" },
      { src: "/images/projects/nba-on-nbc/nbc-sports-studio-set-design-state-farm-branding.jpg", alt: "State Farm branding", caption: "Sponsor integration with State Farm branding" },
    ],
    
    testimonial: {
      quote: "From day one, we knew we wanted to put a large emphasis on the studio. The studio has become its own character.",
      author: "Jared Sumner",
      title: "Director, Studio Production",
      company: "NBA on NBC"
    },
    
    services: ["Scenic Fabrication", "LED Integration", "Glass Fabrication"],
    tags: ["NBC", "NBA", "Multi-Property Studio"],
  },
  
  "nesn-fenway": {
    slug: "nesn-fenway",
    title: "NESN Red Sox Studio at Fenway Park",
    client: "NESN (New England Sports Network)",
    category: "Broadcast",
    location: "Fenway Park, Boston, MA",
    completionDate: "April 2022",
    heroImage: "/images/projects/nesn-fenway/nesn-studio-fenway-park-view-anchor-desk.jpg",
    
    summary: "1,968 baseballs. 60 wooden bats. One unmistakable broadcast backdrop in America's oldest ballpark.",
    
    challenge: "NESN needed a permanent studio worthy of America's oldest ballpark, complementing Fenway's 1912 character.",
    
    approach: "Mystic created a 20×9 ft sculptural mural with 1,968 actual baseballs and 60 regulation wooden bats.",
    
    result: "The studio debuted April 15, 2022, for the Red Sox home opener, establishing a new visual standard.",
    
    keyFacts: [
      { value: "1,968", label: "Baseballs" },
      { value: "60", label: "Wooden Bats" },
      { value: "18.5 ft", label: "Field View Window" },
      { value: "110+", label: "Years Fenway History" }
    ],
    
    gallery: [
      { src: "/images/projects/nesn-fenway/nesn-studio-fenway-park-view-anchor-desk.jpg", alt: "Fenway view", caption: "18.5 ft window overlooking home plate" },
      { src: "/images/projects/nesn-fenway/nesn-studio-feature-wall-baseball-texture.jpg", alt: "Baseball wall", caption: "1,968 baseballs and 60 wooden bats mural" },
      { src: "/images/projects/nesn-fenway/nesn-logo-signage-fabrication-detail.jpg", alt: "NESN logo", caption: "5-foot illuminated NESN logo" },
      { src: "/images/projects/nesn-fenway/studio-set-dimensional-wall-texture.jpg", alt: "Wall texture", caption: "Archival Fenway Park drawings" },
      { src: "/images/projects/nesn-fenway/custom-anchor-desk-profile-green-monster..jpg", alt: "Anchor desk", caption: "Custom desk with heritage aesthetic" },
    ],
    
    testimonial: {
      quote: "This new space will bring our fans closer to the game than ever.",
      author: "Sean McGrail",
      title: "President and CEO",
      company: "NESN"
    },
    
    services: ["Scenic Fabrication", "Custom Installation", "Signage"],
    tags: ["NESN", "Baseball", "Fenway Park"],
  },
  
  "heisman-ceremony": {
    slug: "heisman-ceremony",
    title: "Heisman Trophy Ceremony — Jazz at Lincoln Center",
    client: "ESPN / Heisman Trophy Trust",
    category: "Events",
    location: "New York City, New York",
    completionDate: "December 2025",
    heroImage: "/images/projects/heisman-ceremony/scenic-carpentry-nyc-skyline-backdrop.jpg",
    
    summary: "Bringing Broadway stagecraft to college football's highest honor at Jazz at Lincoln Center.",
    
    challenge: "The Appel Room's 50-foot glass wall creates a stunning but technically challenging backdrop.",
    
    approach: "Working with Tony-nominated David Korins, Mystic fabricated a hand-carved Heisman Trophy replica by Rebecca Ward, plus winners portrait gallery.",
    
    result: "Five consecutive ceremonies delivered (2021-2025), establishing Jazz at Lincoln Center as the permanent home.",
    
    keyFacts: [
      { value: "5", label: "Consecutive Years" },
      { value: "91+", label: "Winner Portraits" },
      { value: "14+", label: "Cameras" },
      { value: "50 ft", label: "Glass Wall Backdrop" }
    ],
    
    gallery: [
      { src: "/images/projects/heisman-ceremony/scenic-carpentry-nyc-skyline-backdrop.jpg", alt: "NYC backdrop", caption: "The Appel Room with Manhattan skyline" },
      { src: "/images/projects/heisman-ceremony/3d-scenic-design-heisman-statue-detail.jpg", alt: "Trophy sculpture", caption: "Hand-carved trophy replica by Rebecca Ward" },
      { src: "/images/projects/heisman-ceremony/live-event-set-fabrication-lighting-grid.jpg", alt: "Stage setup", caption: "Complete scenic package with lighting grid" },
      { src: "/images/projects/heisman-ceremony/virtual-broadcast-set-gloss-black-floor.jpg", alt: "Broadcast set", caption: "Gloss black floor for broadcast" },
      { src: "/images/projects/heisman-ceremony/heisman-stage-design-concept-rendering.png", alt: "Concept rendering", caption: "Stage design concept visualization" },
      { src: "/images/projects/heisman-ceremony/stage-concept-visualization-wide-shot.jpg", alt: "Wide concept", caption: "Wide shot concept visualization" },
      { src: "/images/projects/heisman-ceremony/subfloor-installation-event-staging.jpg", alt: "Subfloor installation", caption: "Subfloor installation for event staging" },
    ],
    
    testimonial: {
      quote: "We wanted to bring the power of visual storytelling so often the trademark of great Broadway stages.",
      author: "Dan Cunningham",
      title: "Creative Director",
      company: "ESPN"
    },
    
    services: ["Scenic Fabrication", "Sculpture", "LED Integration"],
    tags: ["Heisman", "Awards", "Broadway Design"],
  },
  
  "stanley-cup": {
    slug: "stanley-cup",
    title: "NHL Stanley Cup 2025 Presentation Set",
    client: "National Hockey League (NHL)",
    category: "Events",
    location: "Sunrise, Florida",
    completionDate: "June 2025",
    heroImage: "/images/projects/stanley-cup/nhl-stanley-cup-presentation-set-fireworks.jpg",
    
    summary: "Sub-5-minute deployment. Center ice transformation. The stage for hockey's most iconic moment.",
    
    challenge: "Full deployment required in under 5 minutes during a commercial break, on ice.",
    
    approach: "Mystic developed a modular stage system with wheel-mounted base for direct ice deployment.",
    
    result: "Flawless ceremonial moment for the 2025 Stanley Cup Final, Florida Panthers' back-to-back championship.",
    
    keyFacts: [
      { value: "<5", label: "Min Deployment" },
      { value: "45 ft", label: "Stage Width" },
      { value: "19k+", label: "Arena Audience" },
      { value: "2", label: "Back-to-Back Titles" }
    ],
    
    gallery: [
      { src: "/images/projects/stanley-cup/nhl-stanley-cup-presentation-set-fireworks.jpg", alt: "With fireworks", caption: "Full stage deployment with arena fireworks" },
      { src: "/images/projects/stanley-cup/nhl-championship-celebration-stage-design.jpg", alt: "Celebration", caption: "Captain Barkov hoisting Cup" },
      { src: "/images/projects/stanley-cup/championship-podium-design-nhl-commissioner.jpg", alt: "Podium", caption: "Commissioner presenting Stanley Cup" },
      { src: "/images/projects/stanley-cup/custom-fabricated-stage-hockey-arena-set.jpg", alt: "Arena setup", caption: "Wheel-mounted system for ice deployment" },
    ],
    
    services: ["Fabrication", "Engineering", "Installation"],
    tags: ["NHL", "Stanley Cup", "Championship"],
  },
  
  "sheraton-goodnight-moon": {
    slug: "sheraton-goodnight-moon",
    title: "Goodnight Moon Suite — Sheraton Boston",
    client: "Sheraton Boston Hotel / Marriott",
    category: "Experiential",
    location: "Boston, Massachusetts",
    completionDate: "2024",
    heroImage: "/images/projects/sheraton-goodnight-moon/goodnight-moon-suite-sheraton-boston-wide-view.webp",
    
    summary: "A full-scale 'living' version of the legendary great green room from Margaret Wise Brown's 'Goodnight Moon.'",
    
    challenge: "Create a suite visually accurate to illustrations, functional as a hotel room, and compliant with safety standards.",
    
    approach: "Mystic fabricated all scenic elements: green walls and ceiling, red floor, LED fireplace, and all signature book objects.",
    
    result: "The suite became a media story covered by People, Travel + Leisure, and Boston.com.",
    
    keyFacts: [
      { value: "1:1", label: "Book Accuracy" },
      { value: "4", label: "Guest Capacity" },
      { value: "PR", label: "Media Magnet" },
      { value: "IP", label: "Licensed Design" }
    ],
    
    gallery: [
      { src: "/images/projects/sheraton-goodnight-moon/goodnight-moon-suite-sheraton-boston-wide-view.webp", alt: "Suite wide view", caption: "Full-scale 'great green room'" },
      { src: "/images/projects/sheraton-goodnight-moon/immersive-hotel-suite-fireplace-mantel-detail.webp", alt: "Fireplace", caption: "LED fireplace for safe visual effect" },
      { src: "/images/projects/sheraton-goodnight-moon/custom-fabrication-tiger-rug-rocking-chair.jfif", alt: "Tiger rug", caption: "Faithful recreation of book elements" },
      { src: "/images/projects/sheraton-goodnight-moon/themed-suite-yellow-console-decor.webp", alt: "Console", caption: "Functional hotel room within design" },
      { src: "/images/projects/sheraton-goodnight-moon/family-hotel-room-bed-plush-bunny.webp", alt: "Bedroom", caption: "Family accommodation with themed elements" },
    ],
    
    services: ["Scenic Fabrication", "Custom Furniture", "Themed Environment"],
    tags: ["Immersive", "Themed Suite", "Hospitality"],
  },
};

// ============================================
// GENERATE STATIC PARAMS
// ============================================

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

// Related projects helper
function getRelatedProjects(currentSlug: string) {
  return Object.values(projects).filter(p => p.slug !== currentSlug).slice(0, 3);
}

// ============================================
// PROJECT DETAIL PAGE
// ============================================

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) notFound();
  
  const relatedProjects = getRelatedProjects(project.slug);

  return (
    <>
      {/* Breadcrumb */}
      <Section variant="light" padding="none" className="pt-24 pb-4">
        <Container size="wide">
          <nav className="flex items-center gap-2 text-body-s text-gray-500">
            <a href="/" className="hover:text-orange transition-colors">Home</a>
            <span>/</span>
            <a href="/projects/" className="hover:text-orange transition-colors">Projects</a>
            <span>/</span>
            <span className="text-gray-700">{project.title}</span>
          </nav>
        </Container>
      </Section>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-charcoal">
        <div className="absolute inset-0">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        </div>
        <Container size="wide" className="relative z-10 pb-16">
          <p className="text-orange font-semibold mb-4">{project.category}</p>
          <h1 className="text-h1-mobile md:text-h1 text-white mb-4 max-w-4xl">{project.title}</h1>
          <p className="text-body-l text-gray-300 max-w-2xl">{project.summary}</p>
        </Container>
      </section>

      {/* Key Facts */}
      <Section variant="dark" padding="md">
        <Container size="wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {project.keyFacts.map((fact: any, i: number) => (
              <div key={i}>
                <p className="text-h2-mobile md:text-h2 text-orange font-bold">{fact.value}</p>
                <p className="text-body-s text-gray-300">{fact.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section variant="light" padding="lg">
        <Container size="wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-h3 text-charcoal mb-4">The Challenge</h2>
                <p className="text-body-m text-gray-700 leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-h3 text-charcoal mb-4">Our Approach</h2>
                <p className="text-body-m text-gray-700 leading-relaxed">{project.approach}</p>
              </div>
              <div>
                <h2 className="text-h3 text-charcoal mb-4">The Result</h2>
                <p className="text-body-m text-gray-700 leading-relaxed">{project.result}</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white border border-gray-300 rounded-card p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-orange mt-1" />
                  <div>
                    <p className="text-caption text-gray-500">Client</p>
                    <p className="text-body-s font-medium text-charcoal">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange mt-1" />
                  <div>
                    <p className="text-caption text-gray-500">Location</p>
                    <p className="text-body-s font-medium text-charcoal">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-orange mt-1" />
                  <div>
                    <p className="text-caption text-gray-500">Completed</p>
                    <p className="text-body-s font-medium text-charcoal">{project.completionDate}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-300 rounded-card p-6">
                <p className="text-caption text-gray-500 mb-3">Services Provided</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s: string) => (
                    <span key={s} className="text-caption px-3 py-1 bg-orange-light text-orange rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <Section variant="dark" padding="lg">
        <Container size="wide">
          <h2 className="text-h2-mobile md:text-h2 text-white mb-10">Project Gallery</h2>
          <ProjectGallery images={project.gallery} />
        </Container>
      </Section>

      {/* Testimonial */}
      {project.testimonial && (
        <Section variant="light" padding="lg">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-display text-orange/20">"</span>
              <blockquote className="text-h4 text-charcoal -mt-8 mb-6">{project.testimonial.quote}</blockquote>
              <p className="text-body-m font-semibold text-charcoal">{project.testimonial.author}</p>
              <p className="text-body-s text-gray-500">{project.testimonial.title}, {project.testimonial.company}</p>
            </div>
          </Container>
        </Section>
      )}

      {/* Related */}
      <Section variant="light" padding="lg" className="bg-white">
        <Container size="wide">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-h2-mobile md:text-h2 text-charcoal">Related Projects</h2>
            <TextLink href="/projects/">View All</TextLink>
          </div>
          <Grid cols={3} gap="lg">
            {relatedProjects.map((p: any) => (
              <ProjectCard key={p.slug} slug={p.slug} title={p.title} client={p.client} category={p.category} image={p.gallery?.[0]?.src || p.heroImage} tags={p.tags?.slice(0, 2) || []} variant="light" />
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="dark" padding="lg">
        <Container size="default">
          <div className="text-center">
            <h2 className="text-h2-mobile md:text-h2 text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-body-l text-gray-300 mb-10 max-w-2xl mx-auto">From concept to installation, we bring your vision to life.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <LinkButton href="/contact/" variant="primary" size="lg" showArrow>Contact Us</LinkButton>
              <LinkButton href="/projects/" variant="secondary-light" size="lg"><ArrowLeft className="w-4 h-4 mr-2" />Back to Projects</LinkButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
