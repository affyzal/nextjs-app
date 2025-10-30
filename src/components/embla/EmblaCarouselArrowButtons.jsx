import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onSelect = useCallback((api) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick: scrollPrev,
    onNextButtonClick: scrollNext,
  };
};

const baseClasses =
  'flex items-center justify-center rounded-full border-2 border-[#64ffda] ' +
  'bg-[#64ffda]/10 hover:bg-[#64ffda]/30 text-[#64ffda] ' +
  'disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200';

export const PrevButton = (props) => (
  <motion.button
    aria-label="Previous slide"
    whileTap={{ scale: 0.7 }}
    transition={{ type: 'spring', stiffness: 260, damping: 16 }}
    className={`${baseClasses} w-10 h-10`} // ← equal width/height for circle
    {...props}
  >
    <span className="text-lg leading-none">‹</span>
  </motion.button>
);

export const NextButton = (props) => (
  <motion.button
    aria-label="Next slide"
    className={`${baseClasses} w-10 h-10`}
    whileTap={{ scale: 0.7 }}
    transition={{ type: 'spring', stiffness: 260, damping: 16 }}
    {...props}
  >
    <span className="text-lg leading-none">›</span>
  </motion.button>
);
