import createImageUrlBuilder from '@sanity/image-url'
import { client } from './client'

// Ayarları direkt client'tan alıyoruz, böylece env dosyası aramaz
const builder = createImageUrlBuilder({
  projectId: client.config().projectId,
  dataset: client.config().dataset,
})

export const urlForImage = (source) => {
  return builder.image(source)
}