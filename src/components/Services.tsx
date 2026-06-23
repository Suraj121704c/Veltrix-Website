import Image from "next/image";
import { images } from "@/utils/images";
import Tag from "./Tag";

const services = [
  { img: images.service1, alt: "Commercial Cleaning" },
  { img: images.service2, alt: "Deep Cleaning" },
  { img: images.service3, alt: "Move In / Move Out Cleaning" },
  { img: images.service4, alt: "Post Construction Cleaning" },
  { img: images.service5, alt: "Car Cleaning" },
  { img: images.service6, alt: "Carpet & Upholstery Cleaning" },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <Tag>Our Services</Tag>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Our Cleaning Services
          </h2>
          <p className="max-w-2xl text-base leading-7 text-body">
            Whether it&apos;s a quick refresh or a deep clean transformation, our
            expert touch leaves your home or office shining.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.alt}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={service.img}
                alt={service.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
