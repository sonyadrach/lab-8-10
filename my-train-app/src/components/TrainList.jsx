import React, { useState } from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  const [query, setQuery] = useState("");
  const [typeQuery, setTypeQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const filteredTrains = trains.filter(train => {
    const matchesName = train.name.toLowerCase().includes(query.toLowerCase());
    const matchesType = typeQuery === "" || train.type.toLowerCase() === typeQuery.toLowerCase();
    const matchesDate = selectedDate === "" || new Date(train.departureTime).toISOString().split('T')[0] === selectedDate;
    return matchesName && matchesType && matchesDate;
  });

  return (
 <div className="search-panel">
  <div className="search-row">
    <input
      type="text"
      placeholder="Назва поїзда..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-input"
    />
    <select
      value={typeQuery}
      onChange={(e) => setTypeQuery(e.target.value)}
      className="search-input"
    >
      <option value="">Всі типи</option>
      <option value="купейний">Купейний</option>
      <option value="пасажирський">Пасажирський</option>
    </select>
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      className="search-input"
    />
  </div>

  <div className="train-list">
    {filteredTrains.length > 0 ? (
      filteredTrains.map(train => (
        <TrainCard key={train.id} train={train} />
      ))
    ) : (
      <p style={{ marginTop: '20px' }}>Немає поїздів за вибраними фільтрами.</p>
    )}
  </div>
</div>

  );
};

export default TrainList;
