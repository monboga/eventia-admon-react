/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";
import { Paginator } from "../components/Paginator";
import { useParams } from "react-router-dom";

export const UsersPage = () => {
  const { page } = useParams();

  const {
    users,
    visibleForm,
    isLoading,
    paginator,
    handlerOpenForm,
    getUsers,
  } = useUsers();

  // contexto del auth
  const { login } = useAuth();

  useEffect(() => {
    getUsers(page);
  }, [page]);

  if (isLoading) {
    return (
      <div className="container my-4">
        {/* <h4>Cargando ...</h4> */}
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Cargando ...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {!visibleForm || <UserModalForm />}
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
        <h2>Users App</h2>
        <div className="">
          {/* pasamos los datos del usuario que viene del componente
          {!visibleForm || 
          <div className="col">

          </div>
            } */}

          <div className="">
            {visibleForm || !login.isAdmin || (
              <button className="btnPrimary" onClick={handlerOpenForm}>
                Nuevo Usuario
              </button>
            )}

            {users.length === 0 ? (
              <div className="alert alert-warning">
                No hay usuarios en el sistema!
              </div>
            ) : (
              <>
                <UsersList />

                {/* debajo se encuentra el paginador de la tabla */}
                <Paginator url="/users/page" paginator={paginator} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
