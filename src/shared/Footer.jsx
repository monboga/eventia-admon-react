import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#117A65] md:px-14 p-4 max-w-s-2xl mx-auto text-white">
        <div className="my-12 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 space-y-8">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3 text-white"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span>eventia</span>
            </a>
            <p className="md:w-1/2">
              Página web para la gestión de tus eventos
            </p>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="bg-[#B2E9BB] py-2 px-4 rounded-md focus:outline-none"
              />
              <input
                type="submit"
                value="Enviar"
                className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
              />
            </div>
          </div>
          {/* navegaciones del footer */}
          <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Platform</h4>
              <ul className="space-y-3">
                <a href="" className="block hover:text-gray-300">
                  Home
                </a>
                <a href="" className="block hover:text-gray-300">
                  Novedades
                </a>
                <a href="" className="block hover:text-gray-300">
                  Nosotros
                </a>
                <a href="" className="block hover:text-gray-300">
                  Precios
                </a>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Help</h4>
              <ul className="space-y-3">
                <a href="" className="block hover:text-gray-300">
                  How does it works?
                </a>
                <a href="" className="block hover:text-gray-300">
                  Where to ask?
                </a>
                <a href="" className="block hover:text-gray-300">
                  How to play?
                </a>
                <a href="" className="block hover:text-gray-300">
                  What is needed for this?
                </a>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Contacts</h4>
              <ul className="space-y-3">
                <p className="hover:text-gray-300">9999999</p>
                <p className="hover:text-gray-300">999 eventia</p>
                <p className="hover:text-gray-300">num calle colonia</p>
                <p className="hover:text-gray-300">cp: 000000</p>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
          <p>
            @ elaborada por equipo eventia. Administracion de proyectos de
            software
          </p>
        </div>
      </div>
    </>
  );
};
