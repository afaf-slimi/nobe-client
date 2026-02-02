export default function Login() {
  return (
    <div style={styles.page}>
      <form style={styles.card}>
        <h2>Login</h2>
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#020617",
  },
  card: {
    background: "#020617",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid #1e293b",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "320px",
    color: "white",
  },
};
