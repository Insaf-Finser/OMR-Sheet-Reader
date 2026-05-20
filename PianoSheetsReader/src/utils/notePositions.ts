const treblePositions: Record<
  string,
  number
> = {
  C4: 140,
  D4: 135,
  E4: 130,
  F4: 125,
  G4: 120,
  A4: 115,
  B4: 110,
  C5: 105,
  D5: 100,
  E5: 95,
  F5: 90,
  G5: 85,
};

const bassPositions: Record<
  string,
  number
> = {
  C2: 340,
  D2: 335,
  E2: 330,
  F2: 325,
  G2: 320,
  A2: 315,
  B2: 310,
  C3: 305,
  D3: 300,
  E3: 295,
  F3: 290,
  G3: 285,
  A3: 280,
  B3: 275,
  C4: 270,
};

export function getNoteY(
  step: string,
  octave: number,
  clef: "treble" | "bass"
) {
    const key = `${step}${octave}`;

    if (clef === "treble") {
        return treblePositions[key] || 140;
    }
    return bassPositions[key] || 340;
}