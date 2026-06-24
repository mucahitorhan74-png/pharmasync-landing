import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-dark pt-8 pb-4 relative z-10 overflow-hidden">
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-4 mb-4">
          
          {/* Brand & Contact (Span 4) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4 group inline-flex">
              <div className="relative w-16 h-16 group-hover:scale-105 transition-transform">
                <Image src="/logo_seffaf.png" alt="PharmaSync" fill className="object-contain" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">PharmaSync</span>
            </Link>
            <p className="text-sm leading-relaxed text-blue-200/50 mb-4 max-w-sm">
              İlaç firmaları için geliştirilmiş yeni nesil depo performans ve mal fazlası (MF) yönetimi çözümü. Verilerinizi güvenle yönetin.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 hover:-translate-y-1 transition-all text-blue-200/70 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 hover:-translate-y-1 transition-all text-blue-200/70 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Ürün (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ozellikler" className="text-blue-200/50 hover:text-cyan-400 transition-colors">Özellikler</Link></li>
              <li><Link href="/fiyatlandirma" className="text-blue-200/50 hover:text-cyan-400 transition-colors">Fiyatlandırma</Link></li>
              <li className="flex items-center gap-2 text-blue-200/40">
                <span>Entegrasyonlar</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 tracking-wider">YAKINDA</span>
              </li>
              <li><Link href="https://app.pharma-sync.com.tr" target="_blank" rel="noopener noreferrer" className="text-blue-200/50 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group">Portal Giriş <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></Link></li>
            </ul>
          </div>

          {/* Şirket (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wider">
              Şirket
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hakkimizda" className="text-blue-200/50 hover:text-cyan-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="text-blue-200/50 hover:text-cyan-400 transition-colors">İletişim</Link></li>
              <li><Link href="/blog" className="text-blue-200/50 hover:text-cyan-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter & Contact (Span 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wider">
              Gelişmelerden Haberdar Olun
            </h4>
            <p className="text-sm text-blue-200/50 mb-2">
              Sektörel güncellemeler ve yeni özellikler için bültene katılın.
            </p>
            <div className="relative mb-4">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-blue-200/30 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
              />
              <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-[#060b19] rounded-lg transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            <a href="mailto:destek@pharma-sync.com.tr"
              className="inline-flex items-center gap-2 text-sm text-blue-200/60 hover:text-white transition-colors">
              <svg className="w-4 h-4 flex-shrink-0 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              destek@pharma-sync.com.tr
            </a>
          </div>

        </div>

        {/* Copyright & Bottom Legal */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between border-t border-white/5">
          <div className="flex flex-wrap items-center gap-4 text-xs text-blue-300/40 mb-4 md:mb-0">
            <div className="flex items-center gap-4">
              <Image src="/logo_seffaf.png" alt="PharmaSync Logo" width={56} height={56} className="opacity-90" />
              <span>© {new Date().getFullYear()} PharmaSync. Tüm hakları saklıdır.</span>
            </div>
            <span className="hidden md:inline text-white/10">|</span>
            <Link href="/kullanim-kosullari" className="hover:text-cyan-400 transition-colors">Kullanım Koşulları</Link>
            <span className="hidden md:inline text-white/10">|</span>
            <Link href="/gizlilik-politikasi" className="hover:text-cyan-400 transition-colors">Gizlilik Politikası</Link>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-blue-300/40">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
              <span>Sistemler Aktif</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
