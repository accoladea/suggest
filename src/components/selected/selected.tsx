import { Card } from "@mui/material"
import { useAppSelector } from "../../store/redux/ts-hooks"

export default function Selected() {
    const { isSelected, isBookType, selectedBook, selectedCity } = useAppSelector(
        (state) => state.selection
    )
    let content = null

    if (!isSelected) {
        return content
    }

    if (isBookType && !!selectedBook) {
        content = (
            <>
                <p>Book is selected</p>
                <p>
                    {selectedBook.title} by {selectedBook.author}{" "}
                </p>
            </>
        )
    } else if (!!selectedCity) {
        content = (
            <>
                <p>City is selected</p>
                <p>{selectedCity}</p>
            </>
        )
    }

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                p: 1,
                width: { xs: "90vw", sm: "50vw", md: "25vw" },
            }}
        >
            {content}
        </Card>
    )
}
