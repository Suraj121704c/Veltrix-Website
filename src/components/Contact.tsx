import Tag from "./Tag";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <Tag>Contact Us</Tag>
          <h1 className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-md text-base leading-7 text-body">
            Enjoy a spotless space with our expert cleaning team. Affordable,
            eco-friendly, and tailored to your needs!
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
