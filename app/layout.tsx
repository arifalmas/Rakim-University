import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Hind_Siliguri } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),

  // ✅ Google Search Console verification tag
  other: {
    "google-site-verification": "zrovmhvBZ4DKAN0ZlAnGoEVXMDD5PrmvxRws7_TXf5c",
  },
};

const hind = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <head>
        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="zrovmhvBZ4DKAN0ZlAnGoEVXMDD5PrmvxRws7_TXf5c"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          hind.variable
        )}
      >
        {/* ✅ Google Analytics Setup */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZEDQCLVHHN"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZEDQCLVHHN');
          `}
        </Script>

        <Providers>
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
