import { CARD_W, CARD_H } from '@/components/BusinessCard'

export async function downloadCardAsPDF(element: HTMLDivElement): Promise<void> {
  // Dynamic imports to avoid SSR issues
  const html2canvas = (await import('html2canvas')).default
  const { default: jsPDF } = await import('jspdf')

  // Wait for fonts and images to be fully loaded
  await document.fonts.ready
  await new Promise((r) => setTimeout(r, 120))

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
    width: CARD_W,
    height: CARD_H,
    logging: false,
  })

  const imgData = canvas.toDataURL('image/png')

  // Exact credit card standard: 85.6mm × 54mm
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [85.6, 54],
  })
  pdf.addImage(imgData, 'PNG', 0, 0, 85.6, 54)
  pdf.save('tupperware-card.pdf')
}
