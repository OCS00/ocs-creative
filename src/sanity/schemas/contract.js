export default {
  name: 'contract',
  title: 'Sözleşmeler',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Müşteri Adı / Firma',
      type: 'string',
    },
    {
      name: 'packageType',
      title: 'Seçilen Paket',
      type: 'string',
      options: {
        list: [
          { title: 'Startup', value: 'startup' },
          { title: 'Kurumsal', value: 'growth' },
          { title: 'Enterprise', value: 'enterprise' },
        ],
      },
    },
    {
      name: 'price',
      title: 'Anlaşılan Fiyat',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Durum',
      type: 'string',
      initialValue: 'pending',
      options: {
        list: [
          { title: 'Bekliyor', value: 'pending' },
          { title: 'Onaylandı', value: 'approved' },
          { title: 'İptal', value: 'cancelled' },
        ],
      },
    },
    {
      name: 'approvedAt',
      title: 'Onay Tarihi',
      type: 'datetime',
    },
    {
      name: 'ipAddress',
      title: 'IP Adresi (Log)',
      type: 'string',
    }
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'packageType',
    },
  },
}