import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" size={40} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={40} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" size={40} /> }
      ]
    },
    {
      category: "Backend Development",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" size={40} /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" size={40} /> },
        { name: "Databases", icon: <FaDatabase className="text-[#336791]" size={40} /> }
      ]
    }
  ];

  return (
        <div id="skills" className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <ScrollReveal
        containerClassName="text-white mb-12"
        textClassName="font-bold text-center"
        enableBlur={true}
        baseOpacity={0}
        blurStrength={8}
        baseRotation={5}
      >
        Skills & Technologies
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {skills.map((skillSet, index) => (
          <SpotlightCard 
            key={index}
            className="h-full"
            spotlightColor="rgba(255, 255, 255, 0.1)"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">{skillSet.category}</h3>
            <div className="grid grid-cols-3 gap-8">
              {skillSet.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex flex-col items-center gap-3">
                  {tech.icon}
                  <span className="text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
