import iconGithub from "../../static/footer/github.png";
import senai from "../../static/footer/senai.svg";
import iconLinkedin from "../../static/footer/linkedin.png";

// Devs
import avAnderson from "../../static/footer/Avatar-Anderson.svg";
import avDaniel from "../../static/footer/Avatar-Daniel.svg";
import avHiago from "../../static/footer/Avatar-Hiago.svg";
import avLucas from "../../static/footer/Avatar-Lucas.svg";
import avRafael from "../../static/footer/Avatar-Rafael.svg";

export default function Footer() {
  return (
    <footer id="footer" class="py-14 bg-[#000]">
      <div
        id="fundo"
        class="flex flex-col justify-around items-center text-white w-10/12 bg-[#202020] m-auto text-xl mt-6 p-6"
      >
        <div id="titulo" class="m-auto w-11/12 h-3/4 mb-5">
          <h1 class="w-max m-auto">Criado e desenvolvido por:</h1>
        </div>

        <div
          id="avatar-container"
          class="grid grid-cols-1 md:grid-cols-5 gap-8 items-center justify-between"
        >
          <Devs
            avatar={avAnderson}
            name="Anderson"
            github="http://github.com/andersonbs96"
            linkedin="http://www.linkedin.com/in/anderson-brito-05a8a4181"
          />
          <Devs
            avatar={avDaniel}
            name="Daniel"
            github="https://github.com/ren-angel"
            linkedin="https://br.linkedin.com/in/daniel-medrado-de-morais-79073b299"
          />
          <Devs
            avatar={avHiago}
            name="Hiago"
            github="https://github.com/HyRss"
            linkedin="https://www.linkedin.com/in/hiago-r-santos-b20ba5277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <Devs
            avatar={avLucas}
            name="Lucas"
            github="https://github.com/LucasVasconcelosDev"
            linkedin="https://www.linkedin.com/in/lucas-vasconcelos-1a030920a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <Devs
            avatar={avRafael}
            name="Rafael"
            github="https://github.com/oN0V41S"
            linkedin="https://www.linkedin.com/in/rafaelnovais042?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
        </div>
        <div
          id="senai"
          class="bg-[#545454] flex justify-around items-center w-full mt-6 p-6"
        >
          <img class="" src={senai} alt="Logo SENAI" />
        </div>
      </div>
    </footer>
  );
}

export function Devs({ name, github, linkedin, avatar }) {
  return (
    <div
      id="avatar"
      class="flex flex-col items-center m-auto gap-4 w-max mb-8 md:mb-2"
    >
      <img class="w-40 md:w-24 lg:w-36" src={avatar} alt="avatar" />
      <h2 class="bg-[#D9D9D9] p-1  pl-4 pr-4 rounded-xl text-black">{name}</h2>
      <div id="espaçamento" class="flex gap-2">
        <a href={github} className="pointer-auto">
          <img src={iconGithub} alt="github Avatar1" />
        </a>
        <a href={linkedin}>
          <img src={iconLinkedin} alt="linkedin Avatar1" />
        </a>
      </div>
    </div>
  );
}
