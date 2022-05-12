export type TBook = {
    title: string
    author: string
}
export type TBooks = TBook[]

export type TCity = string

export type TCities = TCity[]

export type TSuggestListProps = {
    suggests: TBooks | TCities
    isBook?: boolean
}
export type TSuggestItemProps = {
    item: TBook | TCity
    isBook?: boolean
    onSuggestSelect: (item: TBook | TCity) => void
}
