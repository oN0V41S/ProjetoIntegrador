import "./App.css";
import Layout from "./layout";

import Titulo from "./assets/home/titulo";
import Unidades from "./assets/home/unidades";

import ProjetoIntegrador from "./assets/home/projetointegrador";

export default function App() {
  return (
    <Layout>
      <Titulo />
      <Unidades/>
      <ProjetoIntegrador/>
    </Layout>
  );
}
