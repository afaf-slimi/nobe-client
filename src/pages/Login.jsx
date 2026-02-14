import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";
import { EyeIcon, EyeOffIcon } from "../components/PasswordToggleIcon";
import GoogleIcon from "../components/GoogleIcon";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("rememberEmail");
    if (saved) {
      setEmail(saved);
      setRemember(true);
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("يرجى ملء جميع الحقول");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      remember
        ? localStorage.setItem("rememberEmail", email)
        : localStorage.removeItem("rememberEmail");
      toast.success("تم تسجيل الدخول بنجاح");
      navigate("/");
    } catch {
      toast.error("بيانات الدخول غير صحيحة");
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("تم تسجيل الدخول عبر Google");
      navigate("/");
    } catch {
      toast.error("فشل تسجيل الدخول عبر Google");
    }
  };

  return (
    <div className="auth-container" dir="rtl">
      <div className="auth-card">
        <h2>تسجيل الدخول</h2>
        <p className="auth-desc">ادخل إلى حسابك بكل سهولة وأمان</p>

        <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={e=>setEmail(e.target.value)} />

        <div className="password-field">
          <input type={show ? "text" : "password"} placeholder="كلمة المرور" value={password} onChange={e=>setPassword(e.target.value)} />
          <button type="button" className="toggle-btn" onClick={()=>setShow(!show)}>
            {show ? <EyeOffIcon/> : <EyeIcon/>}
          </button>
        </div>

        <label className="remember-me">
          <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} />
          تذكرني
        </label>

        <button className="primary-btn" onClick={handleLogin}>تسجيل الدخول</button>

        <button className="google-btn" onClick={handleGoogle}>
          <GoogleIcon />
          المتابعة باستخدام Google
        </button>

        <div className="auth-links">
          <Link to="/register">إنشاء حساب</Link>
          <Link to="/forgot-password">نسيت كلمة المرور؟</Link>
        </div>
      </div>
    </div>
  );
}













