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
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-auto m-auto">
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

export function Unidade({ id, titulo, srcIcon, srcSkills, info }) {
  return (
    <div
      id={id}
      class="rounded-2xl w-10/12 md:w-[90%] xl:w-[70vh] h-max m-auto md: bg-[#DB8A98]"
    >
      <div class="bg-[#CA546A] rounded-xl">
        <div
          id="titulo"
          class="bg-[#C0334D] w-full min-h-[15vh] md:min-h-[12vh] xl:min-h-[20vh] flex justify-between rounded-xl"
        >
          <h1 class="capitalize text-3xl md:text-4xl lg:text-3xl p-4 text-start h-max self-center rounded-xl">
            {titulo}
          </h1>
          <img
            src={srcIcon}
            alt=""
            class="w-[28px] md:w-[65px] h-[28px] md:h-[65px] self-end m-4"
          />
        </div>
        <div id="info" class="w-full pt-5 min-h-[22vh] md:min-h-[16vh] xl:min-h-[28vh] pb-5">
          <p class="text-sm md:text-xl xl:text-sm p-5">{info}</p>
        </div>
      </div>
      <div id="skills" class="p-2 z-1">
        <h1 class="w-max m-auto text-xl">Skills</h1>
        <div class="flex justify-around p-5">
          <img src={srcSkills} class="w-[380px]" alt="" />
        </div>
      </div>
    </div>
  );
}
