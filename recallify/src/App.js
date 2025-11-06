import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Notes from './pages/Notes';
import QuizGeneration from './pages/QuizGeneration';
import QuizInteraction from './pages/QuizInteraction';
import Results from './pages/Results';
import SpacedRepetition from './pages/SpacedRepetition';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Gamification from './pages/Gamification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/quiz-generation" element={<QuizGeneration />} />
        <Route path="/quiz" element={<QuizInteraction />} />
        <Route path="/results" element={<Results />} />
        <Route path="/spaced-repetition" element={<SpacedRepetition />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/gamification" element={<Gamification />} />
      </Routes>
    </Router>
  );
}

export default App;
