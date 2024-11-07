const PRODUCTION_DOMAIN = "https://luxsteps.vercel.app"
const DEVELOPMENT_DOMAIN = "http://localhost:3000"

export const DOMAIN = process.env.NODE_ENV === "production" ?
    PRODUCTION_DOMAIN : DEVELOPMENT_DOMAIN;


export const STATES = [
    {
        name: "Alger",
        number: 16,
        price: 200
    },
    {
        name: "Boumerdes",
        number: 35,
        price: 200
    },
    {
        name: "Blida",
        number: 9,
        price: 350
    },
    {
        name: "Tizi",
        number: 15,
        price: 300
    },
    {
        name: "Tipaza",
        number: 42,
        price: 300
    }
]