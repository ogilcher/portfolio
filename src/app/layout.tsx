import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olivergilcher.com"),

  title: {
    default: "Oliver Gilcher | Software Engineer",
    template: "%s | Oliver Gilcher",
  },

  description:
      "Software Engineer specializing in backend systems, platform engineering, distributed systems, and software architecture. Explore projects including Mission Control, Lunar Deploy Agent, and LunaPal.",

  keywords: [
    "Oliver Gilcher",
    "Software Engineer",
    "Backend Engineer",
    "Platform Engineer",
    "Systems Engineer",
    "Software Architect",
    "Distributed Systems",
    "Cloud Engineering",
    "Go",
    "TypeScript",
    "Swift",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "Portfolio",
  ],

  authors: [
    {
      name: "Oliver Gilcher",
      url: "https://olivergilcher.com",
    },
  ],

  creator: "Oliver Gilcher",

  publisher: "Oliver Gilcher",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://olivergilcher.com",
    title: "Oliver Gilcher | Software Engineer",
    description:
        "Backend engineering, distributed systems, platform infrastructure, and software architecture.",
    siteName: "Oliver Gilcher",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oliver Gilcher Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Oliver Gilcher | Software Engineer",
    description:
        "Backend engineering, distributed systems, platform infrastructure, and software architecture.",
    images: ["/images/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
