import React from 'react';

const Home = () => {
  return (
    <div className="relative">
      {/* full screen video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/portfolio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">Lucky Day Studios</h1>
      </div>
      {/* scrollable content */}
      <section className="relative z-10 py-20 px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl mb-4">Our Film in Progress</h2>
        <p className="mb-6">
          We're currently crafting our debut film, weaving together imagination
          and craft. Below you'll find glimpses into our creative process and
          behind-the-scenes shots as we bring the story to life.
        </p>
        <img
          src="/scene1.jpg"
          alt="on set"
          className="w-full mb-6 rounded-none"
        />
        <p className="mb-6">
          Writing, rehearsals, and set design are all underway. Stay tuned for
          more updates as the project evolves.
        </p>
        <img
          src="/scene2.jpg"
          alt="storyboarding"
          className="w-full mb-6 rounded-none"
        />
      </section>
    </div>
  );
};

export default Home;