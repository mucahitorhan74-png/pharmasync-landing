'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'PharmaSync nedir ve ne işe yarar?',
      answer: 'PharmaSync, eczane ve ecza depolarının mutabakat takibi, performans analizi ve stok yönetimi işlemlerini dijitalleştiren bulut tabanlı bir yönetim sistemidir. Zamandan tasarruf sağlar ve verimliliği artırır.'
    },
    {
      question: 'Sistemi kullanmak için teknik bilgi gerekli mi?',
      answer: 'Hayır! PharmaSync kullanıcı dostu arayüzü ile hiçbir teknik bilgi gerektirmez. Basit ve sezgisel tasarımı sayesinde hemen kullanmaya başlayabilirsiniz. Ayrıca eğitim desteği de sunuyoruz.'
    },
    {
      question: 'Verilerim güvende mi?',
      answer: 'Evet! Tüm verileriniz 256-bit SSL şifreleme ile korunur. Sunucularımız Türkiye\'de bulunmaktadır ve KVKK\'ya tam uyumluyuz. Düzenli yedekleme ve güvenlik güncellemeleri yapılır.'
    },
    {
      question: 'Kaç kullanıcı sisteme giriş yapabilir?',
      answer: 'Seçtiğiniz pakete göre değişir. Başlangıç paketi 1 kullanıcı, Profesyonel paket 5 kullanıcı, Kurumsal paket ise sınırsız kullanıcı desteği sunar. İhtiyacınıza göre paket yükseltme yapabilirsiniz.'
    },
    {
      question: 'Mevcut sistemimizle entegrasyon mümkün mü?',
      answer: 'Evet! PharmaSync, Excel, CSV ve diğer yaygın formatlarla veri aktarımı yapabilir. Ayrıca API desteği ile mevcut sistemlerinizle entegre çalışabilir.'
    },
    {
      question: 'Destek hizmeti var mı?',
      answer: 'Elbette! Tüm paketlerimizde e-posta desteği mevcuttur. Profesyonel ve Kurumsal paketlerde öncelikli destek ve Kurumsal pakette 7/24 telefon desteği sunuyoruz.'
    },
    {
      question: 'Ücretsiz deneme süresi var mı?',
      answer: 'Evet! 14 gün ücretsiz deneme imkanı sunuyoruz. Kredi kartı bilgisi gerekmez. Deneme süresinde tüm özellikleri kullanabilirsiniz.'
    },
    {
      question: 'Sözleşme süresi ne kadar?',
      answer: 'Aylık ve yıllık paket seçeneklerimiz mevcuttur. Yıllık paketlerde %20 indirim sağlanır. İstediğiniz zaman paketinizi iptal edebilir veya değiştirebilirsiniz.'
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-xl text-slate-300">
            Merak ettiklerinizin yanıtlarını burada bulabilirsiniz
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-300 mb-4">
            Başka sorularınız mı var?
          </p>
          <a
            href="#iletisim"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all shadow-lg hover:shadow-blue-500/50"
          >
            Bizimle İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  )
}
