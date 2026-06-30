"use client";

import { useState } from "react";
import { Review } from "@/types";
import { users } from "@/data/users";
import { motorcycles } from "@/data/motorcycles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface WriteReviewDialogProps {
  onSubmit: (review: Review) => void;
}

export function WriteReviewDialog({ onSubmit }: WriteReviewDialogProps) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [motorcycleId, setMotorcycleId] = useState("");

  const handleSubmit = () => {
    if (!rating || !title || !content || !motorcycleId) return;

    const mc = motorcycles.find(m => m.id === motorcycleId);
    const currentUser = users[0];

    const newReview: Review = {
      id: `rev_${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      motorcycleId,
      motorcycleName: mc?.name || "Unknown",
      rating,
      title,
      content,
      helpful: 0,
      verified: true, // Auto-verified for mock
      createdAt: new Date().toISOString(),
    };

    onSubmit(newReview);
    setOpen(false);
    
    // Reset form
    setRating(0);
    setTitle("");
    setContent("");
    setMotorcycleId("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Write a Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
          <DialogDescription>
            Share your experience with other riders. Your feedback helps the community.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Motorcycle</Label>
            <Select value={motorcycleId} onValueChange={setMotorcycleId}>
              <SelectTrigger>
                <SelectValue placeholder="Select a motorcycle to review" />
              </SelectTrigger>
              <SelectContent>
                {motorcycles.map((mc) => (
                  <SelectItem key={mc.id} value={mc.id}>
                    {mc.name} ({mc.brand})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Rating</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 cursor-pointer transition-colors ${
                    star <= (hoverRating || rating)
                      ? "fill-yellow-500 text-yellow-500"
                      : "text-muted-foreground opacity-30"
                  }`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="title">Review Title</Label>
            <Input
              id="title"
              placeholder="Summarize your experience"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content">Review details</Label>
            <Textarea
              id="content"
              placeholder="What did you like or dislike? How does it handle?"
              className="min-h-[120px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={!rating || !title || !content || !motorcycleId}
          >
            Submit Review
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
