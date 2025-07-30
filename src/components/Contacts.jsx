import { FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";

const Contacts = () => {
  const contacts = [
    {
      icon: <FaLinkedin className="text-[#0A66C2]" size={32} />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/yourprofile",
      text: "Connect with me professionally"
    },
    {
      icon: <FaInstagram className="text-[#E4405F]" size={32} />,
      label: "Instagram",
      link: "https://instagram.com/yourprofile",
      text: "Follow my journey"
    },
    {
      icon: <FaWhatsapp className="text-[#25D366]" size={32} />,
      label: "WhatsApp",
      link: "https://wa.me/yourphonenumber",
      text: "Let's chat"
    },
    {
      icon: <FaEnvelope className="text-[#EA4335]" size={32} />,
      label: "Email",
      link: "mailto:your.email@example.com",
      text: "Send me an email"
    },
    {
      icon: <FaTwitter className="text-[#1DA1F2]" size={32} />,
      label: "Twitter",
      link: "https://twitter.com/yourprofile",
      text: "Follow me on Twitter"
    }
  ];

  return (
        <div id="connect" className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <ScrollReveal
        containerClassName="text-white mb-12"
        textClassName="font-bold text-center"
        enableBlur={true}
        baseOpacity={0}
        blurStrength={8}
        baseRotation={5}
      >
        Let's Connect
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {contacts.map((contact, index) => (
          <a 
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="block transform transition-transform hover:scale-105"
          >
            <SpotlightCard 
              className="h-full"
              spotlightColor="rgba(255, 255, 255, 0.1)"
            >
              <div className="flex flex-col items-center gap-4 py-6">
                {contact.icon}
                <h3 className="text-xl font-semibold text-white">{contact.label}</h3>
                <p className="text-gray-400 text-center">{contact.text}</p>
              </div>
            </SpotlightCard>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
