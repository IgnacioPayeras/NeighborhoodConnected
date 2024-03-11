import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Events } from "./pages/Events";
import { CreateEventForm } from "./pages/CreateEventForm";
import { Announcements } from "./pages/Announcements";
import { CreateAnnouncementForm } from "./pages/CreateAnnouncementForm";
import { Reports } from "./pages/Reports";
import { CreateReportForm } from "./pages/CreateReportForm";
import { Documents } from "./pages/Documents";
import { Login } from "./pages/Login";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/events" element={<Events />} />
                  <Route
                    path="/events/create_event"
                    element={<CreateEventForm />}
                  />
                  <Route path="/announcements" element={<Announcements />} />
                  <Route
                    path="/announcements/create_announcement"
                    element={<CreateAnnouncementForm />}
                  />
                  <Route path="/reports" element={<Reports />} />
                  <Route
                    path="/reports/create_report"
                    element={<CreateReportForm />}
                  />
                  <Route path="/documents" element={<Documents />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
