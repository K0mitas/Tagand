import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TypeSlice {
    value: number
}

const initialState: TypeSlice = {
    value: 0
}

const Slice = createSlice ({
    name: "number",
    initialState,
    reducers: {
        addTalle: (state, actions: PayloadAction<number>) => {
            state.value += actions.payload
        },

        ButtonTalle: (state) => {
            state.value ++
        }
    }
})

export const {addTalle, ButtonTalle} = Slice.actions
export default Slice.reducer