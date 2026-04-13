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

// Exact background of the official logos → card blends seamlessly
const CARD_BG = '#005F5C'

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
        padding: '20px 28px 18px 28px',
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
              backgroundColor: 'rgba(255,255,255,0.10)',
              borderRadius: '10px',
              border: '2px dashed rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center' as const,
            }}
          >
            QR Code
          </div>
        )}
      </div>

      {/* Top: Official Tupperware® wordmark PNG — blends with card bg */}
      <div style={{ marginBottom: '10px', paddingRight: '165px', zIndex: 1 }}>
        {/*
          Image: 5120×2832px. Text occupies roughly x:1100-4100, y:1050-1750 (3000×700px).
          Target height: 44px → scale = 44/700 = 0.0629
          Scaled image: 322×178px. Text starts at top=66px, left=69px in scaled image.
          Container 220×44px clips to just the wordmark.
        */}
        <div style={{ height: '44px', width: '220px', overflow: 'hidden', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/TUPPERWARE_SHARING_IMAGE.webp"
            alt="Tupperware"
            style={{
              position: 'absolute',
              width: '322px',
              height: '178px',
              maxWidth: 'none',
              top: '-66px',
              left: '-69px',
            }}
          />
        </div>
        <div
          style={{
            fontSize: '0.7rem',
            fontVariant: 'small-caps',
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '2px',
            marginTop: '2px',
          }}
        >
          {t.card.brand}
        </div>
        <div
          style={{
            fontSize: '0.68rem',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.9)',
            marginTop: '4px',
          }}
        >
          {t.card.subtitle}
        </div>
      </div>

      {/* Middle: photo + fields */}
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
        {/* Circular photo */}
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
                border: '2.5px solid rgba(255,255,255,0.35)',
                backgroundColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <PersonSilhouette />
            </div>
          )}
        </div>

        {/* Fields + dates */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '115px' }}>{t.card.id}</span>
            <span style={{ fontSize: '1.2rem' }}>{id || '—'}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '115px' }}>{t.card.firstName}</span>
            <span style={{ fontSize: '1.2rem' }}>{firstName || '—'}</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '115px' }}>{t.card.lastName}</span>
            <span style={{ fontSize: '1.2rem' }}>{lastName || '—'}</span>
          </div>
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

      {/* Bottom: legal text + official T™ badge PNG */}
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
        {/*
          T badge: 906×888px — nearly square, T icon centered.
          object-fit:cover at 58×58 → scale = 58/888 ≈ 0.065 (height)
          At that scale width = 906*0.065 = 59px → tiny horizontal crop, well centered.
          objectPosition '50% 44%' centers slightly above mid to hit the T.
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/66ed2894f62485f989a36775_CRU_Blog_Tupperware_Thumb.jpg"
          alt="T"
          style={{
            width: '58px',
            height: '58px',
            objectFit: 'cover',
            objectPosition: '50% 44%',
            borderRadius: '10px',
            flexShrink: 0,
            display: 'block',
          }}
        />
      </div>
    </div>
  )
})

export default BusinessCard
