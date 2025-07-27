// src/components/pages/Home.jsx

import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
      <p className="text-xl text-gray-300 max-w-xl text-center">
        I'm a passionate developer focused on building modern and creative web experiences.
      </p>
      <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
        View My Work
      </button>
    </div>
  );
};

export default Home;
