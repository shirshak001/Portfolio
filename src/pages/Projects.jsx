import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const softwareProjects = [
  {
    title: "CredMate",
    description: "AI credit scoring for unbanked users.",
    image: "/images/software1.png",
  },
  {
    title: "AttendEase",
    description: "Smart attendance tracker with scheduling features.",
    image: "/images/software2.png",
  },
];

const hardwareProjects = [
  {
    title: "Smart Glasses for Blind",
    description: "AI-powered glasses for real-time object recognition.",
    image: "/images/hardware1.png",
  },
  {
    title: "ESP-NOW Car",
    description: "Remote-controlled 4x4 vehicle using ESP32 & encoders.",
    image: "/images/hardware2.png",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      {/* Software Projects */}
      <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Software Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center mb-12">
        {softwareProjects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {/* Hardware Projects */}
      <h2 className="text-2xl font-semibold mb-4 text-pink-400">Hardware Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {hardwareProjects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          {...selectedProject}
        />
      )}
    </div>
  );
}
