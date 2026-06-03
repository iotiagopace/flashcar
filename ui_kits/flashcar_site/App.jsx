/* ============================================================
   App.jsx — root component, simple hash-based router
   ============================================================ */

const { Nav, Footer, HomePage, ComoFuncionaPage, SobrePage, UnidadesPage, FranquiaPage, FaqPage } = window;

const ROUTES = {
  "home":          HomePage,
  "como-funciona": ComoFuncionaPage,
  "sobre":         SobrePage,
  "unidades":      UnidadesPage,
  "faq":           FaqPage,
  "franquia":      FranquiaPage,
};

function App() {
  const initial = (window.location.hash || "#home").replace("#", "");
  const [page, setPage] = React.useState(ROUTES[initial] ? initial : "home");

  React.useEffect(() => {
    const onHash = () => {
      const id = (window.location.hash || "#home").replace("#", "");
      if (ROUTES[id]) setPage(id);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleNav = (id) => {
    if (!ROUTES[id]) return;
    window.location.hash = id;
    setPage(id);
    // Bring focus back to the top so users don't land mid-scroll.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const Page = ROUTES[page] || HomePage;

  return (
    <React.Fragment>
      <Nav current={page} onNav={handleNav} />
      <main>
        <Page onNav={handleNav} />
      </main>
      <Footer onNav={handleNav} />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
