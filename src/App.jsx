import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceAreas from "./components/ServiceAreas";
import ServiceSection from "./components/ServiceSection";
import Benefits from "./components/Benefits";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const services = [
  {
    id: "estofados",
    tag: "NOSSOS SERVIÇOS",
    title: "Higienização especializada de estofados.",
    description: "Removemos manchas, odores, ácaros, fungos e bactérias. Atendimento residencial e corporativo com equipamentos profissionais.",
    items: ["Sofás e poltronas","Colchões e cabeceiras","Cadeiras estofadas","Puffs e recamiers","Bancos automotivos"],
    reverse: false,
    images: ["bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700","bg-gradient-to-br from-cyan-400 to-blue-600","bg-gradient-to-br from-blue-500 to-blue-800"],
  },
  {
    id: "protecao",
    tag: "NOSSOS SERVIÇOS",
    title: "Proteção Antimanchas (Impermeabilização).",
    description: "Proteja seus estofados contra líquidos e sujeiras do dia a dia. Criamos uma barreira invisível que facilita a limpeza e aumenta a durabilidade do tecido.",
    items: ["Proteção contra líquidos","Ajuda a evitar manchas permanentes","Mantém o tecido respirável","Maior durabilidade do estofado","Ideal para ambientes com crianças e pets"],
    reverse: true,
    images: ["bg-gradient-to-br from-indigo-400 to-blue-700","bg-gradient-to-br from-blue-300 to-cyan-600","bg-gradient-to-br from-slate-500 to-blue-700"],
  },
  {
    id: "tapetes",
    tag: "NOSSOS SERVIÇOS",
    title: "Restauração de Tapetes.",
    description: "Recuperamos a aparência e maciez dos seus tapetes com técnicas especializadas. Tratamento profundo para renovação completa das fibras.",
    items: ["Remoção de manchas profundas","Eliminação de odores","Revitalização das fibras","Recuperação das cores","Tratamento antibacteriano"],
    reverse: false,
    images: ["bg-gradient-to-br from-teal-400 to-blue-600","bg-gradient-to-br from-blue-400 to-indigo-600","bg-gradient-to-br from-cyan-500 to-blue-700"],
  },
];

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServiceAreas />
      {services.map((s) => (
        <ServiceSection key={s.id} {...s} />
      ))}
      <Benefits />
      <Results />
      <Testimonials />
      <Footer />
    </div>
  );
}
