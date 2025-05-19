import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "5Vowels - Expert English Language Education",
  description: "Transform your English skills with 5Vowels. Expert teachers, flexible learning options, and proven methods for all levels.",
  openGraph: {
    type: "website",
    url: "https://5vowels.com",
    title: "5Vowels - Expert English Language Education",
    description: "Transform your English skills with 5Vowels. Expert teachers, flexible learning options, and proven methods for all levels.",
    images: [
      {
        url: "https://5vowels.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "5Vowels English Learning Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://5vowels.com",
    title: "5Vowels - Expert English Language Education",
    description: "Transform your English skills with 5Vowels. Expert teachers, flexible learning options, and proven methods for all levels.",
    images: ["https://5vowels.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
