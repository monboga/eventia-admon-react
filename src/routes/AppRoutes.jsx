import { Route, Routes } from "react-router-dom";
import { Auditorios } from "../pages/Auditorios";
import { Reservacion } from "../pages/Reservacion";
import { EventiaApp } from "../EventiaApp";
import {OtpPage} from "../auth/pages/OtpPage";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventiaApp />} />
        <Route path="/auditorios" element={<Auditorios />} />
        <Route path="/reservacion" element={<Reservacion />} />
        <Route path="/auth/otp" element={<OtpPage />}/>
      </Routes>
    </>
  );
};
