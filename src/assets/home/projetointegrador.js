import "../../css/teste.css";

export default function ProjetoIntegrador() {
  return (
    <section
      id="pIntegrador"
      className="w-9/12 m-auto bg-card1 rounded-nm grid mt-16 mb-16"
    >
      <h1 className="w-max ml-auto mr-auto text-2xl md:text-4xl mt-4 mb-4">
        Projeto Integrador
      </h1>
      <div className="w-4/12 ml-8 p-4 rounded-nm min-h-[20vw] grid gap-20  md:gap-0 grid-cols-2">
        <input
          id="btnHare"
          type="radio"
          value="unidade"
          className="opacity-0 absolute pointer-events-none"
        />
        <label for="btnHare" className="h-max w-max bg-card2 p-2 rounded-md">
          HARE
        </label>

        <input
          id="btnSop"
          type="radio"
          value="unidade"
          className="opacity-0 absolute pointer-events-none"
        />
        <label for="btnSop" className="h-max w-max bg-card2 p-2 3 rounded-md">
          SOP
        </label>

        <div id="sop" className="hidden col-span-2 mt-4">
          Texto SOP
          <video
            src="https://example.com/video.mp4"
            controls
            autoplay
            loop
            className="w-full"
          />
        </div>

        <div id="hare" className="hidden col-span-2 mt-4">
          Texto HARE
        </div>
      </div>
    </section>
  );
}
