import { Home } from "./components/Home";
import { Nosotros } from "./components/Nosotros";
import { Noticias } from "./components/Noticias";
import { Novedades } from "./components/Novedades";
import { NavBar } from "./components/layout/NavBar";
import { Footer } from "./shared/Footer";

export const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Novedades />
      <Nosotros />
      {/* <Precios /> */}
      <Noticias />
      <Footer />
    </>
  );
};
