import type { Metadata } from "next";
import { DynaPuff, Rubik } from "next/font/google";

import "easymde/dist/easymde.min.css";

import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";

const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const rubit = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${dynapuff.className} ${rubit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
