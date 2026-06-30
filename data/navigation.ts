import type { NavItem, FooterSection, Stat, Feature } from "@/types";

// ============================================
// MAIN NAVIGATION
// ============================================

export const mainNavItems: NavItem[] = [
  {
    label: "Motorcycles",
    href: "/motorcycles",
    description: "Explore our full collection",
  },
  {
    label: "Compare",
    href: "/compare",
    description: "Compare models side by side",
  },
  {
    label: "Community",
    href: "/feed",
    description: "Join the conversation",
  },
  {
    label: "About",
    href: "/about",
    description: "Our mission and story",
  },
  {
    label: "Reviews",
    href: "/reviews",
    description: "Real rider experiences",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Contact us now",
  },
];

// ============================================
// FOOTER SECTIONS
// ============================================

export const footerSections: FooterSection[] = [
  {
    title: "Shop",
    links: [
      { label: "All Motorcycles", href: "/motorcycles" },
      { label: "Sport", href: "/motorcycles?category=sport" },
      { label: "Cruiser", href: "/motorcycles?category=cruiser" },
      { label: "Adventure", href: "/motorcycles?category=adventure" },
      { label: "Urban", href: "/motorcycles?category=urban" },
      { label: "Touring", href: "/motorcycles?category=touring" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
      { label: "Investors", href: "/investors" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Warranty", href: "/warranty" },
      { label: "Financing", href: "/financing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/nassets", iconName: "Twitter" },
  { label: "Instagram", href: "https://instagram.com/nassets", iconName: "Instagram" },
  { label: "YouTube", href: "https://youtube.com/nassets", iconName: "Youtube" },
  { label: "LinkedIn", href: "https://linkedin.com/company/nassets", iconName: "Linkedin" },
] as const;

// ============================================
// HOMEPAGE STATS
// ============================================

export const homeStats: Stat[] = [
  {
    value: "10K+",
    numericValue: 10000,
    label: "Happy Riders",
    suffix: "+",
    prefix: "",
  },
  {
    value: "50+",
    numericValue: 50,
    label: "Motorcycle Models",
    suffix: "+",
  },
  {
    value: "4.9",
    numericValue: 4.9,
    label: "Average Rating",
  },
  {
    value: "99%",
    numericValue: 99,
    label: "Customer Satisfaction",
    suffix: "%",
  },
];

// ============================================
// VALUE PROPOSITIONS / FEATURES
// ============================================

export const whyChooseFeatures: Feature[] = [
  {
    iconName: "Leaf",
    title: "Zero Emissions",
    description:
      "Ride with zero carbon footprint. Our electric motorcycles produce no exhaust emissions, contributing to cleaner air and a healthier planet.",
  },
  {
    iconName: "Zap",
    title: "Instant Torque",
    description:
      "Experience the thrill of immediate power delivery. Electric motors provide maximum torque from 0 RPM — no waiting, no lag, pure acceleration.",
  },
  {
    iconName: "Cpu",
    title: "Smart Technology",
    description:
      "Connected riding experience with OTA updates, app integration, GPS navigation, ride analytics, and AI-assisted riding dynamics.",
  },
  {
    iconName: "Shield",
    title: "Premium Build Quality",
    description:
      "Aerospace-grade materials, precision engineering, and rigorous quality testing ensure every Nassets motorcycle is built to last.",
  },
];
