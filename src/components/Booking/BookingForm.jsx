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
          maxWidth: "600px",
          gap: "20px",
          margin: "40px auto",
          padding: "30px",
          backgroundColor: "#EDEFEE",
          borderRadius: "16px",
          boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
          fontFamily: '"Karla", sans-serif',
        }}
      >
        <fieldset style={{ border: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column" }}>
          <label htmlFor="res-date" style={{ fontFamily: '"Karla", sans-serif', fontSize: "16px", color: "#495E59", fontWeight: "bold", textAlign: "left", marginBottom: "8px" }}>choose date</label>
          <input type="date" id="res-date" value={date} onChange={handleDate} style={{ fontFamily: '"Karla", sans-serif', fontSize: "16px", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%", boxSizing: "border-box", marginBottom: "10px" }} />
          {dateError && <p style={{ fontFamily: '"Karla", sans-serif', color: "red", fontSize: "14px", textAlign: "left", marginTop: "-10px", marginBottom: "10px" }}>{dateError}</p>}
          <label htmlFor="res-time" style={{ fontFamily: '"Karla", sans-serif', fontSize: "16px", color: "#495E59", fontWeight: "bold", textAlign: "left", marginBottom: "8px" }}>choose time</label>
          <select id="res-time" value={selectedTime} onChange={handleTime} style={{ fontFamily: '"Karla", sans-serif', fontSize: "16px", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%", boxSizing: "border-box", marginBottom: "10px" }}>
            {availableTimes.map((timeOption, index) => {
              return (
                <option key={index} value={timeOption}>
                  {timeOption}
                </option>
              );
            })}
          </select>
        </fieldset>
        <fieldset style={{ border: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column" }}>
          <label htmlFor="guests" style={{ fontFamily: '"Karla", sans-serif', fontSize: "16px", color: "#495E59", fontWeight: "bold", textAlign: "left", marginBottom: "8px" }}>Number of Guests</label>
          <input
            type="number"
            min={1}
            max={10}
            id="guests"
            value={guestNumber}
            placeholder="1"
            onChange={handleGuest}
            style={{ fontFamily: '"Karla", sans-serif', fontSize: "16px", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%", boxSizing: "border-box", marginBottom: "10px" }}
          />
        </fieldset>
        <fieldset style={{ border: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column" }}>
          <label htmlFor="occasion" style={{ fontFamily: '"Karla", sans-serif', fontSize: "16px", color: "#495E59", fontWeight: "bold", textAlign: "left", marginBottom: "8px" }}>Occasion</label>
          <select
            name="occasion"
            id="occasion"
            value={occasion}
            onChange={handleOccasion}
            style={{ fontFamily: '"Karla", sans-serif', fontSize: "16px", padding: "12px", border: "1px solid #ccc", borderRadius: "8px", width: "100%", boxSizing: "border-box", marginBottom: "10px" }}
          >
            <option value="">Birthday</option>
            <option value="">Anniversary</option>
          </select>
        </fieldset>
        <input type="submit" value="Make Your Reservation" style={{ fontFamily: '"Karla", sans-serif', fontSize: "18px", fontWeight: "bold", backgroundColor: "#F4CE14", color: "#333333", border: "none", borderRadius: "12px", padding: "14px", width: "100%", cursor: "pointer", marginTop: "10px" }} />
      </form>
    </>
  );
};

export default BookingForm;
