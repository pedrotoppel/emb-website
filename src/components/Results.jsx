import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import Carousel from "./Carousel";

const WHATS_URL = "https://wa.me/message/APCRMGCYRVWVK1";

const PLACEHOLDER_IMAGES = [
  "bg-gradient-to-br from-slate-700 to-blue-900",
  "bg-gradient-to-br from-blue-800 to-indigo-900",
  "bg-gradient-to-br from-cyan-700 to-blue-800",
];

export default function Results() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 text-sm font-semibold tracking-[0.2em] mb-3 block">
            ANTES E DEPOIS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950">
            Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Resultados
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Veja a transformação que nossa higienização profissional proporciona.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Carousel images={PLACEHOLDER_IMAGES} interval={3500} />
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href={WHATS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-12 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-xl text-lg btn-glow"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-6 h-6 fill-white flex-shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.875L0 24l6.29-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.213-3.727.895.927-3.624-.234-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            QUERO ESSES RESULTADOS
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
