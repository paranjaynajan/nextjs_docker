import { createSlice } from "@reduxjs/toolkit";

interface exampleState {
    fname: string
    lname: string
    phone?: string
}

const initialState: exampleState = {
    fname: 'John',
    lname: 'Lego',
    phone: '1234567890'
};

const personalSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        editName: (state, action) => {
            console.log('payload : ',action.payload)
            state.fname = action.payload
        }
    }
});

export const { editName } = personalSlice.actions;
export default personalSlice;