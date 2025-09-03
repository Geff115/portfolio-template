import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-template-nine-sandy.vercel.app"),
  title: {
    default: "Gabriel Effangha - Portfolio",
    template: "%s - Gabriel Effangha",
  },
  description:
    "Professional portfolio showcasing expertise in web development, software engineering, and innovative solutions. Explore my projects, skills, and professional journey.",
  keywords: [
    "Gabriel Effangha",
    "web development",
    "software engineer",
    "blockchain development",
    "fullstack developer",
    "machine learning engineer",
    "data analysis",
    "Next.js",
    "Python",
    "TypeScript",
    "JavaScript",
  ],
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon.png",
  },
  applicationName: "Gabriel Effangha",
  authors: [
    {
      name: "Gabriel Effangha",
      url: "https://portfolio-template-nine-sandy.vercel.app",
    },
  ],
  generator: "Next.js",
  referrer: "origin",
  creator: "Gabriel Effangha",
  publisher: "Gabriel Effangha",
  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-template-nine-sandy.vercel.app",
    siteName: "Gabriel Effangha Portfolio",
    title: "Gabriel Effangha - Portfolio",
    description:
      "Professional portfolio showcasing expertise in web development, software engineering, and machine learning.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Effangha - Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@GeffNoah",
    creator: "@GeffNoah",
    title: "Gabriel Effangha - Professional Portfolio",
    description:
      "My portfolio showcases my skills and projects in software engineering and machine learning.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "Zw8tM9HmRvQk-I43diwh8-yfgwPYfesZTREpSrXvx_s",
  },

  manifest: "/manifest.json",

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Gabriel Effangha",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0f172a",
    "msapplication-config": "/browserconfig.xml",
  },
};
