import "./AuthLayout.css";

export default function AuthLayout({ children }) {
  return (
    <div className="auth-scene">
      <div className="auth-frame">
        <div className="auth-border"></div>
        <div className="auth-card">
          {children}
        </div>
      </div>
    </div>
  );
}
