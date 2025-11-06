import React, { useState } from "react";

function NoteForm({ refreshNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = { title, content };

    const response = await fetch("http://127.0.0.1:8000/api/notes/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    });

    if (response.ok) {
      setTitle("");
      setContent("");
      refreshNotes();
    } else {
      console.error("Failed to add note");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 mb-6 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Enter note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="4"
        required
      ></textarea>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ➕ Add Note
      </button>
    </form>
  );
}

export default NoteForm;
