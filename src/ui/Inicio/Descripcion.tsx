import { textoInfo } from "../../utils/textoInfo";

export default function Historia() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-gradient-to-r from-[#eee6d9] text-center font-bold text-2xl p-3 w-full">📖 Nuestra historia: el origen de Mil Delicias 🍮✨</h1>
      <div className="flex justify-center flex-col gap-2 my-3">
        {
          textoInfo.map((info) => (
            <div className="bg-[#ECFADC] hover:bg-[#DDF2D1] transition-opacity px-3 duration-700 transform">
              <p className="text-justify max-w-[1000px] text-md py-5 px-3" key={info.id}>
                {info.descripcion}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
