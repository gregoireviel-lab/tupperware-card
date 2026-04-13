'use client'

import React from 'react'
import BusinessCard, { type CardProps } from './BusinessCard'

interface PrintSheetProps {
  cardProps: CardProps
}

export default function PrintSheet({ cardProps }: PrintSheetProps) {
  return (
    <div className="print-grid">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="print-card-slot">
          <BusinessCard {...cardProps} />
        </div>
      ))}
    </div>
  )
}
