import { useState, useEffect, useCallback, useRef } from 'react'

import './App.css'
import CardInput from './cardinput'
import CardReadonly from './cardreadonly'

function App() {
  const [allNotes, setAllNotes] = useState([]);
  function addNote(newNote) {
    setAllNotes([...allNotes, newNote]);
  }

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
        />
      ))}

    </>
  )
}

export default App
