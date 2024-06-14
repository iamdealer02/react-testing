import React, { useState } from 'react';
import Note from './Note';
import UpdateNote from './UpdateNote';

export default function NoteList({ notes, handleDelete, handleUpdate }) {
  const [isEditId, setIsEditId] = useState(null);

  const handleEditClick = (id) => {
    setIsEditId(id);
  };

  return (
    <div className='note-container'>
      <img src='https://cdn-icons-gif.flaticon.com/11186/11186846.gif' alt='note' className='noteList-image' />
      <span className='noteList-heading'>Your Previous Notes Are Here :)</span>
      {notes.map(note => (
        <div key={note._id} className='notes'>
          {isEditId === note._id ? (
            <UpdateNote note={note} setIsEditId={setIsEditId} handleUpdate={handleUpdate} />
          ) : (
            <>  
              <Note note={note} />
              <div className='note-buttons'>
                <button data-testid='delete-btn' className='button-img' onClick={() => handleDelete(note._id)}>
                  <img src='https://cdn-icons-png.flaticon.com/128/3221/3221897.png' alt='delete-btn' />
                </button>
                <button data-testid='edit-btn' className='button-img' onClick={() => handleEditClick(note._id)}>
                  <img src='https://cdn-icons-png.flaticon.com/128/12439/12439280.png' alt='edit-btn' />
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
