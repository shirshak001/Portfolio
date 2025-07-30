import React from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
}

export default function ProjectModal({ isOpen, onClose, title, description, image }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-[#111] p-6 rounded-xl w-[90%] max-w-2xl border border-cyan-400 shadow-[0_0_50px_#00ffff]">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <button
          onClick={onClose}
          className="mt-4 text-cyan-400 border border-cyan-400 px-4 py-2 rounded hover:bg-cyan-400 hover:text-black transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
