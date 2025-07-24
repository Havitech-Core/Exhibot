import React from "react";

const BoldStatic = () => {
  return (
    <div className="relative bg-[#0f0f0f] text-white font-ui overflow-hidden">
      {/* Static Top Section */}
      

      {/* Marquees Section */}
      <div className="flex flex-col gap-10">
        

        {/* Bottom Marquee */}
        <div className="relative overflow-hidden whitespace-nowrap bg-[#F97216] border-t border-white/20 border-dashed py-6">
          <div className="marquee-track-bold text-[2.5rem] font-extrabold uppercase tracking-wider">
            <span className="inline-block px-10">
              The Future Is Not Imported • It’s Built Here • Exhibot Ng Is Nigeria’s Robotics Revolution •
            </span>
            <span className="inline-block px-10" aria-hidden="true">
              The Future Is Not Imported • It’s Built Here • Exhibot Ng Is Nigeria’s Robotics Revolution •
            </span>
          </div>
          {/* Fades */}
          <div className="absolute top-0 left-0 h-full w-[80px] z-10 bg-gradient-to-r from-[#F97216] via-[#F97216]/70 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-[80px] z-10 bg-gradient-to-l from-[#F97216] via-[#F97216]/70 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="bg-blue-700 py-20 px-[8rem]">
        
          <div className="w-auto ">
            <h1 className="text-[8rem] leading-[12rem] text-white" style={{ fontFamily: 'Exima Geometric' }}>
              Exhibot is More Than just mere Entertainment <span className="text-[#F97216]">It’s a Movement</span> 
            </h1>
          </div>
          
      </div>

      {/* Keyframe Styles */}
      <style>
        {`
          .marquee-track {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 25s linear infinite;
0
          .marquee-track-bold {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 18s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default BoldStatic;
