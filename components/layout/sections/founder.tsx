"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const FounderSection = () => {
  return (
    <section id="founder" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/sudhir-kumar.jpg"
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
            <p className="text-muted-foreground text-lg">
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
            <p className="text-muted-foreground text-lg">
              At 5Vowels, under Mr. Kumar's leadership, we are not just teaching English — we are building confidence, opening minds, and preparing students for a global future.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                संस्थापक – श्री सुधीर कुमार
              </span>
            </h3>
            <div className="space-y-6">
              <div className="bg-white/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  श्री सुधीर कुमार, 5Vowels के संस्थापक, बिहार और झारखंड के शैक्षिक क्षेत्र की गहरी और व्यावहारिक समझ रखते हैं। उन्होंने रामकृष्ण एकेडमी स्कूल की स्थापना की थी, जहाँ 300 से अधिक छात्र पढ़ते थे, और इस तरह उन्होंने शिक्षा के क्षेत्र में पहले ही एक सकारात्मक प्रभाव डाला है।
                </p>
              </div>

              <div className="bg-white/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  अब 5Vowels के साथ, श्री कुमार का लक्ष्य है एक ऐसा अंग्रेजी शिक्षण संस्थान तैयार करना जहाँ छात्र के लिए समझने योग्य, सुलभ और किफायती हो — विशेष रूप से 8वीं से 12वीं कक्षा तक के विद्यार्थियों के लिए। उनका दृष्टिकोण स्पष्ट है: छात्र को केवल परीक्षा के लिए नहीं, बल्कि वास्तविक जीवन में सफलता के लिए तैयार करना।
                </p>
              </div>

              <div className="bg-white/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  एक महत्वपूर्ण योजनात्मक कवायद: जब कई छात्र बिहार से बाहर नौकरी या करियर के लिए जाते हैं, तब उन्हें अंग्रेजी उच्चारण में कठिनाइयों का सामना करना पड़ता है — विशेष रूप से "स" और "श"। ये छोटे-छोटे उच्चारण के फर्क कई बार आत्मविश्वास की कमी का कारण बन जाते हैं। हालाँकि हर छात्र को यह समस्या नहीं होती, लेकिन बहुत से छात्रों को होती है — और 5Vowels इन्हीं समस्याओं का समाधान करने के लिए प्रतिबद्ध है।
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-bold mt-16 mb-8 text-center">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                हमारी अनोखी पद्धति
              </span>
            </h3>
            <div className="space-y-6">
              <div className="bg-white/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  5Vowels में हमारा मानना है कि हिंदी में सोचकर अंग्रेजी में अनुवाद करना ही धाराप्रवाह अंग्रेजी सीखने में सबसे बड़ी बाधा है। हम छात्रों को सिखाते हैं कि वे सीधे अंग्रेजी में सोचें और स्वाभाविक रूप से अंग्रेजी में उत्तर दें।
                </p>
              </div>

              <div className="bg-white/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  जो छात्र हिंदी सुनकर तुरंत उसका अंग्रेजी अनुवाद करने की कोशिश करते हैं, उनकी धाराप्रवाह अंग्रेजी बोलने की गति धीमी हो जाती है। हम उन्हें सिखाते हैं:
                </p>
                <ul className="list-disc list-inside text-xl leading-relaxed text-muted-foreground space-y-3 mt-4 ml-4">
                  <li className="hover:text-primary transition-colors">एक मज़बूत शब्दावली कैसे बनाएं</li>
                  <li className="hover:text-primary transition-colors">व्याकरण में कैसे दक्षता हासिल करें</li>
                  <li className="hover:text-primary transition-colors">सीधे अंग्रेजी में सोचने और बोलने की आदत कैसे विकसित करें</li>
                </ul>
              </div>

              <div className="bg-white/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  सही मूल बातें, मज़बूत शब्दावली, और स्मार्ट अभ्यास के साथ, धाराप्रवाह अंग्रेजी बोलना — और बिहार व झारखंड के छात्र गर्व और आत्मविश्वास के साथ अंग्रेजी बोल सकते हैं।
                </p>
              </div>

              <div className="bg-white/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xl leading-relaxed text-muted-foreground font-medium">
                  5Vowels में, श्री कुमार के नेतृत्व में, हम केवल अंग्रेजी नहीं सिखा रहे — हम आत्मविश्वास बना रहे हैं, सोचने का नजरिया बदल रहे हैं, और छात्रों को एक वैश्विक भविष्य के लिए तैयार कर रहे हैं।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 