import { Route, Routes } from "react-router-dom";
import { Auditorios } from "../pages/Auditorios";
import { Reservacion } from "../pages/Reservacion";
import { EventiaApp } from "../EventiaApp";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventiaApp />} />
        <Route path="/auditorios" element={<Auditorios />} />
        <Route path="/reservacion" element={<Reservacion />} />
      </Routes>
    </>
  );
};
