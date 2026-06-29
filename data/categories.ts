import type { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-001",
    name: "Sport",
    slug: "sport",
    description: "Track-bred performance and aggressive styling for the speed enthusiast.",
    iconName: "Gauge",
    motorcycleCount: 12,
  },
  {
    id: "cat-002",
    name: "Cruiser",
    slug: "cruiser",
    description: "Relaxed riding position and classic styling for the open road.",
    iconName: "Wind",
    motorcycleCount: 9,
  },
  {
    id: "cat-003",
    name: "Adventure",
    slug: "adventure",
    description: "Built to conquer any terrain — from highways to mountain trails.",
    iconName: "Mountain",
    motorcycleCount: 7,
  },
  {
    id: "cat-004",
    name: "Urban",
    slug: "urban",
    description: "Agile, lightweight, and efficient — the perfect city companion.",
    iconName: "Building2",
    motorcycleCount: 15,
  },
  {
    id: "cat-005",
    name: "Touring",
    slug: "touring",
    description: "Maximum comfort and range for unforgettable long-distance journeys.",
    iconName: "MapPin",
    motorcycleCount: 6,
  },
  {
    id: "cat-006",
    name: "Off-Road",
    slug: "offroad",
    description: "Raw power and rugged durability for dirt, trails, and motocross.",
    iconName: "TreePine",
    motorcycleCount: 8,
  },
];
