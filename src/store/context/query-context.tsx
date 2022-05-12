import { createContext, ReactNode, useState } from "react"

export const QueryContext = createContext({
    query: "" as string,
    onUpdateQuery: (q: string) => {},
})

export default function ContextProvider({ children }: { children: ReactNode }) {
    const [query, setQuery] = useState("")

    function updateQueryHandler(searchQuery: string) {
        setQuery(searchQuery)
    }

    return (
        <QueryContext.Provider
            value={{
                query,
                onUpdateQuery: updateQueryHandler,
            }}
        >
            {children}
        </QueryContext.Provider>
    )
}
