// Approximation of the Tupperware wordmark
// Distinctive custom letterforms + signature curl above the "T".
// To replace with official SVG: drop in the path data here.
export function TupperwareWordmark({
  color = 'white',
  width = 220,
  registered = true,
}: {
  color?: string
  width?: number
  registered?: boolean
}) {
  // viewBox tuned to the actual text bounds so the rendered "T" sits flush
  // with the SVG's left edge — parents handle visual centering.
  const vbW = registered ? 410 : 380
  const height = width * (95 / vbW)

  return (
    <svg
      viewBox={`0 0 ${vbW} 95`}
      width={width}
      height={height * (vbW / 95) / (vbW / 95)}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Signature curl above the T (approximation of the official mark) */}
      <path
        d="M 6 12 C 10 4, 22 4, 28 12 C 34 18, 44 18, 50 10"
        stroke={color}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="0"
        y="85"
        textAnchor="start"
        fontFamily="'Trebuchet MS', 'Arial Rounded MT Bold', Arial, sans-serif"
        fontWeight="700"
        fontSize="74"
        fill={color}
        letterSpacing="-1"
      >
        Tupperware
      </text>
      {registered && (
        <text
          x="380"
          y="33"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="400"
          fontSize="20"
          fill={color}
        >
          {'®'}
        </text>
      )}
    </svg>
  )
}
