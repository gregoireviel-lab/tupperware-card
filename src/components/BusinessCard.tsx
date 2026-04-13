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

const BusinessCard = forwardRef<HTMLDivElement, CardProps>(function BusinessCard(
  { id, firstName, lastName, photoUrl, affiliateLink, t },
  ref
) {
  const today = new Date()
  const issuedAt = formatDate(today)
  const expiresAt = `31 / 12 / ${today.getFullYear()}`

  const CARD_W = 680
  const CARD_H = 432

  return (
    <div
      ref={ref}
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
        padding: '28px 28px 20px 28px',
        boxSizing: 'border-box',
      }}
    >
      {/* Top section: brand + subtitle */}
      <div style={{ marginBottom: '16px' }}>
        {/* Brand name */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
          <span
            style={{
              fontSize: '2rem',
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
              marginTop: '2px',
              marginLeft: '1px',
            }}
          >
            ®
          </sup>
        </div>
        {/* "Brand" small caps */}
        <div
          style={{
            fontSize: '0.75rem',
            fontVariant: 'small-caps',
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '3px',
            marginTop: '2px',
            marginLeft: '2px',
          }}
        >
          {t.card.brand}
        </div>
        {/* Subtitle italic */}
        <div
          style={{
            fontSize: '0.72rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.9)',
            marginTop: '8px',
          }}
        >
          {t.card.subtitle}
        </div>
      </div>

      {/* Middle section: photo + fields + QR */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {/* Circular photo */}
        <div
          style={{
            width: '110px',
            height: '110px',
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
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <PersonSilhouette />
          )}
        </div>

        {/* Fields */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1rem', minWidth: '100px' }}>
              {t.card.id}
            </span>
            <span style={{ fontSize: '1rem' }}>{id || '—'}</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1rem', minWidth: '100px' }}>
              {t.card.firstName}
            </span>
            <span style={{ fontSize: '1rem' }}>{firstName || '—'}</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1rem', minWidth: '100px' }}>
              {t.card.lastName}
            </span>
            <span style={{ fontSize: '1rem' }}>{lastName || '—'}</span>
          </div>
        </div>

        {/* QR code */}
        <div style={{ flexShrink: 0 }}>
          {affiliateLink ? (
            <div
              style={{
                backgroundColor: 'white',
                padding: '6px',
                borderRadius: '8px',
              }}
            >
              <QRCodeSVG value={affiliateLink} size={90} level="M" />
            </div>
          ) : (
            <div
              style={{
                width: '102px',
                height: '102px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: '8px',
                border: '2px dashed rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.6)',
                textAlign: 'center',
                padding: '8px',
              }}
            >
              QR Code
            </div>
          )}
        </div>
      </div>

      {/* Dates */}
      <div
        style={{
          display: 'flex',
          gap: '32px',
          marginTop: '14px',
          marginBottom: '10px',
          fontSize: '0.8rem',
        }}
      >
        <div>
          <span style={{ fontWeight: 700 }}>{t.card.issuedOn} </span>
          <span>{issuedAt}</span>
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>{t.card.expiresOn} </span>
          <span>{expiresAt}</span>
        </div>
      </div>

      {/* Bottom: legal text + T logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '16px',
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

        {/* T logo */}
        <div
          style={{
            width: '44px',
            height: '44px',
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
              fontSize: '1.6rem',
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
