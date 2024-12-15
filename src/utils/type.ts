export type ShoesCardType = {
    id: number,
    name: string,
    price: number,
    newPrice?: number,
    img: string,
    rating: number,
    reviews: number
}

export type ShoesType = {
    id: number,
    name: string,
    price: number,
    newPrice?: number
    description: string,
    imgs: string[],
    sizes: number[],
    category: string,
    rating: number,
    reviews: number
}


export type OrderType = {
    id: number,
    client: string,
    phone: string,
    state: string,
    city: string,
    address: string,
    price: number,
    size: number,
    shoe: ShoesCardType
}