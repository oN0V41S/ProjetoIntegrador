import videoSOP from '../../static/pintegrador/sop.mp4'

export default function ProjetoIntegrador() {
  return (
    <section
      id="pIntegrador"
      className="w-11/12 m-auto bg-card1 rounded-nm grid mt-16 mb-16 p-12"
    >
      <h1 className="w-max ml-auto mr-auto text-2xl md:text-4xl mt-4 mb-4">
        Projeto Integrador
      </h1>
      <div className="w-full  p-4 rounded-nm min-h-[20vw] gap-8">
        <input
          id="btnHare"
          type="radio"
          value="unidade"
          className="opacity-0 absolute pointer-events-none"
        />
        <label
          for="btnHare"
          className="h-max w-max bg-card2 p-2 ml-4 rounded-md grid-cols-span-2"
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
          className="h-max w-max bg-card2 p-2 ml-4 rounded-md grid-cols-span-2"
        >
          SOP
        </label>

        <div id="sop" className="hidden mt-4 mb-4 flex bg-card2 p-5 rounded-md">
          <div className="mb-8">
            1. Baixar e Instalar o VirtualBox e a ISO do Linux Ubuntu: Baixe e
            instale o VirtualBox do site oficial. Baixe a iso do Linux Ubuntu
            (22.04.3 LTS) do site oficial. <br />
            2. Configurar uma nova máquina virtual no VirtualBox: Abra o
            VirtualBox. Clique em "Novo" para criar uma nova máquina virtual.
            Siga o assistente para configurar a máquina virtual (nome, tipo e
            versão do sistema operacional, memória RAM, e disco rígido virtual).
            Na guia "Armazenamento", selecione o arquivo ISO do Ubuntu que você
            baixou. <br />
            3. Instalar o Ubuntu na máquina virtual: Inicie a máquina virtual.
            Siga as instruções na tela para instalar o Ubuntu. <br />
            4. Configurar o Ubuntu na máquina virtual: Conclua a instalação do
            Ubuntu, incluindo a criação de um usuário e senha. 5. Instalação do
            Oracle JDK via Arquivo .deb: <br />
            5.1 Acesse o Site da Oracle: Abra seu navegador e vá para a página
            de downloads da Oracle. <br />
            5.2. Download do JDK: Na seção "JDK Download", escolha a versão do
            JDK que deseja instalar (baixe a última versão ou a que for
            recomendada). Aceite os termos de uso e clique no botão de download
            adequado ao seu sistema operacional. <br />
            5.3. Aceitar os Termos de Licença: Após o download, você pode ser
            redirecionado para uma página onde precisa aceitar os termos de
            licença da Oracle. Faça isso para prosseguir. <br />
            5.4. Baixar o Arquivo .deb e instale: Na página de download real,
            escolha a versão do JDK e do sistema operacional Linux específicos.
            Baixe o arquivo .deb correspondente. Após baixar, instale em sua
            máquina via “Ubuntu Software”. <br />
            6. Instalar o Visual Studio Code no Ubuntu: No Ubuntu, abra a "Loja
            de Aplicativos" (Ubuntu Software). Pesquise por "Visual Studio
            Code". Selecione o Visual Studio Code na lista e clique em
            "Instalar". <br />
            7. Abrir o Visual Studio Code: Após a instalação, abra o Visual
            Studio Code a partir do menu de aplicativos. <br />
            7.1 . Instalar o Extension Pack do Java: Abra o Visual Studio Code e
            vá para a seção de extensões (clique no ícone de quadrado no painel
            lateral esquerdo ou pressione Ctrl+Shift+X). Pesquise por "Java
            Extension Pack" e instale a extensão que é fornecida pela Microsoft.{" "}
            <br />
            7.2. Criar ou Abrir um Projeto Java: Crie um novo projeto Java ou
            abra um projeto existente no Visual Studio Code. <br />
            7.3. Instalar a Extensão Debugger for Java: No Visual Studio Code,
            vá para a seção de extensões, pesquise por "Debugger for Java" e
            instale a extensão. <br />
            7.4. Executar e Depurar o Código: Abra um arquivo Java no Visual
            Studio Code, configure breakpoints conforme necessário e execute ou
            depure seu código usando as opções na barra lateral ou pressionando
            F5 para depuração. Com esses passos, você deve ter configurado o
            Visual Studio Code para o desenvolvimento em Java na sua máquina
            virtual Ubuntu. Lembre-se de ajustar os caminhos conforme
            necessário, dependendo da versão do JDK que você instalou.
          </div>
          <video
            src={videoSOP}
            controls
            autoplay
            loop
            className="w-full"
          />
        </div>

        <div
          id="hare"
          className="hidden mt-4 mb-4 flex bg-card2 p-5 rounded-md"
        >
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
        </div>
      </div>
    </section>
  );
}
