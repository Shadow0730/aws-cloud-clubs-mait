// The group's pixel "chip" mark, drawn on a 9×9 grid so it stays sharp
// at any size. Colour comes from the text colour of the parent.
export default function ChipMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 9 9"
      aria-hidden="true"
      shapeRendering="crispEdges"
      className={className}
    >
      {/* dark core */}
      <rect x="2" y="2" width="5" height="5" className="fill-on-surface" />
      <g fill="currentColor">
        {/* top */}
        <rect x="2" y="1" width="5" height="1" />
        <rect x="2" y="0" width="1" height="1" />
        <rect x="4" y="0" width="1" height="1" />
        <rect x="6" y="0" width="1" height="1" />
        {/* bottom */}
        <rect x="2" y="7" width="5" height="1" />
        <rect x="2" y="8" width="1" height="1" />
        <rect x="4" y="8" width="1" height="1" />
        <rect x="6" y="8" width="1" height="1" />
        {/* left */}
        <rect x="1" y="2" width="1" height="5" />
        <rect x="0" y="2" width="1" height="1" />
        <rect x="0" y="4" width="1" height="1" />
        <rect x="0" y="6" width="1" height="1" />
        {/* right */}
        <rect x="7" y="2" width="1" height="5" />
        <rect x="8" y="2" width="1" height="1" />
        <rect x="8" y="4" width="1" height="1" />
        <rect x="8" y="6" width="1" height="1" />
      </g>
    </svg>
  );
}
