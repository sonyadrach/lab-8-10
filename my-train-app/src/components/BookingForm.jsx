import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trains from '../data/trains';
import SeatSelection from './SeatSelection';

const BookingForm = () => {
  const { trainId } = useParams();
  const train = trains.find(t => t.id === parseInt(trainId));
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(`seats-${trainId}`);
    if (saved) {
      setSelectedSeats(JSON.parse(saved));
    }
  }, [trainId]);

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const handleBooking = () => {
    localStorage.setItem(`seats-${trainId}`, JSON.stringify(selectedSeats));
    alert("Місця успішно заброньовано!");
  };

  return (
    <div className="booking-form">
      <h2>{train.name}</h2>
      <p>{train.description}</p>
      <p><strong>Тип поїзда:</strong> {train.type}</p>
      <p>
        <strong>Відправлення:</strong> {new Date(train.departureTime).toLocaleString()} <br />
        <strong>Прибуття:</strong> {new Date(train.arrivalTime).toLocaleString()}
      </p>

      {train.coaches.map(coach => (
        <SeatSelection
          key={coach.coachId}
          coach={coach}
          selectedSeats={selectedSeats}
          onSelectSeat={toggleSeat}
          trainType={train.type}
        />
      ))}

      <button onClick={handleBooking}>Підтвердити бронювання</button>
    </div>
  );
};

export default BookingForm;