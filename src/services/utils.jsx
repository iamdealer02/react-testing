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

export const deleteNote = async (_id) => {
    return await fetch(`http://localhost:8080/notes/${_id}`, {
        method: 'DELETE',
    }).then(res => res.json());

}

export const updateNote = async (note) => {
    return await fetch(`http://localhost:8080/notes/${note._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).then(res => res.json());
}