export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020613] backdrop-blur-xl">
      <div className="relative flex flex-col items-center justify-center">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00E5FF] opacity-10 blur-[50px] rounded-full"></div>
        
        {/* Spinner */}
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 rounded-full border-t-2 border-[#00E5FF] animate-spin" style={{ animationDuration: '1s' }}></div>
          <div className="absolute inset-2 rounded-full border-r-2 border-blue-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-4 rounded-full border-b-2 border-cyan-300 animate-spin" style={{ animationDuration: '2s' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-[#00E5FF] font-medium tracking-widest text-sm uppercase animate-pulse">
          Yükleniyor...
        </div>
      </div>
    </div>
  )
}
