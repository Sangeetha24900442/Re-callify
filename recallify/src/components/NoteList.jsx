import React, { useState } from "react";

function NoteList({ notes, refreshNotes }) {
  const [editNote, setEditNote] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");

  const handleDelete = async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "DELETE",
    });

    if (response.ok) {
      refreshNotes();
    } else {
      console.error("Failed to delete note");
    }
  };

  const handleEdit = (note) => {
    setEditNote(note.id);
    setUpdatedTitle(note.title);
    setUpdatedContent(note.content);
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: updatedTitle, content: updatedContent }),
    });

    if (response.ok) {
      setEditNote(null);
      refreshNotes();
    } else {
      console.error("Failed to update note");
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {notes.map((note) => (
        <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
          {editNote === note.id ? (
            <form onSubmit={(e) => handleUpdate(e, note.id)}>
              <input
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <textarea
                value={updatedContent}
                onChange={(e) => setUpdatedContent(e.target.value)}
                className="w-full p-2 border rounded"
                rows="3"
                required
              ></textarea>
              <div className="mt-3 flex gap-2">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  💾 Save
                </button>
                <button
                  onClick={() => setEditNote(null)}
                  className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                >
                  ✖ Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
              <p className="text-gray-700">{note.content}</p>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => handleEdit(note)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  ✏ Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  🗑 Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default NoteList;
