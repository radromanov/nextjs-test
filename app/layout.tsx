import "@/styles/globals.css";
import { Poppins as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

const fontSans = FontSans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NextJS | Test",
  description: "A test application",
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen text-foreground bg-background font-sans antialiased custom-background",
          fontSans.variable
        )}
      >
        {/* Header */}

        <main className="px-6">{children}</main>

        {/* Footer */}
      </body>
    </html>
  );
}
