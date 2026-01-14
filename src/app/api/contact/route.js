import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, services, projectDetails } = body;

    // 1. Mail Taşıyıcısını Ayarla (Gmail için)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // .env dosyasındaki mailin
        pass: process.env.GMAIL_PASS, // .env dosyasındaki şifren
      },
    });

    // 2. Mail İçeriğini Hazırla
    const mailOptions = {
      from: process.env.GMAIL_USER, // Gönderen
      to: process.env.GMAIL_USER,   // Alıcı (Kendine atıyorsun)
      replyTo: email,               // "Yanıtla" deyince müşterinin maili seçilsin
      subject: `🔔 Yeni Proje Talebi: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #4F46E5;">Yeni Bir Müşteri Formu Geldi! 🚀</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f3f4f6;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Ad Soyad:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">E-Posta:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr style="background-color: #f3f4f6;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Hizmetler:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${services?.join(', ') || "Belirtilmedi"}</td>
            </tr>
            <tr style="background-color: #f3f4f6;">
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Detaylar:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${projectDetails || "Yok"}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // 3. Maili Gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Mail başarıyla gönderildi." });

  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}