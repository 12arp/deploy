"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "/5vowels-logo.jpeg",
    name: "Priya Sharma",
    userName: "Basic Level",
    comment:
      "This platform is very helpful for beginners looking to improve their English skills. It offers simple lessons, clear explanations, and effective practice exercises that make learning easy, engaging, and productive.",
    rating: 5.0,
  },
  {
    image: "/5vowels-logo.jpeg",
    name: "Arjun Patel",
    userName: "Intermediate Level",
    comment:
      "Thanks to 5Vowels' comprehensive English course, I've gained so much confidence in speaking! The practice materials and one-on-one coaching were invaluable. I can now communicate fluently in my workplace.",
    rating: 4.8,
  },
  {
    image: "/5vowels-logo.jpeg",
    name: "Neha Gupta",
    userName: "Advanced Level",
    comment:
      "The online platform is fantastic - I can practice anywhere, anytime. The business English classes helped me excel in my corporate meetings. Highly recommended for professionals!",
    rating: 4.9,
  },
  {
    image: "/5vowels-logo.jpeg",
    name: "Rahul Verma",
    userName: "Basic Level",
    comment:
      "Great platform for building strong English basics. The easy-to-follow, interactive lessons and supportive environment help learners gain confidence in speaking, writing, and overall communication skills effectively.",
    rating: 5.0,
  },
  {
    image: "/5vowels-logo.jpeg",
    name: "Ananya Reddy",
    userName: "Intermediate Level",
    comment:
      "The conversation practice and pronunciation workshops were exactly what I needed. I'm now confident in speaking English in any situation. The teachers are very supportive!",
    rating: 5.0,
  },
  {
    image: "/5vowels-logo.jpeg",
    name: "Vikram Singh",
    userName: "Advanced Level",
    comment:
      "The advanced English program at 5Vowels has been transformative. The focus on practical communication and cultural aspects has made me a confident English speaker.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Success Stories
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What Our Students Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt={review.name}
                      />
                      <AvatarFallback>
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
