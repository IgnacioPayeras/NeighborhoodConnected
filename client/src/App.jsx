import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Navbar
import Navbar from './components/Navbar'

// Pages
import { Events } from './pages/Events'
import { CreateEventForm } from './pages/CreateEventForm'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/events' element={<Events />}/>
        <Route path='/events/create_event' element={<CreateEventForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App