export default {
  name: 'profile',
  title: 'Profil Ayarları',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Ad Soyad',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Unvan (Örn: Creative Developer)',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biyografi (Hakkımda Yazısı)',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'email',
      title: 'E-posta Adresi',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Sosyal Medya Linkleri',
      type: 'object',
      fields: [
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn'},
        {name: 'github', type: 'url', title: 'GitHub'},
      ]
    }
  ],
}