import Image from "next/image";
import { Shield, Zap, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container py-10 px-4 md:px-8 max-w-6xl mx-auto min-h-[calc(100vh-200px)]">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          The Future of <span className="gradient-text">Riding</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Nassets is building the definitive marketplace for premium electric motorcycles. We believe in a future where performance and sustainability ride together.
        </p>
      </div>

      {/* Image Banner */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-24 animate-fade-in-up-delay-1">
        <Image
          src="/images/hero.png"
          alt="Electric motorcycle on mountain road"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t dark:from-background/80 from-foreground/80 to-transparent flex flex-col justify-end p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Pioneering the Transition</h2>
          <p className="text-white/80 max-w-xl text-lg">We are accelerating the global shift to electric two-wheelers by connecting riders with the world's most innovative brands.</p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-24 animate-fade-in-up-delay-2">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center border-none shadow-none ">
            <CardContent className="pt-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Uncompromising Performance</h3>
              <p className="text-muted-foreground">
                Electric doesn't mean slow. We only curate motorcycles that deliver thrilling, instant torque and exceptional handling.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center border-none shadow-none ">
            <CardContent className="pt-6">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainable Future</h3>
              <p className="text-muted-foreground">
                Reducing carbon emissions without sacrificing the joy of riding. Zero emissions, 100% adrenaline.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center border-none shadow-none ">
            <CardContent className="pt-6">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Verified Trust</h3>
              <p className="text-muted-foreground">
                Every listing, every review, and every seller on our platform is vetted to ensure a safe and premium experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Leadership Team (Mock) */}
      <div className="animate-fade-in-up-delay-2">
        <h2 className="text-3xl font-bold text-center mb-12">The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Mustapha", role: "CEO & Founder", image: "/images/muhammad.png" },
            { name: "Ahmad", role: "CTO", image: "/images/ahmad.png" },
            { name: "Abubakar", role: "Head of Design", image: "/images/abubakar.png" },
            { name: "Halima", role: "Head of Product", image: "/images/halima.png" },
          ].map((member, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-muted group-hover:border-primary/50 transition-colors">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
