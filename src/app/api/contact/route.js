import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, services, projectDetails, subject, message } = body;

    const mailSubject = subject || `🚀 Yeni Proje Talebi: ${name || 'İsimsiz'}`;

    const date = new Date().toLocaleDateString('tr-TR', {
      year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#f4f4f5;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" style="padding:40px 0;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color:#ffffff;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.05);overflow:hidden;">
                <tr>
                  <td align="center" style="background:linear-gradient(135deg,#4F46E5 0%,#7C3AED 100%);padding:30px;">
                    <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:1px;">OCS CREATIVE</h1>
                    <p style="color:rgba(255,255,255,0.8);margin:5px 0 0 0;font-size:14px;">Yeni Web Sitesi Bildirimi</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:40px;">
                    <h2 style="color:#18181b;margin-top:0;font-size:20px;border-bottom:2px solid #f4f4f5;padding-bottom:10px;">Müşteri Bilgileri</h2>
                    <table width="100%" cellpadding="10" cellspacing="0" style="margin-bottom:30px;">
                      <tr>
                        <td width="30%" style="color:#71717a;font-weight:600;border-bottom:1px solid #f4f4f5;">Ad Soyad:</td>
                        <td style="color:#18181b;border-bottom:1px solid #f4f4f5;">${name || 'İsimsiz'}</td>
                      </tr>
                      <tr>
                        <td style="color:#71717a;font-weight:600;border-bottom:1px solid #f4f4f5;">E-Posta:</td>
                        <td style="color:#4F46E5;border-bottom:1px solid #f4f4f5;">
                          <a href="mailto:${email}" style="color:#4F46E5;text-decoration:none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color:#71717a;font-weight:600;border-bottom:1px solid #f4f4f5;">Telefon:</td>
                        <td style="color:#18181b;border-bottom:1px solid #f4f4f5;">${phone || 'Belirtilmedi'}</td>
                      </tr>
                      <tr>
                        <td style="color:#71717a;font-weight:600;border-bottom:1px solid #f4f4f5;">Tarih:</td>
                        <td style="color:#18181b;border-bottom:1px solid #f4f4f5;">${date}</td>
                      </tr>
                    </table>

                    ${services && services.length > 0 ? `
                      <div style="background-color:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:15px;margin-bottom:30px;">
                        <p style="color:#166534;font-weight:bold;margin:0 0 5px 0;">İlgilenilen Hizmetler:</p>
                        <p style="color:#15803d;margin:0;">${services.join(', ')}</p>
                      </div>
                    ` : ''}

                    <h2 style="color:#18181b;font-size:18px;margin-bottom:15px;">Mesaj / Detaylar</h2>
                    <div style="background-color:#f8fafc;border-radius:8px;padding:20px;color:#334155;line-height:1.6;font-size:15px;border-left:4px solid #4F46E5;">
                      ${projectDetails || message || 'Mesaj içeriği bulunmuyor.'}
                    </div>

                    <div style="text-align:center;margin-top:40px;">
                      <a href="mailto:${email}" style="background-color:#4F46E5;color:#ffffff;padding:12px 24px;text-decoration:none;border-radius:6px;font-weight:600;display:inline-block;">Hemen Yanıtla</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="background-color:#f4f4f5;padding:20px;color:#71717a;font-size:12px;">
                    <p style="margin:0;">© ${new Date().getFullYear()} OCS Creative. Tüm hakları saklıdır.</p>
                    <p style="margin:5px 0 0 0;">Bu e-posta otomatik olarak web sitenizden gönderilmiştir.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const { error } = await resend.emails.send({
      from: 'OCS Creative <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || process.env.SMTP_USER],
      replyTo: email,
      subject: mailSubject,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend Hatası:', error);
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Mesaj başarıyla iletildi.' });

  } catch (error) {
    console.error('Mail Hatası:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
