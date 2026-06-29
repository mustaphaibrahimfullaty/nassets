import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-12 overflow-hidden mesh-gradient dot-grid">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="space-y-8 max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Introducing the 2026 Collection
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
              Ride the <br />
              <span className="gradient-text">Electric Future</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover premium electric motorcycles engineered for unparalleled performance, zero emissions, and the purest riding experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-glow hover:shadow-glow-lg transition-all" asChild>
                <Link href="/motorcycles">
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-md" asChild>
                <Link href="/compare">
                  <Play className="mr-2 w-5 h-5" />
                  Compare Models
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border mt-8">
              <div>
                <div className="text-2xl font-bold text-foreground font-heading">2.4s</div>
                <div className="text-sm text-muted-foreground">0-60 mph</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground font-heading">350mi</div>
                <div className="text-sm text-muted-foreground">Max Range</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground font-heading">30min</div>
                <div className="text-sm text-muted-foreground">Fast Charge</div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] w-full animate-fade-in-up-delay-2">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent-violet/20 rounded-3xl glow-border backdrop-blur-sm overflow-hidden animate-float">
              <Image
                src="/images/motorcycles/apex-x-1.jpg"
                alt="Apex X-1"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent-cyan/30 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
