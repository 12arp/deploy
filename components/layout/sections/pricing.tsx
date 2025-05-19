import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Basic",
    popular: 0,
    price: 29,
    description:
      "Perfect for beginners starting their English learning journey.",
    buttonText: "Start Learning",
    benefitList: [
      "Access to basic courses",
      "Group conversation classes",
      "Mobile app access",
      "Basic study materials",
      "Community forum access",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 79,
    description:
      "Comprehensive learning package with personalized attention.",
    buttonText: "Get Premium Access",
    benefitList: [
      "All Basic features",
      "1-on-1 tutoring sessions",
      "Business English modules",
      "learn English materials",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 199,
    description:
      "Custom solutions for organizations and intensive learners.",
    buttonText: "Contact Us",
    benefitList: [
      "Custom learning plans",
      "Dedicated instructor",
      "Corporate training",
      "Progress analytics",
      "24/7 support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing Plans
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose Your Learning Package
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Flexible pricing options to suit your learning needs and goals. Start your journey to English fluency today.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
