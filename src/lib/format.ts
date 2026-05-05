// Input formatters & validators

export function formatFirstName(s: string): string {
  return s
    .split(/(\s+|-)/)
    .map((p) => (/^\s+$|^-$/.test(p) ? p : capitalize(p)))
    .join('')
}

export function formatLastName(s: string): string {
  return s.toLocaleUpperCase()
}

export function formatEmail(s: string): string {
  return s.trim().toLowerCase()
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function isValidEmail(s: string): boolean {
  return EMAIL_RE.test(s)
}

export function isValidAffiliateUrl(s: string): boolean {
  const trimmed = s.trim()
  if (!trimmed) return false
  try {
    const u = new URL(trimmed)
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

function capitalize(p: string): string {
  if (!p) return p
  return p.charAt(0).toLocaleUpperCase() + p.slice(1).toLocaleLowerCase()
}

// ─── Phone ───

export interface Country {
  code: string // ISO-2
  dial: string // e.g. "+32"
  flag: string
  label: string
}

export const COUNTRIES: Country[] = [
  { code: 'BE', dial: '+32', flag: '🇧🇪', label: 'Belgium' },
  { code: 'FR', dial: '+33', flag: '🇫🇷', label: 'France' },
  { code: 'LU', dial: '+352', flag: '🇱🇺', label: 'Luxembourg' },
  { code: 'NL', dial: '+31', flag: '🇳🇱', label: 'Netherlands' },
  { code: 'DE', dial: '+49', flag: '🇩🇪', label: 'Germany' },
  { code: 'AT', dial: '+43', flag: '🇦🇹', label: 'Austria' },
  { code: 'CH', dial: '+41', flag: '🇨🇭', label: 'Switzerland' },
  { code: 'IT', dial: '+39', flag: '🇮🇹', label: 'Italy' },
  { code: 'ES', dial: '+34', flag: '🇪🇸', label: 'Spain' },
  { code: 'PT', dial: '+351', flag: '🇵🇹', label: 'Portugal' },
  { code: 'GB', dial: '+44', flag: '🇬🇧', label: 'United Kingdom' },
  { code: 'PL', dial: '+48', flag: '🇵🇱', label: 'Poland' },
  { code: 'DK', dial: '+45', flag: '🇩🇰', label: 'Denmark' },
  { code: 'SE', dial: '+46', flag: '🇸🇪', label: 'Sweden' },
  { code: 'NO', dial: '+47', flag: '🇳🇴', label: 'Norway' },
  { code: 'FI', dial: '+358', flag: '🇫🇮', label: 'Finland' },
]

export const DEFAULT_COUNTRY: Country = COUNTRIES[0] // BE

export function getCountryForLocale(locale: string): Country {
  const map: Record<string, string> = {
    fr: 'FR',
    it: 'IT',
    de: 'DE',
    en: 'GB',
    pl: 'PL',
    da: 'DK',
    sv: 'SE',
    no: 'NO',
    fi: 'FI',
    nl: 'NL',
  }
  const code = map[locale]
  return COUNTRIES.find((c) => c.code === code) ?? DEFAULT_COUNTRY
}

export function formatPhoneLocal(input: string): string {
  const d = input.replace(/\D/g, '')
  if (!d) return ''
  const pairs: string[] = []
  let rest = d
  while (rest.length > 3) {
    pairs.unshift(rest.slice(-2))
    rest = rest.slice(0, -2)
  }
  pairs.unshift(rest)
  return pairs.join(' ')
}

export function buildPhoneDisplay(country: Country, local: string): string {
  const formatted = formatPhoneLocal(local)
  return formatted ? `${country.dial} ${formatted}` : ''
}
