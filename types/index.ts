// ============================================
// MOTORCYCLE TYPES
// ============================================

export type MotorcycleCategory =
  | "sport"
  | "cruiser"
  | "adventure"
  | "urban"
  | "touring"
  | "offroad";

export interface MotorcycleSpecs {
  range: string;
  topSpeed: string;
  horsepower: number;
  torque: string;
  zeroToSixty: string;
  battery: string;
  chargeTime: string;
  weight: string;
  seatHeight: string;
  motorType: string;
}

export interface Motorcycle {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: MotorcycleCategory;
  price: number;
  originalPrice?: number;
  images: string[];
  thumbnail: string;
  description: string;
  shortDescription: string;
  specs: MotorcycleSpecs;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
  colorOptions: string[];
  createdAt: string;
}

// ============================================
// CATEGORY TYPES
// ============================================

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  motorcycleCount: number;
}

// ============================================
// REVIEW TYPES
// ============================================

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  motorcycleId: string;
  motorcycleName: string;
  rating: number;
  title: string;
  content: string;
  helpful: number;
  verified: boolean;
  createdAt: string;
}

// ============================================
// TESTIMONIAL TYPES
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  motorcycle: string;
}

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

// ============================================
// STAT TYPES
// ============================================

export interface Stat {
  value: string;
  numericValue: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

// ============================================
// FEATURE / VALUE PROPOSITION TYPES
// ============================================

export interface Feature {
  iconName: string;
  title: string;
  description: string;
}

// ============================================
// ECOMMERCE TYPES
// ============================================

export interface CartItem {
  motorcycleId: string;
  quantity: number;
  color: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

// ============================================
// USER TYPES
// ============================================

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "buyer" | "admin";
  joinedAt: string;
}

// ============================================
// FEED TYPES
// ============================================

export interface FeedPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
}
