import { motorcycles } from "@/data/motorcycles"
import { reviews } from "@/data/reviews"
import { users } from "@/data/users"

export const adminMetrics = [
  {
    label: "Gross demo revenue",
    value: "₦85.1M",
    trend: "+18.4%",
    detail: "Mock revenue across reservations and deposits",
  },
  {
    label: "Active orders",
    value: "42",
    trend: "+9.8%",
    detail: "Open preorders, deliveries, and handoffs",
  },
  {
    label: "Catalog inventory",
    value: motorcycles.length.toString(),
    trend: "92% ready",
    detail: "Launch-ready electric motorcycle SKUs",
  },
  {
    label: "Community health",
    value: "97%",
    trend: "+4.1%",
    detail: "Verified reviews and moderated feed quality",
  },
]

export const revenueSeries = [
  { month: "Jan", revenue: 182, orders: 18 },
  { month: "Feb", revenue: 214, orders: 22 },
  { month: "Mar", revenue: 248, orders: 25 },
  { month: "Apr", revenue: 292, orders: 29 },
  { month: "May", revenue: 337, orders: 34 },
  { month: "Jun", revenue: 419, orders: 42 },
]

export const adminOrders = [
  { id: "ORD-8401", customer: "Alex Vance", model: "Volt RS", status: "confirmed", total: 24999, date: "2026-06-28" },
  { id: "ORD-8394", customer: "Sarah Chen", model: "Thunder GT", status: "shipped", total: 19999, date: "2026-06-26" },
  { id: "ORD-8378", customer: "David Miller", model: "Apex X", status: "pending", total: 22499, date: "2026-06-24" },
  { id: "ORD-8359", customer: "Maya Patel", model: "Storm Touring", status: "delivered", total: 27999, date: "2026-06-20" },
]

export const adminUsers = users.map((user, index) => ({
  ...user,
  orders: index === 2 ? 0 : index + 2,
  lifetimeValue: index === 2 ? 0 : (index + 1) * 18450,
  status: index === 2 ? "staff" : index === 1 ? "vip" : "active",
}))

export const moderationQueue = [
  { id: "MOD-104", type: "Review", author: "Alex Vance", subject: reviews[0]?.motorcycleName ?? "Volt RS", risk: "low", status: "Ready" },
  { id: "MOD-103", type: "Feed post", author: "Sarah Chen", subject: "Charging route report", risk: "medium", status: "Needs review" },
  { id: "MOD-102", type: "Comment", author: "David Miller", subject: "Track day impressions", risk: "low", status: "Approved" },
]

export const cmsEntries = [
  { title: "Investor hero campaign", section: "Homepage", status: "Published", updated: "2026-06-28" },
  { title: "Summer preorder offer", section: "Checkout", status: "Draft", updated: "2026-06-26" },
  { title: "Range confidence guide", section: "Education", status: "Review", updated: "2026-06-25" },
]
