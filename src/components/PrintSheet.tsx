'use client'

import React from 'react'
import BusinessCard, { type CardProps } from './BusinessCard'

type BaseCardProps = Omit<CardProps, 'side'>

interface PrintSheetProps {
  baseCardProps: BaseCardProps
}

const SLOT_COUNT = 8

export default function PrintSheet({ baseCardProps }: PrintSheetProps) {
  return (
    <>
      {/* Page 1 — fronts */}
      <div className="print-grid">
        {Array.from({ length: SLOT_COUNT }).map((_, i) => (
          <div key={`front-${i}`} className="print-card-slot">
            <BusinessCard {...baseCardProps} side="front" />
          </div>
        ))}
      </div>

      {/* Page 2 — backs, mirrored for duplex (long-edge flip) alignment */}
      <div className="print-grid print-grid-back">
        {Array.from({ length: SLOT_COUNT }).map((_, i) => (
          <div key={`back-${i}`} className="print-card-slot">
            <BusinessCard {...baseCardProps} side="back" />
          </div>
        ))}
      </div>
    </>
  )
}
