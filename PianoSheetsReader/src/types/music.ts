export type MusicNote = {
  step: string;
  octave: number;
  duration: number;
  x: number;
  y?: number;

  system: number;
  clef: "treble" | "bass";
};