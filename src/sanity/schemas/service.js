import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Hizmetler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hizmet Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Kısa Açıklama',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'İkon (Opsiyonel)',
      type: 'image',
    }),
  ],
})