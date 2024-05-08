import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Lameiras Leal - Gabinete de Contabilidade</title>
        <meta
          name="description"
          content="Lameiras Leal - Gabinete de Contabilidade"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="QUEM SOMOS"
        title="Somos uma empresa dedicada a fornecer serviços de contabilidade confiáveis e soluções financeiras inteligentes para empresas e indivíduos."
      >
        A nossa missão é oferecer uma base sólida e serviços abrangentes que
        possibilitem aos empreendedores navegar com confiança no cenário
        contabilistico, empresarial e fiscal{" "}
        <span className="text-lightBlue">português</span>. Com localização na
        área metropolitana de <span className="text-lightBlue">Lisboa</span>,
        possuimos um vasto conhecimento e experiência, cujo foco é fornecer
        serviços personalizados a cada cliente.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
