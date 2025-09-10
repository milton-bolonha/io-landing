import React from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import TopRibbon from "@/components/ui/TopRibbon";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopRibbon
        messages={["Bem-vindo ao boilerplate!", "Suporte a light/dark."]}
        bgColor="bg-orange-500"
        textColor="text-black"
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
