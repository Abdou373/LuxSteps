const PRODUCTION_DOMAIN = "https://luxsteps.vercel.app"
const DEVELOPMENT_DOMAIN = "http://localhost:3000"

export const DOMAIN = process.env.NODE_ENV === "production" ?
    PRODUCTION_DOMAIN : DEVELOPMENT_DOMAIN;


export const STATES = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]

export const CATEGORIES = [
    "Casual Sneaker",
    "Women's Boots",
    "Work & Safety Shoes",
    "Snow Boots",
    "Ankle Boots",
    "Canvas",
    "High Boots",
]