"use client";

import { useState } from "react";
import { reviews as initialReviews } from "@/data/reviews";
import { ReviewCard } from "@/components/reviews/review-card";
import { WriteReviewDialog } from "@/components/reviews/write-review-dialog";
import { Review } from "@/types";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length 
    : 0;

  const handleReviewSubmit = (review: Review) => {
    setReviews([review, ...reviews]);
  };

  const getRatingCount = (stars: number) => {
    return reviews.filter(r => r.rating === stars).length;
  };

  return (
    <div className="container py-10 px-4 md:px-8 max-w-5xl mx-auto min-h-[calc(100vh-200px)]">
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Community <span className="gradient-text">Reviews</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Real feedback from riders around the world. See what people are saying about their electric motorcycles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 animate-fade-in-up-delay-1">
        <div className="md:col-span-4 flex flex-col items-center justify-center p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50">
          <div className="text-6xl font-bold mb-2">{averageRating.toFixed(1)}</div>
          <div className="flex gap-1 text-yellow-500 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-muted-foreground text-sm">Based on {reviews.length} reviews</p>
          <div className="mt-6 w-full">
            <WriteReviewDialog onSubmit={handleReviewSubmit} />
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col justify-center p-8 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/50">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-4 mb-3 last:mb-0">
              <div className="flex items-center gap-1 w-12 text-sm font-medium">
                <span>{stars}</span>
                <Star className="w-3 h-3 fill-current text-muted-foreground" />
              </div>
              <Progress value={(getRatingCount(stars) / reviews.length) * 100} className="h-2" />
              <div className="w-10 text-right text-sm text-muted-foreground">
                {getRatingCount(stars)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 animate-fade-in-up-delay-2">
        <div className="flex items-center justify-between border-b border-border/50 pb-4">
          <h2 className="text-2xl font-bold">Latest Reviews</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
