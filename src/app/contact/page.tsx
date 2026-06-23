import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us — Veltrix Cleaning Services",
  description:
    "Get in touch with Veltrix. Fill out the contact form and one of our service specialists will get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Contact />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
