"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/Mr. Saransh Saurabh.png", // Updated image path
    name: "Mr. Saransh Saurabh",
    position: "Esteemed English Faculty Member",
    description:
      "Mr. Saransh Saurabh is one of our esteemed English faculty members, known for his engaging teaching style and deep commitment to student success. Though he holds a Master's degree in Business Administration (MBA), his passion for education and language has led him to build a strong career in teaching. With a vast background in the field, Mr. Saurabh brings both academic knowledge and real-world insight into the classroom, making his lessons both practical and inspiring. His approachable nature and effective communication skills have made him a favorite among students.",
    socialNetworks: [], // Add social networks if available
  },
  {
    imageUrl: "/aaditya.png", // Replace with actual image path if available
    name: "Mr. Aaditya",
    position: "English Teacher & Visionary Leader",
    description:
      "Meet Mr. Aaditya—one of our finest English teachers and a visionary leader. He holds an MBA in Marketing and possesses deep knowledge and passion for the English language. As the author of 5Vowels, a book dedicated to making English learning accessible and enjoyable, Mr. Aaditya aims to instill a love for the language in every household. His vision is to see 5Vowels become a go-to resource for learners across the country. With his strong leadership and commitment to education, Mr. Aaditya continues to inspire both students and educators alike.",
    socialNetworks: [], // Add social networks if available
  },
  {
    imageUrl: "/lalita.png", // Replace with actual image path if available
    name: "Ms. Lalita",
    position: "Beloved Teacher",
    description:
      "Ms. Lalita is one of the most beloved teachers among our students, known for her warm personality, dedication, and effective teaching methods. She holds a Master's degree in Arts (MA), a Bachelor of Education (B.Ed.), and is qualified in both CTET Paper I and II, which speaks to her strong academic foundation and professional competence. Her classes are engaging, student-centered, and filled with encouragement, making learning both enjoyable and meaningful. Students admire her not only for her knowledge but also for the genuine care and support she offers to each individual.",
    socialNetworks: [], // Add social networks if available
  },
  {
    imageUrl: "/bhawana-manral.png", // Replace with actual image path if available
    name: "Ms. Bhawana Manral",
    position: "Dynamic Teacher",
    description:
      "Meet our dynamic teacher, Ms. Bhawana Manral, who brings a wealth of experience from diverse professional fields into the classroom. She is an alumna of Bharti College, University of Delhi, and holds an MBA as her highest qualification. Combining strong theoretical knowledge with practical insights, Ms. Manral's interdisciplinary expertise enables her to connect with students on multiple levels. Her teaching is both impactful and relatable, making learning a meaningful experience. With her energetic approach and unwavering dedication to excellence, she is a valued member of our faculty and a true inspiration to her students.",
    socialNetworks: [], // Add social networks if available
  },
];

export const TeamSection = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Teaching Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Meet the educators who make 5Vowels a center of excellence in English learning.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary text-center">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardDescription className="text-center p-4 border-t">
                {description}
              </CardDescription>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({variant: "ghost", size: "sm"})}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
