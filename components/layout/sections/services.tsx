"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  features: string[];
  goal: string;
}

const services: ServiceProps[] = [
  {
    title: "Basic Level (Beginners)",
    description: "Target Audience: Students struggling with English basics or just starting.",
    features: [
      "Introduction to Alphabets & Sounds (Phonics)",
      "Pronunciation Practice (S vs Sh, V vs W, etc.)",
      "Daily Vocabulary (5 Words a Day)",
      "Basic Grammar (Nouns, Verbs, Tenses – Simple)",
      "English Sentence Structure",
      "Speaking Practice with Simple Sentences",
      "Hindi-to-English Transition Support",
    ],
    goal: "Build confidence in using simple English in daily life.",
  },
  {
    title: "Intermediate Level (Growing Learners)",
    description: "Target Audience: Students who know basic English but lack fluency.",
    features: [
      "Intermediate Grammar (Tenses, Modals, Prepositions)",
      "Situation-based Speaking Practice",
      "Listening & Comprehension Activities",
      "Small Paragraph Writing",
      "Vocabulary Building (Synonyms/Antonyms, Phrasal Verbs)",
      "Error Correction & Sentence Improvement",
      "Thinking Directly in English (No Translation Method)",
    ],
    goal: "Improve fluency, understanding, and structured expression.",
  },
  {
    title: "Advanced Level (Fluency Builders)",
    description: "Target Audience: Students preparing for interviews, competitions, or higher studies.",
    features: [
      "Advanced Grammar Usage",
      "Group Discussions, Debates & Public Speaking",
      "Interview Preparation (Mock Sessions)",
      "Essay & Letter Writing",
      "Accent Neutralization Techniques",
      "Real-life Speaking Scenarios",
      "Confidence Building Exercises",
    ],
    goal: "Speak English fluently, accurately, and with clarity in real-world situations.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Course{" "}
        </span>
        Details & Programme Features
      </h2>
      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
      Structured English Learning for 8th–12th Grade Students
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(
          ({ title, description, features, goal }: ServiceProps) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card h-full flex flex-col"
            >
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>

              <div className="flex-grow p-6">
                <ul className="space-y-2">
                  {features.map((feature: string) => (
                    <li key={feature} className="flex items-start">
                      <Check className="text-green-500 w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 mt-auto">
                 <p className="font-semibold">Goal: <span className="font-normal">{goal}</span></p>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
