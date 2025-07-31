import ScrollFloat from "./ScrollFloat";
import { useRef } from "react";
import DecryptedText from "./DecryptedText";

const About = () => {
  const containerRef = useRef(null);

  return (
    <div id="about" className=" flex flex-col  items-center  px-4">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <ScrollFloat
          scrollContainerRef={containerRef}
          containerClassName="text-purple mb-12"
          textClassName="font-bold"
        >
          About Me
        </ScrollFloat>
        
        <div className="text-purple-300 space-y-6 text-lg">
          <p className="leading-relaxed">
            <DecryptedText 
              text="Hi there! I'm Shirshak, a passionate full-stack developer with a love for creating beautiful and functional web experiences. 
              My journey in tech has been driven by curiosity and a constant desire to learn and innovate."
              animateOn="view"
              sequential={true}
              speed={30}
              className="text-white"
              encryptedClassName="text-gray-500"
            />
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default About;
