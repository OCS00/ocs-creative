import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projeler',
  type: 'document',
  icon: () => '🚀',

  groups: [
    { name: 'main',  title: '📋 Ana Bilgiler',   default: true },
    { name: 'story', title: '📖 Hikaye & Sonuçlar' },
    { name: 'media', title: '🖼️ Medya & Galeri' },
    { name: 'seo',   title: '🔍 SEO & Meta' },
  ],

  // Studio'da liste görünümü
  preview: {
    select: {
      title:    'title',
      subtitle: 'clientName',
      media:    'mainImage',
      status:   'status',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, status, featured }) {
      const badge = featured ? '⭐ ' : ''
      const statusEmoji = status === 'inProgress' ? ' 🟡' : ' 🟢'
      return {
        title:    `${badge}${title}${statusEmoji}`,
        subtitle: subtitle || 'Müşteri adı girilmemiş',
        media,
      }
    },
  },

  // Studio'da özel sıralama seçenekleri
  orderings: [
    {
      title: 'Manuel Sıralama',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Yayın Tarihi (Yeni → Eski)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],

  fields: [

    defineField({
      name: 'featured',
      title: '⭐ Öne Çıkan Proje',
      type: 'boolean',
      group: 'main',
      description: 'Açık ise ana sayfada ve portfolyo listesinin başında gösterilir.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Sıralama (Küçük = Önce)',
      type: 'number',
      group: 'main',
      description: 'Manuel sıralama için. Örn: 1, 2, 3 … Boş bırakılırsa tarihe göre sıralanır.',
    }),
    defineField({
      name: 'title',
      title: 'Proje Başlığı',
      type: 'string',
      group: 'main',
      validation: (rule) => rule.required().min(3).max(80).error('Başlık 3-80 karakter arasında olmalı.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      group: 'main',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
      description: 'Otomatik oluşturulur — "Oluştur" butonuna tıkla.',
    }),
    defineField({
      name: 'projectType',
      title: 'Proje Türü',
      type: 'string',
      group: 'main',
      options: {
        list: [
          { title: '🌐 Web Sitesi',        value: 'website' },
          { title: '📱 Mobil Uygulama',    value: 'mobile' },
          { title: '⚙️ SaaS / Özel Yazılım', value: 'saas' },
          { title: '🛒 E-Ticaret',         value: 'ecommerce' },
          { title: '🎨 UI/UX Tasarım',     value: 'uiux' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Müşteri / Marka Adı',
      type: 'string',
      group: 'main',
      description: 'Gizlilik istiyorsa "Gizli Müşteri" yazabilirsin.',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Canlı Proje Linki',
      type: 'url',
      group: 'main',
      description: 'Yoksa veya gizliyse boş bırak.',
    }),
    defineField({
      name: 'status',
      title: 'Durum',
      type: 'string',
      group: 'main',
      options: {
        list: [
          { title: 'Yayında 🟢',         value: 'published' },
          { title: 'Geliştiriliyor 🟡',  value: 'inProgress' },
          { title: 'Arşivlendi 🔴',      value: 'archived' },
        ],
        layout: 'radio',
      },
      initialValue: 'published',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Teslim / Yayın Tarihi',
      type: 'datetime',
      group: 'main',
      description: 'SEO ve sıralama için kullanılır.',
    }),
    defineField({
      name: 'duration',
      title: 'Proje Süresi',
      type: 'string',
      group: 'main',
      description: 'Örn: "3 Hafta", "2 Ay"',
      placeholder: '3 Hafta',
    }),
    defineField({
      name: 'tags',
      title: 'Teknoloji Stack',
      type: 'array',
      group: 'main',
      description: 'Kullanılan teknolojiler. Örn: Next.js, Tailwind CSS, Sanity',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'excerpt',
      title: 'Kart Özeti',
      type: 'text',
      rows: 2,
      group: 'story',
      description: 'Proje kartında görünen kısa açıklama. 1-2 cümle yeterli.',
      validation: (rule) => rule.max(200).warning('200 karakteri geçmemesi önerilir.'),
    }),
    defineField({
      name: 'challenge',
      title: 'Zorluk (The Challenge)',
      type: 'text',
      rows: 4,
      group: 'story',
      description: 'Müşterinin/projenin başlangıçta yaşadığı temel problem neydi?',
    }),
    defineField({
      name: 'solution',
      title: 'Çözüm (The Solution)',
      type: 'text',
      rows: 4,
      group: 'story',
      description: 'Bu soruna nasıl bir teknolojik ve tasarımsal çözüm üretildi?',
    }),
    defineField({
      name: 'stats',
      title: 'Başarı Metrikleri',
      type: 'array',
      group: 'story',
      description: 'Ölçülebilir sonuçlar. Örn: %40 Dönüşüm Artışı, 2.1s Sayfa Hızı',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stat',
          icon: () => '📊',
          fields: [
            defineField({ name: 'value', title: 'Değer', type: 'string', description: 'Örn: %40, 2.1s, 4x', validation: (rule) => rule.required() }),
            defineField({ name: 'label', title: 'Açıklama', type: 'string', description: 'Örn: Dönüşüm Artışı, Sayfa Yüklenme', validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
            prepare: ({ title, subtitle }) => ({ title: title || '—', subtitle: subtitle || '—' }),
          },
        }),
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Müşteri Yorumu',
      type: 'object',
      group: 'story',
      description: 'Bu projeye özel müşteri alıntısı. Ana sayfadaki genel yorumlardan bağımsız.',
      fields: [
        defineField({
          name: 'quote',
          title: 'Alıntı',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.max(300).warning('300 karakterden kısa tutulması önerilir.'),
        }),
        defineField({ name: 'authorName', title: 'Müşteri Adı', type: 'string' }),
        defineField({ name: 'authorRole', title: 'Unvan / Şirket', type: 'string', description: 'Örn: CEO, TechOne Global' }),
        defineField({ name: 'authorAvatar', title: 'Müşteri Fotoğrafı (Opsiyonel)', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'primaryColor',
      title: 'Marka / Vurgu Rengi',
      type: 'string',
      group: 'story',
      description: 'Proje detay sayfasında kullanılır. Hex kodu gir. Örn: #6366F1',
      validation: (rule) =>
        rule.regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
          name: 'hex-color',
          invert: false,
        }).warning('Geçerli bir hex kodu gir. Örn: #6366F1'),
    }),

    defineField({
      name: 'mainImage',
      title: 'Kapak Görseli',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      description: 'Önerilen boyut: 1600×900px (16:9). PNG veya WebP tercih edilir.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Metin (SEO)',
          type: 'string',
          description: 'Görselin SEO ve erişilebilirlik açıklaması. Örn: "TechOne Global kurumsal web sitesi ana sayfası"',
          validation: (rule) => rule.required().warning('Alt metin SEO için önemli!'),
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Proje Ekran Görüntüleri',
      type: 'array',
      group: 'media',
      description: 'Detay sayfasında slider olarak gösterilir. Önerilen: 1280×800px',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Metin',
              type: 'string',
              description: 'Bu ekran görüntüsünü kısaca açıkla.',
            }),
            defineField({
              name: 'caption',
              title: 'Altyazı (Opsiyonel)',
              type: 'string',
              description: 'Görselin altında görünecek açıklama.',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'seoDesc',
      title: 'Meta Açıklama',
      type: 'text',
      rows: 2,
      group: 'seo',
      description: 'Google arama sonuçlarında çıkacak açıklama. 120-160 karakter ideal.',
      validation: (rule) =>
        rule
          .min(50).warning('50 karakterden kısa meta açıklama önerilmez.')
          .max(160).warning('160 karakteri geçen meta açıklama Google tarafından kırpılır.'),
    }),
    defineField({
      name: 'seoKeywords',
      title: 'Anahtar Kelimeler (Meta)',
      type: 'array',
      group: 'seo',
      description: 'Bu projeyle ilgili arama terimleri. Örn: "Next.js web sitesi", "kurumsal tasarım"',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),
  ],
})
