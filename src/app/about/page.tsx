import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — Veltrix Cleaning Services",
  description:
    "Veltrix delivers reliable, professional, high-quality cleaning and facility support services across the UAE.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <About />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
