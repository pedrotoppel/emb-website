import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const WHATS_URL = "https://wa.me/message/APCRMGCYRVWVK1";

const areas = [
  {
    icon: "🏢",
    tag: "COMERCIAL",
    title: "Higienização para empresas, escritórios e coworking",
    desc: "Higienização profissional de sofás, poltronas de recepção, cadeiras de escritório, bancos estofados, tapetes e carpetes. Removemos sujeiras e 99% dos ácaros, fungos e bactérias.",
    accent: "from-blue-500 to-indigo-600",
    border: "border-blue-100",
  },
  {
    icon: "🛋️",
    tag: "RESIDENCIAL",
    title: "Higienização de estofados para o conforto do seu lar",
    desc: "Higienização profissional de sofás, poltronas, cadeiras, colchões, cabeceiras, tapetes e carpetes. Removemos impurezas, odores e 99% dos ácaros, fungos e bactérias.",
    accent: "from-cyan-500 to-blue-600",
    border: "border-cyan-100",
    featured: true,
  },
  {
    icon: "🛡️",
    tag: "PROTEÇÃO PROFISSIONAL",
    title: "Impermeabilização com resultados duradouros",
    desc: "Aplicação de barreira invisível que repele líquidos e sujeiras, evitando manchas e aumentando a vida útil dos estofados. Ideal para lares com crianças e pets.",
    accent: "from-blue-600 to-blue-800",
    border: "border-blue-100",
  },
];

export default function ServiceAreas() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="estofados" className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 text-sm font-semibold tracking-[0.2em] mb-4 block">
            ATENDEMOS CURITIBA E REGIÃO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950">
            Onde <span className="text-blue-500">atendemos</span>?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {areas.map((area, i) => (
            <motion.div
              key={area.tag}
              className={`relative bg-white rounded-2xl p-8 border-2 ${area.border} shadow-sm hover:shadow-xl transition-all duration-500 group cursor-default ${
                area.featured ? "ring-2 ring-blue-400/40" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              {area.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-md">
                    MAIS SOLICITADO
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.accent} flex items-center justify-center text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                {area.icon}
              </div>

              {/* Tag */}
              <span className="text-xs font-bold tracking-widest text-blue-400 mb-3 block">
                {area.tag}
              </span>

              <h3 className="text-lg font-bold text-blue-950 mb-4 leading-snug">
                {area.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 rounded-b-2xl bg-gradient-to-r ${area.accent}`}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href={WHATS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.875L0 24l6.29-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.213-3.727.895.927-3.624-.234-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            AGENDAR ATENDIMENTO
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
