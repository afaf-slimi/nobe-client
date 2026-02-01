import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();

  return (
    <>
      <h2>Login</h2>
      <button onClick={() => login({ name: "User" })}>
        Login
      </button>
    </>
  );
}


