import ContactHero from "@/components/contact-page/ContactHero";
import ContactInfo from "@/components/contact-page/ContactInfo";
import ContactForm from "@/components/contact-page/ContactForm";
import ContactMap from "@/components/contact-page/ContactMap";
import FAQ from "@/components/contact-page/FAQ";

export const metadata = {
  title: "Contact Us | Wengdo",
  description:
    "Get in touch with the Wengdo team.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <FAQ />
    </main>
  );
}