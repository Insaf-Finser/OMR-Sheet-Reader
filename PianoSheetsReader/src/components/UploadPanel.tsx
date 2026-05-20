type Props = {
  onUpload: (xml: string) => void;
};

export default function UploadPanel({
  onUpload,
}: Props) {
  return (
    <div className="mb-6">
      <input
        type="file"
        accept=".xml,.musicxml"
        onChange={async (e) => {
          const file = e.target.files?.[0];

          if (!file) return;

          const text = await file.text();

          onUpload(text);
        }}
      />
    </div>
  );
}