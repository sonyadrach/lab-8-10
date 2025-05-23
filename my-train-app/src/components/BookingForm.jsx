import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trains from '../data/trains';
import SeatSelection from './SeatSelection';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Імітація BookingService
const BookingService = {
  getBookings() {
    return JSON.parse(localStorage.getItem('train-bookings') || '{}');
  },
  saveBooking(trainId, seats, user) {
    const all = this.getBookings();
    if (!all[trainId]) all[trainId] = [];
    all[trainId].push({ seats, user, date: new Date().toISOString() });
    localStorage.setItem('train-bookings', JSON.stringify(all));
  }
};

const BookingForm = () => {
  const { trainId } = useParams();
  const train = trains.find(t => t.id === parseInt(trainId));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Дані форми бронювання
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Завантажуємо заброньовані місця
    const bookings = BookingService.getBookings();
    setBookedSeats(bookings[trainId]?.flatMap(b => b.seats) || []);
  }, [trainId]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return; // не можна вибрати заброньоване місце

    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  // Валідація форми
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Ім'я обов'язкове";
    if (!formData.phone.trim()) errs.phone = "Телефон обов'язковий";
    if (!formData.email.trim()) {
      errs.email = "Email обов'язковий";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Невірний формат email";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBookingClick = () => {
    if (selectedSeats.length === 0) {
      toast.error("Оберіть хоча б одне місце!");
      return;
    }
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    BookingService.saveBooking(trainId, selectedSeats, formData);
    toast.success("Бронювання успішно збережено!");

    // Оновлюємо заброньовані місця та скидаємо форму
    const bookings = BookingService.getBookings();
    setBookedSeats(bookings[trainId]?.flatMap(b => b.seats) || []);
    setSelectedSeats([]);
    setFormData({ name: '', phone: '', email: '' });
    setErrors({});
    setShowForm(false);
  };

  if (!train) return <p>Поїзд не знайдено</p>;
if (selectedSeats.some(seat => bookedSeats.includes(seat))) {
  toast.error("Деякі місця вже зайняті");
  return;
}

  return (
    <div>
      <ToastContainer />
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
          bookedSeats={bookedSeats}
        />
      ))}

      {!showForm && selectedSeats.length > 0 && (
  <button className="booking-button" onClick={handleBookingClick}>Забронювати</button>
)}


      {showForm && (
        <form className="booking-form" onSubmit={handleFormSubmit}>
          <h3>Форма бронювання</h3>
          <p>Вибрані місця: {selectedSeats.join(', ')}</p>

          <label>
            Ім'я
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>

          <label>
            Телефон
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </label>

          <label>
            Email
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>

          <div className="buttons">
            <button type="submit">Підтвердити</button>
            <button type="button" onClick={() => setShowForm(false)}>Скасувати</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
