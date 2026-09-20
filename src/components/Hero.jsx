import { motion } from "framer-motion";

const WHATS_URL = "https://wa.me/message/APCRMGCYRVWVK1";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 8 + 4,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 3,
}));

const stats = [
  { value: "99%", label: "Ácaros eliminados" },
  { value: "500+", label: "Clientes atendidos" },
  { value: "5★", label: "Avaliação média" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-blue-950 noise-overlay">
      {/*
        Gradient mesh background — antes usava `filter: blur(80-120px)`
        em divs sólidas. Blur com raio grande é uma das operações mais
        caras pro Safari/iOS renderizar (força fallback por CPU e trava
        a thread principal por segundos). Trocado por radial-gradient:
        visualmente é o mesmo efeito de brilho suave, mas sem nenhum
        custo de filtro — é só um gradiente estático.
      */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(29,78,216,0.35) 0%, rgba(29,78,216,0) 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0) 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0) 70%)",
          }}
        />
      </div>

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(147,197,253,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Main content — ocupa o espaço disponível (flex-1) e fica
          centralizado nele, empurrando as estatísticas pro final da tela */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto px-6 text-center pt-20 pb-8 min-w-0 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-xs tracking-[0.2em] font-medium">
            ATENDEMOS CURITIBA E REGIÃO
          </span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight break-words"
          >
            Higienização{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                &
              </span>
            </span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 leading-tight break-words"
          >
            impermeabilização
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-blue-200/80 text-lg md:text-xl max-w-xl mx-auto mb-12"
        >
          Tecnologia profissional para eliminar sujeiras, odores e ácaros.
          Resultados visíveis na primeira sessão.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href={WHATS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-base shadow-2xl btn-glow"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              className="w-6 h-6 fill-white flex-shrink-0"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.875L0 24l6.29-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.213-3.727.895.927-3.624-.234-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            FAZER ORÇAMENTO GRÁTIS
          </motion.a>
          <a
            href="#estofados"
            className="text-blue-300 text-sm font-medium hover:text-white transition-colors flex items-center gap-2"
          >
            Ver nossos serviços
            <span className="text-lg">↓</span>
          </a>
        </motion.div>
      </div>

      {/* Stats bar — bloco separado, empurrado pro final da seção pelo
          flex-1 do bloco principal acima. Sempre em linha (mesmo no
          mobile), com tamanhos reduzidos pra caber sem quebrar. */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 flex flex-row justify-center items-start gap-6 sm:gap-16 max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-10 sm:pb-8 border-t border-blue-400/20 w-full"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center flex-1 sm:flex-none min-w-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + i * 0.1 }}
          >
            <p
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              {stat.value}
            </p>
            <p className="text-blue-300/70 text-[10px] sm:text-xs tracking-wide mt-1 leading-tight">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}