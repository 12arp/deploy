"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is 5Vowels?",
    answer: "5Vowels is a structured English learning platform designed especially for students from grades 8 to 12, focusing on pronunciation, grammar, fluency, and confidence-building.",
    value: "item-1",
  },
  {
    question: "Who can join 5Vowels?",
    answer: "Any student from class 8 to 12, or anyone who wants to improve their basic to advanced English skills, can join.",
    value: "item-2",
  },
  {
    question: "Is 5Vowels suitable for beginners?",
    answer: "Yes! We have Basic, Intermediate, and Advanced levels. Beginners can start from the Basic level and gradually move up.",
    value: "item-3",
  },
  {
    question: "Do you provide online or offline classes?",
    answer: "We provide both. Students can choose to learn through online video lectures, live sessions, or attend offline centers (where available).",
    value: "item-4",
  },
  {
    question: "What is special about the 5Vowels book?",
    answer: "The 5Vowels Book is a student-friendly guide created by experts. It covers pronunciation, grammar, vocabulary, and practice in a simple and effective way.",
    value: "item-5",
  },
  {
    question: "Will I become fluent in English after completing the course?",
    answer: "Yes, if you follow the course sincerely, practice regularly, and complete all levels, you will gain confidence and fluency.",
    value: "item-6",
  },
  {
    question: "Is the course affordable?",
    answer: "Yes, our mission is to provide quality English education at a price every student can afford.",
    value: "item-7",
  },
  {
    question: "Who are the teachers?",
    answer: "Our team includes experienced educators, including Mr. Aaditya (CEO & Author) and Mr. Sudhir Kumar (Founder), along with a dedicated faculty of English experts.",
    value: "item-8",
  },
  {
    question: "How do I enroll in 5Vowels?",
    answer: "You can enroll through our website, mobile app, or by visiting a nearby 5Vowels center (if available in your city).",
    value: "item-9",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Relevant Questions</h2>
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full md:w-3/4 lg:w-2/3 mx-auto">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-12 text-center">
        Still have questions?
        <a
          rel="noreferrer noopener"
          href="#contact" // Link to your contact section or page
          className="text-primary underline underline-offset-2 ml-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
