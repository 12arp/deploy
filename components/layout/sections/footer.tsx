"use client";

import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image
                src="/5vowels-logo.jpeg"
                alt="5Vowels Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <h3 className="text-2xl">5Vowels</h3>
            </Link>
            <p className="mt-4 text-muted-foreground">Empowering global communication through expert English education.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Programs</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                General English
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Business English
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Test Preparation
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Study With Us</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Online Classes
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Learning Center
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Resources
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Support</h3>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Student Support
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Connect</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="flex justify-between items-center">
          <h3 className="">
            &copy; 2024 5Vowels English Learning Academy. All rights reserved.
          </h3>
          <div className="flex gap-4">
            <Link href="#" className="text-sm opacity-60 hover:opacity-100">Privacy Policy</Link>
            <Link href="#" className="text-sm opacity-60 hover:opacity-100">Terms of Service</Link>
          </div>
        </section>
        <section className="mt-3 text-center text-xs text-muted-foreground">
          <p>Developed by CodientLabs</p>
        </section>
      </div>
    </footer>
  );
};
