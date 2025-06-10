import React from "react";
import { createContext, useContext, useState } from "react";

const BookingContext = createContext(undefined);
export const BookingProvider = ({ children }) => {
  const [date, setDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
  const [guestNumber, setGuestNumber] = useState(null);
  const [occasion, setOccasion] = useState("occasion");
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setAvailableTimes(e.target.value);
  };
  const handleGuest = (e) => {
    setGuestNumber(e.target.value);
  };
  const handleOccasion = (e) => {
    setOccasion(e.target.value);
  };
  context
  return (
    <ContextCreator.provider
      value={
        (date,
        availableTimes,
        guestNumber,
        occasion,
        handleDate,
        handleTime,
        handleGuest,
        handleOccasion)
      }
    >
      {children}
    </ContextCreator.provider>
  );
};
export const useBooking = useContext(BookingContext);
