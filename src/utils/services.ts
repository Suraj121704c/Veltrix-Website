import type { StaticImageData } from "next/image";
import { images } from "./images";

export type Service = {
  slug: string;
  image: StaticImageData;
  title: string;
  intro: string;
  includesHeading: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "commercial-cleaning",
    image: images.service1,
    title: "Commercial Cleaning",
    intro:
      "Hiring a cleaning company gives your business a professional, hygienic, and welcoming environment. Our commercial cleaning keeps offices, retail spaces, and workplaces spotless so you can focus on what matters.",
    includesHeading: "Commercial Cleaning Services include",
    includes: [
      "Office and workspace cleaning",
      "Floor mopping, vacuuming, and polishing",
      "Restroom sanitation and restocking",
      "Window and glass cleaning",
      "Kitchen and pantry cleaning",
      "Waste removal and disposal",
    ],
  },
  {
    slug: "deep-cleaning",
    image: images.service2,
    title: "Deep Cleaning",
    intro:
      "A deep clean reaches the dirt and grime that everyday cleaning misses. We thoroughly clean every corner of your space, leaving it fresh, sanitised, and truly spotless.",
    includesHeading: "Deep Cleaning Services include",
    includes: [
      "Detailed dusting of all surfaces",
      "Deep scrubbing of kitchens and bathrooms",
      "Behind and under furniture cleaning",
      "Tile, grout, and floor deep cleaning",
      "Disinfection of high-touch areas",
      "Interior windows and fixtures",
    ],
  },
  {
    slug: "move-in-out-cleaning",
    image: images.service3,
    title: "Move In/Out Cleaning",
    intro:
      "Moving is stressful enough. Our move in / move out cleaning makes sure your old or new home is completely spotless, helping you get your deposit back or settle in with ease.",
    includesHeading: "Move In / Out Cleaning Services include",
    includes: [
      "Full property deep clean",
      "Inside cabinets, drawers, and closets",
      "Appliance cleaning, inside and out",
      "Bathroom and kitchen sanitation",
      "Floor, wall, and skirting cleaning",
      "Window and fixture cleaning",
    ],
  },
  {
    slug: "post-construction-cleaning",
    image: images.service4,
    title: "Post Construction Cleaning",
    intro:
      "After renovation or construction, dust and debris are everywhere. Our post construction cleaning removes all the mess so your new space is safe, clean, and ready to use.",
    includesHeading: "Post Construction Services include",
    includes: [
      "Construction dust and debris removal",
      "Paint, adhesive, and residue removal",
      "Detailed surface and fixture cleaning",
      "Floor scrubbing and polishing",
      "Window, frame, and glass cleaning",
      "Final touch-up and sanitation",
    ],
  },
  {
    slug: "car-cleaning",
    image: images.service5,
    title: "Car Cleaning",
    intro:
      "Your car deserves the same care as your home. Our car cleaning service delivers a thorough interior and exterior clean for a fresh, showroom-quality finish.",
    includesHeading: "Car Cleaning Services include",
    includes: [
      "Exterior wash and wax",
      "Interior vacuuming and detailing",
      "Dashboard and console cleaning",
      "Seat and upholstery cleaning",
      "Window and mirror polishing",
      "Tyre and rim cleaning",
    ],
  },
  {
    slug: "carpet-upholstery-cleaning",
    image: images.service6,
    title: "Carpet & Upholstery Cleaning",
    intro:
      "Carpets and upholstery trap dust, stains, and allergens over time. Our deep extraction cleaning restores their look, freshness, and feel — safely and effectively.",
    includesHeading: "Carpet & Upholstery Cleaning Services include",
    includes: [
      "Deep carpet shampoo and extraction",
      "Stain and spot treatment",
      "Sofa and upholstery cleaning",
      "Odour removal and deodorising",
      "Fabric-safe cleaning solutions",
      "Quick-dry finishing",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
