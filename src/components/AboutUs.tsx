import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="flex pt-12 md:py-24 2md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full 2md:w-1/2 w-5/6 mb-10 2md:mb-0">
        <Image
          src={`/images/image1.jpg`}
          // fill={true}
          width={1920}
          height={1080}
          alt="project image"
          className="w-full"
          // priority={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="lg:flex-grow 2md:w-1/2 lg:pl-24 2md:pl-12 flex flex-col 2md:items-start 2md:text-left items-center text-center ">
        <h2 className="text-[5vw] leading-[6vw] 2md:text-4xl text-3xl mb-4 font-medium ">
          Knausgaard typewriter readymade marfa
        </h2>
        <p className="text-[3vw] sm:text-sm mb-8 sm:leading-relaxed">
          Some, like the southern viscacha, vicuña and Darwins rhea, are
          classNameified as endangered species. Others, such as Andean goose,
          horned coot, Andean gull, puna tinamou and the three flamingo species
          inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess
          flamingo) are considered vulnerable. horned coot, Andean gull, puna
          tinamou and the three flamingo species inhabiting in Chile (Andean
          flamingo, Chilean flamingo, and Jamess flamingo) are considered
          vulnerable. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Amet reprehenderit consequatur nobis inventore quaerat voluptates
          laboriosam, eum laborum adipisci corporis, assumenda minus. Voluptatem
          vero repellendus, magni illum nisi possimus officiis nihil similique
          commodi doloremque! Laboriosam quos in ipsum hic exercitationem culpa,
          ex fugiat harum suscipit molestias excepturi a asperiores voluptatem
          atque magnam mollitia blanditiis nihil vitae perspiciatis dolorem
          cupiditate. Maxime.
        </p>
      </div>
    </section>
  );
}
