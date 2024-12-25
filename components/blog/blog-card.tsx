"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types/blogs";
// import { FadeInUp } from "@/components/animations/fade-in-up";

interface BlogCardProps {
  post: BlogPost;
  delay?: number;
}

export function BlogCard({ post}: BlogCardProps) {
  return (
      <article className="group cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <h3 className="text-xl font-semibold leading-tight">{post.title}</h3>
          <Link
            href={post.link}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            Read More
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
  );
}
