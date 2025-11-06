import React, { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

function Dashboard() {
  const [notes, setNotes] = useState([]);

  // Fetch all notes
  const fetchNotes = () => {
    fetch("http://127.0.0.1:8000/api/notes/")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error("Error fetching notes:", err));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        📘 Recallify Notes
      </h1>
      <NoteForm refreshNotes={fetchNotes} />
      <NoteList notes={notes} refreshNotes={fetchNotes} />
    </div>
  );
}

export default Dashboard;
