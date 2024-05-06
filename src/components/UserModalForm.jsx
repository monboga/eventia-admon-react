import { UserForm } from "./UserForm";
import { Modal } from "../shared/Modal";
import { useUsers } from "../hooks/useUsers";

/* eslint-disable react/prop-types */
export const UserModalForm = () => {
  const { visibleForm, userSelected, handlerCloseForm } = useUsers();

  return (
    <>
      <Modal isVisible={visibleForm} onClose={handlerCloseForm}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h5 className="mb-4 text-xl font-medium text-gray-900">
            {userSelected.id > 0 ? "Editar" : "Crear"} Modal Usuarios
          </h5>
        </div>
        <UserForm
          userSelected={userSelected}
          handlerCloseForm={handlerCloseForm}
        />
      </Modal>
    </>
  );
};
