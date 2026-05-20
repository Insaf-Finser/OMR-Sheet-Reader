import MusicStaff from "./MusicStaff";
import MusicNote from "./MusicNote";
import type { MusicNote as NoteType } from "../types/music";
import { getNoteY } from "../utils/notePositions";

type Props = {
  notes: NoteType[];
};

export default function SheetRenderer({
  notes,
}: Props) {
    const systems = Math.max(
    ...notes.map((n) => n.system),
    0
  );
  return (
    <svg width="1000" height={systems * 450 + 400}>
      {Array.from({
        length: systems + 1,
      }).map((_, systemIndex) => {

        const systemYOffset =
          systemIndex * 350;

        return (
          <g key={systemIndex}>

            {/* Treble */}
            <MusicStaff
              yOffset={systemYOffset}
              label="Treble" 
            />

            {/* Bass */}
            <MusicStaff
              yOffset={systemYOffset + 180}
              label="Bass"
            />

          </g>
        );
      })}

      {notes.map((note, index) => {

        const systemYOffset =
          note.system * 350;

        return (
          <MusicNote
            key={index}
            x={note.x}

            y={getNoteY(
              note.step,
              note.octave,
              note.clef
            ) + systemYOffset}

            label={note.step}
          />
        );
      })}
    </svg>
  );
}