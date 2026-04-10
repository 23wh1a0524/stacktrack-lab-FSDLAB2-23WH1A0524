import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import EditTask from "./components/EditTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;