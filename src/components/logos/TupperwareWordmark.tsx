// SVG recreation of the Tupperware wordmark
// Colors: white (on-card version) or brand cyan (#40D8C8)
export function TupperwareWordmark({
  color = 'white',
  width = 220,
  registered = true,
}: {
  color?: string
  width?: number
  registered?: boolean
}) {
  // Tight viewBox crops visual whitespace when ® is hidden.
  const vbW = registered ? 560 : 440
  const height = width * (80 / vbW)

  return (
    <svg
      viewBox={`0 0 ${vbW} 80`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <text
        x={vbW / 2}
        y="70"
        textAnchor="middle"
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
          x="548"
          y="18"
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
