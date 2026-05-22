import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const WHATS_URL = "https://wa.me/message/APCRMGCYRVWVK1";

export default function Footer() {
  const [ref, inView] = useInView(0.1);

  return (
    <footer
      id="contato"
      ref={ref}
      className="bg-blue-950 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/10 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top CTA strip */}
        <motion.div
          className="py-16 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Pronto para ter um estofado novo?
            </h3>
            <p className="text-blue-300/70">
              Entre em contato agora e receba um orçamento gratuito.
            </p>
          </div>
          <motion.a
            href={WHATS_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg whitespace-nowrap btn-glow flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.535 5.875L0 24l6.29-1.509A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.213-3.727.895.927-3.624-.234-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            FALAR NO WHATSAPP
          </motion.a>
        </motion.div>

        {/* Bottom */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white p-1 rounded-full">
              <img
                src="/logoSF.png"
                alt="EMB Higienizações"
                className="h-20 w-auto brightness-110 drop-shadow-lg"
              />
            </div>
            <div>
              <p
                className="font-bold text-white text-sm"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                EMB Higienização
              </p>
              <p className="text-blue-400 text-xs tracking-wider">
                CURITIBA E REGIÃO
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-blue-300">
            <span className="text-xl">📞</span>
            <a
              href="tel:41992618508"
              className="font-medium hover:text-white transition-colors"
            >
              (41) 99261-8508
            </a>
          </div>

          {/* Copyright */}
          <p className="text-blue-400/60 text-xs text-center">
            © 2026 EMB Higienização · Desenvolvido por Pedro Toppel
          </p>
        </div>
      </div>
    </footer>
  );
}
