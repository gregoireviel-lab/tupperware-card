'use client'

import React, { forwardRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import type { Translation } from '@/lib/translations'

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
    <circle cx="50" cy="50" r="50" fill="#7eccc8" />
    <circle cx="50" cy="36" r="18" fill="#b0dedd" />
    <ellipse cx="50" cy="85" rx="28" ry="22" fill="#b0dedd" />
  </svg>
)

// Credit card standard: 85.6mm × 54mm
// At 8× pixel density: 684.8 ≈ 684px × 432px
export const CARD_W = 684
export const CARD_H = 432
const QR_SIZE = 118

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
        backgroundColor: '#5BB5B0',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: 'white',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 28px 18px 28px',
        boxSizing: 'border-box',
      }}
    >
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
              backgroundColor: 'rgba(255,255,255,0.15)',
              borderRadius: '10px',
              border: '2px dashed rgba(255,255,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'center' as const,
            }}
          >
            QR Code
          </div>
        )}
      </div>

      {/* Top section: brand (leave right space for QR) */}
      <div style={{ marginBottom: '16px', paddingRight: '160px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <span
            style={{
              fontSize: '2.1rem',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-1px',
              lineHeight: 1,
            }}
          >
            Tupperware
          </span>
          <sup
            style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              color: 'white',
              marginTop: '4px',
              marginLeft: '2px',
            }}
          >
            ®
          </sup>
        </div>
        <div
          style={{
            fontSize: '0.7rem',
            fontVariant: 'small-caps',
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '3px',
            marginTop: '2px',
            marginLeft: '2px',
          }}
        >
          {t.card.brand}
        </div>
        <div
          style={{
            fontSize: '0.7rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.9)',
            marginTop: '6px',
          }}
        >
          {t.card.subtitle}
        </div>
      </div>

      {/* Middle section: photo + fields (padded right to avoid QR overlap) */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          gap: '28px',
          paddingRight: '160px',
        }}
      >
        {/* Circular photo */}
        <div
          style={{
            width: '145px',
            height: '145px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            border: '3px solid rgba(255,255,255,0.5)',
            backgroundColor: '#4aa5a0',
          }}
        >
          {photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photoUrl}
              alt="Photo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <PersonSilhouette />
          )}
        </div>

        {/* Fields + dates stacked */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '120px' }}>
              {t.card.id}
            </span>
            <span style={{ fontSize: '1.2rem' }}>{id || '—'}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '120px' }}>
              {t.card.firstName}
            </span>
            <span style={{ fontSize: '1.2rem' }}>{firstName || '—'}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '120px' }}>
              {t.card.lastName}
            </span>
            <span style={{ fontSize: '1.2rem' }}>{lastName || '—'}</span>
          </div>
          {/* Dates inline below the name fields — no visual gap */}
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

      {/* Bottom: legal text + T logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '16px',
          marginTop: '10px',
        }}
      >
        <p
          style={{
            fontSize: '0.58rem',
            fontStyle: 'italic',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.8)',
            margin: 0,
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {t.card.legalText}
        </p>
        <div
          style={{
            width: '46px',
            height: '46px',
            backgroundColor: '#2D8A86',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              color: 'white',
              fontWeight: 900,
              fontSize: '1.8rem',
              lineHeight: 1,
              fontFamily: 'Georgia, serif',
            }}
          >
            T
          </span>
        </div>
      </div>
    </div>
  )
})

export default BusinessCard
