'use client'

import type { Locale } from '@/lib/translations'

interface LanguageSwitcherProps {
  locale: Locale
  onChange: (locale: Locale) => void
}

const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'it', label: 'IT', flag: '🇮🇹' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'pl', label: 'PL', flag: '🇵🇱' },
  { code: 'da', label: 'DA', flag: '🇩🇰' },
  { code: 'sv', label: 'SV', flag: '🇸🇪' },
  { code: 'no', label: 'NO', flag: '🇳🇴' },
  { code: 'fi', label: 'FI', flag: '🇫🇮' },
]

export default function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  return (
    <>
      {/* Mobile: dropdown */}
      <select
        value={locale}
        onChange={(e) => onChange(e.target.value as Locale)}
        className="sm:hidden px-3 py-1.5 rounded-lg text-sm font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
        aria-label="Language"
      >
        {LOCALES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.flag} {l.label}
          </option>
        ))}
      </select>

      {/* Desktop: button row */}
      <div className="hidden sm:flex gap-2">
        {LOCALES.map((l) => (
          <button
            key={l.code}
            onClick={() => onChange(l.code)}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
              locale === l.code
                ? 'bg-teal-500 text-white'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </>
  )
}
