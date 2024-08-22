import React from "react";
import { ClientContainerGlsl, ClientGlsl } from "./AnimationGlsl";

export default function Serwice() {
  const projects = [
    {
      title: "Kolekcja Vintage",
      src: "/images/kolekcja.jpg",
    },
    {
      title: "Skup",
      src: "/images/image.jpg",
    },
    {
      title: "Serwis  ",
      src: "/images/serwis-zegarkow-rw.jpg",
    },
  ];
  return (
    <section className="font-semibold md:py-12">
      <div className="flex flex-col relative">
        <ClientContainerGlsl textarea={projects} hover={true}>
          {projects.map((project, index) => {
            return (
              <ClientGlsl
                key={index}
                className="w-full uppercase text-2xl md:text-[3vw] py-4 border-white border-b flex justify-start cursor-pointer"
              >
                <h2>{project.title}</h2>
              </ClientGlsl>
            );
          })}
        </ClientContainerGlsl>
      </div>
    </section>
  );
}
