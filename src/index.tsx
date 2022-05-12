import { StrictMode } from "react"
import { QueryClientProvider, QueryClient } from "react-query"
import { Provider as ReduxProvider } from "react-redux"
import ReactDOM from "react-dom/client"

import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import ContextProvider from "./store/context/query-context"
import { store } from "./store/redux/store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const queryClient = new QueryClient()

root.render(
    <StrictMode>
        <ContextProvider>
            <ReduxProvider store={store}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </ReduxProvider>
        </ContextProvider>
    </StrictMode>
)

reportWebVitals()
