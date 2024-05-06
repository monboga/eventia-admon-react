import { Navigate, Route, Routes } from "react-router-dom";
import { Auditorios } from "../pages/Auditorios";
import { Reservacion } from "../pages/Reservacion";
import EventiaHome from "../EventiaHome";
import { OtpPage } from "../auth/pages/OtpPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { UsersPage } from "../pages/UsersPage";
import { RegisterPage } from "../pages/RegisterPage";
import { useSelector } from "react-redux";
import { Contacto } from "../pages/Contacto";
import { Agenda } from "../auth/components/Agenda";
import { Menu } from "../auth/components/Menu";

export const AppRoutes = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<EventiaHome />} />
        <Route path="/auditorios" element={<Auditorios />} />
        <Route path="/reservacion" element={<Reservacion />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* rutas de inicio de sesion por login form o por otp desde mensaje sms */}
        <Route path="/auth/otp" element={<OtpPage />} />
        <Route path="/auth/agenda" element={<Agenda />} />
        <Route path="/auth/menu" element={<Menu />} />
        <Route path="/auth/login" element={<LoginPage />} />

        {/* Rutas protegidas dependiendo de si es admin o es user */}
        <Route path="users" element={<UsersPage />} />

        {/* este page es el mismo que tenemos en el hook */}
        <Route path="users/page/:page" element={<UsersPage />} />

        {/* muestra o no la pagina dependiendo de si es admin o no */}
        {!isAdmin || (
          <>
            <Route path="users/edit/:id" element={<RegisterPage />} />
            <Route path="users/register" element={<RegisterPage />} />
          </>
        )}
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </>
  );
};
