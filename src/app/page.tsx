import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[400vh]">
      <Hero />
      <div className="containerSection">
        {/* <div className="box"></div> */}
        <AboutUs />
      </div>
    </main>
  );
}
