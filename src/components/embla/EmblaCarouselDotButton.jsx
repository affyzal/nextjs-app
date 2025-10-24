import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((api) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

export const DotButton = ({ className = "", ...rest }) => {
  return (
    <motion.button
      type="button"
      className={`h-2.5 w-2.5 rounded-full transition ${className}`}
      {...rest}
    />
  );
};
