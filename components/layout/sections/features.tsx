"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: keyof typeof icons;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Smartphone",
    title: "Mobile Learning App",
    description:
      "Practice English on-the-go with our intuitive mobile app, featuring interactive exercises and audio lessons.",
  },
  {
    icon: "MessageCircle",
    title: "Live Speaking Sessions",
    description:
      "Regular one-on-one and group speaking sessions with native English teachers to build confidence and fluency.",
  },
  {
    icon: "BookOpen",
    title: "Comprehensive Curriculum",
    description:
      "Structured learning paths from beginner to advanced levels, covering all aspects of English language.",
  },
  {
    icon: "Video",
    title: "Video Learning",
    description:
      "Access to extensive video content including real-life scenarios, pronunciation guides, and cultural insights.",
  },
  {
    icon: "ClipboardCheck",
    title: "Progress Tracking",
    description:
      "Monitor your improvement with detailed progress reports, assessments, and personalized feedback.",
  },
  {
    icon: "Medal",
    title: "Certification",
    description:
      "Earn internationally recognized certificates as you complete each level of English proficiency.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Program Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Complete English Learning Solution
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Experience a comprehensive English learning program designed to help you achieve fluency through innovative tools and proven teaching methods.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
