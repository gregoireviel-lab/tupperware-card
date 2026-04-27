'use client'

import React, { forwardRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { TupperwareWordmark } from '@/components/logos/TupperwareWordmark'
import type { Translation } from '@/lib/translations'

export type Orientation = 'landscape' | 'portrait'
export type Side = 'front' | 'back'
export type Theme = 'teal' | 'mint'

export interface CardProps {
  firstName: string
  lastName: string
  phone: string
  email: string
  photoUrl: string
  affiliateLink: string
  orientation: Orientation
  side: Side
  theme: Theme
  t: Translation
}

export const CARD_W_LANDSCAPE = 684
export const CARD_H_LANDSCAPE = 432
export const CARD_W_PORTRAIT = 432
export const CARD_H_PORTRAIT = 684

export function getCardSize(orientation: Orientation) {
  return orientation === 'portrait'
    ? { width: CARD_W_PORTRAIT, height: CARD_H_PORTRAIT }
    : { width: CARD_W_LANDSCAPE, height: CARD_H_LANDSCAPE }
}

interface ThemeTokens {
  bg: string
  text: string
  textSoft: string
  qrBg: string
  qrFg: string
}

export function getThemeTokens(theme: Theme): ThemeTokens {
  if (theme === 'mint') {
    return {
      bg: '#9DD9D8',
      text: '#14524f',
      textSoft: 'rgba(20,82,79,0.7)',
      qrBg: '#ffffff',
      qrFg: '#14524f',
    }
  }
  return {
    bg: '#14524f',
    text: '#ffffff',
    textSoft: 'rgba(255,255,255,0.75)',
    qrBg: '#ffffff',
    qrFg: '#14524f',
  }
}

const PhoneIcon = ({ size = 18, color }: { size?: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
  </svg>
)

const MailIcon = ({ size = 18, color }: { size?: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

const Photo = ({ url, size, borderColor }: { url: string; size: number; borderColor: string }) => {
  if (!url) return null
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        flexShrink: 0,
        border: `2.5px solid ${borderColor}`,
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}

const Disclaimer = ({ text, color, align = 'center' }: { text: string; color: string; align?: 'left' | 'center' | 'right' }) => (
  <p
    style={{
      fontSize: '0.7rem',
      fontStyle: 'italic',
      color,
      margin: 0,
      lineHeight: 1.35,
      letterSpacing: '0.2px',
      textAlign: align,
    }}
  >
    {text}
  </p>
)

const QRBlock = ({ link, size, qrBg, qrFg, soft }: { link: string; size: number; qrBg: string; qrFg: string; soft: string }) => {
  if (link) {
    return (
      <div style={{ backgroundColor: qrBg, padding: '7px', borderRadius: '8px', lineHeight: 0 }}>
        <QRCodeSVG value={link} size={size} level="M" fgColor={qrFg} bgColor={qrBg} />
      </div>
    )
  }
  return (
    <div
      style={{
        width: `${size + 14}px`,
        height: `${size + 14}px`,
        backgroundColor: 'rgba(255,255,255,0.10)',
        borderRadius: '8px',
        border: `2px dashed ${soft}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem',
        color: soft,
        textAlign: 'center' as const,
      }}
    >
      QR
    </div>
  )
}

const ContactRow = ({ icon, text, justify = 'flex-start' }: { icon: React.ReactNode; text: string; justify?: 'flex-start' | 'flex-end' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', lineHeight: 1.2, justifyContent: justify }}>
    {icon}
    <span style={{ wordBreak: 'break-all' }}>{text}</span>
  </div>
)

const BusinessCard = forwardRef<HTMLDivElement, CardProps>(function BusinessCard(
  { firstName, lastName, phone, email, photoUrl, affiliateLink, orientation, side, theme, t },
  ref
) {
  const { width, height } = getCardSize(orientation)
  const isPortrait = orientation === 'portrait'
  const tk = getThemeTokens(theme)

  // ─── BACK SIDE ───
  if (side === 'back') {
    const logoW = isPortrait ? width * 0.92 : width * 0.78
    return (
      <div
        ref={ref}
        className="business-card-root"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: tk.bg,
          borderRadius: '18px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Trebuchet MS', Arial, Helvetica, sans-serif",
          color: tk.text,
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TupperwareWordmark color={tk.text} width={logoW} registered={false} />
      </div>
    )
  }

  // ─── FRONT ───
  const NameBlock = ({ size, align = 'left' }: { size: number; align?: 'left' | 'center' | 'right' }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        fontWeight: 700,
        letterSpacing: '-0.5px',
        textAlign: align,
        wordBreak: 'break-word',
        fontSize: `${size}px`,
        lineHeight: 1,
      }}
    >
      <span>{firstName || (lastName ? '' : '—')}</span>
      {lastName && <span>{lastName}</span>}
    </div>
  )

  const photoBorder = theme === 'mint' ? 'rgba(20,82,79,0.35)' : 'rgba(255,255,255,0.45)'

  return (
    <div
      ref={ref}
      className="business-card-root"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: tk.bg,
        borderRadius: '18px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Trebuchet MS', Arial, Helvetica, sans-serif",
        color: tk.text,
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        boxSizing: 'border-box',
      }}
    >
      {isPortrait ? (
        // ─── PORTRAIT — vertical logo on left edge (reads bottom-to-top), main content right ───
        <div style={{ display: 'flex', height: '100%', boxSizing: 'border-box' }}>
          {/* Left strip: rotated wordmark */}
          <div
            style={{
              width: '70px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 0',
            }}
          >
            <div style={{ transform: 'rotate(-90deg)', transformOrigin: 'center center', whiteSpace: 'nowrap' }}>
              <TupperwareWordmark color={tk.text} width={520} registered={false} />
            </div>
          </div>

          {/* Main column */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '28px 26px 20px 0',
              minWidth: 0,
            }}
          >
            {photoUrl && <Photo url={photoUrl} size={130} borderColor={photoBorder} />}

            <NameBlock size={32} align="center" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
              {phone && <ContactRow icon={<PhoneIcon color={tk.text} />} text={phone} />}
              {email && <ContactRow icon={<MailIcon color={tk.text} />} text={email} />}
            </div>

            <QRBlock link={affiliateLink} size={170} qrBg={tk.qrBg} qrFg={tk.qrFg} soft={tk.textSoft} />

            <Disclaimer text={t.card.legalText} color={tk.textSoft} align="center" />
          </div>
        </div>
      ) : (
        // ─── LANDSCAPE — logo top-right, name + contacts under it ───
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px 32px 18px 32px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '24px', flex: 1, minHeight: 0 }}>
            {/* Left — photo (top) + QR (under) */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', flexShrink: 0 }}>
              {photoUrl && <Photo url={photoUrl} size={130} borderColor={photoBorder} />}
              <QRBlock link={affiliateLink} size={130} qrBg={tk.qrBg} qrFg={tk.qrFg} soft={tk.textSoft} />
            </div>

            {/* Right — logo top, name middle, contacts bottom (right-aligned) */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                minWidth: 0,
                gap: '12px',
              }}
            >
              <TupperwareWordmark color={tk.text} width={210} registered={false} />
              <NameBlock size={30} align="right" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                {phone && <ContactRow icon={<PhoneIcon color={tk.text} />} text={phone} justify="flex-end" />}
                {email && <ContactRow icon={<MailIcon color={tk.text} />} text={email} justify="flex-end" />}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '8px' }}>
            <Disclaimer text={t.card.legalText} color={tk.textSoft} align="center" />
          </div>
        </div>
      )}
    </div>
  )
})

export default BusinessCard
