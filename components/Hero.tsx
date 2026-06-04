export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400 border border-blue-500/20">
            <span className="mr-2">🚀</span>
            <span>Yeni Nesil Eczane Yönetim Sistemi</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Eczane İşlemlerinizi
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Dijitalleştirin
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            PharmaSync ile mutabakat takibi, performans analizi ve stok yönetimi
            artık çok daha kolay. Zamandan tasarruf edin, verimliliği artırın.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all shadow-lg hover:shadow-blue-500/50 text-lg"
            >
              Hemen Başlayın
            </a>
            <a
              href="#ozellikler"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all border border-slate-700 text-lg"
            >
              Özellikleri Keşfet
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-400">Aktif Kullanıcı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-slate-400">İşlem</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
