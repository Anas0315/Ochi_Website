import React from 'react';

function About() {
  return (
    <div  className="bg-[#CDEA68] w-full py-20 px-4 md:px-10">
      <h1 className="w-full text-3xl md:text-6xl font-medium md:font-normal">
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>

      <div className="flex flex-col md:flex-row gap-5 mt-20 pt-10 bg-[#CDEA68] border-t border-[#ceea6859]">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-7xl">Our approach:</h1>
          <button className="bg-black mt-7 uppercase font-semibold rounded-full py-4 px-8 text-lg flex items-center gap-4 text-white">
            Read More
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </button>
        </div>

        <div className="w-full md:w-1/2 rounded-3xl h-[50vh] md:h-[70vh] mt-2">
          <img
            className="h-full w-full rounded-3xl object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Ochi"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
