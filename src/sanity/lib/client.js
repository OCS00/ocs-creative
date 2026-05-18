import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'zecf9mg9',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  perspective: 'published',
})