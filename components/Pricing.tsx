export default function Pricing() {
  const plans = [
    {
      name: 'Başlangıç',
      price: '₺999',
      period: '/ay',
      description: 'Küçük eczaneler için ideal',
      features: [
        '1 Kullanıcı',
        'Mutabakat Takibi',
        'Temel Raporlama',
        'E-posta Desteği',
        '500 İşlem/Ay'
      ],
      highlighted: false
    },
    {
      name: 'Profesyonel',
      price: '₺1.999',
      period: '/ay',
      description: 'En popüler plan',
      features: [
        '5 Kullanıcı',
        'Tüm Özellikler',
        'Gelişmiş Raporlama',
        'Öncelikli Destek',
        'Sınırsız İşlem',
        'API Erişimi'
      ],
      highlighted: true
    },
    {
      name: 'Kurumsal',
      price: 'Özel',
      period: '',
      description: 'Büyük organizasyonlar için',
      features: [
        'Sınırsız Kullanıcı',
        'Tüm Özellikler',
        'Özel Raporlar',
        '7/24 Destek',
        'Sınırsız İşlem',
        'API Erişimi',
        'Özel Entegrasyon',
        'Eğitim & Danışmanlık'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="fiyatlandirma" className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fiyatlandırma
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            İhtiyacınıza uygun planı seçin, istediğiniz zaman değiştirin
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/50 scale-105'
                  : 'bg-slate-800/50 border border-slate-700/50'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    En Popüler
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-3 ${plan.highlighted ? 'text-white' : 'text-blue-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-white' : 'text-slate-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="http://localhost:5173"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                Hemen Başla
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
