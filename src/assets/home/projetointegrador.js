import "../../css/teste.css";

export default function ProjetoIntegrador() {
  return (
    <section className="w-10/12 m-auto bg-card1 rounded-nm grid mt-10">
      <h1 className="w-max ml-auto mr-auto text-2xl md:text-4xl mt-4 mb-4">
        Projeto Integrador
      </h1>
      <div className="bg-card2 w-full p-4 rounded-nm min-h-[20vw] gap-4">
        <input
          id="btnHare"
          type="radio"
          value="Unidade"
          className="opacity-0 absolute pointer-events-none bg-card3"
        />
        <label for="btnHare" className="h-max w-max">HARE</label>

        <input
          id="btnSop"
          type="radio"
          value="Unidade"
          className="opacity-0 absolute pointer-events-none"
        />
        <label for="btnSop">SOP</label>

        <div id="hare" className="hidden">
          Texto HARE
        </div>

        <div id="sop" className="hidden">
          Texto SOP
        </div>
      </div>
    </section>
  );
}
