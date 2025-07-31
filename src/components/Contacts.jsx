import { FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";

const Contacts = () => {
  const contacts = [
    {
      icon: <FaLinkedin className="text-[#0A66C2]" size={32} />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/shirshak-mondal-15260a291",
      text: "Connect with me professionally"
    },
    {
      icon: <FaInstagram className="text-[#E4405F]" size={32} />,
      label: "Instagram",
      link: "https://www.instagram.com/shirshak___?igsh=aGJndzd5amF0OHF6",
      text: "Follow my journey"
    },
    {
      icon: <FaWhatsapp className="text-[#25D366]" size={32} />,
      label: "WhatsApp",
      link: "https://wa.me/8617300719",
      text: "Let's chat"
    },
    {
      icon: <FaEnvelope className="text-[#EA4335]" size={32} />,
      label: "Email",
      link: "mailto:your.shirshakmondaljspbuet@gmail.com",
      text: "Send me an email"
    },
    {
      icon: <FaTwitter className="text-[#1DA1F2]" size={32} />,
      label: "Twitter",
      link: "https://twitter.com/ShirshakMo45240",
      text: "Follow me on Twitter"
    },
    {
      icon: <FaGithub className="text-[#ffffff]" size={32} />,
      label: "Github",
      link: "https://github.com/SHIRSHAK0071",
      text: "Let's collaborate on GitHub"
    }
  ];
  

  return (
        <div id="connect" className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <ScrollReveal
        containerClassName="text-purple mb-12"
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
              spotlightColor="rgba(128,0,128, 0.1)"
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
