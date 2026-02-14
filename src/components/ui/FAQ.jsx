import "./FAQ.css";

export default function FAQ() {
  return (
    <section className="faq" aria-labelledby="faq-title">
      <h2 id="faq-title">الأسئلة المتكررة</h2>

      <details>
        <summary>كيف نربح نقاط Plus؟</summary>
        <p>كل خدمة تكملها تتحسب تلقائيًا ضمن مستواك.</p>
      </details>

      <details>
        <summary>هل الخصومات تدوم؟</summary>
        <p>نعم، أي مستوى توصله يبقى معك مدى الحياة.</p>
      </details>

      <details>
        <summary>هل التطبيق يدعم ذوي الاحتياجات الخاصة؟</summary>
        <p>
          نعم، التصميم يدعم قارئات الشاشة، التباين العالي، والتنقل بلوحة
          المفاتيح.
        </p>
      </details>

      <details>
        <summary>هل التسجيل مجاني؟</summary>
        <p>التسجيل مجاني 100% وبدون بطاقة بنكية.</p>
      </details>
    </section>
  );
}
