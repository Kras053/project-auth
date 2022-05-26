import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
    name: "user",
    initialState: {
        userId: null,
        username: null,
        accessToken: null,
        error: null
    },
    reducers: {
        setUserId: (store, action) => {
            store.userId = action.payload;
        },
        setUserName: (store, action) => {
            store.username = action.payload;
        },
        setAccessToken: (store, action) => {
            store.acessToken = action.payload;
        },
        setError: (store, action) => {
            store.error = action.payload;
        }
     }
})

export default user;