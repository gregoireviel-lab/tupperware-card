import {
  CARD_W_LANDSCAPE,
  CARD_H_LANDSCAPE,
  CARD_W_PORTRAIT,
  CARD_H_PORTRAIT,
  type Orientation,
} from '@/components/BusinessCard'

// Standard credit-card business card: 85.6mm × 54mm
const CARD_MM_LONG = 85.6
const CARD_MM_SHORT = 54

export async function downloadCardAsPDF(
  frontEl: HTMLDivElement,
  backEl: HTMLDivElement,
  orientation: Orientation
): Promise<void> {
  const html2canvas = (await import('html2canvas')).default
  const { default: jsPDF } = await import('jspdf')

  await document.fonts.ready
  await new Promise((r) => setTimeout(r, 120))

  const isPortrait = orientation === 'portrait'
  const pxW = isPortrait ? CARD_W_PORTRAIT : CARD_W_LANDSCAPE
  const pxH = isPortrait ? CARD_H_PORTRAIT : CARD_H_LANDSCAPE
  const mmW = isPortrait ? CARD_MM_SHORT : CARD_MM_LONG
  const mmH = isPortrait ? CARD_MM_LONG : CARD_MM_SHORT

  const toPng = async (el: HTMLDivElement) => {
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      width: pxW,
      height: pxH,
      logging: false,
    })
    return canvas.toDataURL('image/png')
  }

  const frontPng = await toPng(frontEl)
  const backPng = await toPng(backEl)

  // Page 1: front. Page 2: back. Same physical size on both pages.
  // Duplex print (long-edge flip): page 2 lands on the back of page 1, aligned for cutting.
  const pdf = new jsPDF({
    orientation: isPortrait ? 'portrait' : 'landscape',
    unit: 'mm',
    format: [mmW, mmH],
  })
  pdf.addImage(frontPng, 'PNG', 0, 0, mmW, mmH)
  pdf.addPage([mmW, mmH], isPortrait ? 'portrait' : 'landscape')
  pdf.addImage(backPng, 'PNG', 0, 0, mmW, mmH)
  pdf.save('tupperware-card.pdf')
}
