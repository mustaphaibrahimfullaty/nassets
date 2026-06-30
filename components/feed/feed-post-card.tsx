import { FeedPost } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FeedPostCardProps {
  post: FeedPost;
}

export function FeedPostCard({ post }: FeedPostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all hover:border-primary/20">
      <CardHeader className="flex flex-row items-start justify-between pb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-border/50">
            <AvatarImage src={post.userAvatar} alt={post.userName} />
            <AvatarFallback>{post.userName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{post.userName}</span>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm leading-relaxed mb-4">{post.content}</p>
        {post.images && post.images.length > 0 && (
          <div className={cn("grid gap-2", post.images.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
            {post.images.map((img, idx) => (
              <div key={idx} className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                <Image src={img} alt="Post attachment" fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 flex justify-between border-t border-border/10 pt-3 text-muted-foreground">
        <Button 
          variant="ghost" 
          size="sm" 
          className={cn("gap-2", liked && "text-red-500 hover:text-red-600")}
          onClick={handleLike}
        >
          <Heart className={cn("h-4 w-4", liked && "fill-current")} />
          <span>{likesCount}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          <span>{post.comments}</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          <span>{post.shares}</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
