import React, { useState } from 'react';

export default function CreateNote({ handleCreateNote }) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateNote(note);
    // Reset note values after submission
    setNote({
      title: '',
      content: ''
    });
  };

  return (
    <div>
      <div className='form'>
        <div className='form-container'>
          <input
            placeholder='Title'
            className='form-input'
            type="text"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
          />
        </div>
        <div className='form-container'>
          <textarea
            placeholder='Content'
            className='form-text-area'
            id="content"
            name="content"
            value={note.content}
            onChange={handleChange}
          />
        </div>
        <button data-testid='create-btn' onClick={handleSubmit} type="submit">Create</button>
      </div>
    </div>
  );
}
