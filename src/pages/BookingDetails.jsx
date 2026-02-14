import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import services from "../data/services";

export default function BookingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === id);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  if (!service) {
    return <p className="text-white p-10">Service not found</p>;
  }

  const handleBooking = () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    navigate("/booking", {
      state: {
        service,
        date,
        time,
      },
    });
  };

  return (
    <div className="px-10 py-20 text-white">
      <div className="max-w-4xl mx-auto bg-[#0b1220] rounded-2xl overflow-hidden shadow-xl">
        <img
          src={service.image}
          alt={service.title}
          className="h-80 w-full object-cover"
        />

        <div className="p-8 space-y-6">
          <h1 className="text-3xl font-bold">
            {service.title}
          </h1>

          <p className="text-gray-400">
            Choose your preferred date and time
          </p>

          {/* Date */}
          <div>
            <label className="block mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#111827] text-white"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-2">Time</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#111827] text-white"
            >
              <option value="">Select time</option>
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>14:00</option>
              <option>15:00</option>
            </select>
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-lg transition"
          >
            Continue Booking
          </button>
        </div>
      </div>
    </div>
  );
}

