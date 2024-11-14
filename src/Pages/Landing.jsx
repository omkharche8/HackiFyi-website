import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Codes from "../components/Codes";
import Sponsors from "../components/Sponsors";
import Prizes1 from "../components/Prizes1";
import Timeline from "../components/timeline";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Track from "../components/Track";
import Pastsponsors from "../components/Pastsponsors";
import MemberSection from "../components/MemberSection";
import Leaflet from "../components/Leaflet";

function Landing() {
  return (
    <div className="font-Clash w-screen text-[#f0f8ff] flex justify-center flex-col">
      <div className="bg-hero"></div>
      <Navbar />
      <Hero />
      <Leaflet/>
      <Pastsponsors/>
      <About />
      <Codes />
      <MemberSection/>
      <Faq/>
      
      
      {/*
      <Track/>
      <Timeline />
      <Prizes1 />
      <Sponsors />
      */}

      <Footer/>
      
    </div>
  );
}

export default Landing;
