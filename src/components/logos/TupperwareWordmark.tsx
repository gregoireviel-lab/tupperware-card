// SVG recreation of the Tupperware wordmark
// Colors: white (on-card version) or brand teal (#14524f)
export function TupperwareWordmark({
  color = 'white',
  width = 220,
  registered = true,
}: {
  color?: string
  width?: number
  registered?: boolean
}) {
  // Tight viewBox aligned to actual text bounds — so the rendered "T" sits flush
  // with the SVG's left edge (no internal padding). Centering in parent is done
  // by parent flex/centering, not by viewBox padding.
  const vbW = registered ? 410 : 380
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
        x="0"
        y="70"
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
