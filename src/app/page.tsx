'use client'

import React, { useRef, useState } from 'react'
import BusinessCard from '@/components/BusinessCard'
import CardForm from '@/components/CardForm'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import PrintSheet from '@/components/PrintSheet'
import { translations, type Locale } from '@/lib/translations'
import { downloadCardAsPDF } from '@/lib/downloadCard'

export default function Page() {
  const [locale, setLocale] = useState<Locale>('it')
  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [affiliateLink, setAffiliateLink] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  const cardRef = useRef<HTMLDivElement>(null)
  const t = translations[locale]

  function handleChange(field: string, value: string) {
    switch (field) {
      case 'id': setId(value); break
      case 'firstName': setFirstName(value); break
      case 'lastName': setLastName(value); break
      case 'photoUrl': setPhotoUrl(value); break
      case 'affiliateLink': setAffiliateLink(value); break
    }
  }

  async function handleDownload() {
    if (!cardRef.current) return
    setIsDownloading(true)
    try {
      await downloadCardAsPDF(cardRef.current)
    } finally {
      setIsDownloading(false)
    }
  }

  function handlePrint() {
    window.print()
  }

  const cardProps = { id, firstName, lastName, photoUrl, affiliateLink, t }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-zinc-800">{t.ui.title}</h1>
        <LanguageSwitcher locale={locale} onChange={setLocale} />
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
            <h2 className="text-base font-semibold text-zinc-700 mb-5">
              Informations
            </h2>
            <CardForm
              id={id}
              firstName={firstName}
              lastName={lastName}
              photoUrl={photoUrl}
              affiliateLink={affiliateLink}
              t={t}
              onChange={handleChange}
            />
          </div>

          {/* Right: Preview */}
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-base font-semibold text-zinc-700 mb-4">
                {t.ui.preview}
              </h2>
              {/* Scaling wrapper: card is 680px wide, we display it scaled */}
              {/* Card is 684×432px, displayed at 75% = 513×324px */}
              <div style={{ width: '513px', height: '324px', position: 'relative' }}>
                <div
                  style={{
                    transform: 'scale(0.75)',
                    transformOrigin: 'top left',
                    width: '684px',
                    height: '432px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <BusinessCard ref={cardRef} {...cardProps} />
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex-1 px-5 py-3 bg-teal-500 hover:bg-teal-600 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors text-sm"
              >
                {isDownloading ? '...' : t.ui.download}
              </button>
              <button
                onClick={handlePrint}
                className="flex-1 px-5 py-3 bg-zinc-700 hover:bg-zinc-800 text-white font-semibold rounded-xl transition-colors text-sm"
              >
                {t.ui.print}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Print sheet — hidden via class (CSS can override), shown only during print */}
      <div id="print-sheet" className="print-only">
        <PrintSheet cardProps={cardProps} />
      </div>
    </div>
  )
}
