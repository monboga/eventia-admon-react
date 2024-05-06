import { UserForm } from "./UserForm";
import { useUsers } from "../hooks/useUsers";
import { Modal } from "../shared/Modal";

/* eslint-disable react/prop-types */
export const UserModalForm = () => {
  const { userSelected, handlerCloseForm } = useUsers();

  return (
    <>
      <Modal>
        <h5 className="modal-title">
          {userSelected.id > 0 ? "Editar" : "Crear"} Modal Usuarios
        </h5>
        <UserForm
          userSelected={userSelected}
          handlerCloseForm={handlerCloseForm}
        />
      </Modal>
    </>
  );
};
