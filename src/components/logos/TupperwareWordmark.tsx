// SVG recreation of the Tupperware® wordmark
// Colors: white (on-card version) or brand cyan (#40D8C8)
export function TupperwareWordmark({
  color = 'white',
  width = 220,
}: {
  color?: string
  width?: number
}) {
  const height = width * (80 / 560)

  return (
    <svg
      viewBox="0 0 560 80"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', overflow: 'visible' }}
    >
      {/* Wordmark text — approximation using rounded font */}
      <text
        x="0"
        y="70"
        fontFamily="'Trebuchet MS', 'Arial Rounded MT Bold', Arial, sans-serif"
        fontWeight="700"
        fontSize="74"
        fill={color}
        letterSpacing="-1"
      >
        Tupperware
      </text>
      {/* ® superscript */}
      <text
        x="548"
        y="18"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="400"
        fontSize="20"
        fill={color}
      >
        {'\u00AE'}
      </text>
    </svg>
  )
}
