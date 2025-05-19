import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Back button */}
      <Button
        variant="ghost"
        asChild
        className="mb-8 group"
      >
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
        </Link>
      </Button>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About 5Vowels</h1>
        <div className="space-y-6 text-lg">
          <p>
            At 5Vowels, our mission is simple yet powerful: to empower the students of Bihar and Jharkhand with fluent, confident English communication skills. We believe that language should never be a barrier to dreams &mdash; whether it&apos;s for higher education, job opportunities, or traveling the world.
          </p>
          <p>
            We offer a complete journey of English learning, starting from basic foundation building to reaching advanced levels of fluency. Our specially designed programs ensure that every student, regardless of their starting point, can master the language with confidence and pride.
          </p>
          <p>
            At 5Vowels, we teach English step-by-step, starting from Grammar, moving to Translation, and finally to Conversation. Our structured approach ensures that students build a strong foundation, gradually developing the skills they need to speak and understand English fluently.
          </p>
          <p>
            When students step outside Bihar or Jharkhand &mdash; whether for job opportunities or further studies &mdash; we want them to carry the pride of saying:
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic my-4">
            &quot;I learned my English from 5Vowels, and today, I speak it fluently.&quot;
          </blockquote>
          <p>
            At 5Vowels, we don&apos;t just teach English. We open doors to the world.
          </p>
        </div>
      </div>
    </div>
  );
} 