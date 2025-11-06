import React, { useEffect, useState } from "react";
import axios from "axios";

const NoteList = ({ refresh }) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/notes/");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [refresh]); // ✅ Re-fetch when refresh toggles

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Notes</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes available. Add one above!</p>
      ) : (
        <ul className="space-y-3">
          {notes.map((note) => (
            <li
              key={note.id}
              className="border border-gray-300 rounded-lg p-3 hover:bg-gray-50"
            >
              <h3 className="font-bold text-lg text-blue-700">{note.title}</h3>
              <p className="text-gray-700">{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;
