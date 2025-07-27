import React from "react";
import Particles from "./components/Particles";
import TextType from "./components/TextType";
import GlareHover from "./components/GlareHover";
import Dock from "./components/Dock";
import { Home, Folder, User, Settings } from "lucide-react";
import "./components/TextType.css";

const HomePage = () => {
  const items = [
    { icon: <Home size={20} color="white" />, label: "Home", onClick: () => alert("Home!") },
    { icon: <Folder size={20} color="white" />, label: "Projects", onClick: () => alert("Projects!") },
    { icon: <User size={20} color="white"/>, label: "About", onClick: () => alert("About!") },
    { icon: <Settings size={20} color="white"/>, label: "Settings", onClick: () => alert("Settings!") },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute bg-black inset-0 -z-10">
        <Particles
          particleColors={['#A3A7B0', '#A3A7B0']}
          particleCount={800}
          particleSpread={12}
          speed={0.2}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Resume Download Box */}
      <div className="absolute top-6 right-6 z-20">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          width="180px"
          height="60px"
          borderRadius="12px"
          background="#111"
          borderColor="#fff"
        >
          <a
            href="/resume.pdf"
            download
            className="text-white text-lg font-semibold"
          >
            Download CV
          </a>
        </GlareHover>
      </div>

      {/* Dock Navigation Bar */}
      <div className="absolute items-center justify-center bottom-6 z-30">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          dockHeight={256}
        />
      </div>

      {/* Typing Animation Text */}
      <h1 className="text-5xl font-bold mb-4 z-10 ml-1 text-shadow-lime-50 text-center">
        <TextType
          text={["Hi, I'm Shirshak.", "I build creative web experiences.", "Welcome to my portfolio."]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="inline-block"
          textColors={["#ffffff", "#00ffcc", "#ff66cc"]}
        />
      </h1>

      {/* Subtext */}
      <p className="text-gray-300 max-w-xl text-center z-10 mt-4">
        Let's create something exceptional together.
      </p>
    </div>
  );
};

export default HomePage;
