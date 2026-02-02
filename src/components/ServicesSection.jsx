import { services } from "../data/services";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="px-10 py-20">
      <h2 className="text-4xl font-bold text-white mb-2">
        Popular Services
      </h2>
      <p className="text-gray-400 mb-10">
        Choose what you need and book instantly
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#0b1220] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-white text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <button
                onClick={() => navigate(`/booking/${service.id}`)}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
