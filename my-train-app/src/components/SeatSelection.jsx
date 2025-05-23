import React from 'react';
const SeatSelection = ({ coach, selectedSeats, onSelectSeat, trainType, bookedSeats}) => {
  const isCoupe = trainType === "Купейний";
  
  const renderSeats = () => {
  const totalSeats = coach.seats;
  const seats = [];
  for (let i = 0; i < totalSeats; i++) {
    const seatNumber = i + 1;
    const seatId = `${coach.coachId}-${seatNumber}`;
    const isSelected = selectedSeats.includes(seatId);

    seats.push(
      <button
        key={seatNumber}
        className={
          bookedSeats.includes(seatId)
            ? 'seat booked'
            : isSelected
            ? 'seat selected'
            : 'seat available'
        }
        onClick={() => {
          if (!bookedSeats.includes(seatId)) onSelectSeat(seatId);
        }}
        disabled={bookedSeats.includes(seatId)}
      >
        {seatNumber}
      </button>
    );
  }
    if (isCoupe) {
      const coupeBlocks = [];
      for (let i = 0; i < 24; i += 4) {
        coupeBlocks.push(
          <div key={i} className="coupe-block">
            <div className="coupe-row top ">
              {seats[i]}
              {seats[i + 1]}
            </div>
            <div className="coupe-row bottom dark-strip bottom-strip">
              {seats[i + 2]}
              {seats[i + 3]}
            </div>
          </div>
        );
      }

      return <div className="coupe-layout">{coupeBlocks}</div>;
    } else {
      // Пасажирський вагон
      const upperSeats = seats.slice(0, 36);
      const lowerSeats = seats.slice(36, 54);
      const lowerRows = [lowerSeats.slice(0, 9), lowerSeats.slice(9, 18)];

      return (
        <div className="passenger-layout horizontal">
          <div className="seats-block">
            <div className="upper-grid">
              {[0, 1, 2].map((rowIndex) => (
                <div key={rowIndex} className="upper-row">
                  {upperSeats.slice(rowIndex * 12, rowIndex * 12 + 12).map((seat, i) => (
                    <div key={`upper-${rowIndex}-${i}`} className="upper-seat">
                      {seat}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="lower-seats-row-wrapper">
              <div className="lower-seats">
                {lowerRows.map((row, rowIndex) => (
                  <div key={`lower-row-${rowIndex}`} className="lower-seat-row">
                    {row.map((seat, i) => (
                      <div key={`lower-${rowIndex}-${i}`} className="lower-seat">
                        {seat}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="luggage-vertical">
                <div className="luggage-rectangle">Багаж</div>
              </div>

              <div className="lower-exit-block">
                <div className="exit-rectangle">Прохід</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="coach">
      <h4>Вагон {coach.coachId} ({trainType})</h4>
     {renderSeats()}
    </div>
  );
};

export default SeatSelection;
