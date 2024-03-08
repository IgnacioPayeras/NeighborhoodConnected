import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Pages
import { Events } from "./pages/Events";
import { CreateEventForm } from "./pages/CreateEventForm";

import { Announcements } from "./pages/Announcements";
import { CreateAnnouncementForm } from "./pages/CreateAnnouncementForm";

import { Reports } from "./pages/Reports";
import { CreateReportForm } from "./pages/CreateReportForm";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/events/create_event" element={<CreateEventForm />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route
          path="/announcements/create_announcement"
          element={<CreateAnnouncementForm />}
        />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/create_report" element={<CreateReportForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
