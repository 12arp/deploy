"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FounderPage() {
  return (
    <section id="founder" className="container py-24 sm:py-32 max-w-7xl mx-auto">
      <Button
        variant="ghost"
        asChild
        className="mb-12 group hover:bg-primary/10"
      >
        <Link href="/" legacyBehavior>
          <a className="flex items-center text-lg">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
        </Link>
      </Button>

      <div className="bg-muted/50 border rounded-xl p-8 md:p-12 shadow-lg">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-[300px] h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/founder-new.jpg"
                alt="Mr. Sudhir Kumar, Founder of 5Vowels"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Founder's Preview
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground/90">Meet the Founder – Mr. Sudhir Kumar</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mr. Sudhir Kumar, the founder of 5Vowels, has a deep and practical understanding of the academic landscape of Bihar and Jharkhand. He was the founder of Ram Krishna Academy School, where more than 300 students studied, he has already created a positive impact on education.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Now, with 5Vowels, Mr. Kumar is determined to provide an understandable, accessible, and affordable English learning platform for students, especially from 8th to 12th grade. His vision is clear: to prepare students not just for exams, but for real-world success.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mr. Kumar emphasizes an important reality: Many students, when they go outside Bihar for jobs or career growth, face challenges with English pronunciation — especially sounds like "S as स" and "Sh as श". These small pronunciation gaps often lead to embarrassment and loss of confidence. While not every student struggles with these issues, many do — and 5Vowels is committed to solving them.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-16 border-primary/20" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Our Unique Approach
              </span>
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                At 5Vowels, we believe that thinking in Hindi and translating to English is the biggest roadblock to fluency. We teach students to think directly in English and respond naturally in English.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When students hear Hindi and immediately try to translate, it slows them down and breaks the flow of communication. We train them to build a strong vocabulary, master grammar, and develop the habit of thinking and speaking directly in English.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With the right basics, a strong vocabulary, and smart practice, fluency becomes a reality — and the students of Bihar and Jharkhand can face the world with pride and confidence.
              </p>
              <p className="text-muted-foreground text-lg font-semibold">
                At 5Vowels, under Mr. Kumar's leadership, we are not just teaching English — we are building confidence, opening minds, and preparing students for a global future.
              </p>
            </div>
          </div>
          <div className="bg-background/50 rounded-xl p-8 shadow-inner">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">हिंदी में</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>संस्थापक – श्री सुधीर कुमार</p>
                <p>श्री सुधीर कुमार, 5Vowels के संस्थापक, बिहार और झारखंड के शैक्षिक क्षेत्र की गहरी और व्यावहारिक समझ रखते हैं। उन्होंने रामकृष्ण एकेडमी स्कूल की स्थापना की थी, जहाँ 300 से अधिक छात्र पढ़ते थे, और इस तरह उन्होंने शिक्षा के क्षेत्र में पहले ही एक सकारात्मक प्रभाव डाला है।</p>
                <p>अब 5Vowels के साथ, श्री कुमार का लक्ष्य है एक ऐसा अंग्रेजी शिक्षण संस्थान तैयार करना जहाँ छात्र के लिए समझने योग्य, सुलभ और किफायती हो — विशेष रूप से 8वीं से 12वीं कक्षा तक के विद्यार्थियों के लिए। उनका दृष्टिकोण स्पष्ट है: छात्र को केवल परीक्षा के लिए नहीं, बल्कि वास्तविक जीवन में सफलता के लिए तैयार करना।</p>
                <p>एक महत्वपूर्ण योजनात्मक कवायद: जब कई छात्र बिहार से बाहर नौकरी या करियर के लिए जाते हैं, तब उन्हें अंग्रेजी उच्चारण में कठिनाइयों का सामना करना पड़ता है — विशेष रूप से "स" और "श"। ये छोटे-छोटे उच्चारण के फर्क कई बार आत्मविश्वास की कमी का कारण बन जाते हैं।</p>
                <div className="space-y-2">
                  <p className="font-semibold">हमारी अनोखी पद्धति:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>एक मज़बूत शब्दावली कैसे बनाएं</li>
                    <li>व्याकरण में कैसे दक्षता हासिल करें</li>
                    <li>सीधे अंग्रेजी में सोचने और बोलने की आदत कैसे विकसित करें</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 