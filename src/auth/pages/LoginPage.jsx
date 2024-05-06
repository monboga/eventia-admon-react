/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth";
import imgSignUp from "../../assets/signup2.svg";
import { BsEye, BsTelephoneFill } from "react-icons/bs";

const initialLoginForm = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  const { handlerLogin } = useAuth();

  // manejamos las variables del estado y las inicializamos con los valores iniciales, vacios.
  const [loginForm, setLoginForm] = useState(initialLoginForm);

  // desestructurar los valoress iniciales
  const { username, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      Swal.fire(
        "Error de validacion",
        "Username y passwords requeridos",
        "error"
      );
    }

    // aca implementamos el login
    handlerLogin({ username, password });

    setLoginForm(initialLoginForm);
  };
  return (
    <>
      {/* modal de inicio de sesion con bootstrap */}
      {/* <div className="modal" style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login Page</h5>
            </div>
            <form onSubmit={onSubmit}>
              <div className="modal-body">
                <input
                  className="form-control my-3 w-75"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={onInputChange}
                />
                <input
                  className="form-control my-3 w-75"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onInputChange}
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* contenedor del login */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
          <div className="sm:w-1/2 px-16">
            <h2 className="font-bold text-2xl text-emerald-900">
              Inicio de sesion
            </h2>
            <p className="text-sm-mt-4 text-emerald-900">
              Inicia sesion para ingresar al gestor de eventos
            </p>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                name="username"
                value={username}
                placeholder="Username"
                onChange={onInputChange}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  name="password"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={onInputChange}
                />
                <BsEye className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
              </div>
              <button className="btnPrimary" type="submit">
                Iniciar Sesion
              </button>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">O</p>
              <hr className="border-gray-500" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex flex-row justify-evenly items-center">
              <BsTelephoneFill />
              Mensaje SMS
            </button>
          </div>

          <div className="sm:block hidden w-1/2 bg-gray-50 rounded-2xl">
            <img src={imgSignUp} alt="" className="mt-14e px-5" />
          </div>
        </div>
      </section>
    </>
  );
};
