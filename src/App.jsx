import { useState, useEffect, useCallback, useRef } from 'react'

import './App.css'
import CardInput from './cardinput'
import CardReadonly from './cardreadonly'

function App() {
  const [allNotes, setAllNotes] = useState(() => {
    const savedNotes = localStorage.getItem("note");

    if (savedNotes) {
      return JSON.parse(savedNotes);
    }

    return [];
  });

  function addNote(newNote) {
    setAllNotes([...allNotes, newNote]);
  }
  function removeNote(id) {
    setAllNotes(allNotes.filter((element) => {
      return element.id != id;
    }))
  }

  function editNote(id, updatedHeading, updatedNote) {
    setAllNotes(
      allNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            heading: updatedHeading,
            note: updatedNote,
          };
        }

        return note;
      })
    );
  }

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(allNotes));
  }, [allNotes])

  return (
    <>
      <h1 className='font-bold text-white text-3xl text-center mt-[20px]'>
        This is a Notes Website Using LocalStorage</h1>

      <CardInput onAddNote={addNote} />

      {allNotes.map((note) => (
        <CardReadonly
          key={note.id}
          heading={note.heading}
          note={note.note}
          id={note.id}
          onRemove={removeNote}
          onEdit={editNote}
        />
      ))}

    </>
  )
}

export default App
