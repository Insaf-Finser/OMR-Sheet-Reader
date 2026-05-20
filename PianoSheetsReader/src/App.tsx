import { useState } from "react";
import UploadPanel from "./components/UploadPanel";
import SheetRenderer from "./components/SheetRenderer";
import { parseMusicXML } from "./utils/parseMusicXML";
import type { MusicNote } from "./types/music";

export default function App() {
  const [notes, setNotes] = useState<
    MusicNote[]
  >([]);

  const handleUpload = (xml: string) => {
    const parsed =
      parseMusicXML(xml);

    setNotes(parsed);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Piano Sheet Reader
      </h1>

      <UploadPanel
        onUpload={handleUpload}
      />

      <div className="bg-white rounded-xl p-6 overflow-auto shadow">
        <SheetRenderer notes={notes} />
      </div>
    </div>
  );
}