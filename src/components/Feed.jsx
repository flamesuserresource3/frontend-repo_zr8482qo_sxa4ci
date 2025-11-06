import { useMemo, useState } from "react";
import PostCard from "./PostCard";

const seedPosts = [
  {
    id: 1,
    author: { name: "Alex Johnson", avatar: "https://i.pravatar.cc/100?img=12" },
    content: "Enjoying the sunshine at the park today! ☀️🌳",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1470&auto=format&fit=crop",
    likes: 128,
    comments: 24,
    createdAt: "2024-09-10T10:00:00Z",
  },
  {
    id: 2,
    author: { name: "Maria Garcia", avatar: "https://i.pravatar.cc/100?img=32" },
    content:
      "Just tried a new pasta recipe and it turned out amazing! 🍝 Who wants the recipe?",
    image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1470&auto=format&fit=crop",
    likes: 96,
    comments: 18,
    createdAt: "2024-09-11T15:30:00Z",
  },
  {
    id: 3,
    author: { name: "Liam Wong", avatar: "https://i.pravatar.cc/100?img=56" },
    content: "Late-night coding session with coffee. Ship it! 🚀",
    image: null,
    likes: 72,
    comments: 12,
    createdAt: "2024-09-12T22:15:00Z",
  },
];

export default function Feed({ newPosts = [] }) {
  const [posts, setPosts] = useState(seedPosts);

  useMemo(() => {
    if (newPosts.length) {
      setPosts((prev) => [...newPosts, ...prev]);
    }
  }, [newPosts]);

  return (
    <div className="space-y-4">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
