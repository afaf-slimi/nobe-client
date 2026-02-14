import "./PlusProgram.css";

export default function PlusProgram() {
  return (
    <section className="plus" aria-labelledby="plus-title">
      {/* HERO */}
      <div className="plus-hero">
        <h2 id="plus-title">برنامج Plus – مكافآت تدوم معك</h2>
        <p>
          كل مرة تستعمل خدماتنا، تربح خصومات ومزايا أقوى، تلقائيًا وبدون تعقيد.
        </p>

        <div className="plus-actions">
          <button className="btn-primary">أنشئ حسابًا مجانًا</button>
          <button className="btn-secondary">كيف يعمل البرنامج؟</button>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="plus-steps">
        <div className="step">
          <span>1</span>
          <h3>سجّل مجانًا</h3>
          <p>حساب واحد يفتح لك كل الخدمات والمزايا.</p>
        </div>

        <div className="step">
          <span>2</span>
          <h3>استعمل خدماتنا</h3>
          <p>نقل، صيانة، تدريب، حجوزات… كلش محسوب.</p>
        </div>

        <div className="step">
          <span>3</span>
          <h3>اربح تلقائيًا</h3>
          <p>خصومات تُطبق وحدها بدون طلب.</p>
        </div>
      </div>

      {/* LEVELS */}
      <div className="plus-levels">
        <div className="level">
          <h4>Plus 1</h4>
          <ul>
            <li>خصم 10%</li>
            <li>عروض محددة</li>
          </ul>
        </div>

        <div className="level featured">
          <h4>Plus 2</h4>
          <ul>
            <li>خصم 15%</li>
            <li>أولوية في الحجز</li>
            <li>عروض حصرية</li>
          </ul>
        </div>

        <div className="level">
          <h4>Plus 3</h4>
          <ul>
            <li>خصم حتى 25%</li>
            <li>دعم VIP</li>
            <li>مزايا خاصة</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

