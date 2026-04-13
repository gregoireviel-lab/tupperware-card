'use client'

import React, { useRef } from 'react'
import type { Translation } from '@/lib/translations'

interface CardFormProps {
  id: string
  firstName: string
  lastName: string
  photoUrl: string
  affiliateLink: string
  t: Translation
  onChange: (field: string, value: string) => void
}

export default function CardForm({
  id,
  firstName,
  lastName,
  photoUrl,
  affiliateLink,
  t,
  onChange,
}: CardFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

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
    'w-full px-3 py-2 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 placeholder:text-white/40'
  const inputStyle = { backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }
  const labelClass = 'block text-sm font-medium text-white/80 mb-1'

  return (
    <div className="flex flex-col gap-5">
      {/* ID */}
      <div>
        <label className={labelClass}>{t.form.id}</label>
        <input
          type="text"
          className={inputClass}
          style={inputStyle}
          value={id}
          onChange={(e) => onChange('id', e.target.value)}
          placeholder="ex: 123456"
        />
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

      {/* Affiliate link */}
      <div>
        <label className={labelClass}>{t.form.affiliateLink}</label>
        <input
          type="url"
          className={inputClass}
          style={inputStyle}
          value={affiliateLink}
          onChange={(e) => onChange('affiliateLink', e.target.value)}
          placeholder="https://..."
        />
      </div>

      {/* Photo upload */}
      <div>
        <label className={labelClass}>{t.form.photo}</label>
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
              className="px-3 py-2 text-white/70 hover:text-white text-sm rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
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
