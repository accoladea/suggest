import { TCity } from "../../types"

const cities = [
    "san jose",
    "santiago",
    "san francisco",
    "santa rosa",
    "san juan",
    "sabadell",
    "salamanca",
    "salt lake city",
    "salinas",
    "salem",
    "sausalito",
    "taipei",
    "tel aviv",
    "tempe",
    "termez",
    "temuco",
    "tiajuna",
    "tieling",
    "thousand oaks",
    "thunder bay",
    "tokyo",
    "tulsa",
]

export default async function getCities(query: string) {
    return Promise.resolve(
        cities.filter((city: TCity) => city.toLowerCase().startsWith(query))
    )
}
