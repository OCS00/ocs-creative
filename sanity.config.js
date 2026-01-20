/**
 * OCS Creative - Yönetim Paneli (Dark Mode)
 */
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas'
import { apiVersion, dataset, projectId } from './src/sanity/env'

// --- ÖZEL LOGO BİLEŞENİ ---
const OCSLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    {/* Logo Görseli */}
    <img 
      src="/logo1.png" 
      alt="OCS" 
      style={{ height: '28px', width: 'auto', objectFit: 'contain' }} 
    />
    {/* Yanındaki Yazı */}
    <span style={{ 
      fontWeight: '800', 
      color: '#ffffff', // Beyaz Yazı
      fontSize: '18px',
      letterSpacing: '-0.5px'
    }}>
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
      logo: OCSLogo, // Logoyu buraya bağlıyoruz
    }
  },

  // --- DARK MODE RENK AYARLARI ---
  theme: {
    /* Ana Renkler (Mor/Indigo) */
    '--default-button-primary-color': '#4F46E5',
    '--focus-color': '#4F46E5',
    '--state-info-color': '#4F46E5',
    
    /* Arka Planları Siyah Yap */
    '--main-navigation-color': '#09090b', // Sol menü arka planı
    '--main-navigation-color--inverted': '#ffffff', // Yazı rengi
    '--component-bg': '#09090b', // İçerik arka planı
    '--component-text-color': '#ffffff', // Genel yazı rengi
  },

  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})