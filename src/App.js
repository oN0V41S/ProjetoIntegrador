import "./App.css";
import Layout from "./layout.js";

import Titulo from "./assets/home/titulo.js";
import Unidades from "./assets/home/unidades.js";

import ProjetoIntegrador from "./assets/home/projetointegrador.js";

export default function Home() {
  return (
    <Layout>
      <Titulo />
      <Unidades/>
      <ProjetoIntegrador/>
    </Layout>
  );
}
