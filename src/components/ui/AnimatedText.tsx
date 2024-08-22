import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
export default function AnimatedText({ children }: { children: string }) {
  const text = useRef(null);

  useGSAP(
    () => {
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        left: "-200px",
        ease: "power3.Out",
      });
    },
    { scope: text }
  );

  return (
    <p className="relative m-0" ref={text}>
      {children}
    </p>
  );
}
