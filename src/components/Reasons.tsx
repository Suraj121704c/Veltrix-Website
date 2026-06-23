import Image from "next/image";
import { images } from "@/utils/images";
import Tag from "./Tag";

const reasons = [
  {
    title: "Experienced and Trained Staff",
    text: "Our team consists of highly trained and experienced professionals who ensure thorough and efficient cleaning tailored to your needs.",
  },
  {
    title: "Customised Cleaning Solutions",
    text: "We offer flexible cleaning plans to match your specific requirements, whether for residential, commercial, or specialised cleaning.",
  },
  {
    title: "High-Quality Products and Equipment",
    text: "We use eco-friendly cleaning products and advanced equipment to ensure a safe, spotless, and healthy environment.",
  },
  {
    title: "Reliability and Trustworthiness",
    text: "Our reputation for reliability, punctuality, and trustworthiness makes us a trusted partner for maintaining a clean space.",
  },
  {
    title: "Attention to Detail",
    text: "Every detail matters. Our meticulous attention to detail guarantees a deep and consistent clean every single time.",
  },
  {
    title: "Satisfaction Guaranteed",
    text: "We prioritise customer satisfaction and are committed to delivering outstanding results that exceed expectations.",
  },
];

export default function Reasons() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="flex flex-col items-start gap-6 lg:sticky lg:top-28">
          <Tag>Why Choose Us</Tag>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Top Six Reasons to Trust Our Cleaning
          </h2>
          <p className="max-w-md text-base leading-7 text-body">
            Enjoy a spotless space with our expert cleaning team. Affordable,
            eco-friendly, and tailored to your needs!
          </p>
          <div className="relative mt-2 w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src={images.cleanerLadyBig}
              alt="Veltrix professional cleaner"
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </div>

        <ol className="flex flex-col">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                {index < reasons.length - 1 && (
                  <span className="w-px flex-1 bg-primary/25" />
                )}
              </div>
              <div className={index < reasons.length - 1 ? "pb-9" : ""}>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-body">
                  {reason.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
