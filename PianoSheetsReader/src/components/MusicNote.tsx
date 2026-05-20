type Props = {
  x: number;
  y: number;
  label: string;
};

export default function MusicNote({
  x,
  y,
  label,
}: Props) {
  return (
    <>
      {/* Note Head */}
      <ellipse
        cx={x}
        cy={y}
        rx={10}
        ry={7}
        fill="black"
      />

      {/* Stem */}
      <line
        x1={x + 10}
        y1={y}
        x2={x + 10}
        y2={y - 40}
        stroke="black"
        strokeWidth={2}
      />

      {/* ABC Label */}
      <text
        x={x - 5}
        y={y + 30}
        fontSize={16}
        fill="blue"
      >
        {label}
      </text>
    </>
  );
}