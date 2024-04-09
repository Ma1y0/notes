export default function NoteCard({ s }: { s: string }) {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <p>{s}</p>
      </div>
    </div>
  );
}
