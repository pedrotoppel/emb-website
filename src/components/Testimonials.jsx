import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const testimonials = [
  {
    name: "Mariana Silva",
    location: "Água Verde, Curitiba",
    text: "O sofá parecia novo depois do serviço. Tiraram uma mancha de vinho que eu achava que nunca mais sairia. Atendimento super pontual.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    location: "Batel, Curitiba",
    text: "Contratei para o escritório inteiro, cadeiras e sofás da recepção. Equipe rápida e nada de cheiro de produto químico depois.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    location: "Boqueirão, Curitiba",
    text: "Fiz a impermeabilização do sofá novo. Já derramei suco em cima e limpou na hora, sem deixar mancha. Recomendo muito.",
    rating: 5,
  },
];

function Stars({ rating }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-blue-500" : "fill-gray-200"}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.2 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 text-sm font-semibold tracking-[0.2em] mb-3 block">
            DEPOIMENTOS
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-blue-950"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Quem confia,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              recomenda
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Histórias reais de clientes que já transformaram seus ambientes com
            a EMB.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="h-full flex flex-col justify-between bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div>
                <Stars rating={t.rating} />
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-blue-950 text-sm">
                    {t.name}
                  </p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
