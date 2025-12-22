import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, projectDetails, services } = body;

    const data = await resend.emails.send({
      from: "OCS Website <onboarding@resend.dev>", // Kendi domainin varsa onu yaz
      to: ["seninmailin@gmail.com"], // ⚠️ Kendi mail adresini yaz
      subject: `Yeni Proje Talebi: ${name}`,
      html: `
        <h1>Yeni Müşteri Talebi! 🚀</h1>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Seçilen Hizmetler:</strong> ${services.join(", ")}</p>
        <p><strong>Detaylar:</strong> ${projectDetails}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}