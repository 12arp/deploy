"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Loader2, Pencil, Trash2, Upload, LogOut } from "lucide-react";
import { RichTextEditor } from "@/components/RichTextEditor";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const API_URL = "https://backend420.onrender.com/api/articles";

const articleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  content: z.string().min(1, "Content is required"),
  readTime: z.string().min(1, "Read time is required"),
  authorId: z.string().min(1, "Author ID is required")
});

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

export default function AdminPage() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof articleSchema>>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      readTime: "",
      authorId: "",
    },
  });

  useEffect(() => {
    // Check authentication
    const isAuthenticated = Cookies.get('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    fetchArticles();
  }, [router]);

  const handleLogout = () => {
    Cookies.remove('isAuthenticated');
    Cookies.remove('userId');
    router.push("/login");
  };

  async function fetchArticles() {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch articles");
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      toast.error("Failed to fetch articles");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(values: z.infer<typeof articleSchema>) {
    try {
      setIsSubmitting(true);

      const url = editingId ? `${API_URL}/${editingId}` : API_URL;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to save article");
      }

      toast.success(`Article ${editingId ? "updated" : "created"} successfully`);
      form.reset();
      setEditingId(null);
      fetchArticles();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to save article");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this article?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete article");

      toast.success("Article deleted successfully");
      fetchArticles();
    } catch (error) {
      toast.error("Failed to delete article");
      console.error(error);
    }
  }

  function handleEdit(article: Article) {
    setEditingId(article._id);
    form.reset({
      title: article.title,
      description: article.description,
      content: article.content,
      readTime: article.readTime,
      authorId: article.authorId,
    });
  }

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <Button
          variant="outline"
          onClick={handleLogout}
          className="flex items-center gap-2"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Form Section */}
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Article" : "Create New Article"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Title</label>
                <Input
                  {...form.register("title")}
                  placeholder="Enter article title"
                />
                {form.formState.errors.title && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.title.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  {...form.register("description")}
                  placeholder="Enter article description"
                />
                {form.formState.errors.description && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.description.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Content</label>
                <RichTextEditor
                  content={form.watch("content") || ""}
                  onChange={(content) => form.setValue("content", content)}
                  placeholder="Write your article content here..."
                />
                {form.formState.errors.content && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.content.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Read Time</label>
                <Input
                  {...form.register("readTime")}
                  placeholder="e.g., 5 min read"
                />
                {form.formState.errors.readTime && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.readTime.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Author ID</label>
                <Input
                  {...form.register("authorId")}
                  placeholder="Enter author ID"
                />
                {form.formState.errors.authorId && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.authorId.message}
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? "Update Article" : "Create Article"}
                </Button>
                {editingId && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setEditingId(null);
                      form.reset();
                    }}
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Articles List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Articles</h2>
          {articles.map((article) => (
            <Card key={article._id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {article.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {new Date(article.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(article)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(article._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 