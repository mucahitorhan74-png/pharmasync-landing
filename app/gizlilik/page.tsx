'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Gizlilik() {


  return (
    <div className="min-h-screen bg-transparent relative">
      <div id="particles-js-gizlilik" className="fixed inset-0 z-0 bg-gradient-to-br from-[#060b19] via-[#101c38] to-[#081226]"></div>



      {/* Content */}
      <section className="pt-28 md:pt-36 pb-16 min-h-[40vh] flex flex-col justify-center relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[rgba(6,11,25,0.7)] backdrop-blur-xl border border-[rgba(0,229,255,0.15)] rounded-3xl p-8 md:p-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 border-b border-[rgba(255,255,255,0.1)] pb-6">Gizlilik Politikası (KVKK)</h1>
            
            <div className="space-y-8 text-gray-300 leading-relaxed text-sm md:text-base">
              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">1. Veri Sorumlusu</h2>
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, PharmaSync olarak kişisel verileriniz ve ticari verileriniz veri sorumlusu sıfatıyla tarafımızca işlenmektedir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">2. Kişisel Verilerin İşlenme Amacı</h2>
                <p>
                  Kişisel verileriniz, şirketimiz tarafından sunulan SaaS (Software as a Service) hizmetlerinden faydalanabilmeniz, mutabakat ve analiz raporlarının oluşturulabilmesi, müşteri desteği sağlanabilmesi ve sistem güvenliğinin temini amacıyla işlenmektedir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">3. Veri Güvenliği ve Row-Level Security</h2>
                <p>
                  Sistemimize yüklediğiniz fatura, stok ve MF verileri şifrelenmiş veri tabanlarında saklanmaktadır. Veri tabanımız "Row-Level Security" prensibiyle çalışmakta olup, bir firmanın diğer bir firmanın verisine erişimi teknik olarak imkânsız hale getirilmiştir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">4. Çerezler (Cookies)</h2>
                <p>
                  Sitemiz, kullanıcı deneyimini artırmak ve analiz yapmak amacıyla birinci ve üçüncü taraf çerezleri kullanmaktadır. Sitemizi kullanarak çerez politikamızı kabul etmiş olursunuz.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3 text-[#00E5FF]">5. Haklarınız</h2>
                <p>
                  KVKK'nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini talep etme, silinmesini isteme haklarına sahipsiniz. Taleplerinizi destek@pharma-sync.com.tr adresine iletebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

