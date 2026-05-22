import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contract',
  title: 'Sözleşmeler & Müşteriler',
  type: 'document',
  icon: () => '📄',

  groups: [
    { name: 'client',   title: '👤 Müşteri Bilgileri', default: true },
    { name: 'project',  title: '📋 Proje & Sözleşme' },
    { name: 'payment',  title: '💳 Ödeme' },
    { name: 'internal', title: '🔒 Dahili Notlar' },
  ],

  preview: {
    select: {
      title:         'clientName',
      subtitle:      'title',
      status:        'status',
      paymentStatus: 'paymentStatus',
    },
    prepare({ title, subtitle, status, paymentStatus }) {
      const statusMap = {
        draft:     '📝 Taslak',
        pending:   '⏳ Onay Bekleniyor',
        approved:  '✅ Onaylandı',
        completed: '🏁 Tamamlandı',
        cancelled: '❌ İptal',
      }
      const paymentMap = {
        waiting:  '💰 Ödeme Bekleniyor',
        advance:  '💳 Ön Ödeme Alındı',
        paid:     '✅ Ödeme Tamamlandı',
      }
      return {
        title:    title || 'İsimsiz Müşteri',
        subtitle: `${subtitle || '—'} · ${statusMap[status] || '—'} · ${paymentMap[paymentStatus] || '—'}`,
      }
    },
  },

  fields: [

    defineField({
      name: 'clientName',
      title: 'Müşteri Adı / Şirket',
      type: 'string',
      group: 'client',
      validation: (rule) => rule.required().error('Müşteri adı zorunludur.'),
    }),
    defineField({
      name: 'clientEmail',
      title: 'E-Posta',
      type: 'string',
      group: 'client',
      description: 'Sözleşme onay linki bu adrese gönderilir.',
      validation: (rule) =>
        rule
          .required()
          .email()
          .error('Geçerli bir e-posta adresi girin.'),
    }),
    defineField({
      name: 'clientPhone',
      title: 'Telefon',
      type: 'string',
      group: 'client',
      description: 'Örn: 0505 000 00 00',
    }),

    defineField({
      name: 'title',
      title: 'Sözleşme / Proje Başlığı',
      type: 'string',
      group: 'project',
      description: 'Örn: "Kurumsal Web Sitesi — TechOne Global"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Sözleşme Durumu',
      type: 'string',
      group: 'project',
      options: {
        list: [
          { title: '📝 Taslak',             value: 'draft' },
          { title: '⏳ Onay Bekleniyor',    value: 'pending' },
          { title: '✅ Onaylandı',          value: 'approved' },
          { title: '🏁 Tamamlandı',         value: 'completed' },
          { title: '❌ İptal Edildi',       value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Proje Başlangıç Tarihi',
      type: 'datetime',
      group: 'project',
    }),
    defineField({
      name: 'deadline',
      title: 'Tahmini Teslim Tarihi',
      type: 'datetime',
      group: 'project',
    }),
    defineField({
      name: 'approvedAt',
      title: 'Onay Tarihi',
      type: 'datetime',
      group: 'project',
      description: 'Müşteri sözleşmeyi onayladığında otomatik doldurulur.',
      readOnly: false,
    }),
    defineField({
      name: 'demoUrl',
      title: 'Demo / Canlı Link',
      type: 'url',
      group: 'project',
      description: 'Müşteriye göstermek için hazırlanan demo ortamı.',
    }),
    defineField({
      name: 'contractFile',
      title: 'Sözleşme Dosyası (PDF)',
      type: 'file',
      group: 'project',
      options: { accept: '.pdf' },
    }),

    defineField({
      name: 'currency',
      title: 'Para Birimi',
      type: 'string',
      group: 'payment',
      options: {
        list: [
          { title: '🇹🇷 TRY — Türk Lirası', value: 'TRY' },
          { title: '🇺🇸 USD — Amerikan Doları', value: 'USD' },
          { title: '🇪🇺 EUR — Euro', value: 'EUR' },
        ],
        layout: 'radio',
      },
      initialValue: 'TRY',
    }),
    defineField({
      name: 'projectBudget',
      title: 'Toplam Proje Bütçesi',
      type: 'number',
      group: 'payment',
      description: 'Rakamı sadece yaz, sembol ekleme. Örn: 25000',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'advanceAmount',
      title: 'Alınan Ön Ödeme (%50)',
      type: 'number',
      group: 'payment',
      description: 'Başlangıçta tahsil edilen avans tutarı.',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'paymentStatus',
      title: 'Ödeme Durumu',
      type: 'string',
      group: 'payment',
      options: {
        list: [
          { title: '💰 Ödeme Bekleniyor',     value: 'waiting' },
          { title: '💳 Ön Ödeme Alındı',      value: 'advance' },
          { title: '✅ Ödeme Tamamlandı',     value: 'paid' },
        ],
        layout: 'radio',
      },
      initialValue: 'waiting',
    }),

    defineField({
      name: 'notes',
      title: 'Dahili Notlar (Gizli)',
      type: 'text',
      rows: 5,
      group: 'internal',
      description: '⚠️ Bu alan sadece sana görünür, müşteriye gösterilmez. Revizyon talepleri, özel istekler vb. buraya yazılabilir.',
    }),
  ],
})
