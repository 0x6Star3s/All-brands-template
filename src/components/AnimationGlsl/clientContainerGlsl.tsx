"use client";
import { useEffect } from "react";
// import cn from "@/utils/cn";
import { animationCurve, ITexture } from "./glsl";
import styles from "./style.module.css";


const ContainerClientGlsl = ({
  children,

  textarea,
  hover,
}: {
  children: React.ReactNode;
  textarea: ITexture[];
  hover: boolean;
}) => {
  useEffect(() => {
    animationCurve(textarea, hover);
  }, [hover, textarea]);
  return (
    <div id="containerGlsl" className={styles.containerClientGlsl}>
      {children}
    </div>
  );
};

export default ContainerClientGlsl;
