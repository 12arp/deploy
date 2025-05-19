"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function FounderPage() {
  return (
    <section id="founder" className="container py-24 sm:py-32">
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

      <div className="bg-muted/50 border rounded-lg p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/founder-new.png"
              alt="Mr. Sudhir Kumar, Founder of 5Vowels"
              width={250}
              height={250}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Founder's Preview
              </span>
            </h2>
            <h3 className="text-2xl font-semibold mt-2 mb-4">Meet the Founder – Mr. Sudhir Kumar</h3>
            <p className="text-muted-foreground text-lg mb-6">
              Mr. Sudhir Kumar, the founder of 5Vowels, has a deep and practical understanding of the academic landscape of Bihar and Jharkhand. He was the founder of Ram Krishna Academy School, where more than 300 students studied, he has already created a positive impact on education.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Now, with 5Vowels, Mr. Kumar is determined to provide an understandable, accessible, and affordable English learning platform for students, especially from 8th to 12th grade. His vision is clear: to prepare students not just for exams, but for real-world success.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Mr. Kumar emphasizes an important reality: Many students, when they go outside Bihar for jobs or career growth, face challenges with English pronunciation — especially sounds like "S as स" and "Sh as श". These small pronunciation gaps often lead to embarrassment and loss of confidence. While not every student struggles with these issues, many do — and 5Vowels is committed to solving them.
            </p>
          </div>
        </div>

        <hr className="my-12" />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Our Unique Approach
              </span>
            </h3>
            <p className="text-muted-foreground text-lg mb-4">
              At 5Vowels, we believe that thinking in Hindi and translating to English is the biggest roadblock to fluency. We teach students to think directly in English and respond naturally in English.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              When students hear Hindi and immediately try to translate, it slows them down and breaks the flow of communication. We train them to build a strong vocabulary, master grammar, and develop the habit of thinking and speaking directly in English.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              With the right basics, a strong vocabulary, and smart practice, fluency becomes a reality — and the students of Bihar and Jharkhand can face the world with pride and confidence.
            </p>
            <p className="text-muted-foreground text-lg font-semibold">
              At 5Vowels, under Mr. Kumar's leadership, we are not just teaching English — we are building confidence, opening minds, and preparing students for a global future.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                संस्थापक – श्री सुधीर कुमार
              </span>
            </h3>
            <p className="text-muted-foreground text-lg mb-4">
              श्री सुधीर कुमार, 5Vowels के संस्थापक, बिहार और झारखंड के शैक्षबिक क्षेत्र की गहरी और व्यावहाररक समझ रखते हैं। उन्हंने रामकृष्ण एकेडमी स्कूल की स्थापना की थी, जहााँ 300 से अबिक छात्र पढ़ते थे, और इस तरह उन्हंने बशक्षा के क्षेत्र में पहले ही एक सकारात्मक प्रभाव डाला है।
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              अि 5Vowels के साथ, श्री कुमार का लक्ष्य है एक ऐसा अंग्रेजी बशक्षि संस्था तैयार करना जह छात्रहं के बलए समझने योग्य, सुलभ और ककफायती हह — बवशेष रूप से 8वीं से 12वीं कक्षा तक के बवद्याबथियहं के बलए। उनका दृबिकहि स्पि है: छात्रहं कह के वल परीक्षा के बलए नहीं, िल्कि वास्तकवक जीवन में सफलता के बलए तैयार करना।
            </p>
             <p className="text-muted-foreground text-lg mb-4">
              एक महत्वपूर्ण योजनात्मक कववरर्: जि कई छात्र बिहार से िाहर नौकरी या कररयर के बलए जाते हैं, तह उन्ें अंग्रेजी उच्चारि में कबिनाइयहं का सामना करना पड़ता है — बवशेष रूप से "स" और "श"। ये छहटे-छहटे उच्चारि के फकि कई िार आत्मकवश्वास की कमी का कारि िन जाते हैं। हालांबक हर छात्र कह यह समस्या नहीं हहती, लेबकन िहुत से छात्रहं कह हहती है — और 5Vowels इन्ीं समस्याओं का समाधान करने के कलए प्रकतबद्ध है।
            </p>
            <h3 className="text-2xl font-bold mt-8 mb-4">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                हमारी अनोखी पद्धकत
              </span>
            </h3>
            <p className="text-muted-foreground text-lg mb-4">
              5Vowels में हमारा मानना है बक कहंदी में सोचकर अंग्रेजी में अनुवाद करना ही धाराप्रवाह अंग्रेजी सीखने में सबसे बडी बाधा है। हम छात्रहं कह बसखाते हैं बक वे सीधे अंग्रेजी में सोचें और स्वाभाकवक रूप से अंग्रेजी में उत्तर दें।
            </p>
             <p className="text-muted-foreground text-lg mb-4">
              जि छात्र बहंदी सुनकर तुरंत उसका अंग्रेजी अनुवाद करने की कहबशश करते हैं, तह उनकी धाराप्रवाह अंग्रेजी बोलने की गति धीमी हो जािी है। हम उन्ें कसखाते हैं:
             </p>
             <ul className="list-disc list-inside text-muted-foreground text-lg mb-4">
                <li>एक मजिूत शब्दावली कैसे िनाएं।</li>
                <li>व्याकरि (Grammar) में कैसे दक्षता हाबसल करें।</li>
                <li>सीधे अंग्रेजी में सोचने और बोलने की आदत कैसे बवकबसत करें।</li>
             </ul>
             <p className="text-muted-foreground text-lg mb-4">
              सही मूल िातें, मजिूत शब्दावली, और स्माटि अभ्यास के साथ, धाराप्रवाह अंग्रेजी बोलना — और बिहार व झारखंड के छात्र गवि और आत्मबवश्वास के साथ अंग्रेजी बोल सकिे हैं।
             </p>
             <p className="text-muted-foreground text-lg font-semibold">
              5Vowels में, श्री कुमार के नेतृत्व में, हम के वल अंग्रेजी नहीं कसखा रहे — हम आत्मकवश्वास बना रहे हैं, सोचने का नजररया बदल रहे हैं, और छात्ों को एक वैकश्वक भकवष्य के कलए तैयार कर रहे हैं।
             </p>
          </div>
        </div>
      </div>
    </section>
  );
} 