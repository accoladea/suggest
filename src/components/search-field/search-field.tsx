import { Box, InputAdornment, TextField } from "@mui/material"
import { useContext } from "react"
import SearchIcon from "@mui/icons-material/Search"
import { QueryContext } from "../../store/context/query-context"
import { useAppDispatch, useAppSelector } from "../../store/redux/ts-hooks"
import { selectionSlice } from "../../store/redux/selection-slice"

export default function SearchField() {
    const isSelected = useAppSelector((state) => state.selection.isSelected)
    const dispatch = useAppDispatch()
    const { query, onUpdateQuery } = useContext(QueryContext)

    function selectionHandler(e: any) {
        if (isSelected) {
            dispatch(selectionSlice.actions.resetSelectedionSlice())
        }
        onUpdateQuery(e.target.value)
    }

    return (
        <Box
            component="form"
            sx={{ width: { xs: "100%", md: "40%" }, mb: 5 }}
            autoComplete="off"
        >
            <TextField
                name="search-query"
                placeholder="Search books or cities"
                value={query}
                onChange={selectionHandler}
                helperText={
                    query.length !== 0 &&
                    query.length < 3 &&
                    "Search query has to be at least 3 characters"
                }
                variant="outlined"
                fullWidth
                autoFocus
                size="small"
                sx={{
                    [`& fieldset`]: {
                        borderRadius: 20,
                    },
                    [`& .MuiOutlinedInput-root.Mui-focused fieldset`]: {
                        borderColor: "gray",
                        boxShadow: 1,
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon fontSize="small" />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}
