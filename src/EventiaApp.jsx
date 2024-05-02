import { Home } from "./components/Home";
import { Nosotros } from "./components/Nosotros";
import { Noticias } from "./components/Noticias";
import { Novedades } from "./components/Novedades";

export const EventiaApp = () => {
  return (
    <>
      <Home />
      <Novedades />
      <Nosotros />
      {/* <Precios /> */}
      <Noticias />
    </>
  );
};

export default EventiaApp;
