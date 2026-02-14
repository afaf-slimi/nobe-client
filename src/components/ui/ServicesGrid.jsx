const services = [
  { title: "طبيب", img: "/src/assets/services/doctor.jpg" },
  { title: "نادي رياضي", img: "/src/assets/services/gym.jpg" },
  { title: "فندق", img: "/src/assets/services/hotel.jpg" },
  { title: "ميكانيكي", img: "/src/assets/services/mechanic.jpg" },
  { title: "حلاق", img: "/src/assets/services/haircut.jpg" },
  { title: "طبيب بيطري", img: "/src/assets/services/vet.jpg" },
];

export default function ServicesGrid() {
  return (
    <section
      style={{
        padding: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "1.5rem",
      }}
    >
      {services.map((s, i) => (
        <div
          key={i}
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
            cursor: "pointer",
          }}
        >
          <img
            src={s.img}
            alt={s.title}
            style={{ width: "100%", height: 160, objectFit: "cover" }}
          />
          <div style={{ padding: "1rem", textAlign: "center" }}>
            <h3>{s.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
