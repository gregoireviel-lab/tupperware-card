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

// Tupperware brand teal — sampled from official wordmark PNG (#14524f)
const BRAND = '#14524f'
const TEXT = '#ffffff'
const TEXT_SOFT = 'rgba(255,255,255,0.75)'

const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={TEXT} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
  </svg>
)

const MailIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={TEXT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
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

const Disclaimer = ({ text }: { text: string }) => (
  <p
    style={{
      fontSize: '0.55rem',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      color: TEXT_SOFT,
      margin: 0,
      lineHeight: 1.4,
      letterSpacing: '0.3px',
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

const BusinessCard = forwardRef<HTMLDivElement, CardProps>(function BusinessCard(
  { id, firstName, lastName, phone, email, photoUrl, affiliateLink, orientation, t },
  ref
) {
  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim()
  const { width, height } = getCardSize(orientation)
  const isPortrait = orientation === 'portrait'

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
        padding: isPortrait ? '32px 32px 22px 32px' : '24px 28px 18px 28px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isPortrait ? (
        // ─── PORTRAIT ───
        <>
          <TupperwareWordmark color={TEXT} width={210} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '24px' }}>
            <Photo url={photoUrl} size={120} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0, flex: 1 }}>
              <div
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: '-0.5px',
                  wordBreak: 'break-word',
                }}
              >
                {fullName || '—'}
              </div>
              {id && (
                <div style={{ fontSize: '0.72rem', color: TEXT_SOFT, marginTop: '4px' }}>
                  {t.card.id} {id}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '22px' }}>
            {phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
                <PhoneIcon />
                <span>{phone}</span>
              </div>
            )}
            {email && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
                <MailIcon />
                <span style={{ wordBreak: 'break-all' }}>{email}</span>
              </div>
            )}
          </div>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '18px' }}>
            <QRBlock link={affiliateLink} size={200} />
          </div>

          <Disclaimer text={t.card.legalText} />
        </>
      ) : (
        // ─── LANDSCAPE ───
        <>
          <div style={{ display: 'flex', gap: '20px', flex: 1, minHeight: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flex: 1, minWidth: 0 }}>
              <Photo url={photoUrl} size={150} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    fontSize: '1.7rem',
                    fontWeight: 700,
                    lineHeight: 1.05,
                    letterSpacing: '-0.5px',
                    wordBreak: 'break-word',
                  }}
                >
                  {fullName || '—'}
                </div>
                {phone && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <PhoneIcon size={16} />
                    <span>{phone}</span>
                  </div>
                )}
                {email && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <MailIcon size={16} />
                    <span style={{ wordBreak: 'break-all' }}>{email}</span>
                  </div>
                )}
                {id && (
                  <div style={{ fontSize: '0.72rem', color: TEXT_SOFT, marginTop: '2px' }}>
                    {t.card.id} {id}
                  </div>
                )}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '14px',
                flexShrink: 0,
              }}
            >
              <TupperwareWordmark color={TEXT} width={220} />
              <QRBlock link={affiliateLink} size={150} />
            </div>
          </div>

          <div style={{ marginTop: '10px' }}>
            <Disclaimer text={t.card.legalText} />
          </div>
        </>
      )}
    </div>
  )
})

export default BusinessCard
