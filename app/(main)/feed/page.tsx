"use client";

import { useState } from "react";
import { feedPosts as initialPosts } from "@/data/feed";
import { FeedPostCard } from "@/components/feed/feed-post-card";
import { CreatePost } from "@/components/feed/create-post";
import { FeedPost } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, Users } from "lucide-react";

export default function FeedPage() {
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);

  const handleCreatePost = (newPost: FeedPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container py-10 px-4 md:px-8 max-w-6xl mx-auto min-h-[calc(100vh-200px)]">
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Community <span className="gradient-text">Feed</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Connect with other electric motorcycle enthusiasts. Share your rides, ask questions, and stay updated.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6 animate-fade-in-up-delay-1">
          <CreatePost onPostCreated={handleCreatePost} />
          <div className="space-y-6">
            {posts.map((post) => (
              <FeedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in-up-delay-2 hidden lg:block">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-primary" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">#ZeroSRF</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">#RangeTest</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">#EVCharging</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">#CanyonRide</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">#Energica</Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="w-5 h-5 text-yellow-500" />
                Platform Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>Active Riders</span>
                </div>
                <span className="font-bold">12,450</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="w-4 h-4" />
                  <span>Posts Today</span>
                </div>
                <span className="font-bold">342</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
