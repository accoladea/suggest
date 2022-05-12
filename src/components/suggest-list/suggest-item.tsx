import { ListItem, ListItemButton, ListItemText } from "@mui/material"
import { TBook, TCity, TSuggestItemProps } from "../../types"

export default function SuggestItem({
    item,
    isBook,
    onSuggestSelect,
}: TSuggestItemProps) {
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => onSuggestSelect(item)}>
                {isBook ? (
                    <ListItemText
                        primary={(item as TBook).title}
                        secondary={(item as TBook).author}
                    />
                ) : (
                    <ListItemText primary={item as TCity} />
                )}
            </ListItemButton>
        </ListItem>
    )
}
