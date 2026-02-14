import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    if (!email) {
      toast.error("يرجى إدخال البريد الإلكتروني");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("تم إرسال رابط استرجاع كلمة المرور");
    } catch {
      toast.error("فشل إرسال الرابط");
    }
  };

  return (
    <div className="auth-container" dir="rtl">
      <div className="auth-card">
        <h2>استرجاع كلمة المرور</h2>

        <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={e=>setEmail(e.target.value)} />

        <button className="primary-btn" onClick={handleReset}>إرسال الرابط</button>

        <div className="auth-links">
          <Link to="/login">تسجيل الدخول</Link>
          <Link to="/register">إنشاء حساب</Link>
        </div>
      </div>
    </div>
  );
}




