"use client";

import { useState } from "react";
import Tag from "./Tag";

const faqs = [
  {
    q: "What cleaning services do you offer?",
    a: "Veltrix provides a comprehensive range of cleaning solutions, including Residential Cleaning, Commercial Cleaning, Deep Cleaning, Move In/Move Out Cleaning, Post Construction Cleaning, Car Cleaning, and Carpet & Upholstery Cleaning. We customize our services to meet the specific needs of homes, offices, retail spaces, and commercial facilities.",
  },
  {
    q: "How do I book a cleaning service?",
    a: "Booking a service is simple. You can contact us by phone, WhatsApp, email, or through the contact form on our website. Our team will discuss your requirements, provide a quotation, and schedule a convenient time for the service.",
  },
  {
    q: "Do you bring your own cleaning equipment and supplies?",
    a: "Yes. Our cleaning professionals arrive fully equipped with the necessary tools, equipment, and high-quality cleaning products. If you have specific product preferences or requirements, we can accommodate them upon request.",
  },
  {
    q: "Are your cleaning staff trained and insured?",
    a: "Absolutely. All Veltrix cleaning professionals are trained, experienced, and committed to delivering high standards of service. We follow strict cleaning procedures and safety protocols to ensure quality and reliability on every project.",
  },
  {
    q: "How much do your cleaning services cost?",
    a: "The cost depends on factors such as the type of service, property size, cleaning requirements, and frequency of visits. We provide customized quotations with transparent pricing and no hidden charges. Contact us for a free consultation and quote.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <Tag>FAQ&apos;s</Tag>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Frequently asked question?
          </h2>
          <p className="max-w-2xl text-base leading-7 text-body">
            We&apos;re here to help you and solve your objections. Find answers to
            the most common questions below.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-black/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-ink sm:text-base">
                    {index + 1}. {faq.q}
                  </span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-lg leading-none transition-colors ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-primary-soft text-primary"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-body">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
