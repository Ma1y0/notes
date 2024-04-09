import { useState } from "react";
import { addNote } from "../lib/notes-db";

export default function AddModal() {
  const [note, setNote] = useState("");

  const submitNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addNote(note);

    document.getElementById("add_modal")?.close();

    setNote("");
  };

  return (
    <dialog id="add_modal" className="modal">
      <div className="modal-box">
        <form className="flex flex-col gap-6" onSubmit={submitNote}>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="textarea textarea-bordered w-full h-64"
          />
          <button type="submit" className="btn btn-primary block w-full">
            Add
          </button>
        </form>
        {/* <div className="modal-action"> */}
        {/*   <form method="dialog"> */}
        {/*     <button className="btn">Add</button> */}
        {/*   </form> */}
        {/* </div> */}
      </div>
    </dialog>
  );
}
