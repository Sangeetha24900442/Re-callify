import React, { useState } from "react";
import axios from "axios";

const NoteForm = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please enter both title and content.");
      return;
    }

    try {
      // For now, we’ll assume user ID = 1 (you can change this later dynamically)
      const response = await axios.post("http://127.0.0.1:8000/api/notes/", {
        title,
        content,
        user: 1, // ✅ Add this line
      });

      console.log("Note added:", response.data);

      setTitle("");
      setContent("");

      if (onNoteAdded) onNoteAdded(); // ✅ Refresh the list
    } catch (error) {
      console.error("Error adding note:", error);
      alert("Error adding note. Check your backend.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-4"
    >
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Add a Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full mb-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;
