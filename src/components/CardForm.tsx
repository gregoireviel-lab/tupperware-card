'use client'

import React, { useRef } from 'react'
import type { Translation } from '@/lib/translations'
import type { Orientation, Theme } from '@/components/BusinessCard'

interface CardFormProps {
  id: string
  firstName: string
  lastName: string
  phone: string
  email: string
  photoUrl: string
  affiliateLink: string // computed from id, display-only
  orientation: Orientation
  theme: Theme
  t: Translation
  onChange: (field: string, value: string) => void
  onOrientationChange: (o: Orientation) => void
  onThemeChange: (th: Theme) => void
}

export default function CardForm({
  id,
  firstName,
  lastName,
  phone,
  email,
  photoUrl,
  affiliateLink,
  orientation,
  theme,
  t,
  onChange,
  onOrientationChange,
  onThemeChange,
}: CardFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  // ID validation: 5–6 digits
  const idIsValid = id === '' || (/^\d{5,6}$/.test(id))
  const idTooLong = id.length > 6

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      onChange('photoUrl', ev.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  function handleRemovePhoto() {
    onChange('photoUrl', '')
    // Reset input so the same file can be re-selected
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const inputClass =
    'w-full px-3 py-2 rounded-lg bg-white border border-zinc-300 text-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400'
  const inputStyle = {}
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

      {/* ID */}
      <div>
        <label className={labelClass}>{t.form.id}</label>
        <input
          type="text"
          inputMode="numeric"
          className={`${inputClass} ${!idIsValid || idTooLong ? 'border-red-400 focus:ring-red-400' : ''}`}
          style={inputStyle}
          value={id}
          maxLength={6}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, '').slice(0, 6)
            onChange('id', val)
          }}
          placeholder="ex: 96541"
        />
        {id.length > 0 && id.length < 5 && (
          <p className="text-xs text-red-500 mt-1">{id.length}/6 — minimum 5 chiffres</p>
        )}
        {id.length >= 5 && id.length <= 6 && affiliateLink && (
          <p className="text-xs text-zinc-400 mt-1 font-mono break-all">{affiliateLink}</p>
        )}
      </div>

      {/* First name */}
      <div>
        <label className={labelClass}>{t.form.firstName}</label>
        <input
          type="text"
          className={inputClass}
          style={inputStyle}
          value={firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
        />
      </div>

      {/* Last name */}
      <div>
        <label className={labelClass}>{t.form.lastName}</label>
        <input
          type="text"
          className={inputClass}
          style={inputStyle}
          value={lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
        />
      </div>

      {/* Phone (optional) */}
      <div>
        <label className={labelClass}>
          {t.form.phone} <span className="text-zinc-400 font-normal">({t.form.optional})</span>
        </label>
        <input
          type="tel"
          className={inputClass}
          style={inputStyle}
          value={phone}
          onChange={(e) => onChange('phone', e.target.value)}
          placeholder="+32 470 12 34 56"
        />
      </div>

      {/* Email (optional) */}
      <div>
        <label className={labelClass}>
          {t.form.email} <span className="text-zinc-400 font-normal">({t.form.optional})</span>
        </label>
        <input
          type="email"
          className={inputClass}
          style={inputStyle}
          value={email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="prenom.nom@example.com"
        />
      </div>

      {/* Photo upload (optional) */}
      <div>
        <label className={labelClass}>
          {t.form.photo} <span className="text-zinc-400 font-normal">({t.form.optional})</span>
        </label>
        <div className="flex items-center gap-3">
          {photoUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photoUrl}
              alt="Preview"
              className="w-12 h-12 rounded-full object-cover border-2 border-teal-300"
            />
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
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePhotoChange}
        />
      </div>
    </div>
  )
}
