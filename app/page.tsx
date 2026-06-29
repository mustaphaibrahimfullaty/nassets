import { HeroSection } from "@/components/home/hero-section";
import { FeaturedMotorcycles } from "@/components/home/featured-motorcycles";
import { CategoriesSection } from "@/components/home/categories-section";
import { StatsSection } from "@/components/home/stats-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedMotorcycles />
      <CategoriesSection />
      <StatsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
