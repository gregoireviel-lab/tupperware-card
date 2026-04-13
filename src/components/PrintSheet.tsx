'use client'

import React from 'react'
import BusinessCard, { type CardProps } from './BusinessCard'

interface PrintSheetProps {
  cardProps: CardProps
}

export default function PrintSheet({ cardProps }: PrintSheetProps) {
  return (
    <>
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 5mm;
          }
          .print-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 4mm;
            width: 100%;
            height: 100%;
          }
          .print-card-wrapper {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          .print-card-wrapper > div {
            width: 85mm !important;
            height: 54mm !important;
            border-radius: 4px !important;
            box-shadow: none !important;
            font-size: 0.32rem !important;
          }
        }
      `}</style>
      <div
        className="print-grid"
        style={{
          display: 'none',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="print-card-wrapper">
            <BusinessCard {...cardProps} />
          </div>
        ))}
      </div>
    </>
  )
}
