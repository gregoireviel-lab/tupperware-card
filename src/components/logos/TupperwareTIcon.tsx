// SVG recreation of the Tupperware T™ brand mark
// Geometric T + distinctive swoosh arc
export function TupperwareTIcon({
  size = 52,
  bgColor = '#005F5C',
  markColor = '#40D8C8',
}: {
  size?: number
  bgColor?: string
  markColor?: string
}) {
  return (
    <svg
      viewBox="0 0 400 480"
      width={size}
      height={size * (480 / 400)}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Background rounded square */}
      <rect x="0" y="0" width="400" height="480" rx="36" fill={bgColor} />

      {/* T crossbar */}
      <rect x="48" y="198" width="304" height="52" rx="8" fill={markColor} />
      {/* T stem */}
      <rect x="150" y="198" width="100" height="220" rx="0" fill={markColor} />

      {/* Swoosh arc — from lower-left through crossbar up to upper-right */}
      <path
        d="M 28 340 C 80 230, 220 110, 388 68"
        stroke={markColor}
        strokeWidth="42"
        strokeLinecap="round"
        fill="none"
      />

      {/* ™ mark */}
      <text
        x="290"
        y="448"
        fontFamily="Arial, sans-serif"
        fontSize="52"
        fill={markColor}
        fontWeight="400"
      >
        ™
      </text>
    </svg>
  )
}
