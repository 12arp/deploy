"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone, Facebook, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:leomirandadev@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Contact{" "}
        </span>
        Us
      </h2>
      <p className="mt-4 mb-8 text-xl text-muted-foreground">
        We&apos;re here to help with any questions you have about our courses or enrollment. Reach out to us!
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <form className="space-y-6 p-8 border rounded-lg shadow-lg bg-muted/50">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                defaultValue={''}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6 p-8 border rounded-lg shadow-lg bg-muted/50">
            <h3 className="text-2xl font-semibold mb-6">Our Contact Information</h3>
            
            <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                    <h4 className="text-lg font-medium">Phone Numbers</h4>
                    <p className="text-muted-foreground">
                        <a href="tel:+919810691741" className="hover:text-primary">+91 – 9810691741</a>
                    </p>
                    <p className="text-muted-foreground">
                        <a href="tel:+919268141983" className="hover:text-primary">+91 - 9268141983</a>
                    </p>
                </div>
            </div>

            <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                    <h4 className="text-lg font-medium">Available Contact Hours</h4>
                    <p className="text-muted-foreground">Monday – Sunday (24/7)</p>
                </div>
            </div>

            <div className="flex items-start space-x-3">
                <Facebook className="w-6 h-6 text-primary mt-1" />
                <div>
                    <h4 className="text-lg font-medium">Facebook</h4>
                    <p className="text-muted-foreground">
                        <a href="https://www.facebook.com/profile.php?id=61576019355051#" target="_blank" className="hover:text-primary">Connect with us on Facebook</a>
                    </p>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <Instagram className="w-6 h-6 text-primary mt-1" />
                <div>
                    <h4 className="text-lg font-medium">Instagram</h4>
                    <p className="text-muted-foreground">
                        <a href="https://www.instagram.com/official5vowels?igsh=MThjZ3NsYnNjdDAyYg==" target="_blank" className="hover:text-primary">Follow us on Instagram</a>
                    </p>
                </div>
            </div>
            
            {/* You can add more contact details like email or address here if needed */}
            {/* Example for Email:
            <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                    <h4 className="text-lg font-medium">Email Address</h4>
                    <p className="text-muted-foreground">
                        <a href="mailto:info@5vowels.com" className="hover:text-primary">info@5vowels.com</a>
                    </p>
                </div>
            </div>
            */}

            {/* Example for Address:
            <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                    <h4 className="text-lg font-medium">Our Office</h4>
                    <p className="text-muted-foreground">123 Education Lane, Knowledge City, Bihar</p>
                </div>
            </div>
            */}
        </div>
      </div>
    </section>
  );
};
