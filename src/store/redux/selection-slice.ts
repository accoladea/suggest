import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TBook, TCity } from "../../types"

export const selectionSlice = createSlice({
    name: "selection",
    initialState: {
        isSelected: false as boolean,
        isBookType: false as boolean,
        selectedBook: undefined as TBook | undefined,
        selectedCity: undefined as TCity | undefined,
    },
    reducers: {
        resetSelectedionSlice: (state) => {
            state.isSelected = false
            state.isBookType = false
            state.selectedBook = undefined
            state.selectedCity = undefined
        },
        setSelectedBook: (state, { payload }: PayloadAction<TBook>) => {
            state.isBookType = true
            state.isSelected = true
            state.selectedBook = payload
        },
        setSelectedCity: (state, { payload }: PayloadAction<TCity>) => {
            state.selectedCity = payload
            state.isSelected = true
        },
    },
})
