import { homeStats } from "@/data/navigation";

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-primary-foreground/20">
          {homeStats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="flex flex-col items-center text-center px-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-2 flex items-center">
                {stat.prefix}
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
