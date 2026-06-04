export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Performans Analizi',
      description: 'Satış performansınızı il, ilçe ve eczane bazında detaylı olarak analiz edin. Türkiye haritası üzerinde görselleştirin.'
    },
    {
      icon: '🤝',
      title: 'Mutabakat Takibi',
      description: 'Firma mutabakatlarınızı kolayca yönetin. Otomatik hesaplamalar ve raporlamalar ile zamandan tasarruf edin.'
    },
    {
      icon: '📦',
      title: 'Stok Yönetimi',
      description: 'Ürün stoklarınızı gerçek zamanlı takip edin. Stok takibi ve başlangıç stok yönetimi.'
    },
    {
      icon: '💰',
      title: 'Fiyat Tanımlamaları',
      description: 'Ürün fiyatlarınızı, İSF oranlarınızı ve iskonto koşullarınızı kolayca tanımlayın ve yönetin.'
    },
    {
      icon: '📈',
      title: 'Bölgesel Raporlama',
      description: 'Satışlarınızı bölgesel olarak raporlayın. Depo bazlı karşılaştırmalar yapın.'
    },
    {
      icon: '🔐',
      title: 'Güvenli Altyapı',
      description: 'Verileriniz şifreli olarak saklanır. Çoklu kullanıcı desteği ve rol bazlı yetkilendirme.'
    },
    {
      icon: '📱',
      title: 'Responsive Tasarım',
      description: 'Mobil, tablet ve masaüstü cihazlardan sorunsuz erişim. Her yerden çalışın.'
    },
    {
      icon: '⚡',
      title: 'Hızlı & Güvenilir',
      description: 'Yüksek performanslı altyapı ile saniyeler içinde raporlarınızı alın. 7/24 erişim.'
    },
    {
      icon: '🎯',
      title: 'Kolay Kullanım',
      description: 'Kullanıcı dostu arayüz ile hiç eğitim almadan kullanmaya başlayın.'
    }
  ]

  return (
    <section id="ozellikler" className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Güçlü Özellikler
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Eczane işlemlerinizi dijitalleştirmek için ihtiyacınız olan her şey
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
