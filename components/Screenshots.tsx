'use client'

import { useState } from 'react'

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState(0)

  const screenshots = [
    {
      title: 'Performans Analizi',
      description: 'Satış performansınızı il, ilçe ve depo bazında detaylı olarak analiz edin. Türkiye haritası üzerinde görselleştirin.',
      image: '/screenshot-1.png',
      alt: 'PharmaSync Performans Analizi Ekranı'
    },
    {
      title: 'Türkiye Haritası',
      description: 'Bölgesel satış dağılımınızı interaktif harita üzerinde görün. İl bazında detaylı raporlama yapın.',
      image: '/screenshot-2.png',
      alt: 'PharmaSync Türkiye Haritası'
    },
    {
      title: 'Mutabakat Yönetimi',
      description: 'Firma mutabakatlarınızı kolayca yönetin. Otomatik hesaplamalar ve filtreleme özellikleri.',
      image: '/screenshot-3.png',
      alt: 'PharmaSync Mutabakat Ekranı'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-8 bg-slate-800/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ürün Ekran Görüntüleri
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Modern ve kullanıcı dostu arayüz ile tüm işlemlerinizi kolayca yönetin
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {screenshot.title}
            </button>
          ))}
        </div>

        {/* Screenshot Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-slate-900 px-4 py-3 flex items-center border-b border-slate-700/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-slate-800 rounded px-3 py-1 text-sm text-slate-400 text-center max-w-md mx-auto">
                  app.pharma-sync.com.tr
                </div>
              </div>
            </div>

            {/* Screenshot Image */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 aspect-video">
              {/* Placeholder with blur overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {screenshots[activeTab].title}
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto">
                    {screenshots[activeTab].description}
                  </p>
                  <div className="mt-6 inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                    <p className="text-sm text-blue-300">
                      💡 Ekran görüntüsü eklemek için: screenshot-{activeTab + 1}.png dosyasını public/ klasörüne ekleyin
                    </p>
                  </div>
                </div>
              </div>

              {/* Actual screenshot (will be shown when image is added) */}
              <img
                src={screenshots[activeTab].image}
                alt={screenshots[activeTab].alt}
                className="w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
                onLoad={(e) => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.parentElement?.querySelector('div')?.classList.add('hidden')
                }}
              />

              {/* Privacy Blur Overlay for sensitive data */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent p-6">
                <div className="flex items-center justify-between max-w-4xl mx-auto">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {screenshots[activeTab].title}
                    </h4>
                    <p className="text-sm text-slate-300">
                      {screenshots[activeTab].description}
                    </p>
                  </div>
                  <div className="bg-blue-500/20 px-3 py-1.5 rounded-lg border border-blue-500/30">
                    <span className="text-sm text-blue-300">🔒 Güvenli</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <div className="font-semibold text-white mb-2">Hızlı Yükleme</div>
              <div className="text-sm text-slate-400">Saniyeler içinde raporlarınızı görün</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <div className="font-semibold text-white mb-2">Responsive</div>
              <div className="text-sm text-slate-400">Her cihazdan sorunsuz erişim</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🎨</div>
              <div className="font-semibold text-white mb-2">Modern Tasarım</div>
              <div className="text-sm text-slate-400">Kullanıcı dostu arayüz</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all shadow-lg hover:shadow-blue-500/50"
          >
            Ücretsiz Deneyin
          </a>
        </div>
      </div>
    </section>
  )
}
