type Props = {
   yOffset: number;
   label: string;
};

export default function MusicStaff({
    yOffset,
    label,
}: Props) {
  const lines = [80+yOffset, 100+yOffset, 120+yOffset, 140+yOffset, 160+yOffset];

  return (
    <>
      {/* Staff label */}
      <text
        x={10}
        y={yOffset + 125}
        fontSize={20}
        fill="black"
        fontWeight="bold"
      >
        {label}
      </text>

      {lines.map((y) => (
        <line
          key={y}
          x1={40}
          y1={y}
          x2={2000}
          y2={y}
          stroke="black"
          strokeWidth={2}
        />
      ))}
    </>
  );
}