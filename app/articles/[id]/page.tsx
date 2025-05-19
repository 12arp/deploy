"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import Link from "next/link";

type Article = {
  _id: string;
  title: string;
  description: string;
  content: string;
  readTime: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
};

const API_URL = "https://backend420.onrender.com/api/articles";

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(`${API_URL}/${params.id}`);
        
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Article not found");
          }
          throw new Error("Failed to fetch article");
        }

        const data = await res.json();
        setArticle(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch article");
        toast.error("Failed to fetch article");
      } finally {
        setIsLoading(false);
      }
    }

    if (params.id) {
      fetchArticle();
    }
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <Separator className="my-8" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            {error || "Article not found"}
          </h1>
          <div className="space-x-4">
            <Button onClick={() => router.back()}>Go Back</Button>
            <Button asChild>
              <Link href="/articles">View All Articles</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6"
        >
          ← Back to Articles
        </Button>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {article.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span>Read Time: {article.readTime}</span>
            <span>•</span>
            <span>
              Published: {new Date(article.createdAt).toLocaleDateString()}
            </span>
          </div>

          <Separator className="my-8" />

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <Separator className="my-8" />

          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => router.back()}
            >
              ← Back to Articles
            </Button>
            <Button asChild>
              <Link href="/articles">View All Articles</Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
} 