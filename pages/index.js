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
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
