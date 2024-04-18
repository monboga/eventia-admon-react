import banner from "../assets/banner-svg.svg";
import { Banner } from "../shared/Banner";

export const Home = () => {
  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
          <Banner
            banner={banner}
            heading="Pagina web para la gestion de eventos"
            subheading="Puedes comenzar a utilizar algunos de nuestros espacios presionando el siguiente boton"
            btn1="Reservar"
          />
        </div>
      </div>
    </>
  );
};
