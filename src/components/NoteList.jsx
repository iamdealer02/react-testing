import React from 'react';
import Note from './Note';


export default function NoteList({ notes, handleDelete}) {
  

  return (
    <div className='note-container'>
      <img src='https://cdn-icons-gif.flaticon.com/11186/11186846.gif' alt='note' className='noteList-image' />
      <span className='noteList-heading'>Your Previous Notes Are Here :)</span>
      {notes.map(note => (
        <div key={note._id} className='notes'>
            <Note note={note} />
            <button data-testid='delete-btn' className='button-img' onClick={()=>handleDelete(note._id)}>
              <img src='https://cdn-icons-png.flaticon.com/128/3221/3221897.png' alt='delete-btn'/>
            </button>
        </div>
      ))}
    </div>
  );
}
