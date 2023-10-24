import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Note } from "./Note";
import { CreateArea } from "./CreateArea";
import { dkeeper_backend } from "../../../declarations/dkeeper_backend/index"

export const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      dkeeper_backend.createNote(newNote.title, newNote.content);
      return [newNote, ...prevNotes];
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const notesArray = await dkeeper_backend.readNotes();
    setNotes(notesArray);
  };

  const deleteNote = (id) => {
    dkeeper_backend.removeNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};
