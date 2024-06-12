export const fetchAllNotes = async () => {
    return await fetch('http://localhost:8080/notes')
    .then(res => res.json());
  
    }

export const createNote = async (note) => {
    return await fetch('http://localhost:8080/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).then(res => res.json());
}


