import ScrollFloat from "./ScrollFloat";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef(null);

  return (
    <div id="about" className=" flex flex-col  items-center  px-4">
      <div ref={containerRef} className="max-w-4xl mx-auto">
        <ScrollFloat
          scrollContainerRef={containerRef}
          containerClassName="text-white mb-12"
          textClassName="font-bold"
        >
          About Me
        </ScrollFloat>
        
        <div className="text-gray-300 space-y-6 text-lg">
          <p className="leading-relaxed">
            Hi there! I'm Shirshak, a passionate full-stack developer with a love for creating beautiful and functional web experiences. 
            My journey in tech has been driven by curiosity and a constant desire to learn and innovate.
          </p>
          
          <p className="leading-relaxed">
            I specialize in modern web technologies and believe in writing clean, efficient code that makes a difference. 
            When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
          </p>

          <p className="leading-relaxed">
            My approach to development combines technical expertise with creative problem-solving, 
            ensuring that every project I work on not only functions flawlessly but also delivers an exceptional user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
