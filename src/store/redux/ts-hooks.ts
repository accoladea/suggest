import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { store } from "./store"

// wrapped with typescript types

export const useAppDispatch = () => {
    return useDispatch<typeof store.dispatch>()
}
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
    useSelector
