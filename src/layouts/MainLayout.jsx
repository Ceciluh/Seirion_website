import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main style={{ padding: "2rem" }}>
        {children}
      </main>

    </div>
  );
}
