import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

const ContactCards = () => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:w-2/5 px-4 sm:px-10 md:px-20 lg:px-0">
      <Card
        title="Email"
        subtitle="davidmakarr@gmail.com"
        href="#"
        Icon={FiMail}
      />
      <Card
        title="Phone"
        subtitle="+995 574 031 319"
        href="#"
        Icon={FiPhoneCall}
      />

      <Card
        title="Location"
        subtitle="Tbilisi, Georgia"
        href="#"
        Icon={GrLocation}
      />
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }: any) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-black relative overflow-hidden group bg-[#EEEEEE]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange to-yellow translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 transition-colors relative z-10 duration-300" />
      <h3 className="text-xl relative z-10 duration-300">{title}</h3>
      <p className="text-lg relative z-10 duration-300">{subtitle}</p>
    </a>
  );
};

export default ContactCards;
