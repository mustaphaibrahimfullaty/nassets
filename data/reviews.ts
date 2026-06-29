import type { Review, Testimonial } from "@/types";

export const reviews: Review[] = [
  {
    id: "rev-001",
    userId: "usr-001",
    userName: "Marcus Chen",
    userAvatar: "",
    motorcycleId: "mc-001",
    motorcycleName: "Volt RS",
    rating: 5,
    title: "Nothing compares to this level of performance",
    content:
      "Coming from a Ducati Panigale, I was skeptical about electric. The Volt RS completely changed my mind. The instant torque is addictive, and the handling through corners is absolutely telepathic. Best motorcycle I have ever owned.",
    helpful: 47,
    verified: true,
    createdAt: "2026-01-15T00:00:00Z",
  },
  {
    id: "rev-002",
    userId: "usr-002",
    userName: "Sarah Mitchell",
    userAvatar: "",
    motorcycleId: "mc-004",
    motorcycleName: "Pulse 3",
    rating: 5,
    title: "Perfect daily commuter",
    content:
      "The Pulse 3 has completely transformed my commute. It's light, nimble, and I can charge it at work. The app integration is seamless, and the ride quality is surprisingly plush for a city bike. Worth every penny.",
    helpful: 32,
    verified: true,
    createdAt: "2026-02-08T00:00:00Z",
  },
  {
    id: "rev-003",
    userId: "usr-003",
    userName: "James Okonkwo",
    userAvatar: "",
    motorcycleId: "mc-003",
    motorcycleName: "Apex X",
    rating: 5,
    title: "Adventure riding redefined",
    content:
      "Took the Apex X on a 1,200-mile cross-country adventure. The dual-motor AWD system handled everything from wet highways to fire roads with ease. The range is real, and the DC fast charging made rest stops painless.",
    helpful: 58,
    verified: true,
    createdAt: "2026-03-12T00:00:00Z",
  },
  {
    id: "rev-004",
    userId: "usr-004",
    userName: "Elena Vasquez",
    userAvatar: "",
    motorcycleId: "mc-002",
    motorcycleName: "Thunder GT",
    rating: 4,
    title: "Classic vibes with modern power",
    content:
      "The Thunder GT has the soul of a classic cruiser with the convenience of electric. I love the low seat height and the torque at low speeds. Only wish it was slightly lighter, but the build quality is exceptional.",
    helpful: 21,
    verified: true,
    createdAt: "2026-01-28T00:00:00Z",
  },
  {
    id: "rev-005",
    userId: "usr-005",
    userName: "David Park",
    userAvatar: "",
    motorcycleId: "mc-007",
    motorcycleName: "Eclipse S",
    rating: 5,
    title: "The future is here",
    content:
      "The Eclipse S is not just a motorcycle — it's a statement. The AI-assisted dynamics genuinely learn your riding style. Carbon monocoque feels incredibly rigid. This is what happens when you reimagine motorcycles from scratch.",
    helpful: 73,
    verified: true,
    createdAt: "2026-04-02T00:00:00Z",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-001",
    name: "Marcus Chen",
    role: "Professional Racer",
    avatar: "",
    content:
      "The Volt RS delivers performance that rivals the best ICE super engines. The instant torque and predictable power delivery make it an absolute weapon on track days. Nassets is building the future of motorsport.",
    rating: 5,
    motorcycle: "Volt RS",
  },
  {
    id: "test-002",
    name: "Amara Johnson",
    role: "Tech Executive",
    avatar: "",
    content:
      "I wanted a premium commuter that makes a statement. The Pulse 3 exceeds every expectation — the build quality, the smart features, and that silent acceleration. My colleagues are all ordering one now.",
    rating: 5,
    motorcycle: "Pulse 3",
  },
  {
    id: "test-003",
    name: "Ricardo Fernandez",
    role: "Adventure Rider & Photographer",
    avatar: "",
    content:
      "The Apex X took me through 14 countries and never let me down. The range, the all-terrain capability, and the sheer reliability — this is the motorcycle I have been waiting my entire life for.",
    rating: 5,
    motorcycle: "Apex X",
  },
  {
    id: "test-004",
    name: "Yuki Tanaka",
    role: "Automotive Journalist",
    avatar: "",
    content:
      "Having reviewed over 200 motorcycles in my career, the Eclipse S stands apart. The technology integration is seamless, the performance is breathtaking, and the attention to detail is world-class.",
    rating: 5,
    motorcycle: "Eclipse S",
  },
];
