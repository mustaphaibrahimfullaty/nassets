import { getAllTestimonials } from "@/services/motorcycle-service";
import { Star } from "lucide-react";

export async function TestimonialsSection() {
  const testimonials = await getAllTestimonials();

  return (
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
            Rider <span className="text-primary">Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-8 md:p-10 bg-background rounded-2xl shadow-sm border border-border/50 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-muted'}`} 
                  />
                ))}
              </div>
              
              <p className="text-lg md:text-xl font-serif italic text-foreground/90 leading-relaxed mb-8 flex-1">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center font-bold text-lg border border-primary/10">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground tracking-wide">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <p className="text-sm text-primary font-medium">{testimonial.motorcycle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
