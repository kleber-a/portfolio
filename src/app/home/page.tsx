import MyWindow from "@/components/my-window/page";

export default function Home() {
    return (
        <div>
     {/* <MyWindow
        id={'experience-window'}
        title={'💼 Experiência'}
        defaultPosition={{ x: 50, y: 50 }} // <--- CORRETO: Envolvido em chaves duplas
        defaultSize={{ width: '400px', height: '300px' }} // <--- CORRETO: Envolvido em chaves duplas
 
        zIndex={0} // Também corrigi zIndex para number, como esperado no componente MyWindow do exemplo anterior
      >
        <div className="bg-white font-black">
          teste
        </div>
      </MyWindow> */}

         <MyWindow
        title="Meus Arquivos"
        defaultPosition={{ x: 200, y: 150 }}
        defaultSize={{ width: 400, height: 300 }}
      >
        <p className="text-white">
          Bem-vindo aos meus arquivos! 📁
          <br />
          Aqui você pode colocar qualquer conteúdo: texto, imagens, botões, ou até outro componente React.
        </p>
      </MyWindow>


        </div>
    )
}