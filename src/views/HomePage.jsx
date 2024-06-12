import React, {useState, useEffect} from 'react'
import NoteList from '../components/NoteList';
import { fetchAllNotes } from '../services/utils';
import CreateNote from '../components/CreateNote';
import { createNote } from '../services/utils';

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
  return (
    <div>
        <CreateNote handleCreateNote={handleCreateNote} />
        <NoteList notes={notes} />

    </div>
  )
}
