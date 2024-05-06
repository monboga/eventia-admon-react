/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const UserForm = ({ handlerCloseForm, userSelected }) => {
  const { initialUserForm, handlerAddUser, errors } = useUsers();
  // valores iniciales del formulario

  const [userForm, setUserForm] = useState(initialUserForm);
  const [checked, setChecked] = useState(userForm.admin);
  const { id, username, password, email, admin } = userForm;

  useEffect(() => {
    setUserForm({
      ...userSelected,
      password: "",
    });
  }, [userSelected]);

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    const { name, value } = target;

    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onCheckboxChange = () => {
    // manejamos el estado de si esta chequeado o no.
    // cada vez que haga click cambia su valor.
    setChecked(!checked);
    setUserForm({
      ...userForm,
      admin: checked,
    });
  };

  const onSubmit = (event) => {
    // para que la pagina no haga un refresh
    event.preventDefault();
    // validacion de que los campos del formulario se ecuentren vacios.
    // if (!username || (!password && id === 0) || !email) {

    //   Swal.fire(
    //     "Error de validacion",
    //     "Debe completar los datos del formulario",
    //     "error"
    //   );

    //   return;
    // }
    // // validacion basica de un email
    // if(!email.includes('@')) {
    //   Swal.fire(
    //     "Error de validacion email",
    //     "El email debe ser valido, incluir un @",
    //     "error"
    //   );
    //   return;
    // }
    // console.log(userForm);

    // guardar el user form en el listado de usuarios
    handlerAddUser(userForm);
    // setUserForm(initialUserForm);
  };
  const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUserForm);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Username:
          </label>
          <input
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>

        <div>
          <p className="text-danger">{errors?.username}</p>
          {id > 0 || (
            <>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </>
          )}
          <p className="text-danger">{errors?.password}</p>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Email:
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <p className="text-danger">{errors?.email}</p>
        </div>

        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                name="admin"
                checked={admin}
                className="w-4 h-4 bg-gray-50 rounded border border-gray-30 focus:ring-3 focus:ring-blue-300"
                onChange={onCheckboxChange}
              />
              <label className="ml-2 text-sm font-medium text-gray-900">
                Admin
              </label>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-evenly">
          <input type="hidden" name="id" value={id} />

          <button className="btnSave" type="submit">
            {id > 0 ? "Editar" : "Crear"}
          </button>
          {!handlerCloseForm || (
            <button
              className="btnClose"
              type="button"
              onClick={() => onCloseForm()}
            >
              Cerrar
            </button>
          )}
        </div>
      </form>
    </>
  );
};
