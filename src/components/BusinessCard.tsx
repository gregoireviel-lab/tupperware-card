'use client'

import React, { forwardRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { TupperwareWordmark } from '@/components/logos/TupperwareWordmark'
import type { Translation } from '@/lib/translations'

export interface CardProps {
  id: string
  firstName: string
  lastName: string
  phone: string
  email: string
  photoUrl: string
  affiliateLink: string
  t: Translation
}

// Credit card standard: 85.6mm × 54mm
// At 8× pixel density: 684.8 ≈ 684px × 432px
export const CARD_W = 684
export const CARD_H = 432
const QR_SIZE = 168

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

const BusinessCard = forwardRef<HTMLDivElement, CardProps>(function BusinessCard(
  { id, firstName, lastName, phone, email, photoUrl, affiliateLink, t },
  ref
) {
  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim()

  return (
    <div
      ref={ref}
      className="business-card-root"
      style={{
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        backgroundColor: BRAND,
        borderRadius: '18px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Trebuchet MS', Arial, Helvetica, sans-serif",
        color: TEXT,
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        boxSizing: 'border-box',
        padding: '32px 36px 24px 36px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* QR code — absolute top-right */}
      <div
        style={{
          position: 'absolute',
          top: '32px',
          right: '36px',
          zIndex: 2,
        }}
      >
        {affiliateLink ? (
          <div style={{ backgroundColor: '#ffffff', padding: '8px', borderRadius: '10px', lineHeight: 0 }}>
            <QRCodeSVG value={affiliateLink} size={QR_SIZE} level="M" fgColor={BRAND} bgColor="#ffffff" />
          </div>
        ) : (
          <div
            style={{
              width: `${QR_SIZE}px`,
              height: `${QR_SIZE}px`,
              backgroundColor: 'rgba(255,255,255,0.10)',
              borderRadius: '10px',
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
        )}
      </div>

      {/* Top-left: Tupperware logo */}
      <div style={{ marginBottom: '18px', zIndex: 1 }}>
        <TupperwareWordmark color={TEXT} width={180} />
      </div>

      {/* Middle: optional photo + name + contact */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          paddingRight: `${QR_SIZE + 24}px`,
          flex: 1,
          zIndex: 1,
        }}
      >
        {photoUrl && (
          <div
            style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              border: `2.5px solid rgba(255,255,255,0.45)`,
              backgroundImage: `url(${photoUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              flexShrink: 0,
            }}
          />
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
          {/* Name */}
          <div
            style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              lineHeight: 1.05,
              color: TEXT,
              letterSpacing: '-0.5px',
              wordBreak: 'break-word',
            }}
          >
            {fullName || '—'}
          </div>

          {/* Phone (optional) */}
          {phone && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
              <PhoneIcon />
              <span>{phone}</span>
            </div>
          )}

          {/* Email (optional) */}
          {email && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1rem' }}>
              <MailIcon />
              <span style={{ wordBreak: 'break-all' }}>{email}</span>
            </div>
          )}

          {/* ID — discreet under contacts */}
          {id && (
            <div style={{ fontSize: '0.78rem', color: TEXT_SOFT, marginTop: '2px' }}>
              {t.card.id} {id}
            </div>
          )}
        </div>
      </div>

      {/* Bottom: disclaimer */}
      <div style={{ zIndex: 1, marginTop: '12px' }}>
        <p
          style={{
            fontSize: '0.55rem',
            fontStyle: 'italic',
            textTransform: 'uppercase',
            color: TEXT_SOFT,
            margin: 0,
            lineHeight: 1.45,
            letterSpacing: '0.3px',
          }}
        >
          {t.card.legalText}
        </p>
      </div>
    </div>
  )
})

export default BusinessCard
