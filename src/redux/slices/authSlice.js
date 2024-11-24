import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    access_token: ''
};

export const authSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.loading = false;
            state.access_token = action.payload.access_token;

        },
        loginFailure: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, logOut } = authSlice.actions;

// Đảm bảo bạn xuất reducer ở đây
export default authSlice.reducer;
