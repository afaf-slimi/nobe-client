import { useParams } from "react-router-dom";
import { services } from "../data/services";

export default function BookingDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <p className="text-white p-10">Service not found</p>;
  }

  return (
    <div className="px-10 py-20 text-white">
      <div className="max-w-4xl mx-auto bg-[#0b1220] rounded-2xl overflow-hidden shadow-xl">
        <img
          src={service.image}
          alt={service.title}
          className="h-80 w-full object-cover"
        />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">
            {service.title}
          </h1>

          <p className="text-gray-400 mb-8">
            {service.description}
          </p>

          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-lg transition">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
