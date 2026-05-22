import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import Carousel from "./Carousel";

const WHATS_URL = "https://wa.me/message/APCRMGCYRVWVK1";

// Gradient placeholders (used when real images aren't provided)
const PLACEHOLDER_IMAGES = [
  "bg-gradient-to-br from-blue-400 to-blue-700",
  "bg-gradient-to-br from-cyan-400 to-blue-600",
  "bg-gradient-to-br from-indigo-400 to-blue-700",
];

export default function ServiceSection({
  id,
  tag,
  title,
  description,
  items,
  reverse = false,
  images,
}) {
  const [ref, inView] = useInView(0.1);
  const imgs = images?.length ? images : PLACEHOLDER_IMAGES;

  return (
    <section
      id={id}
      className="py-20 bg-white border-t border-gray-100"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={reverse ? "lg:order-2" : "lg:order-1"}
          >
            <Carousel images={imgs} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${reverse ? "lg:order-1" : "lg:order-2"}`}
          >
            <span className="text-xs font-bold tracking-[0.25em] text-blue-400 mb-3">
              {tag}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-5 leading-tight">
              {title}
            </h2>

            <p className="text-gray-500 mb-8 leading-relaxed">{description}</p>

            <ul className="space-y-0 mb-10">
              {items.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 py-3 border-b border-gray-100 group cursor-default"
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                >
                  <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                    <svg
                      className="w-3 h-3 text-blue-500 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href={WHATS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg w-full sm:w-fit"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                className="w-5 h-5 fill-white flex-shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.875L0 24l6.29-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.213-3.727.895.927-3.624-.234-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              AGENDAR SERVIÇO
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
