import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const benefits = [
  {
    icon: "✨",
    tag: "LIMPEZA PROFUNDA",
    title: "Limpeza profunda do seu estofado",
    desc: "Nossos especialistas utilizam técnicas avançadas e produtos de alta qualidade para remover sujeiras profundas e manchas, deixando seus estofados com aparência renovada.",
    delay: 0,
  },
  {
    icon: "💨",
    tag: "ELIMINAÇÃO DE ODORES",
    title: "Eliminação eficaz de maus odores",
    desc: "Odores indesejados podem impregnar os estofados ao longo do tempo. Fique livre deste problema com a nossa higienização especializada que neutraliza na fonte.",
    delay: 0.12,
  },
  {
    icon: "🛡️",
    tag: "PROTEÇÃO PARA TODOS",
    title: "Proteção para toda a família",
    desc: "Ácaros, poeira e outros alérgenos acumulam nos estofados, causando reações alérgicas. Desfrute de um ambiente mais saudável e seguro para você e todos ao seu redor.",
    delay: 0.24,
  },
];

const stats = [
  { value: 99, suffix: "%", label: "Ácaros eliminados" },
  { value: 500, suffix: "+", label: "Clientes atendidos" },
  { value: 5, suffix: "★", label: "Estrelas de avaliação" },
  { value: 3, suffix: " anos", label: "De experiência" },
];

function AnimatedNumber({ value, suffix, inView }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
      className="text-4xl font-bold text-white"
      style={{ fontFamily: 'Sora, sans-serif' }}
    >
      {inView && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {value}{suffix}
        </motion.span>
      )}
    </motion.span>
  );
}

export default function Benefits() {
  const [ref, inView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.2);

  return (
    <>
      {/* Stats strip */}
      <div
        ref={statsRef}
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-12"
      >
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedNumber value={s.value} suffix={s.suffix} inView={statsInView} />
              <p className="text-blue-200 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits cards */}
      <section className="py-24 bg-blue-950 noise-overlay relative" ref={ref}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-700/20 blur-[120px]" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 text-sm font-semibold tracking-[0.2em] mb-3 block">
              POR QUE ESCOLHER A EMB
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Benefícios de uma limpeza{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                profissional
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.tag}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 rounded-2xl p-8 transition-all duration-500 cursor-default"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: b.delay }}
                whileHover={{ y: -6 }}
              >
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {b.icon}
                </div>
                <span className="text-xs font-bold tracking-widest text-blue-400 block mb-3">
                  {b.tag}
                </span>
                <h3 className="text-white font-bold text-lg mb-4 leading-snug">
                  {b.title}
                </h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
