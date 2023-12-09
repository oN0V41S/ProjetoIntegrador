import "../../css/teste.css";

export default function ProjetoIntegrador() {
  return (
    <section>
      <div className="w-10/12 m-auto bg-card1 rounded-nm grid mt-10">
        <h1 className="w-max ml-auto mr-auto text-2xl md:text-4xl mt-4 mb-4">
          Projeto Integrador
        </h1>
        <div className="bg-card2 w-full p-4 rounded-nm min-h-[20vw] grid md:grid-cols-2">
          <div>
            <label for="" className="focus">HARE</label>
            <input id="checkboxHARE" type="checkbox" />
            <div id="hare" className="hidden">
              Texto HARE
            </div>
          </div>
          <div>
            <label for="">SOP</label>
            <input id="checkboxSOP" type="checkbox" />
            <div id="sop" className="hidden">
              Texto SOP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
