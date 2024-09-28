import React from 'react';
import Projects from './Projects';

function Featured() {
  const projectDetails = [
    {
      name: "FYDE",
      img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    },
    {
      name: "VISE",
      img: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    },
    {
      name: "TRAWA",
      img: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
    },
    {
      name: "PREMIUM BLEND",
      img: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
    },
  ];

  return (
    <>
      <div className="w-full px-4 md:px-10 py-8 bg-[#F1F1F1]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">Featured Projects</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4 bg-[#F1F1F1]">
        {projectDetails.map((item, index) => (
          <Projects key={index} name={item.name} img={item.img} />
        ))}
      </div>
    </>
  );
}

export default Featured;
