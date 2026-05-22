import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ images, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const count = images.length;

  const go = (newIndex, dir) => {
    setDirection(dir);
    setCurrent((newIndex + count) % count);
  };

  const next = () => go(current + 1, 1);
  const prev = () => go(current - 1, -1);

  const startTimer = () => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, interval);
  };

  const stopTimer = () => clearInterval(timerRef.current);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [current]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div
      className="relative rounded-2xl shadow-2xl bg-gray-900"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      {/* Image container */}
      <div className="relative h-[420px] overflow-hidden rounded-2xl">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            {images[current].startsWith("http") ||
            images[current].startsWith("/") ? (
              <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              // Placeholder with gradient when real images aren't available
              <div className={`w-full h-full ${images[current]}`} />
            )}
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow buttons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          onClick={() => {
            prev();
            stopTimer();
            startTimer();
          }}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-blue-900 shadow-lg hover:bg-white transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ‹
        </motion.button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          onClick={() => {
            next();
            stopTimer();
            startTimer();
          }}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-blue-900 shadow-lg hover:bg-white transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ›
        </motion.button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              go(i, i > current ? 1 : -1);
              stopTimer();
              startTimer();
            }}
            className="transition-all duration-300"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
