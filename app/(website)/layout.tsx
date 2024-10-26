import React from "react";

import GlobalNavbar from "@/components/global-navbar";

export default function WebsiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <GlobalNavbar />
      {children}
    </main>
  );
}
