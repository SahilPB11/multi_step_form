// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm";
import ConfirmationPage from "./components/ConfirmationPage";
import "./index.css"; // Ensure Tailwind CSS is imported

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white p-4">
          <nav className="container mx-auto flex justify-between">
            <div>Multi-Step Form</div>
            <div>
              <Link to="/" className="px-4">
                Step 1
              </Link>
              <Link to="/confirmation" className="px-4">
                Confirmation
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<MultiStepForm />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
