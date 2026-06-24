# Google Analytics Kurulum Rehberi

Google Analytics kodları siteye eklendi! Şimdi sadece kendi Google Analytics ID'nizi eklemeniz gerekiyor.

## Adım 1: Google Analytics Hesabı Oluştur

1. https://analytics.google.com/ adresine git
2. Google hesabınla giriş yap
3. "Ölçmeye başla" butonuna tıkla
4. Hesap adı: **PharmaSync** (istediğin ismi verebilirsin)
5. Mülk (Property) adı: **PharmaSync Website**
6. Web sitesi URL'i: **https://www.pharma-sync.com.tr**
7. Sektör: **Sağlık & Eczacılık**
8. Kurulum talimatlarını takip et

## Adım 2: Measurement ID'yi Al

Google Analytics kurulumunu tamamladıktan sonra:

1. Sol menüden **Yönetici** (Admin) bölümüne git
2. **Veri Akışları** (Data Streams) sekmesine tıkla
3. Web sitenizi seç
4. **Ölçüm Kimliği** (Measurement ID) görünecek
   - Şu formatta: `G-ABC123XYZ`
5. Bu ID'yi kopyala

## Adım 3: Siteye ID'yi Ekle

1. `landing` klasöründe `.env.local` dosyası oluştur
2. İçine şunu yapıştır:

```
NEXT_PUBLIC_GA_ID=G-ABC123XYZ
```

(G-ABC123XYZ yerine kendi ID'ni yaz)

3. Dosyayı kaydet
4. Dev server'ı yeniden başlat:

```bash
npm run dev
```

## Adım 4: Test Et

1. Tarayıcıda siteyi aç: http://localhost:3000
2. Tarayıcı konsolunu aç (F12)
3. Console'da `dataLayer` yaz ve Enter'a bas
4. Array görünüyorsa Google Analytics çalışıyor demektir! ✅

## Adım 5: Canlı Takip

1. https://analytics.google.com/ adresine git
2. Sol menüden **Raporlar** → **Gerçek Zamanlı** seç
3. Şu anda sitende kimler var görebilirsin!

## Deployment (Vercel/Netlify)

Siteyi yayına aldığında:

1. Deployment platformunda (Vercel/Netlify) Environment Variables bölümüne git
2. `NEXT_PUBLIC_GA_ID` = `G-ABC123XYZ` ekle
3. Redeploy yap

Artık canlı sitende de analytics çalışacak! 🎉

## Ne Görebilirsin?

- Kaç kişi geldi (günlük, haftalık, aylık)
- Hangi sayfalar popüler
- Ne kadar süre kaldılar
- Hangi cihazlardan geldiler (mobil/desktop)
- Hangi şehirlerden geldiler
- Hangi butonlara tıkladılar

## KVKK & GDPR Uyumluluğu

Şimdilik basit kurulum yaptık. İstersan daha sonra:
- Cookie consent banner ekleyebiliriz
- Kullanıcıların izinini alabiliriz
- IP anonimleştirme yapabiliriz

Bu konularda yardım istersen söyle! 👍
