import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

// Sanity Client'ı "Yazma İzniyle" oluşturuyoruz
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN, // .env dosyasındaki token
  useCdn: false, // Yazarken CDN kullanılmaz
});

export async function POST(req) {
  const secret = req.headers.get("x-api-secret");
  if (!secret || secret !== process.env.APPROVE_CONTRACT_SECRET) {
    return NextResponse.json({ success: false, error: "Yetkisiz istek." }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { clientName, packageType, price } = body;

    // Sanity'e yeni kayıt oluştur
    const result = await writeClient.create({
      _type: "contract",
      clientName,
      packageType,
      price,
      status: "approved",
      approvedAt: new Date().toISOString(),
      ipAddress: req.headers.get("x-forwarded-for") || "Bilinmiyor", // Müşterinin IP'si
    });

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error("Sanity Yazma Hatası:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}