"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image as ImageIcon, MapPin, Smile } from "lucide-react";
import { users } from "@/data/users";
import { FeedPost } from "@/types";

interface CreatePostProps {
  onPostCreated: (post: FeedPost) => void;
}

export function CreatePost({ onPostCreated }: CreatePostProps) {
  const [content, setContent] = useState("");
  const currentUser = users[0]; // Mock current user

  const handleSubmit = () => {
    if (!content.trim()) return;

    const newPost: FeedPost = {
      id: `post_${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      content,
      images: [],
      likes: 0,
      comments: 0,
      shares: 0,
      createdAt: new Date().toISOString(),
    };

    onPostCreated(newPost);
    setContent("");
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <Avatar className="h-10 w-10 border border-border/50">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder="Share your latest ride, ask a question, or post an update..."
            className="min-h-[100px] resize-none bg-transparent border-none focus-visible:ring-0 p-4 text-base"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-border/10 pt-4 pb-4">
        <div className="flex gap-1 text-muted-foreground">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <MapPin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Smile className="h-4 w-4" />
          </Button>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={!content.trim()}
          className="rounded-full px-6"
        >
          Post
        </Button>
      </CardFooter>
    </Card>
  );
}
