import { List, ListSubheader } from "@mui/material"
import { useContext } from "react"
import { QueryContext } from "../../store/context/query-context"
import { selectionSlice } from "../../store/redux/selection-slice"
import { useAppDispatch } from "../../store/redux/ts-hooks"
import { TBook, TCity, TSuggestListProps } from "../../types"
import SuggestItem from "./suggest-item"

export default function SuggestList({ suggests, isBook }: TSuggestListProps) {
    const dispatch = useAppDispatch()
    const { onUpdateQuery } = useContext(QueryContext)

    if (suggests.length === 0) return null

    function suggestionSelectHandler(item: TBook | TCity) {
        if (isBook) {
            onUpdateQuery((item as TBook).title)
            dispatch(selectionSlice.actions.setSelectedBook(item as TBook))
        } else {
            onUpdateQuery(item as TCity)
            dispatch(selectionSlice.actions.setSelectedCity(item as TCity))
        }
    }

    return (
        <List
            dense
            disablePadding
            subheader={
                <ListSubheader component="div" id="subheader">
                    {isBook ? "Books" : "Cities"}
                </ListSubheader>
            }
            sx={{ width: { xs: "100%", md: "50%" }, boxShadow: 1 }}
        >
            {suggests.map((suggest, key) => {
                return (
                    <SuggestItem
                        key={key}
                        item={suggest}
                        onSuggestSelect={suggestionSelectHandler}
                        isBook={isBook}
                    />
                )
            })}
        </List>
    )
}
