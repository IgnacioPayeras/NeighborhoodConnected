import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Pages
import { Events } from "./pages/Events";
import { CreateEventForm } from "./pages/CreateEventForm";

import { Announcements } from "./pages/Announcements";
import { CreateAnnouncementForm } from "./pages/CreateAnnouncementForm";

import { Reports } from "./pages/Reports";
import { CreateReportForm } from "./pages/CreateReportForm";

import { Documents } from "./pages/Documents";

import { Login } from "./pages/Login";
import { useUser, UserProvider } from "./context/UserProvider";

const App = () => {
  const { user } = useUser() || {}; // Inicializar user como un objeto vacío si useUser() es undefined
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/events"
            element={user ? <Event /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/events/create_event"
            element={
              user ? <CreateEventForm /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/announcements"
            element={
              user ? <Announcements /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/announcements/create_announcement"
            element={
              user ? (
                <CreateAnnouncementForm />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/reports"
            element={user ? <Reports /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/reports/create_report"
            element={
              user ? <CreateReportForm /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/documents"
            element={user ? <Documents /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
