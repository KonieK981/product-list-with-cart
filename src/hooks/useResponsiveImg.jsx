import { useEffect, useState } from "react";

export const useResponsiveImg = () => {
  const [src, setSrc] = useState("mobile");

  useEffect(() => {
    const updateImage = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setSrc("desktop");
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setSrc("tablet");
      } else {
        setSrc("mobile");
      }
    };

    updateImage();

    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return { src };
};
