import React from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { key: "notes", label: "Notes Management" },
    { key: "quiz", label: "Quiz Generation" },
    { key: "results", label: "Results & Analytics" },
    { key: "spaced", label: "Spaced Repetition" },
    { key: "settings", label: "Settings & Help" },
    { key: "gamify", label: "Gamification" },
  ];

  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold text-center py-6 border-b border-blue-700">
        ReCallify
      </h1>
      <nav className="flex flex-col flex-grow">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            className={`py-3 px-5 text-left hover:bg-blue-700 transition ${
              activeSection === item.key ? "bg-blue-800" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
