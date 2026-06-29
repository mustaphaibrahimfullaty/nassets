"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  motorcycleName: string;
}

export function ImageGallery({ images, motorcycleName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // If we have no images, provide a dummy array so the component still renders nicely
  const displayImages = images.length > 0 ? images : ["placeholder-1", "placeholder-2", "placeholder-3"];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-4/3 md:aspect-16/10 w-full overflow-hidden rounded-xl bg-muted border border-border/50">
        <div className="absolute inset-0 mesh-gradient opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-extrabold text-muted-foreground/20">
          {motorcycleName.toUpperCase()}
        </div>
        {images.length > 0 && (
          <Image
            src={displayImages[activeIndex]}
            alt={motorcycleName}
            fill
            className="object-cover z-10"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            priority
          />
        )}
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative h-20 w-28 shrink-0 snap-start overflow-hidden rounded-lg border-2 transition-all",
                activeIndex === idx
                  ? "border-primary opacity-100 ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
                  : "border-transparent opacity-60 hover:opacity-100 bg-muted"
              )}
            >
              <div className="absolute inset-0 mesh-gradient opacity-80"></div>
              {images.length > 0 && (
                <Image
                  src={img}
                  alt={`${motorcycleName} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover z-10"
                  sizes="112px"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
