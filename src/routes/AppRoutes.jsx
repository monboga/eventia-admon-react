import { Route, Routes } from "react-router-dom";
import { App } from "../EventiaApp";
import { Auditorios } from "../components/Auditorios";
import { Reservacion } from "../components/Reservacion";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="auditorios" element={<Auditorios />} />
        <Route path="reservacion" element={<Reservacion />} />
      </Routes>
    </>
  );
};
