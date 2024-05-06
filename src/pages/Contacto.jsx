// import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { Modal } from "../shared/Modal";

export const Contacto = () => {
  const { visibleForm, handlerOpenForm, handlerCloseForm } = useUsers();

  return (
    <>
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-24">
        <button
          className="text-white bg-blue-700 focus:outline-none font-medium text-sm rounded-lg px-4 py-2.5 text-center mr-5"
          onClick={handlerOpenForm}
        >
          Test modal
        </button>
      </div>

      <Modal isVisible={visibleForm} onClose={handlerCloseForm}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Inicia Sesion en nuestra plataforma
          </h3>
          <form action="" className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tu email
              </label>
              <input
                type="email"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="corre@correo.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tu contrasena
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-30 focus:ring-3 focus:ring-blue-300"
                    required
                  />
                  <label
                    htmlFor=""
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Recuerdame
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus-ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Inicia sesion
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
