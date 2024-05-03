import { Route, Routes } from "react-router-dom";
import { Auditorios } from "../pages/Auditorios";
import { Reservacion } from "../pages/Reservacion";
import { EventiaApp } from "../EventiaApp";
import {OtpPage} from "../auth/pages/OtpPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventiaApp />} />
        <Route path="/auditorios" element={<Auditorios />} />
        <Route path="/reservacion" element={<Reservacion />} />
        <Route path="/auth/otp" element={<OtpPage />}/>
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
