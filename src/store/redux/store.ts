import { configureStore } from "@reduxjs/toolkit"
import { selectionSlice } from "./selection-slice"

export const store = configureStore({
    reducer: {
        selection: selectionSlice.reducer,
    },
})
