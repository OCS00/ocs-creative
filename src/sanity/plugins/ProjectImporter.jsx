"use client";
import React, { useState, useCallback } from "react";
import { useClient } from "sanity";

function toSlug(str) {
  const map = { ğ:"g", ü:"u", ş:"s", ı:"i", ö:"o", ç:"c", Ğ:"g", Ü:"u", Ş:"s", İ:"i", Ö:"o", Ç:"c" };
  return str
    .toLowerCase()
    .replace(/[ğüşıöçĞÜŞİÖÇ]/g, m => map[m] || m)
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 96);
}

function generateKey(prefix = "k") {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

const TEMPLATE = {
  title: "Proje Başlığı",
  clientName: "Müşteri Adı",
  projectType: "website",
  websiteUrl: "https://",
  tags: ["Next.js", "Tailwind CSS", "Sanity CMS"],
  status: "published",
  featured: false,
  duration: "3 Hafta",
  primaryColor: "#6366F1",
  excerpt: "Projeyi kart üzerinde özetleyen 1-2 cümle.",
  challenge: "Müşterinin yaşadığı problem veya ihtiyaç buraya gelir. 2-3 cümle.",
  solution: "OCS Creative'in sunduğu çözüm buraya gelir. Teknolojiyi ve yaklaşımı vurgula.",
  stats: [
    { value: "%40", label: "Dönüşüm Artışı" },
    { value: "1.8s", label: "Sayfa Yüklenme" },
    { value: "3x",   label: "Organik Trafik" }
  ],
  testimonial: {
    quote: "Müşterinin projeyi öven kısa ve etkili yorumu buraya gelir.",
    authorName: "Ad Soyad",
    authorRole: "CEO, Şirket Adı"
  },
  seoDesc: "Google'da görünecek meta açıklama — 120-155 karakter olmalı.",
  seoKeywords: ["web tasarım", "kurumsal web sitesi", "Next.js"]
};

// ─── STIL SABİTLERİ ──────────────────────────────────────────────────────────
const S = {
  root: {
    display: "flex", flexDirection: "column", height: "100%", minHeight: "100vh",
    backgroundColor: "#09090b", color: "#f4f4f5", fontFamily: "system-ui, sans-serif",
    overflow: "hidden",
  },
  header: {
    padding: "20px 28px 16px",
    borderBottom: "1px solid #27272a",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexShrink: 0,
  },
  headerTitle: {
    display: "flex", alignItems: "center", gap: "10px",
    fontSize: "18px", fontWeight: "800", letterSpacing: "-0.3px",
  },
  badge: {
    fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em",
    textTransform: "uppercase", color: "#a78bfa",
    backgroundColor: "#1e1b2e", border: "1px solid #4c1d95",
    padding: "3px 8px", borderRadius: "999px",
  },
  body: {
    display: "flex", flex: 1, overflow: "hidden",
  },
  sidebar: {
    width: "280px", flexShrink: 0,
    borderRight: "1px solid #27272a",
    padding: "24px 20px",
    overflowY: "auto",
    display: "flex", flexDirection: "column", gap: "20px",
  },
  sidebarTitle: { fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#71717a", marginBottom: "10px" },
  helpItem: { display: "flex", gap: "10px", alignItems: "flex-start" },
  helpNum: {
    flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%",
    backgroundColor: "#18181b", border: "1px solid #3f3f46",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "11px", fontWeight: "700", color: "#a1a1aa",
  },
  helpText: { fontSize: "13px", color: "#a1a1aa", lineHeight: "1.5" },
  typeRow: { display: "flex", alignItems: "center", gap: "8px", padding: "6px 0", borderBottom: "1px solid #18181b" },
  typeKey: { fontSize: "11px", fontFamily: "monospace", color: "#818cf8", backgroundColor: "#1e1b2e", padding: "2px 7px", borderRadius: "4px", fontWeight: "700" },
  typeLabel: { fontSize: "12px", color: "#71717a" },
  editor: {
    flex: 1, display: "flex", flexDirection: "column", padding: "20px 24px",
    overflow: "hidden",
  },
  editorHeader: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    marginBottom: "12px",
  },
  editorLabel: { fontSize: "12px", fontWeight: "600", color: "#71717a", letterSpacing: "0.05em", textTransform: "uppercase" },
  textarea: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0c0c0e",
    color: "#e4e4e7",
    border: "1px solid #27272a",
    borderRadius: "12px",
    padding: "20px",
    fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
    fontSize: "13px",
    lineHeight: "1.7",
    resize: "none",
    outline: "none",
    transition: "border-color 0.2s",
    minHeight: "0",
  },
  footer: {
    padding: "14px 24px",
    borderTop: "1px solid #27272a",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexShrink: 0,
    backgroundColor: "#09090b",
  },
  btnReset: {
    padding: "9px 18px", borderRadius: "8px", border: "1px solid #3f3f46",
    backgroundColor: "transparent", color: "#a1a1aa",
    fontSize: "13px", fontWeight: "600", cursor: "pointer",
    transition: "all 0.15s",
  },
  btnCreate: {
    padding: "10px 24px", borderRadius: "8px", border: "none",
    backgroundColor: "#4f46e5", color: "#fff",
    fontSize: "13px", fontWeight: "700", cursor: "pointer",
    display: "flex", alignItems: "center", gap: "8px",
    transition: "all 0.15s", boxShadow: "0 0 20px rgba(79,70,229,0.35)",
  },
  btnDisabled: { opacity: 0.5, cursor: "not-allowed" },
  alert: (type) => ({
    padding: "12px 16px",
    borderRadius: "8px",
    fontSize: "13px",
    lineHeight: "1.5",
    border: `1px solid ${type === "success" ? "#14532d" : type === "error" ? "#7f1d1d" : "#1e3a5f"}`,
    backgroundColor: type === "success" ? "#052e16" : type === "error" ? "#450a0a" : "#0c1a2e",
    color: type === "success" ? "#86efac" : type === "error" ? "#fca5a5" : "#93c5fd",
  }),
};

export function ProjectImporterTool() {
  const client = useClient({ apiVersion: "2024-01-01" });
  const [code, setCode] = useState(JSON.stringify(TEMPLATE, null, 2));
  const [status, setStatus] = useState(null); // null | { type, message, docId? }
  const [loading, setLoading] = useState(false);

  // JSON geçerlilik kontrolü
  const jsonValid = useCallback(() => {
    try { JSON.parse(code); return true; } catch { return false; }
  }, [code]);

  const handleReset = () => {
    setCode(JSON.stringify(TEMPLATE, null, 2));
    setStatus(null);
  };

  const handleCreate = async () => {
    if (loading) return;

    let data;
    try {
      data = JSON.parse(code);
    } catch (e) {
      setStatus({ type: "error", message: `JSON hatası: ${e.message}` });
      return;
    }

    if (!data.title?.trim()) {
      setStatus({ type: "error", message: '"title" alanı zorunludur.' });
      return;
    }

    setLoading(true);
    setStatus({ type: "info", message: "Sanity'ye kaydediliyor…" });

    try {
      const slug = toSlug(data.title.trim());

      const doc = {
        _type: "project",
        title: data.title.trim(),
        slug: { _type: "slug", current: slug },

        ...(data.clientName  && { clientName:   data.clientName.trim() }),
        ...(data.projectType && { projectType:  data.projectType }),
        ...(data.websiteUrl && data.websiteUrl !== "https://" && { websiteUrl: data.websiteUrl.trim() }),
        ...(data.duration    && { duration:     data.duration.trim() }),
        ...(data.primaryColor && { primaryColor: data.primaryColor.trim() }),
        ...(data.excerpt     && { excerpt:      data.excerpt.trim() }),
        ...(data.challenge   && { challenge:    data.challenge.trim() }),
        ...(data.solution    && { solution:     data.solution.trim() }),
        ...(data.seoDesc     && { seoDesc:      data.seoDesc.trim() }),

        tags:         Array.isArray(data.tags) ? data.tags.filter(Boolean) : [],
        seoKeywords:  Array.isArray(data.seoKeywords) ? data.seoKeywords.filter(Boolean) : [],
        status:       data.status || "published",
        featured:     Boolean(data.featured),
        publishedAt:  data.publishedAt || new Date().toISOString(),

        stats: Array.isArray(data.stats)
          ? data.stats.filter(s => s.value && s.label).map(s => ({
              _type: "stat",
              _key:  generateKey("stat"),
              value: s.value,
              label: s.label,
            }))
          : [],

        ...(data.testimonial?.quote?.trim() && {
          testimonial: {
            quote:      data.testimonial.quote.trim(),
            authorName: data.testimonial.authorName?.trim() || "",
            authorRole: data.testimonial.authorRole?.trim() || "",
          },
        }),
      };

      const result = await client.create(doc);

      setStatus({
        type: "success",
        message: `✅ "${data.title}" başarıyla oluşturuldu! Görselleri eklemek için soldaki Projeler menüsünden açabilirsin.`,
        docId: result._id,
        slug,
      });
      setCode(JSON.stringify(TEMPLATE, null, 2));
    } catch (err) {
      setStatus({ type: "error", message: `Hata: ${err.message}` });
    } finally {
      setLoading(false);
    }
  };

  const valid = jsonValid();

  return (
    <div style={S.root}>
      {/* HEADER */}
      <div style={S.header}>
        <div style={S.headerTitle}>
          <span>⚡</span>
          <span>Hızlı Proje Girişi</span>
          <span style={S.badge}>Beta</span>
        </div>
        <span style={{ fontSize: "12px", color: "#3f3f46" }}>
          JSON şablonu doldur → tek tıkla Sanity&apos;ye kaydet
        </span>
      </div>

      <div style={S.body}>
        {/* SOL: KILAVUZ */}
        <div style={S.sidebar}>
          <div>
            <p style={S.sidebarTitle}>Nasıl kullanılır?</p>
            {[
              "Sağdaki JSON şablonunu doldur.",
              "Tüm zorunlu alanları yaz (en az title).",
              "\"Projeyi Oluştur\" butonuna tıkla.",
              "Görselleri eklemek için Projeler menüsünü kullan.",
            ].map((text, i) => (
              <div key={i} style={{ ...S.helpItem, marginBottom: "10px" }}>
                <div style={S.helpNum}>{i + 1}</div>
                <p style={S.helpText}>{text}</p>
              </div>
            ))}
          </div>

          <div>
            <p style={S.sidebarTitle}>projectType değerleri</p>
            {[
              ["website",   "🌐 Web Sitesi"],
              ["mobile",    "📱 Mobil Uygulama"],
              ["saas",      "⚙️ SaaS Yazılım"],
              ["ecommerce", "🛒 E-Ticaret"],
              ["uiux",      "🎨 UI/UX Tasarım"],
            ].map(([val, label]) => (
              <div key={val} style={S.typeRow}>
                <code style={S.typeKey}>{val}</code>
                <span style={S.typeLabel}>{label}</span>
              </div>
            ))}
          </div>

          <div>
            <p style={S.sidebarTitle}>status değerleri</p>
            {[
              ["published",  "🟢 Yayında"],
              ["inProgress", "🟡 Yapılıyor"],
              ["archived",   "🔴 Arşiv"],
            ].map(([val, label]) => (
              <div key={val} style={S.typeRow}>
                <code style={S.typeKey}>{val}</code>
                <span style={S.typeLabel}>{label}</span>
              </div>
            ))}
          </div>

          <div>
            <p style={S.sidebarTitle}>İpuçları</p>
            <p style={{ fontSize: "12px", color: "#52525b", lineHeight: "1.6" }}>
              • <b style={{ color: "#6366f1" }}>primaryColor</b>: Marka rengi hex kodunu gir (örn: #E53E3E)<br /><br />
              • <b style={{ color: "#6366f1" }}>featured</b>: <code style={{ color: "#a78bfa" }}>true</code> → Ana sayfada göster<br /><br />
              • <b style={{ color: "#6366f1" }}>websiteUrl</b>: Canlı link yoksa boş string bırak<br /><br />
              • Görseller (kapak + galeri) yalnızca Studio içinden yüklenebilir
            </p>
          </div>
        </div>

        {/* SAĞ: EDİTÖR */}
        <div style={S.editor}>
          <div style={S.editorHeader}>
            <span style={S.editorLabel}>project.json</span>
            {!valid && (
              <span style={{ fontSize: "12px", color: "#f87171", fontWeight: "600" }}>
                ⚠ Geçersiz JSON
              </span>
            )}
          </div>

          <textarea
            style={{
              ...S.textarea,
              borderColor: !valid ? "#7f1d1d" : "#27272a",
              flex: 1,
            }}
            value={code}
            onChange={e => { setCode(e.target.value); setStatus(null); }}
            spellCheck={false}
            autoComplete="off"
            onFocus={e => { e.target.style.borderColor = "#4f46e5"; }}
            onBlur={e => { e.target.style.borderColor = !valid ? "#7f1d1d" : "#27272a"; }}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div style={S.footer}>
        <div style={{ flex: 1, marginRight: "16px" }}>
          {status && (
            <div style={S.alert(status.type)}>
              <span>{status.message}</span>
              {status.slug && (
                <span style={{ marginLeft: "8px", color: "#818cf8" }}>
                  → /projeler/{status.slug}
                </span>
              )}
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          <button
            style={S.btnReset}
            onClick={handleReset}
            onMouseEnter={e => { e.target.style.borderColor = "#71717a"; e.target.style.color = "#e4e4e7"; }}
            onMouseLeave={e => { e.target.style.borderColor = "#3f3f46"; e.target.style.color = "#a1a1aa"; }}
          >
            Şablonu Sıfırla
          </button>
          <button
            style={{
              ...S.btnCreate,
              ...(loading || !valid ? S.btnDisabled : {}),
            }}
            onClick={handleCreate}
            disabled={loading || !valid}
            onMouseEnter={e => { if (!loading && valid) e.target.style.backgroundColor = "#4338ca"; }}
            onMouseLeave={e => { e.target.style.backgroundColor = "#4f46e5"; }}
          >
            {loading ? (
              <>
                <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⟳</span>
                Oluşturuluyor…
              </>
            ) : (
              "⚡  Projeyi Oluştur"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
