export default function Titulo(){
    return(
        <section id="titulo" class=" w-full md:w-auto md:ml-28 md:mr-14 m-auto gap-4 grid mb-40 md:mb-64">
        <h1 class="text-5xl font-bold w-full">
          Unidades Curriculares <br />
          do Primeiro Semestre
        </h1>
        <p class="font-normal w-[80%] md:w-4/12">
          Abaixo, você terá acesso a todas as unidades curriculares oferecidas,
          permitindo uma visão abrangente das disciplinas que compõem nosso
          programa educacional.
        </p>
        <a
          id="btnPIntegrador"
          href="./pIntegrador.html"
          class="bg-black text-white pl-4 p-2 pr-4 w-5/12 md:w-3/12 rounded-md"
          >Projeto Integrador</a>
      </section>
    )
}