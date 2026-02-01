import "./Login.css";

export default function Login() {
  const handleGoogleLogin = () => {
    // لاحقًا نربط Firebase / OAuth
    alert("Google Sign-In coming soon 🚀");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Sign in</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
