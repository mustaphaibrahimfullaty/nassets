import { whyChooseFeatures } from "@/data/navigation";
import { Leaf, Zap, Cpu, Shield, ArrowRight } from "lucide-react";

export function WhyChooseSection() {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "Leaf": return <Leaf className="w-6 h-6" />;
      case "Zap": return <Zap className="w-6 h-6" />;
      case "Cpu": return <Cpu className="w-6 h-6" />;
      case "Shield": return <Shield className="w-6 h-6" />;
      default: return <ArrowRight className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
            Why Choose <span className="text-primary">Electric?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join the revolution. Experience the unparalleled benefits of electric motorcycles that go far beyond just saving gas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {whyChooseFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="flex gap-6 p-8 rounded-3xl bg-card border border-border hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-sm">
                  {getFeatureIcon(feature.iconName)}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold font-heading text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
