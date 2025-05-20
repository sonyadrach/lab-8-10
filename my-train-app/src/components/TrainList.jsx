import React, { useState } from 'react';
import TrainCard from './TrainCard';

const TrainList = ({ trains }) => {
  const [query, setQuery] = useState("");
  const [typeQuery, setTypeQuery] = useState("");

  const filteredTrains = trains.filter(train =>
    train.name.toLowerCase().includes(query.toLowerCase()) &&
    train.type.toLowerCase().includes(typeQuery.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Пошук поїзда за назвою..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <input
        type="text"
        placeholder="Пошук поїзда за типом..."
        value={typeQuery}
        onChange={(e) => setTypeQuery(e.target.value)}
        className="search-input"
        style={{ marginTop: '10px' }}
      />
      <div className="train-list">
        {filteredTrains.map(train => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </>
  );
};

export default TrainList;