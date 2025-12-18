import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
// DİKKAT: Başına 'src' ekledik çünkü klasörü içeri taşıdık
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'OCS Creative Panel',

  projectId: 'zecf9mg9', 
  dataset: 'production',

  basePath: '/studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})