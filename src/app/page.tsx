import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Serwice from "@/components/Serwice";
import ParallaxTextOnX from "@/components/ui/ParallaxTextOnX";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="containerSection">
        {/* <div className="box"></div> */}
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
