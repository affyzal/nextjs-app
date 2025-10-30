import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import { motion } from 'framer-motion';

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex -ml-4">
          {slides?.map((slide, i) => (
            <div key={i} className="embla__slide flex-[0_0_100%] min-w-0 pl-4">
              <div
                className="
                  grid grid-cols-1 md:grid-cols-3 items-center gap-8
                  rounded-2xl p-6 md:p-8
                  bg-[#0a192f]
                  shadow-[inset_0_0_20px_2px_rgba(100,255,218,0.25)]
                  hover:shadow-[inset_0_0_35px_6px_rgba(100,255,218,0.5)]
                  transition-all duration-300
                "
                style={{ minHeight: '20rem' }} // force height regardless of CSS conflicts
              >
                {/* Left: text (1/3) */}
                <div className="md:col-span-1 text-left space-y-3">
                  <h3 className="text-2xl font-semibold text-[#64ffda]">
                    {slide?.title ?? 'Untitled'}
                  </h3>
                  <p className="text-zinc-800 dark:text-zinc-300 white-space-pre-line">
                    {(slide?.desc ?? '')
                      .split('.')
                      .filter(Boolean)
                      .map((sentence, i) => (
                        <React.Fragment key={i}>
                          {sentence.trim()}.
                          <br />
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                  {slide?.link && (
                    <motion.a
                      href={slide.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 16,
                      }}
                      className="inline-block mt-2 text-[#64ffda] hover:underline font-mono hover:border hover:border-[#64ffda] rounded px px-3 py-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </motion.a>
                  )}
                </div>

                {/* Right: image (2/3) */}
                <div className="md:col-span-2">
                  {slide?.img ? (
                    <motion.div className="rounded border border-[#64ffda]/20 hover:border-[#64ffda] transition-all duration-300">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={slide.img}
                        alt={slide?.title ?? 'Project image'}
                        className="w-full h-64 md:h-80 rounded-lg shadow-lg object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ) : slide?.video ? (
                    <motion.div className="rounded border border-[#64ffda]/20 hover:border-[#64ffda] transition-all duration-300">
                      <iframe
                        className="w-full h-64 md:h-80 rounded-lg shadow-lg"
                        src={slide.video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </motion.div>
                  ) : (
                    <div className="w-full h-64 md:h-80 rounded-lg bg-zinc-100 dark:bg-zinc-800 grid place-items-center">
                      <span className="text-zinc-500 dark:text-zinc-400 font-mono">
                        Media coming soon
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls mt-4 flex items-center justify-between">
        <div className="embla__buttons flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                index === selectedIndex
                  ? 'bg-[#64ffda]'
                  : 'bg-zinc-400/50 hover:bg-zinc-400'
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
