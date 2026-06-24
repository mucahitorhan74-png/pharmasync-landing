'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Sartlar() {


  return (
    <div className="min-h-screen bg-transparent relative">
      <div id="particles-js-sartlar" className="fixed inset-0 z-0 bg-gradient-to-br from-[#060b19] via-[#101c38] to-[#081226]"></div>



      {/* Content */}
      <section className="pt-28 md:pt-36 pb-16 min-h-[40vh] flex flex-col justify-center relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(0,229,255,0.15)] rounded-3xl p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 border-b border-[rgba(255,255,255,0.1)] pb-6">Kullanım Şartları</h1>
            
            <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">1. Hizmetin Kapsamı</h2>
                <p>
                  PharmaSync, İlaç, Kozmetik ve Medikal sektörü firmalarına yönelik olarak Depo Performans Takibi, Stok Analizi ve MF (Mal Fazlası) Yönetimi alanında yazılım hizmeti sunmaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">2. Kullanıcı Yükümlülükleri</h2>
                <p>
                  Kullanıcı, sisteme yüklediği Excel dosyalarının ve içerdiği bilgilerin doğruluğundan sorumludur. PharmaSync sadece yüklenen verileri analiz eder, hesaplama yapar ve raporlar sunar.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">3. Fikri Mülkiyet Hakları</h2>
                <p>
                  Sitede ve portalda yer alan yazılım kodları, arayüz tasarımları, grafikler, metinler ve tüm fikri mülkiyet hakları PharmaSync'e aittir. İzinsiz kopyalanamaz, çoğaltılamaz veya tersine mühendislik yapılamaz.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">4. Sorumluluğun Sınırlandırılması</h2>
                <p>
                  PharmaSync, hesaplama ve raporlama algoritmalarının %99.9 doğrulukta çalışmasını taahhüt eder. Ancak sisteme hatalı veri yüklenmesinden doğacak zarar ve ziyanlardan PharmaSync sorumlu tutulamaz.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">5. İptal ve İade</h2>
                <p>
                  Kullanıcılar 14 günlük ücretsiz deneme süresi içinde herhangi bir ücret ödemeden hizmetten ayrılabilirler. Abonelik başlatıldıktan sonra iptaller bir sonraki fatura döneminde geçerli olur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

