import ContactCards from "../components/contact/ContactCards";
import ContactInfo from "../components/contact/ContactInfo";
import SectionHeading from "../components/UI/SectionHeading";

const ContactSection = () => {
  return (
    <section className="w-full p-8 md:px-16 md:pb-32">
      <SectionHeading>Contact</SectionHeading>
      <div className="block lg:flex justify-around items-center">
        <ContactInfo />
        <ContactCards />
      </div>
    </section>
  );
};

export default ContactSection;
