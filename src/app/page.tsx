"use client";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Serwice from "@/components/Serwice";
import ParallaxTextOnX from "@/components/ui/ParallaxTextOnX";
import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <main>
      <ReactLenis root>
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
      </ReactLenis>
    </main>
  );
}
