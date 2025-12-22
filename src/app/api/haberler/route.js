import Parser from "rss-parser";
import { NextResponse } from "next/server";

export async function GET() {
  const parser = new Parser({
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept': 'application/rss+xml, application/xml, text/xml; q=0.1',
    }
  });

  try {
    const feed = await parser.parseURL("https://feeds.feedburner.com/MuhasebeTr");

    // BOZUK KARAKTERLERİ DÜZELTEN FONKSİYON
    const fixEncoding = (text) => {
      if (!text) return "";
      
      // Tek tek replace zinciri yerine daha güvenli bir yöntem
      let cleaned = text;
      
      // O HATALI OLAN ELMAS SORU İŞARETİNİ TEMİZLE
      cleaned = cleaned.replace(/\uFFFD/g, ""); 

      // DİĞER BOZUK KARAKTERLER
      cleaned = cleaned
        .replace(/â/g, "'")
        .replace(/Ã¼/g, "ü").replace(/Ãqc/g, "ü")
        .replace(/Ãe/g, "Ü").replace(/Ãoe/g, "Ü")
        .replace(/Å/g, "Ş").replace(/Åe/g, "ş")
        .replace(/Ã¶/g, "ö").replace(/Ãq/g, "ö")
        .replace(/Ãd/g, "Ö").replace(/Ã/g, "Ö")
        .replace(/Ä±/g, "ı").replace(/Ä/g, "İ")
        .replace(/Äe/g, "ğ").replace(/Ã§/g, "ç")
        .replace(/&nbsp;/g, " ")
        .replace(/&#8217;/g, "'")
        .replace(/&#8211;/g, "-")
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"');

      return cleaned;
    };

    const sonHaberler = feed.items.slice(0, 3).map((item, index) => {
      // TARİH DÜZELTME
      let dateStr = "Güncel";
      if (item.pubDate) {
        try {
          const d = new Date(item.pubDate);
          if (!isNaN(d.getTime())) {
            dateStr = d.toLocaleDateString("tr-TR");
          }
        } catch (e) { dateStr = "Güncel"; }
      }
      
      return {
        id: index,
        title: fixEncoding(item.title),
        link: item.link,
        date: dateStr,
        content: fixEncoding(item.contentSnippet).substring(0, 100) + "...",
      };
    });

    return new NextResponse(JSON.stringify(sonHaberler), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate' 
      },
    });

  } catch (error) {
    console.error("RSS Hatası:", error);
    return NextResponse.json({ error: "Haberler alınamadı" }, { status: 500 });
  }
}