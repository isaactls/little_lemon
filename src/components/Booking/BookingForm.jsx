import React from "react";
import { useState } from "react";
const BookingForm = () => {
  const initialState = {time : '17:00'}
  const [date, setDate] = useState(null);
  const [dateError, setDateError] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
  const [guestNumber, setGuestNumber] = useState(null);
  const [occasion, setOccasion] = useState("occasion");
  const [selectedTime, setSelectedTime] = useState(null);
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setSelectedTime(e.target.value);
  };
  const handleGuest = (e) => {
    setGuestNumber(e.target.value);
  };
  const handleOccasion = (e) => {
    setOccasion(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      setDateError("Please select a date");
    } else {
      setDateError("");
      // Handle form submission logic here
      console.log("Form submitted successfully");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        style={{
          display: "grid",
          maxWidth: "200px",
          gap: "20px",
          margin: "auto",
        }}
      >
        <fieldset>
          <label htmlFor="res-date">choose date</label>
          <input type="date" id="res-date" value={date} onChange={handleDate} />
          {dateError && <p style={{ color: "red" }}>{dateError}</p>}
          <label htmlFor="res-time">choose time</label>
          <select id="res-time" value={selectedTime} onChange={handleTime}>
            {availableTimes.map((timeOption, index) => {
              return (
                <option key={index} value={timeOption}>
                  {timeOption}
                </option>
              );
            })}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            min={1}
            max={10}
            id="guests"
            value={guestNumber}
            placeholder="1"
            onChange={handleGuest}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="occasion">Occasion</label>
          <select
            name="occasion"
            id="occasion"
            value={occasion}
            onChange={handleOccasion}
          >
            <option value="">Birthday</option>
            <option value="">Anniversary</option>
          </select>
        </fieldset>
        <input type="submit" value="Make Your Reservation" />
      </form>
    </>
  );
};

export default BookingForm;
