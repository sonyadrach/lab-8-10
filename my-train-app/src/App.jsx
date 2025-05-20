import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import trains from './data/trains';
import TrainList from './components/TrainList';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">Система бронювання квитків</header>
        <Routes>
          <Route path="/" element={<TrainList trains={trains} />} />
          <Route path="/book/:trainId" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;