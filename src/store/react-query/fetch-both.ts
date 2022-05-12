import { useContext, useEffect } from "react"
import { useQuery } from "react-query"
import getBoth from "../../api/getBoth"
import { QueryContext } from "../context/query-context"
import { useAppSelector } from "../redux/ts-hooks"

export default function useFetchBooksAndCities() {
    const isSelected = useAppSelector((state) => state.selection.isSelected)
    const { query } = useContext(QueryContext)

    const { data, refetch, isLoading, isSuccess } = useQuery(
        ["fetch-cities", query],
        () => getBoth(query),
        { enabled: false }
    )

    /**
     * Inside useEffect a cleanup function is used
     * because it stops unnecessary API fetching
     * if the user hasn't finished typing
     * if real API were used
     */

    useEffect(() => {
        if (query.trim().length < 3 || isSelected) return
        const sleep = setTimeout(refetch, 600)
        return () => clearTimeout(sleep)
    }, [query, refetch, isSelected])

    return {
        books: data?.books ?? [],
        cities: data?.cities ?? [],
        noSuggests:
            isSuccess &&
            (data?.books ?? []).length === 0 &&
            (data?.cities ?? []).length === 0,
        loading: isLoading,
        success: isSuccess,
    }
}
