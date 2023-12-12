import logo from '../../static/header/devwizards.png'

export default function Header () {
  return (
    <header
      id="Header"
      class="flex text-black content-center w-11/12 p-0 m-0 bg-[white] rounded-[20px] ml-auto mr-auto m-24 shadow-2xl mt-[4vh] tex-sm md:text-xl h-14"
    >
      <div
        id="conteudo"
        class="content-center gap-14 md:gap-12 flex justify-between m-auto w-11/12 h-3/4"
      >
        <img src={logo} alt="logo" class="w-[120px] rounded-md" />
        <ul class="flex gap-[1%] w-3/6">
          <li class="h-max m-auto">
            <a href="#pIntegrador" class="w-full">Projeto Integrador</a>
          </li>
          <li class="h-max m-auto">
            <a href="#footer">Sobre</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
