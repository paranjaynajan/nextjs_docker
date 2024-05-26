import { configureStore } from "@reduxjs/toolkit";
import clickSlice from "./slices/clickSlice";
import personalSlice from "./slices/exampleSlice";


export const store = configureStore({
    reducer:{
        click:clickSlice.reducer,
        personal: personalSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch