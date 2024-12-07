export type ShoesCardType = {
    id: number,
    name: string,
    price: number,
    img: string
}

export type ShoesType = {
    id: number,
    name: string,
    price: number,
    description: string,
    imgs: string[]
    sizes: number[]
    category: string
}


export type OrderType = {
    id: number,
    client: string,
    phone: string,
    state: string,
    city: string,
    price: string,
    size: string,
    shoe: ShoesCardType
}