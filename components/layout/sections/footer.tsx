"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-16 sm:py-20">
      <div className="p-8 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="#" className="flex items-center space-x-2">
              <Image
                src="/5vowels-logo.jpeg"
                alt="5Vowels Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold">5VOWELS</h3>
            </Link>
            <p className="text-muted-foreground">
              Empowering global communication through expert English education.
            </p>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Support</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Student Support
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Connect</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                href="https://www.facebook.com/profile.php?id=61576019355051#" 
                target="_blank" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Facebook
              </Link>
              <Link 
                href="https://www.instagram.com/official5vowels?igsh=MThjZ3NsYnNjdDAyYg==" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <p>Email: info@5vowels.com</p>
              <p>Phone: +91 1234567890</p>
              <p>Address: Patna, Bihar, India</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; 2024 5Vowels English Learning Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          <Link 
            href="https://codientlabs.in" 
            target="_blank" 
            className="hover:text-primary transition-colors"
          >
            Developed by CodientLabs
          </Link>
        </div>
      </div>
    </footer>
  );
};
