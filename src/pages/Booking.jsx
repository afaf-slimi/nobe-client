import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Booking() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p className="text-white p-10">No booking data found</p>;
  }

  const { service, date, time } = state;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleConfirm = () => {
    if (!name || !phone) {
      alert("Please fill all fields");
      return;
    }

    console.log("BOOKING CONFIRMED:", {
      service: service.title,
      date,
      time,
      name,
      phone,
    });

    navigate("/confirmation");
  };

  return (
    <div className="px-10 py-20 text-white">
      <div className="max-w-3xl mx-auto bg-[#0b1220] rounded-2xl p-8 shadow-xl space-y-8">

        <h1 className="text-3xl font-bold">Booking Summary</h1>

        {/* Service info */}
        <div className="flex gap-6 items-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-32 h-24 object-cover rounded-xl"
          />
          <div>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-400">
              {date} at {time}
            </p>
          </div>
        </div>

        {/* User info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Your Information</h3>

          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#111827] text-white"
          />

          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#111827] text-white"
          />
        </div>

        <button
          onClick={handleConfirm}
          className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-full text-lg transition"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
