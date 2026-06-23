import Image from "next/image";
import Link from "next/link";
import { images } from "@/utils/images";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src={images.logoBlack}
            alt="Veltrix"
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+971594286905"
            className="hidden items-center gap-2.5 sm:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">
              <PhoneIcon />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] text-body">Need help?</span>
              <span className="block text-sm font-semibold text-ink">
                +971 594286905
              </span>
            </span>
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
          >
            Book Service Now
          </Link>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
