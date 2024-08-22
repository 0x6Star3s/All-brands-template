"use client";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Serwice from "@/components/Serwice";
import ParallaxTextOnX from "@/components/ui/ParallaxTextOnX";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <Hero />
      <div className="containerSection">
        <AboutUs />
        <Serwice />
        <div className="py-16">
          <ParallaxTextOnX baseVelocity={-1}>
            Longines Baume&Mercier Patek Philippe tagHeurt
          </ParallaxTextOnX>
          <ParallaxTextOnX baseVelocity={1}>
            Longines Baume&Mercier Patek Philippe tagHeurt
          </ParallaxTextOnX>
        </div>
      </div>
    </main>
  );
}
