import React from 'react';

function Projects({ name, img }) {
  return (
    <div className="my-4">
      <div className="flex flex-col md:flex-row gap-2 items-center px-4 md:px-10">
        <div className="h-3 w-3 bg-black rounded-full"></div>
        <h1 className="text-xl md:text-2xl font-medium">{name}</h1>
      </div>

      <div className="px-4 md:px-10">
        <div className="overflow-hidden h-[40vh] md:h-[60vh] lg:h-[80vh] w-full md:w-[60vw] lg:w-[40vw] mx-auto">
          <div className="w-full h-full">
            <img className="h-full w-full object-cover rounded-xl" src={img} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
