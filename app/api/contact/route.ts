import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { isim, email, telefon, sirket, konu, mesaj } = body

    // Temel doğrulama
    if (!isim || !email || !mesaj) {
      return NextResponse.json(
        { error: 'İsim, e-posta ve mesaj alanları zorunludur.' },
        { status: 400 }
      )
    }

    // SMTP Ayarları (Ortam değişkenlerinden alınacak)
    // Şimdilik .env'de tanımlı değilse sahte bir cevap döner veya konsola yazar
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
      // SMTP ayarları yapılmamışsa sadece loglayıp başarılı dönelim (Simülasyon modundan çıkış için ayarlar bekleniyor)
      console.log('----- YENİ İLETİŞİM FORMU MESAJI -----')
      console.log('İsim:', isim)
      console.log('E-posta:', email)
      console.log('Telefon:', telefon)
      console.log('Şirket:', sirket)
      console.log('Konu:', konu)
      console.log('Mesaj:', mesaj)
      console.log('--------------------------------------')
      console.warn('UYARI: SMTP ayarları .env dosyasında bulunamadığı için e-posta gönderilmedi, sadece konsola yazdırıldı.')

      return NextResponse.json({ success: true, simulated: true })
    }

    // Nodemailer transporter oluştur
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    // E-posta içeriği
    const mailOptions = {
      from: `"${isim}" <${SMTP_USER}>`, // Genelde SMTP kullanıcısı olarak gönderilir, Reply-To asıl kişidir
      to: CONTACT_EMAIL, // E-postanın kime gideceği
      replyTo: email,
      subject: `Yeni İletişim Formu Mesajı: ${konu}`,
      text: `
        Yeni bir mesaj aldınız.

        Gönderen: ${isim}
        E-posta: ${email}
        Telefon: ${telefon || 'Belirtilmedi'}
        Şirket: ${sirket || 'Belirtilmedi'}
        Konu: ${konu}

        Mesaj:
        ${mesaj}
      `,
      html: `
        <h3>Yeni İletişim Formu Mesajı</h3>
        <p><strong>Gönderen:</strong> ${isim}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon || 'Belirtilmedi'}</p>
        <p><strong>Şirket:</strong> ${sirket || 'Belirtilmedi'}</p>
        <p><strong>Konu:</strong> ${konu}</p>
        <br/>
        <p><strong>Mesaj:</strong></p>
        <p>${mesaj.replace(/\n/g, '<br/>')}</p>
      `,
    }

    // Gönderimi gerçekleştir
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('E-posta gönderme hatası:', error)
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu.' },
      { status: 500 }
    )
  }
}
