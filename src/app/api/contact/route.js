import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, services, projectDetails, subject, message } = body;

    // Gelen veriyi kontrol et (İster iletişim sayfasından, ister footer'dan gelsin)
    // Footer formunda "services" olmayabilir, o yüzden opsiyonel yapıyoruz.

    // 1. Taşıyıcıyı (Transporter) Ayarla
    // .env dosyasındaki SMTP_... değişkenlerini kullanır.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // Varsayılan Gmail
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // 465 portu için true
      auth: {
        user: process.env.SMTP_USER, // .env dosyasındaki mailin
        pass: process.env.SMTP_PASS, // .env dosyasındaki şifren (Uygulama şifresi)
      },
    });

    // 2. Mail İçeriğini Dinamik Hazırla
    const mailSubject = subject || `🚀 Yeni Proje Talebi: ${name}`;
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #4F46E5;">Web Sitesinden Yeni Mesaj Var!</h2>
        
        <p><strong>Gönderen:</strong> ${name || 'İsimsiz'} (${email})</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        
        ${services && services.length > 0 ? `
        <div style="margin: 15px 0; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #4F46E5;">
          <strong>İlgilenilen Hizmetler:</strong><br/>
          ${services.join(', ')}
        </div>` : ''}

        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        
        <h3>Mesaj / Detaylar:</h3>
        <p style="font-size: 16px; line-height: 1.5;">
          ${projectDetails || message || 'Mesaj içeriği yok.'}
        </p>
      </div>
    `;

    // 3. Maili Gönder
    await transporter.sendMail({
      from: `"Web Sitesi Bildirim" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Mail yine sana gelsin
      replyTo: email, // Yanıtla deyince müşteriye dönsün
      subject: mailSubject,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Mail başarıyla gönderildi." });

  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    // Hatayı detaylı döndürelim ki sorunu anlayabilelim
    return NextResponse.json({ success: false, message: error.message || "Sunucu hatası" }, { status: 500 });
  }
}