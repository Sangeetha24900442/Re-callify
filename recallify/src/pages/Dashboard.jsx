// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("notes");
  const [notes, setNotes] = useState([]);

  // Fetch all notes
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
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Dashboard Area */}
      <div className="flex-1 p-10 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {activeSection === "notes" && "Notes Management"}
            {activeSection === "quiz" && "Quiz Generation"}
            {activeSection === "results" && "Results & Analytics"}
            {activeSection === "spaced" && "Spaced Repetition"}
            {activeSection === "settings" && "Settings & Help"}
            {activeSection === "gamify" && "Gamification"}
          </h1>
        </div>

        {/* Notes Section */}
        {activeSection === "notes" && (
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Add New Note
              </h2>
              {/* Pass refresh function */}
              <NoteForm onNoteAdded={fetchNotes} />
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                Your Notes
              </h2>
              <NoteList notes={notes} />
            </div>
          </div>
        )}

        {/* Other Sections */}
        {activeSection === "quiz" && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">AI Quiz Generator</h2>
            <p className="text-gray-700 mb-4">
              Click below to generate AI-based quizzes from your uploaded notes.
            </p>
            <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
              Generate Quiz
            </button>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recent Quizzes</h3>
              <p className="text-gray-500">No quizzes generated yet.</p>
            </div>
          </div>
        )}

        {activeSection === "results" && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Results & Analytics</h2>
            <p className="text-gray-700 mb-6">
              View your quiz performance, accuracy, and track progress over time.
            </p>
            <div className="border-t border-gray-300 pt-4">
              <p className="text-gray-500">No performance data available yet.</p>
            </div>
          </div>
        )}

        {activeSection === "spaced" && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Spaced Repetition</h2>
            <p className="text-gray-700 mb-4">
              Personalized study scheduling based on your quiz performance.
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Next review: Chapter 1 - “AI Basics” (Tomorrow)</li>
              <li>Next review: Chapter 2 - “ML Concepts” (In 2 days)</li>
            </ul>
          </div>
        )}

        {activeSection === "settings" && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Settings & Help</h2>
            <div className="space-y-4">
              <button className="block bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                Edit Profile
              </button>
              <button className="block bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
                Log Out
              </button>
            </div>
          </div>
        )}

        {activeSection === "gamify" && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Gamification</h2>
            <p className="text-gray-700 mb-4">
              Earn points and badges as you complete quizzes and revise regularly.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-yellow-100 rounded-lg text-center">
                🥇 <p className="font-semibold mt-2">Quiz Master</p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg text-center">
                📚 <p className="font-semibold mt-2">Daily Learner</p>
              </div>
              <div className="p-4 bg-blue-100 rounded-lg text-center">
                ⏰ <p className="font-semibold mt-2">Consistency Champ</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
