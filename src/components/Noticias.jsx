import banner from "../assets/newsletter.svg";
import { Banner } from "../shared/Banner";
export const Noticias = () => {
  return (
    <>
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        {/* reutilizamos los componentes del banner y los pasamos como props */}
        <Banner
          banner={banner}
          heading="Contactanos"
          subheading="Si buscas asistencia o requieres algun tipo de ayuda, puedes enviarnos un correo electrónico para mayor información"
          btn1={"Enviar correo"}
        />
      </div>
    </>
  );
};
