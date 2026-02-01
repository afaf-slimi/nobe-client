import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "60px 40px" }}>{children}</main>
    </div>
  );
}


