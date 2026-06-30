import { Review } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, ThumbsUp } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const [helpful, setHelpful] = useState(review.helpful);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpfulClick = () => {
    if (!hasVoted) {
      setHelpful(prev => prev + 1);
      setHasVoted(true);
    }
  };

  return (
    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 transition-colors hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 border border-border/50">
              <AvatarImage src={review.userAvatar} alt={review.userName} />
              <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold flex items-center gap-2">
                {review.userName}
                {review.verified && (
                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                )}
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <span>{formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}</span>
                <span>•</span>
                <span>{review.motorcycleName}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1 text-yellow-500 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-muted opacity-30"}`}
            />
          ))}
        </div>
        <h4 className="font-bold text-lg mb-2">{review.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {review.content}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Button 
            variant="outline" 
            size="sm" 
            className={`h-7 px-2 gap-1.5 ${hasVoted ? 'bg-primary/10 text-primary border-primary/20' : ''}`}
            onClick={handleHelpfulClick}
          >
            <ThumbsUp className="h-3 w-3" />
            Helpful ({helpful})
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
