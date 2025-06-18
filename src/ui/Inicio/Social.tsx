import { redes } from "../../lib/redes";

function Social() {

  return (
    <section id="contacts" className="bg-[#5B2A18] text-white flex flex-col items-center text-center py-10">
      {/* <div className="espacio-con"></div> */}
      <div className="contenido">
        <p className="text-lg px-2 pb-2">Síguenos en nuestras redes sociales o contáctanos para más información.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 flex-wrap md:py-10">
          {
            redes.map(red => {
              return (
                <a 
                  key={red.id} 
                  href={red.link} 
                  id="profile-link" 
                  target="_blank"
                  className="flex items-center justify-center gap-3 text-2xl hover:bg-blue-600 p-2 rounded-2xl"
                >
                  {red.icon}  
                  {red.nombre}
                </a>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Social;