export default function Register() {
  return (
    <div className="auth">
      <h2>إنشاء حساب</h2>

      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>

      <button className="google-btn">Sign up with Google</button>
    </div>
  );
}
