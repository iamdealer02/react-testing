export const fetchAllNotes = async () => {
    return await fetch('http://localhost:8080/notes')
    .then(res => res.json());
  
    }
