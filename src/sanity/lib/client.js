import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'zecf9mg9', // Senin ID'n
  dataset: 'production',
  apiVersion: '2023-05-03', // Tarih formatı, standart kalabilir
  useCdn: false, // Veriyi anlık çeksin diye false yaptık (Cache tutmasın)
})