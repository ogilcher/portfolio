import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://olivergilcher.com"),
  title: {
    default: "Oliver Gilcher — Software Engineer",
    template: "%s — Oliver Gilcher",
  },
  description: "Software engineer building reliable systems across APIs, real-time integrations, web, mobile, and infrastructure.",
  openGraph: {
    title: "Oliver Gilcher — Software Engineer",
    description: "Reliable systems across APIs, real-time integrations, web, mobile, and infrastructure.",
    url: "https://olivergilcher.com",
    siteName: "Oliver Gilcher",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#090b0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
