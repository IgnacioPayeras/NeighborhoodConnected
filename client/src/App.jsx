import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Pages
import { Events } from "./pages/Events";
import { CreateEventForm } from "./pages/CreateEventForm";

import { Announcements } from "./pages/Announcements";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/events/create_event" element={<CreateEventForm />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
