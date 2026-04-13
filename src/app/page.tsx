'use client'

import React, { useEffect, useRef, useState } from 'react'
import BusinessCard, { CARD_W, CARD_H } from '@/components/BusinessCard'
import CardForm from '@/components/CardForm'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import PrintSheet from '@/components/PrintSheet'
import { translations, type Locale } from '@/lib/translations'
import { downloadCardAsPDF } from '@/lib/downloadCard'

export default function Page() {
  const [locale, setLocale] = useState<Locale>('it') // default overridden by browser lang on mount
  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  // Affiliate link is always derived from ID — never stored separately
  const affiliateLink = id.length >= 5 && id.length <= 6 ? `https://tupperware-eu.com/?ref=${id}` : ''

  // Ref points to the full-size hidden card (not the scaled preview)
  // Auto-detect browser language on mount
  useEffect(() => {
    const lang = navigator.language.split('-')[0].toLowerCase()
    const supported = ['fr', 'it', 'de', 'en'] as Locale[]
    setLocale(supported.includes(lang as Locale) ? (lang as Locale) : 'en')
  }, [])

  const cardRef = useRef<HTMLDivElement>(null)
  const t = translations[locale]

  function handleChange(field: string, value: string) {
    switch (field) {
      case 'id': setId(value); break
      case 'firstName': setFirstName(value); break
      case 'lastName': setLastName(value); break
      case 'photoUrl': setPhotoUrl(value); break
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

  // Preview scale: display card at 75% of its native size
  const scale = 0.75
  const previewW = Math.round(CARD_W * scale)
  const previewH = Math.round(CARD_H * scale)

  return (
    <>
      {/* ── Main app ── */}
      <div className="min-h-screen bg-zinc-50">
        {/* Header */}
        <header className="bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-zinc-800">{t.ui.title}</h1>
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
              <h2 className="text-base font-semibold text-zinc-700 mb-5">Informations</h2>
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

            {/* Right: Preview + actions */}
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-base font-semibold text-zinc-700 mb-4">{t.ui.preview}</h2>
                {/* Scaled visual preview */}
                <div style={{ width: previewW, height: previewH, position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: 'top left',
                      width: CARD_W,
                      height: CARD_H,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  >
                    {/* Visual-only clone (no ref) */}
                    <BusinessCard id={id} firstName={firstName} lastName={lastName} photoUrl={photoUrl} affiliateLink={affiliateLink} t={t} />
                  </div>
                </div>
              </div>

              {/* Action buttons — stacked vertically */}
              <div className="flex flex-col gap-3" style={{ maxWidth: previewW }}>
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full px-5 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  {isDownloading ? '...' : t.ui.download}
                </button>
                <button
                  onClick={handlePrint}
                  className="w-full px-5 py-3 bg-zinc-700 hover:bg-zinc-800 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  {t.ui.print}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/*
       * Hidden full-size card for html2canvas capture.
       * Outside the main wrapper so it's never inside a CSS transform.
       * position:fixed + left:-9999px keeps it off-screen.
       */}
      <div
        style={{
          position: 'fixed',
          left: '-9999px',
          top: 0,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      >
        <BusinessCard ref={cardRef} {...cardProps} />
      </div>

      {/*
       * Print sheet — direct sibling of main wrapper (direct child of <body>).
       * This is CRITICAL: if it were inside the main wrapper, the
       * "body > * { display:none }" print rule would hide its parent first,
       * making #print-sheet invisible even with display:block !important.
       */}
      <div id="print-sheet" className="print-only">
        <PrintSheet cardProps={cardProps} />
      </div>
    </>
  )
}
