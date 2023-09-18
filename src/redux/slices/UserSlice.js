import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null
}
const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userReducer: (state, action) => {
            switch (action.type) {
                default:
                    return state;
            }

        }

    },
});
export const userAction = UserSlice.actions
export default UserSlice.reducer