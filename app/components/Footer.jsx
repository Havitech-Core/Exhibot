import React from "react";
import 'remixicon/fonts/remixicon.css';


const Footer = () => {
  return (
    <footer className="relative bg-[#F97216] text-white px-32 py-14 mt-10">
      
      <div className="flex flex-col lg:flex-col justify-between items-center gap-8">
        {/* Logo */}
        <div classname="h-4 bg-blue-700"></div>
        <div className="text-[10rem] mt-40 mb-24 font-heading text-[#f2f5e7] leading-none">
          EXHIBOT NG
        </div>

        {/* Right Section */}
        <div className="flex flex-row lg:items-end gap-4 w-full">
          {/* Socials */}
          <div className="flex flex-col items-center gap-6 text-[2.2rem] text-white/90">
            <span className="text-blue-700 font-body font-bold">Follow Us</span>
            <div className="flex items-center gap-4 text-[1.7rem]">
              <a
                href="https://discord.gg/uCYwT6keJK"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F97216] transition-colors"
                >
                <i className="ri-discord-fill" />
                </a>
              <a
                href="https://x.com/exhibotng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
                >
                <i className="ri-twitter-x-line" />
                </a>
               <a
                href="https://www.youtube.com/channel/UCGpDVP0yJKvHraDksb8ANzg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F97216] transition-colors"
                >
              <i className="ri-youtube-fill" />
              </a> 
              <a
                href="https://instagram.com/exhibotng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
                >
              <i className="ri-instagram-fill" />
              </a>
              <a
                href="https://www.tiktok.com/@exhibot.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F97216] transition-colors"
                >
              <i className="ri-tiktok-fill" />
              </a>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex justify-end w-full text-2xl text-white/60 mt-4">
            <div className="flex flex-col gap-6">
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full font-light text-lg border-t-2 rounded-t-2xl pt-4 text-white/60 mt-4">
            <span>© 2025 Exhibot NG | All Rights reserved.</span>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
