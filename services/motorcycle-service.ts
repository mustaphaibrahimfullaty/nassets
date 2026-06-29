import type { Motorcycle, Category, Review, Testimonial } from "@/types";
import { motorcycles } from "@/data/motorcycles";
import { categories } from "@/data/categories";
import { reviews, testimonials } from "@/data/reviews";

// ============================================
// MOTORCYCLE SERVICE
// ============================================

/**
 * Simulates async data fetching — designed to be swapped
 * for real API calls (fetch/axios) without changing consumers.
 */

export async function getAllMotorcycles(): Promise<Motorcycle[]> {
  // Simulate network delay for realistic loading states
  return Promise.resolve(motorcycles);
}

export async function getMotorcycleById(id: string): Promise<Motorcycle | undefined> {
  return Promise.resolve(motorcycles.find((m) => m.id === id));
}

export async function getMotorcycleBySlug(slug: string): Promise<Motorcycle | undefined> {
  return Promise.resolve(motorcycles.find((m) => m.slug === slug));
}

export async function getFeaturedMotorcycles(): Promise<Motorcycle[]> {
  return Promise.resolve(motorcycles.filter((m) => m.isFeatured));
}

export async function getMotorcyclesByCategory(category: string): Promise<Motorcycle[]> {
  return Promise.resolve(motorcycles.filter((m) => m.category === category));
}

export async function getNewArrivals(): Promise<Motorcycle[]> {
  return Promise.resolve(motorcycles.filter((m) => m.isNew));
}

export async function getTopRatedMotorcycles(limit: number = 4): Promise<Motorcycle[]> {
  return Promise.resolve(
    [...motorcycles].sort((a, b) => b.rating - a.rating).slice(0, limit)
  );
}

export async function searchMotorcycles(query: string): Promise<Motorcycle[]> {
  const lowerQuery = query.toLowerCase();
  return Promise.resolve(
    motorcycles.filter(
      (m) =>
        m.name.toLowerCase().includes(lowerQuery) ||
        m.description.toLowerCase().includes(lowerQuery) ||
        m.category.toLowerCase().includes(lowerQuery) ||
        m.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
  );
}

// ============================================
// CATEGORY SERVICE
// ============================================

export async function getAllCategories(): Promise<Category[]> {
  return Promise.resolve(categories);
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return Promise.resolve(categories.find((c) => c.slug === slug));
}

// ============================================
// REVIEW SERVICE
// ============================================

export async function getAllReviews(): Promise<Review[]> {
  return Promise.resolve(reviews);
}

export async function getReviewsByMotorcycle(motorcycleId: string): Promise<Review[]> {
  return Promise.resolve(reviews.filter((r) => r.motorcycleId === motorcycleId));
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  return Promise.resolve(testimonials);
}

// ============================================
// UTILITY
// ============================================

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
