import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export async function downloadCardAsPDF(element: HTMLDivElement): Promise<void> {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: null,
  })
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: [85, 54] })
  pdf.addImage(imgData, 'PNG', 0, 0, 85, 54)
  pdf.save('tupperware-card.pdf')
}
