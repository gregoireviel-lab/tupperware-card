'use client'

import React, { useEffect, useRef, useState } from 'react'
import BusinessCard, { getCardSize, type Orientation, type Side, type Theme } from '@/components/BusinessCard'
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
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [orientation, setOrientation] = useState<Orientation>('landscape')
  const [theme, setTheme] = useState<Theme>('teal')
  const [side, setSide] = useState<Side>('front')
  const [isDownloading, setIsDownloading] = useState(false)

  // Affiliate link is always derived from ID — never stored separately
  const affiliateLink = id.length >= 5 && id.length <= 6 ? `https://tupperware-eu.com/?ref=${id}` : ''

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
      case 'phone': setPhone(value); break
      case 'email': setEmail(value); break
      case 'photoUrl': setPhotoUrl(value); break
    }
  }

  async function handleDownload() {
    if (!cardRef.current) return
    setIsDownloading(true)
    try {
      await downloadCardAsPDF(cardRef.current, orientation)
    } finally {
      setIsDownloading(false)
    }
  }

  function handlePrint() {
    window.print()
  }

  function handleTestQR() {
    if (affiliateLink) window.open(affiliateLink, '_blank', 'noopener')
  }

  const baseCardProps = {
    firstName,
    lastName,
    phone,
    email,
    photoUrl,
    affiliateLink,
    orientation,
    theme,
    t,
  }
  const previewCardProps = { ...baseCardProps, side }
  // For PDF download: capture the currently shown side
  const downloadCardProps = { ...baseCardProps, side }

  const scale = 0.75
  const { width: cardW, height: cardH } = getCardSize(orientation)
  const previewW = Math.round(cardW * scale)
  const previewH = Math.round(cardH * scale)

  return (
    <>
      <div className="min-h-screen bg-zinc-50">
        <header className="bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-zinc-800">{t.ui.title}</h1>
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
              <h2 className="text-base font-semibold text-zinc-700 mb-5">Informations</h2>
              <CardForm
                id={id}
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                email={email}
                photoUrl={photoUrl}
                affiliateLink={affiliateLink}
                orientation={orientation}
                theme={theme}
                t={t}
                onChange={handleChange}
                onOrientationChange={setOrientation}
                onThemeChange={setTheme}
              />
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-zinc-700">{t.ui.preview}</h2>
                  <button
                    type="button"
                    onClick={() => setSide(side === 'front' ? 'back' : 'front')}
                    className="px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50"
                  >
                    {side === 'front' ? t.form.flipBack : t.form.flipFront}
                  </button>
                </div>
                <div style={{ width: previewW, height: previewH, position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: 'top left',
                      width: cardW,
                      height: cardH,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  >
                    <BusinessCard {...previewCardProps} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3" style={{ maxWidth: previewW }}>
                {affiliateLink && (
                  <button
                    onClick={handleTestQR}
                    className="w-full px-5 py-2.5 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-700 font-medium rounded-xl transition-colors text-sm"
                  >
                    🔗 {t.form.testQR}
                  </button>
                )}
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

      {/* Hidden full-size card for html2canvas — captures the currently displayed side */}
      <div style={{ position: 'fixed', left: '-9999px', top: 0, pointerEvents: 'none', zIndex: -1 }}>
        <BusinessCard ref={cardRef} {...downloadCardProps} />
      </div>

      {/* Print sheet: page 1 = fronts, page 2 = backs (mirrored for duplex alignment) */}
      <div id="print-sheet" className="print-only" data-orientation={orientation}>
        <PrintSheet baseCardProps={baseCardProps} />
      </div>
    </>
  )
}
