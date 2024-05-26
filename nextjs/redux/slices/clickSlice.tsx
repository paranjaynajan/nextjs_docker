import { createSlice } from "@reduxjs/toolkit";

// Add interfacr of state
interface ClickState{
    numberOfPlusButtons: number,
    numberOfMinusButtons: number
}

// InitialState 
// Can set new state to use 
const initialState: ClickState = {
    numberOfPlusButtons: 0,
    numberOfMinusButtons: 0
};

// Reducer
const clickSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        plusIncrement: (state) => {
            state.numberOfPlusButtons++;
        },
        minusIncrement: (state) => {
            state.numberOfMinusButtons++;
        },
        reset: (state) => {
            state.numberOfPlusButtons = 0;
            state.numberOfMinusButtons = 0;
        }
    }
});

export const { plusIncrement, minusIncrement, reset } = clickSlice.actions;
export default clickSlice;