import ServiceCard from "../components/ui/ServiceCard";
import { bookings } from "../data/bookings";

export default function Bookings() {
  return (
    <div className="page">
      <h1>All Bookings</h1>

      {bookings.map(item => (
        <ServiceCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          location={item.location}
          date={item.date}
          status={item.status}
          color={item.color}
        />
      ))}
    </div>
  );
}
