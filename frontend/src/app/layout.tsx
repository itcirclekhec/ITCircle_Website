import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  title: "KhEC IT Circle - Where innovation Meets Community",
  description: "Empowering the next generation of tech leaders through hands-on workshops, collaborative projects, and cutting-edge innovation at Khulna Engineering College.",
  keywords: ["KhEC", "IT Circle", "Khulna Engineering College", "technology", "programming", "workshops", "hackathon", "innovation"],
  authors: [{ name: "KhEC IT Circle" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {/* Global Space Background */}
        <div className="orbits-bg"></div>
        <div className="orbits-bg-delay"></div>
        <div className="particles-bg"></div>
        
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}