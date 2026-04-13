'use client'

import React, { forwardRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import type { Translation } from '@/lib/translations'
import { TupperwareWordmark } from './logos/TupperwareWordmark'
import { TupperwareTIcon } from './logos/TupperwareTIcon'

export interface CardProps {
  id: string
  firstName: string
  lastName: string
  photoUrl: string
  affiliateLink: string
  t: Translation
}

function formatDate(date: Date): string {
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${dd} / ${mm} / ${yyyy}`
}

const PersonSilhouette = () => (
  <svg
    viewBox="0 0 100 100"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <circle cx="50" cy="50" r="50" fill="rgba(255,255,255,0.15)" />
    <circle cx="50" cy="36" r="18" fill="rgba(255,255,255,0.35)" />
    <ellipse cx="50" cy="85" rx="28" ry="22" fill="rgba(255,255,255,0.35)" />
  </svg>
)

// Credit card standard: 85.6mm × 54mm
// At 8× pixel density: 684.8 ≈ 684px × 432px
export const CARD_W = 684
export const CARD_H = 432
const QR_SIZE = 118

// Brand colors from Tupperware identity
const CARD_BG = '#007C78'        // medium-dark teal (card background)
const CARD_BG_DARK = '#005F5C'   // dark teal (T icon background)

const BusinessCard = forwardRef<HTMLDivElement, CardProps>(function BusinessCard(
  { id, firstName, lastName, photoUrl, affiliateLink, t },
  ref
) {
  const today = new Date()
  const issuedAt = formatDate(today)
  const expiresAt = `31 / 12 / ${today.getFullYear()}`

  return (
    <div
      ref={ref}
      className="business-card-root"
      style={{
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        backgroundColor: CARD_BG,
        borderRadius: '18px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Trebuchet MS', Arial, Helvetica, sans-serif",
        color: 'white',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 28px 18px 28px',
        boxSizing: 'border-box',
      }}
    >
      {/* Subtle gradient overlay for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.06) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* QR code — absolute top-right */}
      <div
        style={{
          position: 'absolute',
          top: '22px',
          right: '22px',
          zIndex: 2,
        }}
      >
        {affiliateLink ? (
          <div
            style={{
              backgroundColor: 'white',
              padding: '8px',
              borderRadius: '10px',
              lineHeight: 0,
            }}
          >
            <QRCodeSVG value={affiliateLink} size={QR_SIZE} level="M" />
          </div>
        ) : (
          <div
            style={{
              width: `${QR_SIZE + 16}px`,
              height: `${QR_SIZE + 16}px`,
              backgroundColor: 'rgba(255,255,255,0.12)',
              borderRadius: '10px',
              border: '2px dashed rgba(255,255,255,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.55)',
              textAlign: 'center' as const,
            }}
          >
            QR Code
          </div>
        )}
      </div>

      {/* Top: Tupperware wordmark + subtitle */}
      <div style={{ marginBottom: '14px', paddingRight: '165px', zIndex: 1 }}>
        <TupperwareWordmark color="white" width={210} />
        <div
          style={{
            fontSize: '0.65rem',
            fontVariant: 'small-caps',
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '2px',
            marginTop: '3px',
            marginLeft: '1px',
          }}
        >
          {t.card.brand}
        </div>
        <div
          style={{
            fontSize: '0.68rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.88)',
            marginTop: '5px',
          }}
        >
          {t.card.subtitle}
        </div>
      </div>

      {/* Middle: photo + fields (right-padded to avoid QR overlap) */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          gap: '26px',
          paddingRight: '165px',
          zIndex: 1,
        }}
      >
        {/* Circular photo — border-radius directly on img for html2canvas compat */}
        <div style={{ width: '145px', height: '145px', flexShrink: 0, position: 'relative' }}>
          {photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photoUrl}
              alt="Photo"
              style={{
                width: '145px',
                height: '145px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2.5px solid rgba(255,255,255,0.45)',
                display: 'block',
              }}
            />
          ) : (
            <div
              style={{
                width: '145px',
                height: '145px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2.5px solid rgba(255,255,255,0.45)',
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
            >
              <PersonSilhouette />
            </div>
          )}
        </div>

        {/* Fields + dates */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '115px' }}>
              {t.card.id}
            </span>
            <span style={{ fontSize: '1.2rem' }}>{id || '—'}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '115px' }}>
              {t.card.firstName}
            </span>
            <span style={{ fontSize: '1.2rem' }}>{firstName || '—'}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '115px' }}>
              {t.card.lastName}
            </span>
            <span style={{ fontSize: '1.2rem' }}>{lastName || '—'}</span>
          </div>
          {/* Dates — stacked directly below name fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px', fontSize: '0.82rem' }}>
            <div>
              <span style={{ fontWeight: 700 }}>{t.card.issuedOn} </span>
              <span>{issuedAt}</span>
            </div>
            <div>
              <span style={{ fontWeight: 700 }}>{t.card.expiresOn} </span>
              <span>{expiresAt}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: legal text + T icon */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '12px',
          marginTop: '10px',
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: '0.55rem',
            fontStyle: 'italic',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
            margin: 0,
            lineHeight: 1.45,
            flex: 1,
          }}
        >
          {t.card.legalText}
        </p>
        {/* Official T brand mark */}
        <TupperwareTIcon size={46} bgColor={CARD_BG_DARK} markColor="#40D8C8" />
      </div>
    </div>
  )
})

export default BusinessCard
