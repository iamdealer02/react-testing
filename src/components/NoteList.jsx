import React from 'react';
import Note from './Note';


export default function NoteList({ notes}) {


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
