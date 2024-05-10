import { useReducer } from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import { fetchAPI } from "../components/BookingForm/temp";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return { times: fetchAPI(today) };
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Nav />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default BookingPage;
