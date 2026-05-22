import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'
import { ProjectImporterTool } from './src/sanity/plugins/ProjectImporter'

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const OCSLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img src="/logo1.png" alt="OCS" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
    <span style={{ fontWeight: '800', color: '#ffffff', fontSize: '18px', letterSpacing: '-0.5px' }}>
      OCS <span style={{ color: '#6366f1' }}>Panel</span>
    </span>
  </div>
)

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  
  title: 'OCS Yönetim Paneli',
  
  studio: {
    components: {
      logo: OCSLogo,
    }
  },

  theme: {
    '--default-button-primary-color': '#4F46E5',
    '--focus-color': '#4F46E5',
    '--state-info-color': '#4F46E5',
    '--main-navigation-color': '#09090b',
    '--main-navigation-color--inverted': '#ffffff',
    '--component-bg': '#09090b',
    '--component-text-color': '#ffffff',
  },

  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    {
      name: 'project-importer',
      tools: [
        {
          name: 'project-importer',
          title: 'Hızlı Giriş',
          icon: () => '⚡',
          component: ProjectImporterTool,
        },
      ],
    },
  ],
})