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

  const inputClass =
    'w-full px-3 py-2 rounded-lg bg-white border border-zinc-300 text-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400'
  const labelClass = 'block text-sm font-medium text-zinc-700 mb-1'

  return (
    <div className="flex flex-col gap-5">
      {/* ID */}
      <div>
        <label className={labelClass}>{t.form.id}</label>
        <input
          type="text"
          className={inputClass}
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
              onClick={() => onChange('photoUrl', '')}
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
