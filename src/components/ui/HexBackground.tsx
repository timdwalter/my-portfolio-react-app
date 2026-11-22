/** Subtle decorative hexagon grid (logo motif), faded out towards the edges. */
export default function HexBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_60%_70%_at_85%_20%,black_20%,transparent_75%)]"
      >
        <defs>
          <pattern id="hex" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
            <path
              d="M28 0 56 16.17v32.33L28 64.67 0 48.5V16.17L28 0Zm0 64.67V97"
              fill="none"
              stroke="rgba(11,18,32,0.06)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}
