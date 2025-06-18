export default function Video() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-[#eee6d9] text-center font-bold text-2xl p-3 w-full">Video</h1>
      <iframe 
        className="w-full h-[500px] max-w-[700px]" 
        src="https://www.youtube.com/embed/ns4sQKk5O2s" 
        title="YouTube video player" 
        // frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>

    </div>
  )
}