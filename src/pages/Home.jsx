import React from "react";
import Particles from "../components/Particles";
import TextType from "../components/TextType";
import GlareHover from "../components/GlareHover";
import Dock from "../components/Dock";
import ProjectSection from "../components/ProjectSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";
import Blogs from "../components/Blogs";
import { Home, Folder, User, Brain, MessageSquare, BookOpen } from "lucide-react";
import "../components/TextType.css";
import {Router, Routes, Route} from "react-router-dom";
// import AttendEase from "./components/Projects/AttendEase";

const HomePage = () => {
  const items = [
    { 
      icon: <Home size={20} color="white" />, 
      label: "Home", 
      onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <User size={20} color="white"/>, 
      label: "About Me", 
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <Folder size={20} color="white" />, 
      label: "Projects", 
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <Brain size={20} color="white"/>, 
      label: "Skills", 
      onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <BookOpen size={20} color="white"/>, 
      label: "Blogs", 
      onClick: () => document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' }) 
    },
    { 
      icon: <MessageSquare size={20} color="white"/>, 
      label: "Connect", 
      onClick: () => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' }) 
    }
  ];

  return (
    <div id="home" className="relative w-full">
      {/* Particle Background */}
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={['#060010', '#ffffff']}
          particleCount={1000}
          particleSpread={12}
          speed={0.4}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
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

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="text-center z-10">
          <h1 className="text-5xl font-bold mb-4 z-10 ml-1 text-shadow-lime-50 text-center">
            <TextType
              text={["Hi, I'm Shirshak.", "I build creative web experiences.", "Welcome to my portfolio."]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="inline-block"
              textColors={["#ffffff"]}
            />
          </h1>
          <p className="text-gray-300 max-w-xl text-center z-10 mt-4">
            Let's create something exceptional together.
          </p>
        </div>
      </div>

      <About />
      
      <Skills />
      
      <ProjectSection />
      
      <Blogs />
      
      <Contacts />

      {/* Dock Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <Dock
          items={items}
          className = "backdrop-blur-sm"
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          dockHeight={256}
        />
      </div>
    </div>
  );
};

export default HomePage;
