'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#09090b]">
      {/* Burada sadece paneli tam ekran yapıyoruz 
         ve sitenin CSS'inin karışmasını engelliyoruz.
      */}
      <NextStudio config={config} />
    </div>
  )
}