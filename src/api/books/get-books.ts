import { TBook } from "../../types"

const books = [
    {
        title: "Don Quixote",
        author: "Miguel De Cervantes",
    },
    {
        title: "Pilgrim's Progress",
        author: "John Bunyan",
    },
    {
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
    },
    {
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
    },
    {
        title: "Tom Jones",
        author: "Henry Fielding",
    },
    {
        title: "Clarissa",
        author: "Samuel Richardson",
    },
    {
        title: "Tristram Shandy",
        author: "Laurence Sterne",
    },
]

export default function getBooks(query: string) {
    return Promise.resolve(
        books.filter((book: TBook) => book.title.toLowerCase().startsWith(query))
    )
}
