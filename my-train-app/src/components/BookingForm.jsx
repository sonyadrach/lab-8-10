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

  if (!train) {
    return <p>Поїзд не знайдено</p>;
  }

  return (
    <div>
      <div className="train-info-strip">
        <div className="strips">
          <div className="strip dpurple"></div>
          <div className="strip purple"></div>
          <div className="strip pink"></div>
        </div>
        <div className="train-details">
          <h3>{train.name}</h3>
          <p>Тип поїзда: <strong>{train.type}</strong></p>
          <p>Відправлення: <strong>{new Date(train.departureTime).toLocaleString()}</strong></p>
          <p>Прибуття: <strong>{new Date(train.arrivalTime).toLocaleString()}</strong></p>
        </div>
      </div>

      {train.coaches.map(coach => (
        <SeatSelection
          key={coach.coachId}
          coach={coach}
          selectedSeats={selectedSeats}
          onSelectSeat={toggleSeat}
          trainType={train.type}
          train={train}
        />
      ))}

      <button onClick={handleBooking}>Підтвердити бронювання</button>
    </div>
  );
};

export default BookingForm;
