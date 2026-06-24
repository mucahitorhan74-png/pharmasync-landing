'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Sadece istemci tarafında kontrol et
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[rgba(6,11,25,0.95)] backdrop-blur-xl border-t border-[rgba(0,229,255,0.15)] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transform transition-transform duration-500 translate-y-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] items-center justify-center shrink-0 mt-1">
              <svg className="w-5 h-5 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Sitemizde size en iyi deneyimi sunabilmek için çerezler kullanıyoruz. Sitemizi kullanarak çerez politikamızı ve KVKK metnini kabul etmiş sayılırsınız. Detaylı bilgi için <Link href="/gizlilik" className="text-[#00E5FF] hover:underline underline-offset-2">Gizlilik Politikamızı</Link> inceleyebilirsiniz.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-auto flex shrink-0">
            <button
              onClick={acceptCookies}
              className="w-full sm:w-auto px-8 py-2.5 bg-[#00E5FF] text-[#060b19] rounded-lg font-bold text-sm hover:bg-[#33ebff] transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            >
              Anladım, Kabul Ediyorum
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
