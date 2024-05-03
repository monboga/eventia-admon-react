import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {
      id: 0,
      item: "Home",
      path: "/",
    },
    {
      id: 1,
      item: "Auditorios",
      path: "/auditorios",
    },
    {
      id: 2,
      item: "Reservacion",
      path: "/reservacion",
    },
    {
      id: 3,
      item: "Realizar reserva",
      path: "/auth/otp"
    }
  ];
  // adicion de efectos de scroll

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />{" "}
              eventia
            </a>
            {/* mostrar los navitem using map */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ id, item, path }) => (
                <NavLink
                  key={id}
                  to={path}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {item}
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex items-center">
            <NavLink className="text-white bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-emerald-800" to="/auth/login">
              Iniciar Sesion
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ id, item, path }) => (
          <NavLink
            // spy={true}
            // smooth={true}
            // offset={-80}
            key={id}
            to={path}
            className="block text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </>
  );
};
