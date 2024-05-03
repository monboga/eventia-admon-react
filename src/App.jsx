import { Provider } from "react-redux";
import { NavBar } from "./components/layout/NavBar";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer } from "./shared/Footer";
import { store } from "./auth/store/store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <AppRoutes />
        <Footer />
      </Provider>
    </>
  );
};
