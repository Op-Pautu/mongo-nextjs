import { Navbar } from "@/components/navbar";
import React from "react";

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen bg-fuchsia-50 overflow-auto">
      <Navbar />
      <div className="mx-auto max-w-screen-xl h-full w-full mt-8">
        {children}
      </div>
    </main>
  );
};

export default MainPageLayout;
