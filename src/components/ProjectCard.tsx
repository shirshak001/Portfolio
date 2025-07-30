import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export default function ProjectCard({ title, description, image, onClick }: ProjectCardProps) {
  return (
    <div
      className="w-72 h-80 bg-black/60 border border-[#00ffff] rounded-xl p-4 cursor-pointer transition duration-300 hover:shadow-[0_0_30px_#00ffff] flex flex-col items-center"
      onClick={onClick}
    >
      <img src={image} alt={title} className="h-40 w-full object-cover rounded-lg mb-3" />
      <h3 className="text-white text-xl font-bold text-center">{title}</h3>
      <p className="text-gray-300 text-sm text-center mt-2">{description}</p>
    </div>
  );
}
