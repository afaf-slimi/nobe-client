import { Sparkles, Leaf, Wallet } from "lucide-react";
import "./Services.css";

export default function ServicesBottomBar() {
  return (
    <section className="services-bar">
      <div className="service-item">
        <Sparkles size={32} />
        <h4>Cleaning Experts</h4>
        <p>Professional & trained staff</p>
      </div>

      <div className="service-item">
        <Leaf size={32} />
        <h4>Eco Friendly</h4>
        <p>Safe & green products</p>
      </div>

      <div className="service-item">
        <Wallet size={32} />
        <h4>Budget Cleaning</h4>
        <p>Affordable pricing</p>
      </div>
    </section>
  );
}



