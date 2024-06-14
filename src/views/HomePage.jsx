import React, {useState, useEffect} from 'react'
import NoteList from '../components/NoteList';
import { fetchAllNotes } from '../services/utils';
import CreateNote from '../components/CreateNote';
import { createNote,deleteNote, updateNote } from '../services/utils';

export default function HomePage() {
    const [notes, setNotes] = useState([]);
    // fetch get req all notes from the server
       useEffect(() => {
        const data = fetchAllNotes();
        data.then(res => {
          setNotes(res.notes);
        });
        }, []);
        
    // create note
    const handleCreateNote = (note) => {
        // post req to create a note
        // check if they are empty
        if (!note.title || !note.content) {
            alert('Please fill in all fields');
            return;
        }
        const data = createNote(note);
        data.then(res => {
            setNotes([ note, ...notes]);
            console.log(res);
        });
          
    };
    // handleDeletenote
    const handleDelete = (_id) => {
  
            // database delete req

      const data = deleteNote(_id);
      data.then(res => {
        const newNotes = notes.filter(note => note._id !== _id);
        setNotes(newNotes);
        alert('Note Deleted');
      });


    };
    // handleUpdate
    const handleUpdate = (newNote) => {
      // database update req
      const data = updateNote(newNote);
      data.then(res => {
        // find the same note in the notes array
        // tried using map function but for some reason it doesnt get covered by jest
        const updated_note = notes.find(note => note._id === newNote._id);
        // update the note
        updated_note.title = newNote.title;
        updated_note.content = newNote.content;
        setNotes([...notes]);
     
        alert('Note Updated');
      });

    };
  return (
    <div>
        <CreateNote handleCreateNote={handleCreateNote} />
        <NoteList notes={notes} handleDelete={handleDelete} handleUpdate={handleUpdate} />

    </div>
  )
}
