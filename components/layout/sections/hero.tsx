"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />

      <div className="container relative">
        <div className="flex flex-col gap-8 items-center min-h-[calc(100vh-6rem)] py-12">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-center text-center space-y-8 w-full max-w-3xl">
            <Badge variant="outline" className="text-sm py-2 animate-fade-in">
              <span className="mr-2 text-primary">
                <Badge>Featured</Badge>
              </span>
              <span> Start Learning English Today! </span>
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in-up">
                Master English with{" "}
                <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  5VOWELS
                </span>{" "}
                
              </h1>

              <div className="w-full flex">
                <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px] mx-auto text-center animate-fade-in-up [animation-delay:200ms]">
                  Transform your English skills with our expert instructors and innovative learning methods. Join thousands of successful learners in their journey to fluency.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up [animation-delay:400ms]">
              <Button size="lg" className="w-full sm:w-auto font-bold group/arrow">
                Start Learning
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto font-bold"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 animate-fade-in-up [animation-delay:600ms]">
              <div>
                <h4 className="text-4xl font-bold">500+</h4>
                <p className="text-muted-foreground">Students</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold">95%</h4>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-4xl font-bold">4.9</h4>
                <p className="text-muted-foreground">Student Rating</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-5xl animate-fade-in [animation-delay:800ms] mt-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-gradient-to-tr from-primary/80 via-primary/50 to-primary/30 blur-3xl opacity-30" />
            <div className="relative">
              <Image
                src="/hero-image.jpg"
                alt="Students learning English"
                width={1500}
                height={1000}
                className="w-full h-auto rounded-2xl shadow-2xl border border-primary/10"
                priority
              />
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-primary/20 hidden lg:block">
                <p className="font-semibold">Learn English</p>
                <p className="text-sm text-muted-foreground">with 5Vowels</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-primary/20 hidden lg:block">
                <p className="font-semibold">Spoken English</p>
                <p className="text-sm text-muted-foreground">Mastery Program</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
