import '../../css/test.css'

export default function ProjetoIntegrador() {
  return (
    <section>
      <div className="w-10/12 m-auto bg-card1 rounded-nm grid mt-10">
        <h1 className="w-max ml-auto mr-auto text-2xl md:text-4xl mt-4 mb-4"> Projeto Integrador </h1>
        <div className="bg-card2 w-full p-4 rounded-nm grid md:grid-cols-2">
          <div>
            <label for="">HARE</label>
            <input type="checkbox" className="checked:hidden"/>
          </div>
        <div className="">
          Texto SOP
        </div>
        <div>
          Texto HARE
        </div>
        </div>
      </div>
    </section>
  );
}
