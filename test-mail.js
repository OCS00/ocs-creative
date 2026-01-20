const nodemailer = require('nodemailer');

// BURAYA BİLGİLERİNİ GİR (Tırnaklar kalsın)
const email = "onurcem154@gmail.com";
const password = "epsckqcygzrusmox"; // BOŞLUKSUZ YAPIŞTIR!

async function main() {
  // service: 'gmail' kullanınca port ve host ayarlamaya gerek kalmaz
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password,
    },
  });

  try {
    console.log("Bağlantı deneniyor...");
    await transporter.verify();
    console.log("✅ BAŞARILI! Giriş yapıldı.");
    
    console.log("Mail gönderiliyor...");
    const info = await transporter.sendMail({
      from: email,
      to: email,
      subject: "Test Maili",
      text: "Çalışıyor!",
    });
    console.log("✅ Mail Gönderildi! ID:", info.messageId);
  } catch (error) {
    console.error("❌ HATA:", error);
  }
}

main();