export default function WhyUs() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        background: "linear-gradient(180deg,#020617,#020617cc)",
        color: "#fff",
      }}
      aria-labelledby="why-title"
    >
      <h2
        id="why-title"
        style={{ textAlign: "center", fontSize: "2.2rem", marginBottom: "3rem" }}
      >
        لماذا NOBE؟
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "2rem",
          maxWidth: 1100,
          margin: "auto",
        }}
      >
        <Feature title="⚡ سرعة" text="حجز في أقل من دقيقة بلا تعقيد" />
        <Feature title="🛡️ ثقة" text="مقدمي خدمات موثوقين ومراجَعين" />
        <Feature title="♿ للجميع" text="دعم كامل لذوي الاحتياجات الخاصة" />
        <Feature title="💸 توفير" text="اشتراكات توفر عليك المال شهرياً" />
      </div>
    </section>
  );
}

function Feature({ title, text }) {
  return (
    <div
      style={{
        background: "#020617",
        border: "1px solid #1e293b",
        borderRadius: "1rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ color: "#cbd5f5" }}>{text}</p>
    </div>
  );
}
