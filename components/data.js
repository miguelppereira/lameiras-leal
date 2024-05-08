import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Como podemos ajuda-lo?",
  desc: "A nossa missão é contribuir para o aumento da rentabilidade e definição de orientações estratégicas dos nossos clientes pela conceção, desenvolvimento e melhoria do sistema de informação económica e financeira.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Assistência Fiscal",
      desc: "Execução de obrigações e declarações fiscais, processamento e envio via Internet de todas as declarações fiscais respeitando os prazos legais tais como: Declarações de IVA, Retenções de IRS/IRC e Segurança Social.",
    },
    {
      title: "Processamento de Salários",
      desc: "Recibos de Vencimento, Folhas de Remuneração e guias de pagamento à Segurança Social.",
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Não desperdice mais tempo.",
  desc: "Prometemos um atendimento breve nos seguintes canais:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Chat",
      desc: "Escreva-nos uma mensagem, basta clicar no botão situado no canto inferior esquerdo do seu ecrã.",
    },
    {
      title: "Morada",
      desc: "Rua Cidade de Pinhel 12A, 2835-076 Baixa da Banheira, Portugal",
    },
    {
      title: "Email e telefone",
      desc: "gabcontalameirasleal@gmail.com     |    +351 938 692 166",
    },
  ],
};

export { benefitOne, benefitTwo };
