import { useEffect, useState } from "react";
import AddModal from "./components/AddModal";
import AddModalButton from "./components/AddModalButton";
import { getNotes } from "./lib/notes-db";
import NoteCard from "./components/NoteCard";

function App() {
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    setNotes(getNotes);
  }, []);

  return (
    <>
      <AddModal />

      <div className="flex gap-4 p-6 justify-center mt-24 flex-wrap">
        {notes.map((note) => (
          <NoteCard s={note} key={crypto.randomUUID()} />
        ))}
      </div>

      <div>
        <AddModalButton />
      </div>
    </>
  );
}

export default App;
