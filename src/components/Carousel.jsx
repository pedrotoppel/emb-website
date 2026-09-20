import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ images, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);
  const isHoveringRef = useRef(false);
  const count = images.length;

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setCurrent((c) => (c + dir + count) % count);
    },
    [count]
  );

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  // Sempre limpa qualquer timer existente antes de criar um novo — evita
  // que dois intervals fiquem rodando ao mesmo tempo (era isso que
  // quebrava a animação ao clicar e depois tirar o mouse de cima).
  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    if (!autoPlay || isHoveringRef.current) return;
    timerRef.current = setInterval(() => go(1), interval);
  }, [autoPlay, interval, go, stopTimer]);

  // O timer é criado uma única vez (não depende de `current`), usando
  // atualização funcional em setCurrent — isso evita recriar o interval
  // a cada troca de slide, deixando o autoplay mais estável.
  useEffect(() => {
    startTimer();
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, interval, count]);

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    stopTimer();
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    startTimer();
  };

  // Interação manual: pausa e, se o mouse não estiver mais em cima,
  // reinicia o timer. Se ainda estiver em cima, fica pausado até sair
  // (quem reativa nesse caso é o onMouseLeave).
  const handleManualNav = (action) => {
    action();
    if (!isHoveringRef.current) {
      startTimer();
    } else {
      stopTimer();
    }
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div
      className="relative rounded-2xl shadow-2xl bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0 will-change-transform"
          >
            {images[current].startsWith("http") ||
            images[current].startsWith("/") ? (
              <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
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
          onClick={() => handleManualNav(() => go(-1))}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-blue-900 shadow-lg hover:bg-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ‹
        </motion.button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <motion.button
          onClick={() => handleManualNav(() => go(1))}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-blue-900 shadow-lg hover:bg-white transition-colors"
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
            onClick={() => handleManualNav(() => goTo(i))}
            className="p-1"
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