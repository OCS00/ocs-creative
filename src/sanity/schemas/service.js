export default {
  name: 'service',
  title: 'Hizmetler',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Hizmet Başlığı',
      type: 'string',
    },
    // 👇 BURAYI DEĞİŞTİRDİK (Zengin Metin Oldu)
    {
      name: 'description',
      title: 'Detaylı Açıklama',
      type: 'array', 
      of: [{type: 'block'}] 
    },
    {
      name: 'iconName',
      title: 'İkon İsmi (Örn: Code2, Zap)',
      type: 'string',
    }
  ],
}