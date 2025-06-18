import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const codigo = ["col-1434", "col-3211", "col-1221", "col-5678", "col-9876"];

const CustomWheel = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState('');
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);

  useEffect(() => {
    if (!id || !codigo.includes(id)) navigate('/');

  }, []);

  // Configuración fija de elementos con diferentes pesos
  const wheelItems = [
    { text: 'Descuento 30%', weight: 1, color: '#ebdc0b' },
    // { text: 'Mala suerte', weight: 5, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 20%', weight: 1, color: '#4ECDC4' },
    // { text: 'Mala suerte', weight: 3, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 40%', weight: 1, color: '#0df01a' },
    // { text: 'Mala suerte', weight: 3, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 30%', weight: 1, color: '#ebdc0b' },
    // { text: 'Mala suerte', weight: 6, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 20%', weight: 1, color: '#4ECDC4' },
    // { text: 'Mala suerte', weight: 4, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 50%', weight: 1, color: '#963EB4' },
    // { text: 'Mala suerte', weight: 4, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 30%', weight: 1, color: '#ebdc0b' },
    // { text: 'Mala suerte', weight: 2, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 20%', weight: 1, color: '#4ECDC4' },
    // { text: 'Mala suerte', weight: 5, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 40%', weight: 1, color: '#0df01a' },
    // { text: 'Mala suerte', weight: 4, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 20%', weight: 1, color: '#4ECDC4' },
    // { text: 'Mala suerte', weight: 3, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Mala suerte', weight: 1, color: '#FF6B6B' },
    { text: 'Descuento 50%', weight: 1, color: '#963EB4' },
  ];

  // Calcular el total de peso y crear segmentos
  const totalWeight = wheelItems.reduce((sum, item) => sum + item.weight, 0);
  
  const segments = wheelItems.map((item, index) => {
    const percentage = (item.weight / totalWeight) * 100;
    const angle = (item.weight / totalWeight) * 360;
    return {
      ...item,
      percentage,
      angle,
      index
    };
  });

  // Función para girar la ruleta
  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult('');

    // Generar rotación aleatoria (mínimo 5 vueltas completas)
    const spins = Math.floor(Math.random() * 5) + 5;
    const finalAngle = Math.random() * 360;
    const totalRotation = rotation + (spins * 360) + finalAngle;

    setRotation(totalRotation);

    // Calcular el resultado después de la animación
    setTimeout(() => {
      const normalizedAngle = (360 - (totalRotation % 360)) % 360;
      let currentAngle = 0;
      
      for (const segment of segments) {
        currentAngle += segment.angle;
        if (normalizedAngle <= currentAngle) {
          setResult(segment.text);
          document.body.style.overflowY = "hidden";
          break;
        }
      }
      
      setIsSpinning(false);
    }, 3000);
  };

  // Crear el SVG de la ruleta
  const createWheelSVG = () => {
    let cumulativeAngle = 0;
    
    return segments.map((segment, index) => {
      const startAngle = cumulativeAngle;
      const endAngle = cumulativeAngle + segment.angle;
      cumulativeAngle = endAngle;

      // Convertir ángulos a radianes
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      // Calcular puntos del arco
      const largeArcFlag = segment.angle > 180 ? 1 : 0;
      const x1 = 200 + 180 * Math.cos(startRad);
      const y1 = 200 + 180 * Math.sin(startRad);
      const x2 = 200 + 180 * Math.cos(endRad);
      const y2 = 200 + 180 * Math.sin(endRad);

      const pathData = [
        `M 200 200`,
        `L ${x1} ${y1}`,
        `A 180 180 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        `Z`
      ].join(' ');

      // Calcular posición del texto
      const textAngle = startAngle + segment.angle / 2;
      const textRad = (textAngle * Math.PI) / 180;
      const textX = 200 + 120 * Math.cos(textRad);
      const textY = 200 + 120 * Math.sin(textRad);

      return (
        <g key={index}>
          <path
            d={pathData}
            fill={segment.color}
            stroke="#fff"
            strokeWidth="3"
          />
          <text
            x={textX}
            y={textY}
            fill="#333"
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            transform={`rotate(${textAngle}, ${textX}, ${textY})`}
          >
            {segment.text}
          </text>
        </g>
      );
    });
  };

  const leaveResult = () => {
    setResult('');
    document.body.style.overflowY = "auto";
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-8 bg-gradient-to-l from-purple-800 w-full py-3 flex items-center justify-center">
        <h1 className="text-2xl font-bold drop-shadow-lg w-full">
          🎰 Ruleta de la Suerte
        </h1>
      </div>

      <div className="flex flex-col items-center">
        {/* Ruleta */}
        <div className="relative">
          {/* Indicador */}
          <div className="absolute rotate-90 max-[410px]:left-[calc(53%)] max-[410px]:top-[calc(50%-10px)] min-[410px]:right-[-15px] min-[410px]:top-1/2 min-[410px]:rotate-270 z-10">
            <div className="w-0 h-0 border-l-10 border-r-10 border-b-20 border-l-transparent border-r-transparent border-[#333] drop-shadow-lg"></div>
          </div>
          
          {/* Ruleta SVG */}
          <div 
            ref={wheelRef}
            className="transform transition-transform duration-[3000ms] ease-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <svg 
              viewBox="0 0 400 400" 
              className="drop-shadow-2xl w-full h-full min-[400px]:w-96 min-[400px]:h-96 lg:w-[500px] lg:h-[500px]"
            >
              <circle cx="200" cy="200" r="190" fill="#fff" stroke="#333" strokeWidth="4"/>
              {createWheelSVG()}
              <circle cx="200" cy="200" r="20" fill="#333"/>
              <circle cx="200" cy="200" r="15" fill="#333"/>
              <circle cx="200" cy="200" r="8" fill="#333"/>
            </svg>
          </div>
        </div>

        {/* Botón de giro */}
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className={`px-12 py-6 my-6 text-2xl font-bold rounded-full transition-all duration-200 ${
            isSpinning
              ? 'bg-gray-500 cursor-not-allowed scale-95'
              : 'bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transform hover:scale-110 active:scale-95'
          } text-white shadow-2xl border-4 border-white`}
        >
          {isSpinning ? (
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              <span>¡Girando!</span>
            </div>
          ) : (
            '🎯 ¡GIRAR RULETA!'
          )}
        </button>

        {/* Código de canje */}
        <div className="bg-purple-200 backdrop-blur-sm rounded-2xl p-6 mb-8 mt-4 border-2 border-dashed border-yellow-400">
          <p className="text-yellow-700 font-semibold mb-2">📋 CÓDIGO DE CANJE</p>
          <p className="text-3xl font-mono font-bold text-black tracking-wider text-center">
            {id}
          </p>
        </div>

        {/* Resultado */}
        {result && (
          <div className='backdrop-blur-md fixed inset-0 h-full flex flex-col gap-5 items-center justify-center z-50'>
            <div className="text-center mt-20 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border-4 border-yellow-400">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">¡Felicidades!</h3>
              <p className="text-2xl text-purple-600 font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                {result}
              </p>
              <div className="text-4xl mt-4">✨</div>
            </div>
            <button onClick={leaveResult} className='bg-red-500 text-white text-2xl px-4 py-2 rounded'>Salir</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomWheel;