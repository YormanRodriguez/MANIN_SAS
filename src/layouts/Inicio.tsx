import Carrusel from "../components/Carrusel/Carrusel"
import Navegacion from "../ui/Inicio/Navegacion";
import Descripcion from "../ui/Inicio/DescripcionSecond";


function Inicio() {
  
  return (
    <>
      <Navegacion />
      <Descripcion />
       
      <main>
        <div className="flex justify-center bg-[#eee6d9]">
          <Carrusel />
        </div>
        
      </main>
      
    </>
  )
}

export default Inicio;
