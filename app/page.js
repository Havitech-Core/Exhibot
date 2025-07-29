import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BoldStatic from "./components/BoldStatic";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";
import CommunitySection from "./components/CommunitySection";
import StoreSection from "./components/StoreSection";

export default function Home() {
  return (
    <body className="bg-gradient-to-br from-black via-[#F97216] to-white min-h-screen" >
        <Hero/>
        <BoldStatic/>
        <CommunitySection />
        <BoldStatic/>
        <StoreSection />
        <FaqSection />
        <Footer/>
        
    </body>
  );
}
