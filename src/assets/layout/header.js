export default function Header () {
  return (
    <header
      id="Header"
      class="flex text-black content-center w-11/12 p-0 m-0 md:w-10/12 bg-[white] rounded-[20px] ml-auto mr-auto m-24 shadow-2xl mt-[4vh] tex-sm md:text-xl h-14"
    >
      <div
        id="conteudo"
        class="content-center gap-[44%] flex justify-between m-auto w-11/12 h-3/4"
      >
        <img src="" alt="logo" class="m-auto" />
        <ul class="flex gap-[1%] w-3/6">
          <li class="h-max m-auto">
            <a href="./" class="w-full">Projeto Integrador</a>
          </li>
          <li class="h-max m-auto">
            <a href="./">Sobre</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
