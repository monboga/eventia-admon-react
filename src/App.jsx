import { NavBar } from "./components/layout/NavBar";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer } from "./shared/Footer";

export const App = () => {
  return (
    <>
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  );
};
