// The Greek key (meander) border from the Midas crest, as a repeating pattern.
export function GreekKey({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  const id = `meander-${color.replace(/[^a-z0-9]/gi, "")}`;
  return (
    <svg className={className} aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M0 36 H36 V4 H8 V28 H28 V12 H16 V20"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="square"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
