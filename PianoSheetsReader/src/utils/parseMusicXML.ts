import { XMLParser } from "fast-xml-parser";
import type { MusicNote } from "../types/music";

type ParsedNote = {
  pitch?: {
    step: string;
    octave: string;
  };
  duration?: string;

  staff?: string;
};

type ParsedMeasure = {
  note?: ParsedNote[] | ParsedNote;
};

export function parseMusicXML(
  xml: string
): MusicNote[] {
  const parser = new XMLParser({
    ignoreAttributes: false,
  });

  const parsed = parser.parse(xml);

  const rawMeasures =
    parsed["score-partwise"]?.part?.measure;

  const measures: ParsedMeasure[] =
    Array.isArray(rawMeasures)
      ? rawMeasures
      : [rawMeasures];

  const notes: MusicNote[] = [];

  const MAX_WIDTH = 900;

    let x = 100;
    let system = 0;

  measures.forEach((measure) => {
    const rawNotes = measure.note || [];

    const measureNotes = Array.isArray(rawNotes)
      ? rawNotes
      : [rawNotes];

    measureNotes.forEach((note) => {
      if (!note.pitch) return;

      notes.push({
        step: note.pitch.step,
        octave: Number(note.pitch.octave),
        duration: Number(note.duration),
        x,
        clef: Number(note.staff) === 2
    ? "bass"
    : "treble",
        system,
      });

      x += 70;

    if (x > MAX_WIDTH) {
        x = 100;
        system += 1;
    }
    });
  });

  return notes;
}