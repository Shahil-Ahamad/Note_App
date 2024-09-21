type TNoteStatus = "not_started" | "in_progress" | "done";

type TNote = {
  id: number;
  Title:string;
  name: string;
  status: TNoteStatus;
};

const Notes: TNote[] = [
  {
    id: 1,
    Title:"Note 1",
    name: "Making an Note App using Typescript & express",
    status: "in_progress",
  },
];
export class NoteModel {
  constructor() {
    console.log("Note constructor is called");
  }

  getNote(NoteId: number) {
    return Notes.find((Note) => Note.id === NoteId);
  }

  createNote(Title:string,name: string, status: TNoteStatus) {
    const newNote: TNote = {
      id: Notes.length + 1,
      Title,
      name,
      status,
    };
    Notes.push(newNote);
    return newNote;
  }

  deleteNote(NoteId: number) {
    const NoteIndex = Notes.findIndex((Note) => Note.id === NoteId);

    if (NoteIndex === -1) {
      return false;
    }

    Notes.splice(NoteIndex, 1);
    return true;
  }

  getAllNotes() {
    return Notes;
  }

  updateNote(NoteId: number, Title:string,name: string, status: TNoteStatus) {
    const NoteIndex = Notes.findIndex((Note) => Note.id === NoteId);

    if (NoteIndex === -1) {
      return null;
    }

    // Update the existing Note
    Notes[NoteIndex] = {
      ...Notes[NoteIndex],
      name,
      status,
    };

    return Notes[NoteIndex];
  }
}
