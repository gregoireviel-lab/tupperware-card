'use client'

import React, { useRef } from 'react'
import type { Translation } from '@/lib/translations'
import type { Orientation, Theme } from '@/components/BusinessCard'
import {
  formatFirstName,
  formatLastName,
  formatEmail,
  formatPhoneLocal,
  isValidAffiliateUrl,
  isValidEmail,
  COUNTRIES,
  type Country,
} from '@/lib/format'

interface CardFormProps {
  affiliateUrl: string
  firstName: string
  lastName: string
  phoneCountry: Country
  phoneLocal: string
  email: string
  photoUrl: string
  affiliateLink: string
  orientation: Orientation
  theme: Theme
  t: Translation
  onChange: (field: string, value: string) => void
  onPhoneCountryChange: (c: Country) => void
  onOrientationChange: (o: Orientation) => void
  onThemeChange: (th: Theme) => void
}

export default function CardForm({
  affiliateUrl,
  firstName,
  lastName,
  phoneCountry,
  phoneLocal,
  email,
  photoUrl,
  affiliateLink,
  orientation,
  theme,
  t,
  onChange,
  onPhoneCountryChange,
  onOrientationChange,
  onThemeChange,
}: CardFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const urlIsValid = affiliateUrl.trim() === '' || isValidAffiliateUrl(affiliateUrl)
  const emailIsValid = email === '' || isValidEmail(email)

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => onChange('photoUrl', ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  function handleRemovePhoto() {
    onChange('photoUrl', '')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const inputClass =
    'w-full px-3 py-2 rounded-lg bg-white border border-zinc-300 text-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400'
  const labelClass = 'block text-sm font-medium text-zinc-700 mb-1'

  return (
    <div className="flex flex-col gap-5">
      {/* Orientation toggle */}
      <div>
        <label className={labelClass}>{t.form.orientation}</label>
        <div className="grid grid-cols-2 gap-2">
          {(['landscape', 'portrait'] as const).map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => onOrientationChange(o)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                orientation === o
                  ? 'bg-teal-600 text-white border-teal-600'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50'
              }`}
            >
              {t.form[o]}
            </button>
          ))}
        </div>
      </div>

      {/* Theme toggle */}
      <div>
        <label className={labelClass}>{t.form.theme}</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onThemeChange('teal')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border flex items-center justify-center gap-2 ${
              theme === 'teal'
                ? 'bg-teal-600 text-white border-teal-600'
                : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50'
            }`}
          >
            <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: '#14524f', border: '1px solid rgba(0,0,0,0.1)' }} />
            {t.form.themeTeal}
          </button>
          <button
            type="button"
            onClick={() => onThemeChange('mint')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border flex items-center justify-center gap-2 ${
              theme === 'mint'
                ? 'bg-teal-600 text-white border-teal-600'
                : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50'
            }`}
          >
            <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: '#9DD9D8', border: '1px solid rgba(0,0,0,0.1)' }} />
            {t.form.themeMint}
          </button>
        </div>
      </div>

      {/* Affiliate URL */}
      <div>
        <div className="mb-2 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-xs text-teal-900 leading-snug">
          <span className="font-semibold">{t.form.changeNoticeTitle}</span> {t.form.changeNotice}
        </div>
        <label className={labelClass}>{t.form.affiliateUrlLabel}</label>
        <p className="text-xs text-zinc-500 mb-1.5 leading-snug">{t.form.affiliateUrlHint}</p>
        <input
          type="url"
          inputMode="url"
          autoComplete="off"
          spellCheck={false}
          className={`${inputClass} ${!urlIsValid ? 'border-red-400 focus:ring-red-400' : ''}`}
          value={affiliateUrl}
          onChange={(e) => onChange('affiliateUrl', e.target.value)}
          placeholder="https://tupperware-eu.com/?ref=96541"
        />
        {!urlIsValid && (
          <p className="text-xs text-red-500 mt-1">{t.form.affiliateUrlInvalid}</p>
        )}
        {urlIsValid && affiliateLink && (
          <p className="text-xs text-zinc-400 mt-1 font-mono break-all">{affiliateLink}</p>
        )}
      </div>

      {/* First name — Capitalized */}
      <div>
        <label className={labelClass}>{t.form.firstName}</label>
        <input
          type="text"
          className={inputClass}
          value={firstName}
          onChange={(e) => onChange('firstName', formatFirstName(e.target.value))}
          placeholder="Marie"
        />
      </div>

      {/* Last name — UPPERCASE */}
      <div>
        <label className={labelClass}>{t.form.lastName}</label>
        <input
          type="text"
          className={inputClass}
          value={lastName}
          onChange={(e) => onChange('lastName', formatLastName(e.target.value))}
          placeholder="DUPONT"
        />
      </div>

      {/* Phone — country dropdown + local number */}
      <div>
        <label className={labelClass}>
          {t.form.phone} <span className="text-zinc-400 font-normal">({t.form.optional})</span>
        </label>
        <div className="flex gap-2">
          <select
            value={phoneCountry.code}
            onChange={(e) => {
              const c = COUNTRIES.find((x) => x.code === e.target.value)
              if (c) onPhoneCountryChange(c)
            }}
            className="px-2 py-2 rounded-lg bg-white border border-zinc-300 text-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Country"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.flag} {c.dial}
              </option>
            ))}
          </select>
          <input
            type="tel"
            inputMode="numeric"
            className={`${inputClass} flex-1`}
            value={formatPhoneLocal(phoneLocal)}
            onChange={(e) => onChange('phoneLocal', e.target.value.replace(/\D/g, '').slice(0, 12))}
            placeholder="470 12 34 56"
          />
        </div>
      </div>

      {/* Email — lowercase + valid format */}
      <div>
        <label className={labelClass}>
          {t.form.email} <span className="text-zinc-400 font-normal">({t.form.optional})</span>
        </label>
        <input
          type="email"
          className={`${inputClass} ${!emailIsValid ? 'border-red-400 focus:ring-red-400' : ''}`}
          value={email}
          onChange={(e) => onChange('email', formatEmail(e.target.value))}
          placeholder="prenom.nom@example.com"
        />
        {!emailIsValid && (
          <p className="text-xs text-red-500 mt-1">Invalid email format</p>
        )}
      </div>

      {/* Photo (optional) */}
      <div>
        <label className={labelClass}>
          {t.form.photo} <span className="text-zinc-400 font-normal">({t.form.optional})</span>
        </label>
        <div className="flex items-center gap-3">
          {photoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photoUrl} alt="Preview" className="w-12 h-12 rounded-full object-cover border-2 border-teal-300" />
          )}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {t.form.uploadPhoto}
          </button>
          {photoUrl && (
            <button
              type="button"
              onClick={handleRemovePhoto}
              className="px-3 py-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-sm rounded-lg transition-colors"
            >
              ✕
            </button>
          )}
        </div>
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
      </div>
    </div>
  )
}
