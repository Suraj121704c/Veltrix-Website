import Image from "next/image";
import Link from "next/link";
import { images } from "@/utils/images";
import { services } from "@/utils/services";

const company = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image
              src={images.footerLogo}
              alt="Veltrix"
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              We are a team of passionate cleaning experts who take pride in
              delivering the highest standard of service, with cleaning methods
              perfected to ensure every job is done right.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-display text-base font-semibold text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/60 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-base font-semibold text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-7 md:col-span-3">
            <div>
              <h3 className="font-display text-base font-semibold text-white">
                We&apos;re Open
              </h3>
              <p className="mt-3 text-sm text-white/60">
                Monday - Saturday 08.00 - 18.00
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-white">
                Office Location
              </h3>
              <p className="mt-3 text-sm text-white/60">
                Business District Ajman Free Zone
                <br />
                Office-C1-1F-SF6908
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-white">
                Send a Message
              </h3>
              <a
                href="mailto:Contact@veltrixcleaning.com"
                className="mt-3 block text-sm text-white/60 transition-colors hover:text-primary"
              >
                Contact@veltrixcleaning.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-6 text-center text-xs text-white/50 sm:px-8">
          Copyright 2026 - Veltrix Cleaning Services
        </div>
      </div>
    </footer>
  );
}
