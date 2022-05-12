import { Box } from "@mui/material"

export default function NoSuggestionsFound() {
    return (
        <Box sx={{ width: { xs: "100%", md: "50%" }, boxShadow: 1, p: 2 }}>
            No suggestions were found
        </Box>
    )
}
