import { Box, Typography } from "@mui/material"
import SearchField from "./components/search-field/search-field"
import Selected from "./components/selected/selected"
import SuggestList from "./components/suggest-list/suggest-list"
import LoadingSpinner from "./components/ui/loading-spinner"
import NoSuggestionsFound from "./components/ui/no-suggestions-found"
import useFetchBooksAndCities from "./store/react-query/fetch-both"

export default function App() {
    const { books, cities, loading, success, noSuggests } = useFetchBooksAndCities()

    return (
        <Box
            sx={{
                width: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                p: 2,
                m: 1,
                pt: "20vh",
            }}
        >
            <Typography component="h1" variant="h4" textAlign="center" color="#4d4d4d">
                Books & Cities
            </Typography>
            <SearchField />
            <Selected />
            {loading && <LoadingSpinner />}
            {noSuggests && <NoSuggestionsFound />}
            {success && (
                <>
                    <SuggestList suggests={books} isBook />
                    <SuggestList suggests={cities} />
                </>
            )}
        </Box>
    )
}
