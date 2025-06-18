import useInterval from "./useInterval"
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import { useState, Suspense } from "react";

const MotionImage = motion.img

function CarruselContent() {
  const [loading, setLoading] = useState(true);
  const { 
    count, 
    carruselImg, 
    nextImage, 
    prevImage,
    moveImage 
  } = useInterval();

  return (
    <div className="relative h-auto w-auto max-w-[800px] aspect-[3/4] flex items-center justify-center overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="animate-spin rounded-full h-10 w-10 border-4 border-black border-t-transparent"></span>
        </div>
      )}
      <AnimatePresence mode="wait">
        <MotionImage 
          key={count} 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setLoading(false)}
          className="h-full"
          src={carruselImg[count]} width="2000" height="10" alt={`Carrusel ${count}`} />
      </AnimatePresence>
      <div className="absolute inset-0">
        <button onClick={prevImage}><IoIosArrowBack className="size-12 max-[400px]:size-7 text-white hover:text-black hover:stroke-white stroke-black stroke-20 absolute left-3 top-[45%]" /></button>
        <button onClick={nextImage}><IoIosArrowForward className="size-12 max-[400px]:size-7 text-white hover:text-black hover:stroke-white stroke-black stroke-20 absolute right-3 top-[45%]"/></button>
      </div>
      <div id="indicador" className="absolute bottom-4 w-full flex justify-center">
        {
          carruselImg.map((_, i) => (
          <div 
            key={i} 
            onClick={() => moveImage(i)}
            className={`size-4 max-[400px]:size-3 rounded-full mx-1 cursor-pointer ${i === count ? "bg-blue-300 scale-125" : "bg-[rgb(151,151,151)]"}`}>
          </div>) ) 
        }
      </div>
    </div>
  )
}

export default function Carrusel() {
  return (
    <Suspense fallback={<p className="flex justify-center">Cargando...</p>}>
      <CarruselContent />
    </Suspense>
  );
}