import { createSlice } from "@reduxjs/toolkit";

export const initialUserForm = {
    id: 0,
    username: "",
    password: "",
    email: "",
    admin: false,
};

const initialErrors = {
    username: "",
    password: "",
    email: "",
  };

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        paginator: [],
        userSelected: initialUserForm,
        visibleForm: false,
        errors: initialErrors,
        isLoading: true,
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [
                ... state.users,
                {
                    ...action.payload
                }
            ];
            state.userSelected = initialUserForm;
            state.visibleForm = false;
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        updateUser: (state, action) => {
            state.users = state.users.map(u => {
                if(u.id === action.payload.id) {
                    return {
                        ...action.payload,
                    };
                }
                return u; 
            });
            state.userSelected = initialUserForm;
            state.visibleForm = false;
        },
        loadingUsers: (state, {payload}) => {

            // payload.content trae la informacion dentro del arreglo content[]
            state.users = payload.content;

            // state.paginator trae la informacion del paginador, si es 0,1,2,...etc.
            state.paginator = payload;
            state.isLoading = false;
        },
        onUserSelectedForm: (state, {payload}) => {
            state.userSelected = payload;
            state.visibleForm = true;
        },
        onOpenForm: (state) => {
            state.visibleForm = true;
        },
        onCloseForm: (state) => {
            state.visibleForm = false;
            state.userSelected = initialUserForm;
        },
        loadingError: (state, {payload}) => {
            state.errors = payload;
        }

    }
});

export const {
    // exportamos todos los metodos
    addUser,
    removeUser,
    updateUser,
    loadingUsers,
    onUserSelectedForm,
    onOpenForm,
    onCloseForm,
    loadingError
} = usersSlice.actions;