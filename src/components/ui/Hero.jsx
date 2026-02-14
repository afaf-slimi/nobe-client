import "./Hero.css";
import heroImg from "../../assets/services/hero.jpg";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>احجز خدماتك بكل سهولة</h1>
        <p>
          أطباء، فنادق، ميكانيك، قاعات رياضية وأكثر  كلش في بلاصة وحدة
        </p>
        <button>ابدأ الآن</button>
      </div>
    </section>
  );
}


