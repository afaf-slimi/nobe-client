import api from "./api";

export const getBookings = async () => {
  const res = await api.get("/bookings");
  return res.data;
};


