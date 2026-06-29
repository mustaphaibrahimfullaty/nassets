import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative rounded-[2rem] overflow-hidden bg-foreground text-background">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-cyan via-transparent to-transparent"></div>
          </div>
          
          <div className="noise-overlay absolute inset-0 opacity-10"></div>
          
          <div className="relative z-10 px-6 py-20 md:py-28 flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
              Ready to Ride the <span className="text-primary">Future?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-background/80 max-w-2xl">
              Join the electric revolution today. Book a test ride at a dealership near you, or customize your dream motorcycle online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-full h-14 px-8 text-base w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/motorcycles">
                  Browse Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/test-ride">
                  Book Test Ride
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
