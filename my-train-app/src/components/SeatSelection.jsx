import React from 'react';

const SeatSelection = ({ coach, selectedSeats, onSelectSeat }) => {
  const isCoupe = coach.type === "Купейний";

  const renderSeats = () => {
    const seats = [];
    for (let i = 0; i < coach.seats; i++) {
      const seatNumber = i + 1;
      const seatId = `${coach.coachId}-${seatNumber}`;
      const isSelected = selectedSeats.includes(seatId);

      seats.push(
        <button
          key={seatNumber}
          className={`seat ${isSelected ? 'selected' : ''}`}
          onClick={() => onSelectSeat(seatId)}
        >
          {seatNumber}
        </button>
      );
    }

   if (isCoupe) {
  const coupeBlocks = [];
  for (let i = 0; i < seats.length; i += 4) {
    const top = seats.slice(i, i + 2);     // верхній ярус
    const bottom = seats.slice(i + 2, i + 4); // нижній ярус

    coupeBlocks.push(
      <div key={i} className="coupe-block">
        <div className="coupe-row top">{top}</div>
        <div className="coupe-row bottom">{bottom}</div>
      </div>
    );
  }
  return coupeBlocks;

    } else {
      // Сидячий варіант ряди по 5
      const passengerRows = [];
      for (let i = 0; i < seats.length; i += 5) {
        passengerRows.push(
          <div key={i} className="seat-row">
            {seats.slice(i, i + 5)}
          </div>
        );
      }
      return passengerRows;
    }
  };

  return (
    <div className="coach">
      <h4>Вагон {coach.coachId} ({coach.type})</h4>
      <div className="seats">{renderSeats()}</div>
    </div>
  );
};

export default SeatSelection;