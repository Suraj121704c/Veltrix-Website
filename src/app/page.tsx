import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reasons from "@/components/Reasons";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Reasons />
        <Services />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
