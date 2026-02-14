export default function ServiceCard({ image, title }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}


