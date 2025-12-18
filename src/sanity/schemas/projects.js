import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projeler',
  type: 'document',
  groups: [
    { name: 'main', title: 'Ana Bilgiler' },
    { name: 'details', title: 'Detaylar & Hikaye' },
    { name: 'media', title: 'Görseller & Galeri' },
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
      title: 'Müşteri Adı (Firma)',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Canlı Proje Linki',
      type: 'url',
      group: 'main',
    }),
    defineField({
      name: 'status',
      title: 'Proje Durumu',
      type: 'string',
      group: 'main',
      options: {
        list: [
          { title: 'Yayında', value: 'published' },
          { title: 'Geliştiriliyor', value: 'inProgress' },
        ],
        layout: 'radio',
      },
      initialValue: 'published',
    }),
    // YENİ HALİ (Sınırsız Özgürlük)
    defineField({
       name: 'category',
       title: 'Kategori / Sektör',
       description: 'Örn: Yapay Zeka, Fintech, Sağlık (İstediğini yazabilirsin)',
       type: 'string', // Sadece string dedik, options listesini kaldırdık.
       group: 'main',
         validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'tags',
        title: 'Teknolojiler (Örn: Next.js, Sanity)',
        type: 'array',
        group: 'main',
        of: [{ type: 'string' }],
    }),

    // --- GRUP 2: DETAYLAR & HİKAYE (Case Study) ---
    defineField({
        name: 'challenge',
        title: 'Zorluk / Problem (Challenge)',
        description: 'Müşterinin ana sorunu neydi?',
        type: 'text',
        rows: 3,
        group: 'details',
    }),
    defineField({
        name: 'solution',
        title: 'Çözümümüz (Solution)',
        description: 'Biz nasıl bir çözüm ürettik?',
        type: 'text',
        rows: 3,
        group: 'details',
    }),
    // Rakamlarla Sonuçlar (Örn: %40 Artış)
    defineField({
        name: 'stats',
        title: 'Proje İstatistikleri',
        type: 'array',
        group: 'details',
        of: [
            {
                type: 'object',
                name: 'stat',
                fields: [
                    { name: 'value', title: 'Değer (Örn: %200)', type: 'string' },
                    { name: 'label', title: 'Açıklama (Örn: Trafik Artışı)', type: 'string' }
                ]
            }
        ]
    }),
    defineField({
        name: 'primaryColor',
        title: 'Marka Ana Rengi (Hex Kodu)',
        description: 'Örn: #4F46E5',
        type: 'string',
        group: 'details',
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
        title: 'Proje Galerisi (Ekran Görüntüleri)',
        type: 'array',
        group: 'media',
        of: [{ type: 'image', options: { hotspot: true } }]
    }),

    // --- GRUP 4: SEO ---
    defineField({
        name: 'seoDesc',
        title: 'SEO Açıklaması (Meta Description)',
        type: 'text',
        rows: 2,
        group: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'clientName',
      media: 'mainImage',
    },
  },
})