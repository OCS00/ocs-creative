import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projeler (Case Studies)',
  type: 'document',
  groups: [
    { name: 'main', title: 'Ana Bilgiler' },
    { name: 'story', title: 'Hikaye & Süreç' },
    { name: 'media', title: 'Medya & Galeri' },
    { name: 'seo', title: 'SEO & Meta' },
  ],
  fields: [
    // --- GRUP 1: ANA BİLGİLER ---
    defineField({
      name: 'title',
      title: 'Proje Başlığı',
      type: 'string',
      group: 'main',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      group: 'main',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Müşteri / Marka Adı',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      description: 'Örn: Fintech, Sağlık, E-Ticaret',
      type: 'string',
      group: 'main',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Canlı Proje Linki',
      type: 'url',
      group: 'main',
    }),
    defineField({
      name: 'status',
      title: 'Durum',
      type: 'string',
      group: 'main',
      options: {
        list: [
          { title: 'Yayında 🟢', value: 'published' },
          { title: 'Geliştiriliyor 🟡', value: 'inProgress' },
        ],
        layout: 'radio',
      },
      initialValue: 'published',
    }),
    defineField({
        name: 'tags',
        title: 'Teknoloji Stack',
        description: 'Örn: Next.js, Tailwind, Sanity, Framer Motion',
        type: 'array',
        group: 'main',
        of: [{ type: 'string' }],
    }),

    // --- GRUP 2: HİKAYE (Challenge & Solution) ---
    defineField({
        name: 'challenge',
        title: 'Zorluk (The Challenge)',
        description: 'Müşterinin yaşadığı problem neydi?',
        type: 'text',
        rows: 4,
        group: 'story',
    }),
    defineField({
        name: 'solution',
        title: 'Çözüm (The Solution)',
        description: 'Biz nasıl bir teknolojik çözüm sunduk?',
        type: 'text',
        rows: 4,
        group: 'story',
    }),
    defineField({
        name: 'stats',
        title: 'Başarı Metrikleri (Sonuçlar)',
        type: 'array',
        group: 'story',
        of: [
            {
                type: 'object',
                name: 'stat',
                fields: [
                    { name: 'value', title: 'Değer (Örn: %400)', type: 'string' },
                    { name: 'label', title: 'Metrik (Örn: ROI Artışı)', type: 'string' }
                ]
            }
        ]
    }),
    defineField({
        name: 'primaryColor',
        title: 'Marka Rengi (Hex)',
        description: 'Proje detay sayfasında vurgu rengi olarak kullanılır. Örn: #6366F1',
        type: 'string',
        group: 'story',
    }),

    // --- GRUP 3: MEDYA ---
    defineField({
      name: 'mainImage',
      title: 'Kapak Görseli (Hero)',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
    }),
    defineField({
        name: 'gallery',
        title: 'Proje İçi Ekran Görüntüleri',
        type: 'array',
        group: 'media',
        of: [{ type: 'image', options: { hotspot: true } }]
    }),

    // --- GRUP 4: SEO ---
    defineField({
        name: 'seoDesc',
        title: 'Meta Açıklama',
        description: 'Google arama sonuçlarında çıkacak kısa açıklama.',
        type: 'text',
        rows: 2,
        group: 'seo',
    }),
  ],
})