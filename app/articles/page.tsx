"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
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

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch articles
  async function fetchArticles() {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await res.json();
      setArticles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch articles");
      toast.error("Failed to fetch articles");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <p>Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <p className="text-red-500 mb-4">Error: {error}</p>
        <Button onClick={fetchArticles}>Try Again</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Articles</h1>
        <p className="text-muted-foreground text-center mb-8">
          Explore our collection of articles and insights
        </p>
        <Separator className="my-6" />

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {articles.map((article) => (
              <Card key={article._id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{article.title}</CardTitle>
                  <CardDescription className="text-base">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose prose-sm max-w-none line-clamp-3 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <span>Read Time: {article.readTime}</span>
                    <span>
                      Published: {new Date(article.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/articles/${article._id}`}>
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 