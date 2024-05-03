import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";

/* eslint-disable react/prop-types */
export const UsersList = () => {

    const { users } = useUsers();
    const { login } = useAuth();
    return(
        <>
        <table className="table-auto w-full">

            <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">#</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">username</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">email</th>
                    {!login.isAdmin ||
                    <>

                    <th className="p-3 text-sm font-semibold tracking-wide text-left">update</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">update route</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">remove</th>
                    
                    </>
                    }
                </tr>
            </thead>
            <tbody>
                {
                    users.map( ({id, username, email, admin}) => (
                        <UserRow 
                        key={id} 
                        id={id} 
                        username={username} 
                        email={email}
                        admin={admin}
                        />
                    ))
                }
            </tbody>
        </table>
        
        </>
    );
}