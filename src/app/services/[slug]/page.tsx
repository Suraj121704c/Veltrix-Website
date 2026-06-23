import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ServiceDetail from "@/components/ServiceDetail";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { getService, services } from "@/utils/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service Not Found — Veltrix" };
  }

  return {
    title: `${service.title} — Veltrix Cleaning Services`,
    description: service.intro,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <ServiceDetail service={service} />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
