export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Eczane Sahibi',
      company: 'Merkez Eczanesi, İstanbul',
      image: '👨‍⚕️',
      quote: 'PharmaSync sayesinde mutabakat işlemlerimiz çok daha hızlı. Günlerce süren işleri artık saatler içinde hallediyoruz. Gerçekten hayat kurtarıcı bir sistem!'
    },
    {
      name: 'Zeynep Kaya',
      role: 'Muhasebe Sorumlusu',
      company: 'Sağlık Ecza Deposu, Ankara',
      image: '👩‍💼',
      quote: 'Raporlama özellikleri harika. Performans analizlerini kolayca yapabiliyoruz. Türkiye haritası üzerindeki görselleştirme çok kullanışlı.'
    },
    {
      name: 'Mehmet Demir',
      role: 'Genel Müdür',
      company: 'VitaSağlık A.Ş., İzmir',
      image: '👨‍💻',
      quote: 'Çoklu şube yönetimimiz için tam ihtiyacımız olan sistem. Tüm depolarımızı tek yerden yönetebiliyoruz. Destek ekibi de çok ilgili.'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-8 bg-slate-800/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Binlerce kullanıcının güvendiği PharmaSync hakkında gerçek yorumlar
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                  <div className="text-sm text-blue-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">🔒</div>
            <div className="text-white font-semibold">SSL Güvenli</div>
            <div className="text-sm text-slate-400">256-bit Şifreleme</div>
          </div>
          <div>
            <div className="text-3xl mb-2">✅</div>
            <div className="text-white font-semibold">KVKK Uyumlu</div>
            <div className="text-sm text-slate-400">Veri Güvenliği</div>
          </div>
          <div>
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-white font-semibold">ISO 27001</div>
            <div className="text-sm text-slate-400">Sertifikalı</div>
          </div>
          <div>
            <div className="text-3xl mb-2">💯</div>
            <div className="text-white font-semibold">%99.9 Uptime</div>
            <div className="text-sm text-slate-400">Güvenilirlik</div>
          </div>
        </div>
      </div>
    </section>
  )
}
