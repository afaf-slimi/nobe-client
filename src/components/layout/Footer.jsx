import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>التطبيق</h4>
          <a href="#">كيف يعمل</a>
          <a href="#">برنامج Plus</a>
          <a href="#">الأسعار</a>
        </div>

        <div>
          <h4>الدعم</h4>
          <a href="#">مركز المساعدة</a>
          <a href="#">الدعم التقني</a>
          <a href="#">إمكانية الوصول</a>
        </div>

        <div>
          <h4>الشركة</h4>
          <a href="#">من نحن</a>
          <a href="#">الاستدامة</a>
          <a href="#">فرص العمل</a>
        </div>

        <div>
          <h4>الحساب</h4>
          <a href="#">تسجيل الدخول</a>
          <a href="#">إنشاء حساب</a>
        </div>
      </div>

      <p className="copyright">
        © 2026 – كل الحقوق محفوظة
      </p>
    </footer>
  );
}
