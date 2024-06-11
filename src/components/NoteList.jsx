import React, { useState, useEffect } from 'react';
import Note from './Note';
import { fetchAllNotes } from '../services/utils';

export default function NoteList() {
  const [notes, setNotes] = useState([]);
// fetch get req all notes from the server
   useEffect(() => {
    const data = fetchAllNotes();
    data.then(res => {
      setNotes(res.notes);
    });
    }, []);

    

  return (
    <div className='note-container'>
      <img src='https://cdn-icons-gif.flaticon.com/11186/11186846.gif' alt='note' className='noteList-image' />
      <span className='noteList-heading'>Your Previous Notes Are Here :)</span>
      {notes.map(note => (
        <div key={note._id} className='notes'>
            <Note note={note} />
        </div>
      ))}
    </div>
  );
}
