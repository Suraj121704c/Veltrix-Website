import Image from "next/image";
import Link from "next/link";
import { images } from "@/utils/images";
import Tag from "./Tag";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <Tag>Proud Clean</Tag>
          <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Bring Clean, Comfort and Care Together
          </h1>
          <p className="max-w-xl text-base leading-7 text-body">
            We are a team of passionate cleaning experts who take pride in
            delivering the highest standard of service. With years of experience
            in the industry, we&apos;ve perfected our cleaning methods to ensure
            every job is done right.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Book Service Now
            </Link>
            <a
              href="#services"
              className="rounded-full border border-black/10 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <div className="flex flex-col gap-4 pt-10 sm:gap-5">
            <CollageImage src={images.hero1} ratio="aspect-square" />
            <CollageImage src={images.hero3} ratio="aspect-[4/5]" />
          </div>
          <div className="flex flex-col gap-4 sm:gap-5">
            <CollageImage src={images.hero2} ratio="aspect-[4/5]" />
            <CollageImage src={images.hero4} ratio="aspect-square" />
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
  src: typeof images.hero1;
  ratio: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${ratio}`}>
      <Image
        src={src}
        alt="Veltrix cleaning professional"
        fill
        sizes="(max-width: 1024px) 50vw, 300px"
        className="object-cover"
      />
    </div>
  );
}
