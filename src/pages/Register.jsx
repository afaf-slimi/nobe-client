import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { EyeIcon, EyeOffIcon } from "../components/PasswordToggleIcon";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password || !confirm) {
      toast.error("يرجى ملء جميع الحقول");
      return;
    }
    if (password !== confirm) {
      toast.error("كلمتا المرور غير متطابقتين");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("تم إنشاء الحساب بنجاح");
      navigate("/");
    } catch {
      toast.error("فشل إنشاء الحساب");
    }
  };

  return (
    <div className="auth-container" dir="rtl">
      <div className="auth-card">
        <h2>إنشاء حساب</h2>

        <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={e=>setEmail(e.target.value)} />

        <div className="password-field">
          <input type={show1?"text":"password"} placeholder="كلمة المرور" value={password} onChange={e=>setPassword(e.target.value)} />
          <button type="button" className="toggle-btn" onClick={()=>setShow1(!show1)}>
            {show1?<EyeOffIcon/>:<EyeIcon/>}
          </button>
        </div>

        <div className="password-field">
          <input type={show2?"text":"password"} placeholder="تأكيد كلمة المرور" value={confirm} onChange={e=>setConfirm(e.target.value)} />
          <button type="button" className="toggle-btn" onClick={()=>setShow2(!show2)}>
            {show2?<EyeOffIcon/>:<EyeIcon/>}
          </button>
        </div>

        <button className="primary-btn" onClick={handleRegister}>إنشاء الحساب</button>

        <p className="auth-footer">
          لديك حساب؟ <Link to="/login">تسجيل الدخول</Link>
        </p>
      </div>
    </div>
  );
}




