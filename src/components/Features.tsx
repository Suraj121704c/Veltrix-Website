import Image from "next/image";
import { images } from "@/utils/images";

const features = [
  {
    icon: images.option1,
    title: "Professional Team",
    text: "Trained, vetted experts who deliver consistent, professional service every visit.",
  },
  {
    icon: images.option2,
    title: "On Time Service",
    text: "We respect your schedule and always arrive right on time, ready to work.",
  },
  {
    icon: images.option3,
    title: "Transparent Pricing",
    text: "Affordable, upfront rates with no hidden costs or unexpected surprises.",
  },
  {
    icon: images.option4,
    title: "Eco Friendly",
    text: "Safe, eco-friendly products that keep your space and the planet healthy.",
  },
];

export default function Features() {
  return (
    <section className="border-y border-black/5">
      <div className="mx-auto grid w-full max-w-[1200px] gap-x-8 gap-y-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              className="h-14 w-14 rounded-xl"
            />
            <h3 className="mt-4 font-display text-base font-semibold text-ink">
              {feature.title}
            </h3>
            <p className="mt-2 max-w-[15rem] text-sm leading-6 text-body">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
