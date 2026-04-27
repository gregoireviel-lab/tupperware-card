import {
  CARD_W_LANDSCAPE,
  CARD_H_LANDSCAPE,
  CARD_W_PORTRAIT,
  CARD_H_PORTRAIT,
  type Orientation,
} from '@/components/BusinessCard'

export async function downloadCardAsPDF(
  element: HTMLDivElement,
  orientation: Orientation
): Promise<void> {
  // Dynamic imports to avoid SSR issues
  const html2canvas = (await import('html2canvas')).default
  const { default: jsPDF } = await import('jspdf')

  // Wait for fonts and images to be fully loaded
  await document.fonts.ready
  await new Promise((r) => setTimeout(r, 120))

  const isPortrait = orientation === 'portrait'
  const pxW = isPortrait ? CARD_W_PORTRAIT : CARD_W_LANDSCAPE
  const pxH = isPortrait ? CARD_H_PORTRAIT : CARD_H_LANDSCAPE
  // Standard credit card: 85.6mm × 54mm — swap when portrait
  const mmW = isPortrait ? 54 : 85.6
  const mmH = isPortrait ? 85.6 : 54

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
    width: pxW,
    height: pxH,
    logging: false,
  })

  const imgData = canvas.toDataURL('image/png')

  const pdf = new jsPDF({
    orientation: isPortrait ? 'portrait' : 'landscape',
    unit: 'mm',
    format: [mmW, mmH],
  })
  pdf.addImage(imgData, 'PNG', 0, 0, mmW, mmH)
  pdf.save('tupperware-card.pdf')
}
