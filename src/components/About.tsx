import Image from "next/image";
import { images } from "@/utils/images";
import Tag from "./Tag";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <Tag>About Veltrix</Tag>
          <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            Excellence in Cleaning, &amp; Maintenance.
          </h1>
          <p className="max-w-xl text-base leading-7 text-body">
            At Veltrix, we are committed to delivering reliable, professional,
            and high-quality cleaning and facility support services across the
            UAE. With a focus on customer satisfaction, attention to detail, and
            operational excellence, we help businesses, hotels, and commercial
            establishments maintain clean, safe, and welcoming environments.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <div className="flex flex-col gap-4 sm:gap-5">
            <CollageImage src={images.cleaning1} ratio="aspect-square" />
            <CollageImage src={images.cleaning4} ratio="aspect-[4/5]" />
          </div>
          <div className="flex flex-col gap-4 pt-10 sm:gap-5">
            <CollageImage src={images.cleaning3} ratio="aspect-[4/5]" />
            <CollageImage src={images.cleaning2} ratio="aspect-square" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CollageImage({
  src,
  ratio,
}: {
  src: typeof images.cleaning1;
  ratio: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${ratio}`}>
      <Image
        src={src}
        alt="Veltrix cleaning in action"
        fill
        sizes="(max-width: 1024px) 50vw, 300px"
        className="object-cover"
      />
    </div>
  );
}
