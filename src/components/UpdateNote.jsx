import React, {useState} from 'react'

export default function UpdateNote({note, setIsEditId, handleUpdate}) {
  const [newNote, setNewNote] = useState(note)
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(newNote);
    setIsEditId(null);
  }
  return (
    <div>
        <form className='edit-form'>
            <div className='edit-form-container'>
              <input placeholder='updated-Title' className='edit-form-input' type="text" id="updated-title" name="updated-title" value={newNote.title} onChange={(e)=>setNewNote({...newNote, title: e.target.value})}/>
            <textarea placeholder='updated-Content' className='edit-form-text-area' id="updated-content" name="updated-content" value={newNote.content} onChange={(e)=>setNewNote({...newNote, content: e.target.value})}/>
            </div>
            <button data-testid = 'update-btn' onClick={handleSubmit} type="submit">Update</button>
        </form>

    </div>
  )
}
