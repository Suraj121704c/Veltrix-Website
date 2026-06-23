import type { Service } from "@/utils/services";
import Tag from "./Tag";

const whyChoose = [
  {
    title: "Experienced and Trained Team",
    text: "Our skilled professionals deliver thorough, efficient cleaning tailored to your needs.",
  },
  {
    title: "Customised Cleaning Solutions",
    text: "Flexible plans built around your specific requirements and schedule.",
  },
  {
    title: "High-Quality Products and Equipment",
    text: "Eco-friendly products and advanced equipment for a safe, spotless result.",
  },
  {
    title: "Attention to Detail",
    text: "Meticulous care on every job guarantees a consistently spotless finish.",
  },
];

export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <section className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="flex flex-col items-start gap-5">
          <Tag>Our Services</Tag>
          <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            {service.title}
          </h1>
          <p className="text-base leading-7 text-body">{service.intro}</p>

          <h2 className="mt-3 font-display text-xl font-semibold text-ink">
            {service.includesHeading}
          </h2>
          <ul className="flex flex-col gap-3">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-body">
                <CheckIcon />
                <span className="text-sm leading-6">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-primary p-7 text-white sm:p-9 lg:sticky lg:top-28">
          <h2 className="font-display text-2xl font-bold">
            Why Choose Our {service.title} Services?
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/80">
            Here&apos;s why customers across the UAE trust Veltrix for a spotless
            clean, every single time.
          </p>

          <ul className="mt-7 flex flex-col gap-5">
            {whyChoose.map((reason) => (
              <li key={reason.title} className="flex items-start gap-3">
                <CheckIcon className="text-white" />
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    {reason.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CheckIcon({ className = "text-primary" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mt-0.5 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
