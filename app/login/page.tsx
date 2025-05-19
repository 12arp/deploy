"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Cookies from 'js-cookie';

const loginSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    const isAuthenticated = Cookies.get('isAuthenticated') === 'true';
    if (isAuthenticated) {
      router.push('/admin');
    }
  }, [router]);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginForm) {
    try {
      setIsLoading(true);

      // Check credentials
      if (values.userId === "admin12" && values.password === "Password21") {
        // Store authentication state in cookies
        Cookies.set('isAuthenticated', 'true', { expires: 1 }); // Expires in 1 day
        Cookies.set('userId', values.userId, { expires: 1 });
        
        toast.success("Login successful");
        router.push("/admin");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Login failed");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-medium">User ID</label>
                <Input
                  {...form.register("userId")}
                  placeholder="Enter your user ID"
                  type="text"
                />
                {form.formState.errors.userId && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.userId.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Password</label>
                <Input
                  {...form.register("password")}
                  placeholder="Enter your password"
                  type="password"
                />
                {form.formState.errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 