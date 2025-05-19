"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Lightbulb, Smartphone, Users, BookOpen, AlertCircle } from 'lucide-react';

interface BenefitProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const benefitList: BenefitProps[] = [
  {
    title: "🧠 Think in English, Not Translate",
    description: "We teach students to think directly in English, helping them become fluent and confident speakers.",
    icon: <Brain />,
  },
  {
    title: "💡 Simple, Practical Learning",
    description: "No confusing theories — just clear concepts, relatable examples, and daily practice.",
    icon: <Lightbulb />,
  },
  {
    title: "📱 Accessible to Everyone",
    description: "Affordable courses, offline support, mobile-friendly content — learning made possible anywhere, anytime.",
    icon: <Smartphone />,
  },
  {
    title: "✍️ Created by Experts, Backed by Vision",
    description: "Our content is designed by educators who understand local challenges, led by visionary leaders like Mr. Sudhir Kumar, Mr. Saransh Saurabh & Mr. Aaditya Arya.",
    icon: <Users />,
  },
  {
    title: "📚 The Power of the 5Vowels Book",
    description: "A one-of-a-kind book that builds strong foundations and nurtures love for the English language.",
    icon: <BookOpen />,
  },
  {
    title: "📘 Focused on Real Problems",
    description: 'We directly address pronunciation issues like "S" vs "Sh," common in Hindi-speaking regions.',
    icon: <AlertCircle />,
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Why Choose 5Vowels</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock Your English Potential</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the unique advantages that make 5Vowels the ideal choice for mastering English, tailored to your needs and designed for success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 dark:hover:bg-muted/30 h-full"
            >
              <CardHeader className={`flex ${index > 2 ? "items-end" : ""} flex-col justify-start items-start text-left gap-4`}>
                <div className="p-2 bg-primary/20 rounded-full">{icon}</div>
                <div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="mt-2 text-sm">
                    {description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>        
      </div>
    </section>
  );
};
