export default function ProjetoIntegrador() {
  return (
    <section
      id="pIntegrador"
      className="w-11/12 m-auto bg-card1 rounded-nm grid mt-16 mb-16"
    >
      <h1 className="w-max ml-auto mr-auto text-2xl md:text-4xl mt-4 mb-4">
        Projeto Integrador
      </h1>
      <div className="w-full  p-4 rounded-nm min-h-[20vw] grid gap-20 md:gap-0 grid-cols-2">
        <input
          id="btnHare"
          type="radio"
          value="unidade"
          className="opacity-0 absolute pointer-events-none"
        />
        <label
          for="btnHare"
          className="h-max w-max bg-card2 p-2 rounded-md grid-cols-span-2"
        >
          HARE
        </label>

        <input
          id="btnSop"
          type="radio"
          value="unidade"
          className="opacity-0 absolute pointer-events-none"
        />
        <label
          for="btnSop"
          className="h-max w-max bg-card2 p-2 3 rounded-md grid-cols-span-2"
        >
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

        <div id="hare" className="hidden mt-4 grid md:grid-cols-2">
          <div>
            -=-=-=-=-=-=-=-=-Hardware utilizado-=-=-=-=-=-=-=-=- <br /> <br />
            Nome do dispositivo: DESKTOP-E2HH4LT <br />
            Processador: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz 1.38 GHz{" "}
            <br />
            RAM instalada: 8,00 GB (utilizável: 7,74 GB) <br />
            ID do dispositivo:E3A1A5D9-55B7-4FC5-901A-3B310A41172F <br />
            ID do Produto:00379-27783-95550-AAOEM <br />
            Tipo de sistema: Sistema operacional de 64 bits, processador baseado
            em x64 Caneta e toque: Nenhuma entrada à caneta ou por toque
            disponível para este vídeo <br />
            SSD: 237GB <br /> <br />
            -Softwares: <br /> <br />
            ~S.O.: Windows 10/Linux Ubunto; <br />
            ~Navegador: Google Chrome, Brave, OperaGX; <br />
            ~IDE: Eclpse, Visual Studio; <br />
            ~Maquina Virtual: Virtual Box; <br /> <br />
            -Redes: <br /> <br />
            -Acesso a rede: Rede Cabeada/ Wireless & Ethernet; <br />
            <div class="flex">
              -Internet:
              <ul class="ml-2">
                <li>IP Publico: 189.108.199.98</li>
                <li>IP Local: 10.105.71.134(Preferencial)</li>
                <li>Sub-rede: 255.255.255.128</li>
                <li>Gateway Padrão: 10.105.71.129</li>
                <li>Servidores DNS: 10.105.69.4</li>
              </ul>
            </div>
            <br />
            -Transporte: <br /> <br />
            Protocolo: <br /> <br />
            TCP: Transmission Control Protocol(protocolo de Controle de
            Transmissão) Porta 20 &emsp Protocolo responsável pelo trafego de
            informações pela internet. Todas as trocas de informações utilizadas
            neste projeto foram feitas usando este protocolo.
            <br />
            DNS: Domain Name System(Sistema de nomes de domínio) Porta 53 A
            principal função do DNS é traduzir os nomes de dominio para
            endereços IP. Dessa forma conseguimos criar um link para nossa
            pagina. -Aplicação: <br /> <br />
            Protocolos: <br /> <br />
            ~HTTPS: Hypertext Transfer Protocol Secure(Protocolo de
            Transferência de Hipertexto Seguro) porta 443; O HTTPS tem a função
            de Transferência de Dados e Solicitações e Respostas com o servidor
            atraves de um Hipertexto de forma segura e criptogragada. <br />{" "}
            <br />
            ~FTP: File Transfer Protocol(Protocolo de Transferência de Arquivos)
            Porta 21; Como o nome já diz a principal função deste protocolo é a
            Transferência de Arquivos entre o servidor e o cliente. Em nosso
            site utilizamos para carregar as imagens por exemplo.
          </div>
          <video
            src="https://example.com/video.mp4"
            controls
            autoplay
            loop
            className="w-full"
          />{" "}
        </div>
      </div>
    </section>
  );
}
