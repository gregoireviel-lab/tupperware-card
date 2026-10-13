import {
  COUNTRIES,
  formatEmail,
  formatFirstName,
  formatLastName,
  isValidAffiliateUrl,
  isValidEmail,
  type Country,
} from '@/lib/format'
import type { Locale } from '@/lib/translations'

// Prefill contract (all optional, untrusted input, invalid values are ignored):
//   first, last, phone (local or +international), country (ISO-2), email, affiliate, lang

export const SUPPORTED_LOCALES: Locale[] = ['fr', 'it', 'de', 'en', 'pl', 'da', 'sv', 'no', 'fi', 'nl']

export interface Prefill {
  locale?: Locale
  firstName?: string
  lastName?: string
  phoneCountry?: Country
  phoneLocal?: string
  email?: string
  affiliateUrl?: string
}

const MAX_NAME = 60
const MAX_EMAIL = 120
const MAX_URL = 500

// Remove control characters, collapse whitespace, trim, cap length
function clean(raw: string | null, max: number): string {
  if (!raw) return ''
  // eslint-disable-next-line no-control-regex
  return raw.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max)
}

export function normalizeLocale(raw: string | null): Locale | undefined {
  const l = clean(raw, 10).toLowerCase().split(/[-_]/)[0]
  const norm = l === 'nb' || l === 'nn' ? 'no' : l
  return SUPPORTED_LOCALES.includes(norm as Locale) ? (norm as Locale) : undefined
}

export function parsePrefill(search: string): Prefill {
  const p = new URLSearchParams(search)
  const out: Prefill = {}

  const locale = normalizeLocale(p.get('lang'))
  if (locale) out.locale = locale

  const first = clean(p.get('first'), MAX_NAME)
  if (first) out.firstName = formatFirstName(first)
  const last = clean(p.get('last'), MAX_NAME)
  if (last) out.lastName = formatLastName(last)

  const email = formatEmail(clean(p.get('email'), MAX_EMAIL))
  if (email && isValidEmail(email)) out.email = email

  // Over-long URLs are rejected, never truncated (a truncated URL would encode a wrong QR target)
  const affiliate = clean(p.get('affiliate'), MAX_URL + 1)
  if (affiliate && affiliate.length <= MAX_URL && isValidAffiliateUrl(affiliate)) out.affiliateUrl = affiliate

  // Phone: "+32 475 12 34 56" (international, longest dial code wins) or local digits + country
  let phone = clean(p.get('phone'), 30)
  const cc = clean(p.get('country'), 2).toUpperCase()
  let country = COUNTRIES.find((c) => c.code === cc)
  if (phone.startsWith('00')) phone = '+' + phone.slice(2)
  if (phone.startsWith('+')) {
    const digits = phone.replace(/\D/g, '')
    const match = [...COUNTRIES]
      .sort((a, b) => b.dial.length - a.dial.length)
      .find((c) => digits.startsWith(c.dial.slice(1)))
    if (match) {
      country = match
      phone = digits.slice(match.dial.length - 1)
    } else {
      phone = ''
    }
  }
  const local = phone.replace(/\D/g, '').replace(/^0+/, '').slice(0, 15)
  if (local.length >= 6) {
    out.phoneLocal = local
    if (country) out.phoneCountry = country
  } else if (country) {
    out.phoneCountry = country
  }
  return out
}
