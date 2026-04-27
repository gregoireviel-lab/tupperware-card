'use client'

import React, { forwardRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { TupperwareWordmark } from '@/components/logos/TupperwareWordmark'
import type { Translation } from '@/lib/translations'

export type Orientation = 'landscape' | 'portrait'

export interface CardProps {
  id: string
  firstName: string
  lastName: string
  phone: string
  email: string
  photoUrl: string
  affiliateLink: string
  orientation: Orientation
  t: Translation
}

// Credit card standard: 85.6mm × 54mm. 8× pixel density: 684×432
export const CARD_W_LANDSCAPE = 684
export const CARD_H_LANDSCAPE = 432
export const CARD_W_PORTRAIT = 432
export const CARD_H_PORTRAIT = 684

export function getCardSize(orientation: Orientation) {
  return orientation === 'portrait'
    ? { width: CARD_W_PORTRAIT, height: CARD_H_PORTRAIT }
    : { width: CARD_W_LANDSCAPE, height: CARD_H_LANDSCAPE }
}

const BRAND = '#14524f'
const TEXT = '#ffffff'
const TEXT_SOFT = 'rgba(255,255,255,0.7)'

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={TEXT} xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
  </svg>
)

const MailIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={TEXT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

const Photo = ({ url, size }: { url: string; size: number }) => (
  <div
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      flexShrink: 0,
      ...(url
        ? {
            border: '2.5px solid rgba(255,255,255,0.45)',
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        : {
            border: '2px dashed rgba(255,255,255,0.25)',
            backgroundColor: 'rgba(255,255,255,0.05)',
          }),
    }}
  />
)

const Disclaimer = ({ text, align = 'left' }: { text: string; align?: 'left' | 'center' }) => (
  <p
    style={{
      fontSize: '0.55rem',
      fontStyle: 'italic',
      color: TEXT_SOFT,
      margin: 0,
      lineHeight: 1.4,
      letterSpacing: '0.2px',
      textAlign: align,
    }}
  >
    {text}
  </p>
)

const QRBlock = ({ link, size }: { link: string; size: number }) => {
  if (link) {
    return (
      <div style={{ backgroundColor: '#ffffff', padding: '7px', borderRadius: '8px', lineHeight: 0 }}>
        <QRCodeSVG value={link} size={size} level="M" fgColor={BRAND} bgColor="#ffffff" />
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
        border: `2px dashed ${TEXT_SOFT}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.7rem',
        color: TEXT_SOFT,
        textAlign: 'center' as const,
      }}
    >
      QR Code
    </div>
  )
}

const ContactRow = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', lineHeight: 1.2 }}>
    {icon}
    <span style={{ wordBreak: 'break-all' }}>{text}</span>
  </div>
)

const BusinessCard = forwardRef<HTMLDivElement, CardProps>(function BusinessCard(
  { firstName, lastName, phone, email, photoUrl, affiliateLink, orientation, t },
  ref
) {
  const { width, height } = getCardSize(orientation)
  const isPortrait = orientation === 'portrait'

  const NameBlock = ({ size, align = 'left' }: { size: number; align?: 'left' | 'center' }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.05,
        fontWeight: 700,
        letterSpacing: '-0.5px',
        textAlign: align,
        wordBreak: 'break-word',
        fontSize: `${size}px`,
      }}
    >
      <span>{firstName || (lastName ? '' : '—')}</span>
      {lastName && <span>{lastName}</span>}
    </div>
  )

  return (
    <div
      ref={ref}
      className="business-card-root"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: BRAND,
        borderRadius: '18px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Trebuchet MS', Arial, Helvetica, sans-serif",
        color: TEXT,
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        padding: isPortrait ? '32px 28px 22px 28px' : '26px 32px 18px 32px',
      }}
    >
      {isPortrait ? (
        // ─── PORTRAIT — everything centered ───
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, gap: '16px' }}>
          <TupperwareWordmark color={TEXT} width={200} registered={false} />

          <Photo url={photoUrl} size={120} />

          <NameBlock size={26} align="center" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
            {phone && <ContactRow icon={<PhoneIcon />} text={phone} />}
            {email && <ContactRow icon={<MailIcon />} text={email} />}
          </div>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
            <QRBlock link={affiliateLink} size={170} />
          </div>

          <Disclaimer text={t.card.legalText} align="center" />
        </div>
      ) : (
        // ─── LANDSCAPE — logo left, QR right, content centered vertically ───
        <>
          {/* Header: logo left, QR right */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <TupperwareWordmark color={TEXT} width={170} registered={false} />
            <div style={{ position: 'absolute', top: '24px', right: '32px' }}>
              <QRBlock link={affiliateLink} size={120} />
            </div>
          </div>

          {/* Body: photo + name + contacts (centered vertically) */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              paddingRight: '150px',
              marginTop: '8px',
            }}
          >
            <Photo url={photoUrl} size={120} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0, flex: 1 }}>
              <NameBlock size={26} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {phone && <ContactRow icon={<PhoneIcon />} text={phone} />}
                {email && <ContactRow icon={<MailIcon />} text={email} />}
              </div>
            </div>
          </div>

          <Disclaimer text={t.card.legalText} />
        </>
      )}
    </div>
  )
})

export default BusinessCard
