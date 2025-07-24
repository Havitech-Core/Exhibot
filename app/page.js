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
    <>
        <Hero/>
        <BoldStatic/>
        <CommunitySection />
        <BoldStatic/>
        <StoreSection />
        <FaqSection />
        <Footer/>
        
    </>
  );
}
