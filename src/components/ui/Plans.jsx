const plans = [
  {
    name: "Free",
    price: "0$",
    perks: ["حجز عادي", "دعم أساسي"],
  },
  {
    name: "Pro",
    price: "9.99$ / شهر",
    perks: ["خصومات", "أولوية الحجز", "دعم سريع"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "19.99$ / شهر",
    perks: [
      "أولوية قصوى",
      "خصومات كبيرة",
      "خدمات VIP",
      "دعم خاص",
    ],
  },
];

export default function Plans() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        background: "#020617",
        color: "#fff",
        textAlign: "center",
      }}
      aria-labelledby="plans-title"
    >
      <h2 id="plans-title" style={{ fontSize: "2.2rem" }}>
        خطط الاشتراك
      </h2>
      <p style={{ color: "#cbd5f5", margin: "1rem auto 3rem" }}>
        اختر الخطة التي تناسبك ووفّر أكثر
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "2rem",
          maxWidth: 1100,
          margin: "auto",
        }}
      >
        {plans.map((p) => (
          <div
            key={p.name}
            style={{
              borderRadius: "1.2rem",
              padding: "2.5rem 2rem",
              background: p.highlight
                ? "linear-gradient(180deg,#2563eb,#1e40af)"
                : "#020617",
              border: "1px solid #1e293b",
              transform: p.highlight ? "scale(1.05)" : "none",
            }}
          >
            <h3>{p.name}</h3>
            <p style={{ fontSize: "1.6rem", margin: "1rem 0" }}>{p.price}</p>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {p.perks.map((perk) => (
                <li key={perk} style={{ marginBottom: "0.5rem" }}>
                  ✔ {perk}
                </li>
              ))}
            </ul>

            <button
              style={{
                marginTop: "1.5rem",
                background: "#fff",
                color: "#020617",
                border: "none",
                padding: "0.7rem 1.5rem",
                borderRadius: "999px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              اشترك الآن
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
