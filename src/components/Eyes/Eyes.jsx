import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="h-screen w-full overflow-hidden">
        <div
          data-scroll
          data-scroll-speed="-0.7"
          className="bg-cover flex gap-3 relative h-full w-full bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
        >
          <div className="flex gap-4 md:gap-8 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-3/4 md:w-1/2 lg:w-1/3 justify-center">
            <div className="flex justify-center items-center h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 rounded-full bg-white">
              <div className="bg-black h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full relative">
                <div
                  style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                  className="w-full h-10 absolute top-1/2 left-1/2"
                >
                  <div className="bg-white h-7 w-7 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 rounded-full bg-white">
              <div className="bg-black h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full relative">
                <div
                  style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                  className="w-full h-10 absolute top-1/2 left-1/2"
                >
                  <div className="bg-white h-7 w-7 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eyes;
