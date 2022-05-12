import getBooks from "./books/get-books"
import getCities from "./cities/get-cities"

// const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

export default async function getBoth(query: string) {
    query = query.toLowerCase().trim()
    try {
        // await sleep(4000) // can be used to test useeffect cleanup mechanism in this project
        const books = await getBooks(query)
        const cities = await getCities(query)
        return { books, cities }
    } catch (error) {
        return Promise.reject(error)
    }
}
