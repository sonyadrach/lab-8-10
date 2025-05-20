import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => (
  <div className="train-card">
    <img src={train.image} alt={train.name} className="train-image" />
    <h2>{train.name}</h2>
    <p>{train.description}</p>
    <p><strong>Тип:</strong> {train.type}</p>
    <p><strong>Відправлення:</strong> {new Date(train.departureTime).toLocaleString()}</p>
    <p><strong>Прибуття:</strong> {new Date(train.arrivalTime).toLocaleString()}</p>
    <Link to={`/book/${train.id}`}>
      <button className="book-button">Обрати місце</button>
    </Link>
  </div>
);

export default TrainCard;