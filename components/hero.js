import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.svg";
import rectangle from "../public/img/rectangle.svg";
import portugal from "../public/img/portugal.svg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap bg-lightBlue max-w-full">
        <div className="flex items-center w-full lg:pl-20 lg:w-1/2">
          <div className="max-w-2xl mb-8 pt-6">
            <h1 className="text-4xl text-white leading-snug tracking-tight text-gray-800 lg:text-xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              Serviços de Contabilidade.
              <br />
              Aconselhamento Fiscal, Estratégio e Financeiro.
              <span>
                <Image
                  src={rectangle}
                  alt="rectangle"
                  className="w-32 h-32 pt-2"
                />
              </span>
            </h1>
            <span>
              <Image
                src="/img/branding.svg"
                alt="Logo"
                width="128"
                height="128"
                className="w-64 pt-4"
              />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Merecemos a confiança de <span className="text-cyanBlue">30+</span>{" "}
            empresas em Portugal
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
