import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contract',
  title: 'Sözleşmeler',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Müşteri Adı',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Sözleşme Başlığı',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Başlangıç Tarihi',
      type: 'datetime',
    }),
    defineField({
      name: 'status',
      title: 'Durum',
      type: 'string',
      options: {
        list: [
          { title: 'Aktif', value: 'active' },
          { title: 'Tamamlandı', value: 'completed' },
          { title: 'İptal', value: 'cancelled' },
        ],
      },
    }),
    defineField({
      name: 'contractFile',
      title: 'Sözleşme Dosyası (PDF)',
      type: 'file',
    }),
  ],
})