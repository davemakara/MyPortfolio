import ContactCards from "../components/contact/ContactCards";
import ContactInfo from "../components/contact/ContactInfo";

const ContactSection = () => {
  return (
    <section className="w-full p-8 md:px-16 md:pb-32">
      <p className="text-white text-2xl lg:text-5xl text-center tracking-wider pb-12 lg:pb-16">
        Contact
      </p>
      <div className="block lg:flex justify-around items-center">
        <ContactInfo />
        <ContactCards />
      </div>
    </section>
  );
};

export default ContactSection;
