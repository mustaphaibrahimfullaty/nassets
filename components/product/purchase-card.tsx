"use client";

import { useState } from "react";
import { Motorcycle } from "@/types";
import { useCartStore } from "@/store/use-cart-store";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Heart, Share2, ShieldCheck, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

import { formatPrice } from "@/services/motorcycle-service";

interface PurchaseCardProps {
  motorcycle: Motorcycle;
}

export function PurchaseCard({ motorcycle }: PurchaseCardProps) {
  const [selectedColor, setSelectedColor] = useState(motorcycle.colorOptions[0]);
  const [isSaved, setIsSaved] = useState(false);
  const { addItem } = useCartStore();

  const formattedPrice = formatPrice(motorcycle.price);

  return (
    <Card className="sticky top-24 overflow-hidden border-border/50 bg-card/80 backdrop-blur-xl shadow-elevated">
      <CardContent className="p-6 md:p-8 space-y-6">
        <div>
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-3xl font-extrabold tracking-tight">{motorcycle.name}</h1>
            <Button
              variant="ghost"
              size="icon"
              className={cn("rounded-full", isSaved ? "text-destructive" : "text-muted-foreground")}
              onClick={() => setIsSaved(!isSaved)}
            >
              <Heart className={cn("w-6 h-6", isSaved && "fill-current")} />
            </Button>
          </div>
          <p className="text-muted-foreground text-lg">{motorcycle.shortDescription}</p>
        </div>

        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-black tracking-tighter gradient-text-static">{formattedPrice}</span>
          {motorcycle.originalPrice && (
            <span className="text-lg text-muted-foreground line-through decoration-destructive/50">
              {formatPrice(motorcycle.originalPrice)}
            </span>
          )}
        </div>

        <Separator className="bg-border/50" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Color:</span>
            <span className="text-muted-foreground">{selectedColor}</span>
          </div>
          <div className="flex gap-3">
            {motorcycle.colorOptions.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={cn(
                  "relative w-12 h-12 rounded-full border-2 transition-all overflow-hidden",
                  selectedColor === color
                    ? "border-primary ring-2 ring-primary/20 ring-offset-2 ring-offset-background scale-110"
                    : "border-border/50 hover:border-primary/50"
                )}
                aria-label={`Select ${color}`}
              >
                {/* Simulated color circles using CSS since we don't have exact hex codes in the mock data */}
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    backgroundColor: color.toLowerCase().includes('black') ? '#1e293b' :
                      color.toLowerCase().includes('white') ? '#f8fafc' :
                        color.toLowerCase().includes('red') ? '#ef4444' :
                          color.toLowerCase().includes('blue') ? '#3b82f6' :
                            color.toLowerCase().includes('green') ? '#10b981' :
                              color.toLowerCase().includes('grey') || color.toLowerCase().includes('titanium') ? '#64748b' :
                                color.toLowerCase().includes('yellow') ? '#eab308' : '#8b5cf6'
                  }}
                />
                {selectedColor === color && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check className={cn("w-5 h-5", color.toLowerCase().includes('white') ? "text-slate-900" : "text-white")} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div className="space-y-4">
          <Button
            className="w-full h-14 text-lg font-bold rounded-xl shadow-glow transition-all hover:scale-[1.02]"
            onClick={() => {
              addItem({ motorcycleId: motorcycle.id, color: selectedColor, quantity: 1 });
              toast.success(`${motorcycle.name} added to cart`);
            }}
          >
            Add to Cart
          </Button>
          <Button variant="outline" className="w-full h-12 rounded-xl">
            Build & Price
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-primary" />
            <span>Ships in 2-4 weeks</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>2-Year Warranty</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
