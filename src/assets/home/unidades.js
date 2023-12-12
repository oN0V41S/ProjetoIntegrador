import Unidade from "./unidade.js";

import icon1 from "../../static/unidades/FPOO/icon-java.png";
import skiils1 from "../../static/unidades/FPOO/skillsFPOO.png";
import icon2 from "../../static/unidades/HARE/icon-processador.png";
import skiils2 from "../../static/unidades/HARE/skillsHARE.png";
import icon3 from "../../static/unidades/SOP/icon-linux.png";
import skiils3 from "../../static/unidades/SOP/skillsSOP.png";
import icon4 from "../../static/unidades/LIMA/icon-html.png";
import skiils4 from "../../static/unidades/LIMA/skillsLIMA.png";

export default function Unidades() {
  return (
    <section id="Unidades">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-auto m-auto">
        <Unidade
          id="unidadeFPOO"
          titulo="Fudamentos de Programação orientada a objeto"
          info="Desenvolver aplicações Java como linguagem de programação.Também desenvolve capacidades socioemocionais como trabalho em equipe e resolução de problemas."
          srcIcon={icon1}
          srcSkills={skiils1}
        />
        <Unidade
          id="unidadeHARE"
          titulo="hardware e redes"
          info="Capacitar para o preparo do ambiente de hardware e redes para o funcionamento de sistemas computacionais. Atividades envolvem instalação e configuração de periféricos, sistemas operacionais e serviços de rede."
          srcIcon={icon2}
          srcSkills={skiils2}
        />
        <Unidade
          id="UnidadeSOP"
          titulo="Sistemas Operacionais"
          info="Ensinar sobre a estrutura, funcionamento, instalação,
          configuração e operação de sistemas operacionais de código
          aberto e fechado."
          srcIcon={icon3}
          srcSkills={skiils3}
        />
        <Unidade
          id="UnidadeLIMA"
          titulo="Linguagem de Marcação"
          info="Criar websites, utilizando linguagem de marcação e CSS.As atividades envolvem a criação de websites pessoais ou fictícios."
          srcIcon={icon4}
          srcSkills={skiils4}
        />
      </div>
    </section>
  );
}
