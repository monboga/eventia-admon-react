import { NavLink } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

/* eslint-disable react/prop-types */
export const UserRow = ({id,username,email,admin}) => {

  const {handlerUserSelectedForm, handlerRemoveUser} = useUsers();
  const { login } = useAuth();

  return (
    <>
      <tr className="bg-white">
        <td className="p-3 text-sm text-gray-700">{id}</td>
        <td className="p-3 text-sm text-gray-700">{username}</td>
        <td className="p-3 text-sm text-gray-700">{email}</td>
        {!login.isAdmin ||
        <>
        <td className="p-3 text-sm text-gray-700">
          <button
            type="button"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              handlerUserSelectedForm({
                id,
                username,
                email,
                admin
              })
            }
          >
            Update
          </button>
        </td>
        <td className="p-3 text-sm text-gray-700">
          <NavLink className={'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'}
          to={'/users/edit/' + id}>
            Update Route
          </NavLink>
        </td>
        <td className="p-3 text-sm text-gray-700">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlerRemoveUser(id)}
          >
            Remove
          </button>
        </td>
        </>
        }
      </tr>
    </>
  );
};
