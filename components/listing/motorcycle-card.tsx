"use client";

import Link from "next/link";
import Image from "next/image";
import { Motorcycle } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Zap, Gauge, Battery } from "lucide-react";

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export function MotorcycleCard({ motorcycle }: MotorcycleCardProps) {
  const { slug, name, thumbnail, price, originalPrice, isNew, isFeatured, rating, reviewCount, specs, tags } = motorcycle;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  const formattedOriginalPrice = originalPrice
    ? new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(originalPrice)
    : null;

  return (
    <Card className="group flex flex-col overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/50 card-hover-lift pt-0">
      <Link href={`/motorcycles/${slug}`} className="relative aspect-4/3 overflow-hidden bg-muted group-hover:opacity-90 transition-opacity">
        {/* Fallback gradient background behind the image */}
        <div className="absolute inset-0 mesh-gradient opacity-50 z-0"></div>

        <Image
          src={thumbnail}
          alt={name}
          fill
          className="object-cover z-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
          {isNew && <Badge variant="default" className="bg-primary text-primary-foreground">New</Badge>}
          {isFeatured && <Badge variant="secondary" className="bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30">Featured</Badge>}
        </div>

        <div className="absolute top-3 right-3 z-20">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-md font-semibold">
            {formattedPrice}
          </Badge>
        </div>
      </Link>

      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
              <Link href={`/motorcycles/${slug}`}>{name}</Link>
            </h3>
            <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
              <Star className="w-3.5 h-3.5 fill-primary text-primary" />
              <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
              <span>({reviewCount})</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0 grow">
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2 mb-4">
          {motorcycle.shortDescription}
        </p>

        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Battery className="w-3.5 h-3.5 text-primary" />
            <span>{specs.range}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Gauge className="w-3.5 h-3.5 text-primary" />
            <span>{specs.topSpeed}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span>{specs.horsepower} HP</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <div className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center text-[8px] font-bold">0</div>
            <span>{specs.zeroToSixty}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 border-t border-border/10 mt-auto flex items-center justify-between gap-4">
        <div className="flex flex-col">
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through decoration-destructive/50">
              {formattedOriginalPrice}
            </span>
          )}
          <span className="font-semibold text-foreground">
            {formattedPrice}
          </span>
        </div>
        <Button size="sm" asChild className="rounded-full px-6 mt-4">
          <Link href={`/motorcycles/${slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
