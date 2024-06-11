import React, {useState, useEffect} from 'react'
import NoteList from '../components/NoteList';
import { fetchAllNotes } from '../services/utils';

export default function HomePage() {
    const [notes, setNotes] = useState([]);
    // fetch get req all notes from the server
       useEffect(() => {
        const data = fetchAllNotes();
        data.then(res => {
          setNotes(res.notes);
        });
        }, []);
  return (
    <div>
        <NoteList notes={notes} />
    </div>
  )
}
