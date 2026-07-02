import Link from "next/link";
import Image from "next/image";
import { Motorcycle } from "@/types";
import { formatPrice } from "@/services/motorcycle-service";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, ShoppingBag, ArrowRight } from "lucide-react";

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export function MotorcycleCard({ motorcycle }: MotorcycleCardProps) {
  return (
    <div className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden card-hover-lift h-full relative">

      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {motorcycle.isNew && (
          <Badge className="bg-primary text-primary-foreground font-semibold px-2.5 py-1">
            New Arrival
          </Badge>
        )}
      </div>

      <div className="absolute top-4 right-4 z-10">
        <Button variant="ghost" size="icon" className="rounded-full bg-background/50 backdrop-blur-md hover:bg-background/80 hover:text-primary transition-colors text-muted-foreground w-[36px] h-[36px]">
          <Heart className="w-4 h-4" />
          <span className="sr-only">Add to Wishlist</span>
        </Button>
      </div>

      {/* Image container - using div with bg color for placeholder since no images exist yet */}
      <Link href={`/motorcycles/${motorcycle.slug}`} className="block relative aspect-4/3 w-full overflow-hidden bg-muted shrink-0">
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-0" />
        <Image
          src={motorcycle.thumbnail}
          alt={motorcycle.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Badge - bottom left of image */}
        <div className="absolute bottom-3 left-3 z-10">
          <Badge variant="secondary" className="capitalize bg-background/80 backdrop-blur-md text-xs">
            {motorcycle.category}
          </Badge>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <Link href={`/motorcycles/${motorcycle.slug}`}>
            <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {motorcycle.name}
            </h3>
          </Link>
          <div className="flex items-center gap-1 text-sm font-medium">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span>{motorcycle.rating}</span>
            <span className="text-muted-foreground text-xs">({motorcycle.reviewCount})</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {motorcycle.shortDescription}
        </p>

        {/* Specs quick view */}
        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="text-xs">
            <span className="text-muted-foreground">Range:</span>
            <span className="font-medium ml-1 text-foreground">{motorcycle.specs.range}</span>
          </div>
          <div className="text-xs">
            <span className="text-muted-foreground">0-60:</span>
            <span className="font-medium ml-1 text-foreground">{motorcycle.specs.zeroToSixty}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="font-heading font-bold text-lg">{formatPrice(motorcycle.price)}</div>
            {motorcycle.originalPrice && (
              <div className="text-xs text-muted-foreground line-through">{formatPrice(motorcycle.originalPrice)}</div>
            )}
          </div>

          <div className="flex gap-2">
            <Button size="icon" variant="outline" className="rounded-full w-[36px] h-[36px] border-border hover:border-primary hover:text-primary transition-colors">
              <ShoppingBag className="w-4 h-4" />
              <span className="sr-only">Add to Cart</span>
            </Button>
            <Button size="icon" className="rounded-full w-[36px] h-[36px] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors" asChild>
              <Link href={`/motorcycles/${motorcycle.slug}`}>
                <ArrowRight className="w-4 h-4" />
                <span className="sr-only">View Details</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
