'use client'

import type { Locale } from '@/lib/translations'

interface LanguageSwitcherProps {
  locale: Locale
  onChange: (locale: Locale) => void
}

const LOCALES: { code: Locale; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'it', label: 'IT' },
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  return (
    <div className="flex gap-2">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          onClick={() => onChange(l.code)}
          className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
            locale === l.code
              ? 'text-white'
              : 'text-white/50 hover:text-white/80'
          }`}
          style={locale === l.code ? { backgroundColor: 'rgba(255,255,255,0.2)' } : {}}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
