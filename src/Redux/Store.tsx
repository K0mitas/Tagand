import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./Slice"

const store = configureStore ({
    reducer: {
        counter: SliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store