import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import { ConfigProvider } from "./components/config";
import { Toaster } from "@/components/ui/toaster";

const GA4_ID = process?.env?.NEXT_PUBLIC_GA4_ID ?? "";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const poppins = Poppins({
//   weight: ["400", "500", "700", "800"],
//   subsets: ["latin"],
//   variable: "--font-sans",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          // poppins.variable,
        )}
      >
        <ConfigProvider>{children}</ConfigProvider>
        {/* {children} */}
        <Toaster />
      </body>
      <GoogleAnalytics gaId={GA4_ID} />
    </html>
  );
}
