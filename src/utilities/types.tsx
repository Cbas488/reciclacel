type Link = {
    text: string
    link: string
}

type Blog = {
    id: string
    category: string
    title: string
    date: string
    timeRead: number
    titleBodyBlue: string
    titleBodyGreen: string
    intro: string
    image: string
    outro: string

}

export type {
    Link, Blog
}