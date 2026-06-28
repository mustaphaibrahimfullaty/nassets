# Key Decisions Log

**Project:** nassets
**Format:** Append-only decision log

---

## Decision 1: Brief Level Selection

**Date:** 2026-06-28
**Step:** Phase 0 - Project Setup
**Session:** 1

**Context:**
The project was freshly initialized, requiring alignment on discovery depth.

**What was decided:**
Selected the "Complete Project Brief" workflow.

**Why:**
To ensure a thorough strategic analysis of the target audience, brand positioning, and the design requirements for both the storefront and dashboards.

**Impact:**
Guides the discovery process through all complete strategic steps (Vision, Positioning, Users, Concept, tone, etc.).

**Alternatives considered:**
- Simplified Project Brief — rejected to allow for deeper analysis of two distinct dashboards (Admin & User) and custom storefront features.

---

## Decision 2: Governance & Decision Culture

**Date:** 2026-06-28
**Step:** Phase 1a - Client Profile
**Session:** 1

**Context:**
Setting up the project's working relationship structure.

**What was decided:**
xyzee is the sole decision-maker (fast-individual decision style) with direct sign-off authority.

**Why:**
xyzee is the Project Owner and lead, enabling fast iterations and clear direction.

**Impact:**
Speeds up the design/development feedback loops since consensus-building across multiple corporate layers is not required.

**Alternatives considered:**
- Consensus-based or Hierarchical review — not applicable as there are no other active project stakeholders on the business side.

---

## Decision 3: Timeline and Launch Constraint

**Date:** 2026-06-28
**Step:** Phase 1a - Client Profile
**Session:** 1

**Context:**
The product has an aggressive go-to-market schedule.

**What was decided:**
A hard deadline of 3 weeks to launch the storefront and both dashboards.

**Why:**
To meet startup launch milestones.

**Impact:**
We must prioritize essential core features first, design clean and reusable interfaces, and streamline the handover process.

**Alternatives considered:**
- Phased launch (storefront first, then dashboards) — rejected; the user wants everything launched in 3 weeks.

---

## Decision 4: Design Process Integration

**Date:** 2026-06-28
**Step:** Phase 1a - Client Profile
**Session:** 1

**Context:**
The startup needs high-quality UI assets but lacks dedicated design personnel.

**What was decided:**
Pencil.dev (a spec-driven Figma-like tool) will consume the WDS documentation and specifications to generate the UI designs.

**Why:**
Pencil.dev is optimized for rendering designs when provided with explicit specifications and structure.

**Impact:**
Our WDS specifications must be highly structured, detailed, and clear on components, layouts, and animations so that Pencil.dev can render them accurately.

---

## Decision 5: Business Model & Monetization Channels

**Date:** 2026-06-28
**Step:** Phase 1 - Step 5 (Determine Business Model)
**Session:** 1

**Context:**
Aligning on the monetization models and sales channels to guide both storefront UX and backend admin console capabilities.

**What was decided:**
Selected a Hybrid Business Model (B2B wholesale + B2C direct-to-consumer + in-person retail POS).

**Why:**
The business sells retail e-bikes to individual consumers (B2C) and bulk contracts to rental agencies/corporate fleets (B2B), and operates physical storefronts/events where sales agents must log offline sales.

**Impact:**
- Storefront must support B2C online checkout and B2B inquiries/bulk quote flows.
- Admin panel must feature a robust Point of Sale (POS) interface and dynamic order management supporting online fulfillment and physical retail orders.

**Alternatives considered:**
- Pure B2C Direct-to-Consumer (DTC) model — rejected because it fails to capture bulk wholesale channels and retail storefront transactions.

---

## Decision 6: B2B Customer Profiles & Registration Types

**Date:** 2026-06-28
**Step:** Phase 1 - Step 6 (Identify Business Customers)
**Session:** 1

**Context:**
Structuring the B2B portal entry points, user roles, and buying priorities for bulk/wholesale clients.

**What was decided:**
1. Registration splits into two options: **Individual** (B2C) or **Company** (B2B).
2. Primary B2B buyers: Bike Shop Owners, Fleet Managers, and Corporate Procurement Officers.
3. Designed specific B2B priorities:
   - *Shop Owners:* Wholesale margins (tiered volume discounts).
   - *Fleet Managers:* Durable product specifications, delivery tracking, and fleet warranty details.
   - *Procurement Officers:* Formal invoice downloads and Net 30/60 offline/online payment terms.
4. Business buyers get a dedicated **Company Dashboard** to manage profiles, track fleet orders, and participate in the community feed.
5. All buyers (Individuals & Companies) can choose to buy directly online or click "Schedule a Meeting" to negotiate bulk/custom terms offline.

**Why:**
Enables standard B2B buyers to transact autonomously while maintaining high-touch sales options (meetings) for large custom fleet or corporate orders.

**Impact:**
- The storefront signup form will ask for Account Type (Individual vs. Company).
- The User Dashboard expands into a Company Dashboard containing B2B-specific order histories and fleet invoice options, while preserving access to the social community feed.

---

_Continue appending decisions as they're made throughout the Product Brief process._
