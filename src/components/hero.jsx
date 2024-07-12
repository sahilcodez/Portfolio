import React from 'react';

const hero = () => {
  return (
    <section 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white" 
      style={{ backgroundImage: `url('https://i.pinimg.com/originals/c3/76/1c/c3761c0a59c69cc0681afc4c06c63f6c.jpg')` }}

    >
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white">
        <h2 className="text-5xl font-bold mb-2">Hi, I'm an Engineer from Delhi!</h2>
        <p className="text-2xl mb-6">Welcome to my personal portfolio website.</p>
        <a
          href="https://drive.google.com/file/d/1VQBDrUzY1iHYnmf5oQa1NWevp07ehi5N/view?usp=sharing"
          className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"

          download
        >
          Download Resume
        </a>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/sahilcodez" className="text-white hover:text-gray-300">GitHub</a>
          <a href="https://www.linkedin.com/in/sahil-anand-963140252/" className="text-white hover:text-gray-300">LinkedIn</a>
          <a href="mailto:sahilmackarov11@gmail.com" className="text-white hover:text-gray-300">Email</a>
        </div>
      </div>
    </section>
  );
};

export default hero;

