import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profil & Hakkımda',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Ad Soyad',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Unvan',
      type: 'string',
      description: 'Örn: Senior Full Stack Developer',
    }),
    defineField({
      name: 'bio',
      title: 'Biyografi',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'avatar',
      title: 'Profil Fotoğrafı',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'resume',
      title: 'CV / Özgeçmiş (PDF)',
      type: 'file',
    }),
    defineField({
        name: 'socials',
        title: 'Sosyal Medya Linkleri',
        type: 'array',
        of: [
            {
                type: 'object',
                name: 'social',
                fields: [
                    { name: 'platform', title: 'Platform (Linkedin, GitHub)', type: 'string' },
                    { name: 'url', title: 'Link', type: 'url' }
                ]
            }
        ]
    })
  ],
})