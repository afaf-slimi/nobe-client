export default function ServiceCard({ title, image }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <div className="service-card-content">
        <h3>{title}</h3>
        <button className="btn">Book Now</button>
      </div>
    </div>
  );
}



