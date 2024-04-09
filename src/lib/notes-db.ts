export function getNotes(): string[] {
  const notes = localStorage.getItem("notes");

  if (notes == null) {
    return [];
  } else {
    return JSON.parse(notes);
  }
}

export function addNote(s: string) {
  let notes = getNotes();
  notes.push(s);

  localStorage.setItem("notes", JSON.stringify(notes));
}
