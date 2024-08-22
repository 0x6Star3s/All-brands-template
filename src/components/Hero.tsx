"use client";
import React, { useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedText from "./ui/AnimatedText";

const phrases = [
  "Los Flamencos National Reserve",
  "is a nature reserve located",
  "in the commune of San Pedro de Atacama",
  "The reserve covers a total area",
  "of 740 square kilometres (290 sq mi)",
];

export default function Hero() {
  const background = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: true,
          start: "100px top",
          end: "+=500px",
          markers: false,
        },
      });
      timeline.from(background.current, { clipPath: `inset(${15}%)` });
    },
    { scope: background }
  );
  return (
    <section className="relative w-full pt-[40vh]">
      <h1 className=" my-4 text-center text-3xl sm:text-6xl lg:text-9xl text-nowrap font-semibold">
        All Brands
      </h1>
      <div className="relative w-full sm:h-max">
        <div
          className="absolute w-full bottom-0 h-[70vh] sm:h-[125vh] brightness-50"
          ref={background}
        >
          <Image
            fill={true}
            src={"/images/salon-krakow-2.jpg"}
            alt="background image"
            priority={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative uppercase mt-[60vh] sm:mt-[90vh] text-[3.5vw] sm:text-3xl">
          <div className="container">
            {phrases.map((phrase, index) => {
              return <AnimatedText key={index}>{phrase}</AnimatedText>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
