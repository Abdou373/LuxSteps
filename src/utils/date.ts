import shoe1 from "@/images/products/Shoe2.png"
import shoe2 from "@/images/products/Shoe1.png"
import { ShoesType } from "./type"


export const shoes: ShoesType[] = [
    {
        id: 1,
        name: "Airmax 90",
        price: 5000,
        imgs: ["https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726873295/download_6_hmdx4s.jpg",
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726873295/download_6_hmdx4s.jpg",
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726684267/download_5_oggycb.jpg",//
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726684267/download_5_oggycb.jpg",//
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726684267/download_5_oggycb.jpg",//
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726684267/download_5_oggycb.jpg",//
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726684267/download_5_oggycb.jpg",//
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726684267/download_5_oggycb.jpg",//
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726873295/download_6_hmdx4s.jpg"],
        sizes: [40, 41, 42, 43],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit ipsam velit dolor quis atque laboriosam alias sunt provident sint corrupti eos, eveniet incidunt consectetur dolorem modi molestiae mollitia numquam."
    },
    {
        id: 2,
        name: "Airmax 95",
        price: 7300,
        imgs: ["https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726684267/download_5_oggycb.jpg",
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726684267/download_5_oggycb.jpg",
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726684267/download_5_oggycb.jpg"],
        sizes: [40, 41, 42, 43],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit ipsam velit dolor quis atque laboriosam alias sunt provident sint corrupti eos, eveniet incidunt consectetur dolorem modi molestiae mollitia numquam."
    },
    {
        id: 3,
        name: "Airmax 90",
        price: 2300,
        imgs: ["https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726259313/images_3_acvcdw.jpg",
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726259313/images_3_acvcdw.jpg",
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726259313/images_3_acvcdw.jpg"],
        sizes: [40, 41, 42, 43],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit ipsam velit dolor quis atque laboriosam alias sunt provident sint corrupti eos, eveniet incidunt consectetur dolorem modi molestiae mollitia numquam."
    },
    {
        id: 4,
        name: "Airmax 95",
        price: 5400,
        imgs: ["https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg",
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg",
            "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg"],
        sizes: [40, 41, 42, 43],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit ipsam velit dolor quis atque laboriosam alias sunt provident sint corrupti eos, eveniet incidunt consectetur dolorem modi molestiae mollitia numquam."
    }
]

export const orders = [
    {
        id: 1,
        client: "Abdoumes",
        phone: "0540415848",
        state: "Alger",
        city: "bab elwed",
        price: "5000",
        size: "41",
        shoe: {
            id: 1,
            name: "Airmax 90",
            price: 4500,
            img: "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg",
        },
    },
    {
        id: 2,
        client: "Abdoumes",
        phone: "0540415848",
        state: "Alger",
        city: "bab elwed",
        price: "5000",
        size: "41",
        shoe: {
            id: 2,
            name: "Airmax 90",
            price: 4500,
            img: "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg",
        },
    },
    {
        id: 3,
        client: "Abdoumes",
        phone: "0540415848",
        state: "Alger",
        city: "bab elwed",
        price: "5000",
        size: "41",
        shoe: {
            id: 3,
            name: "Airmax 90",
            price: 4500,
            img: "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg",
        },
    },
    {
        id: 4,
        client: "Abdou Mesbahi",
        phone: "0540415848",
        state: "Boumerdes",
        city: "bab elwed",
        price: "15000",
        size: "41",
        shoe: {
            id: 4,
            name: "Airmax 90",
            price: 4500,
            img: "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg",
        },
    },
    {
        id: 5,
        client: "Abdoumes",
        phone: "0540415848",
        state: "Alger",
        city: "bab elwed",
        price: "5000",
        size: "41",
        shoe: {
            id: 5,
            name: "Airmax 90",
            price: 4500,
            img: "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg",
        },
    },
    {
        id: 6,
        client: "Abdoumes",
        phone: "0540415848",
        state: "Alger",
        city: "bab elwed",
        price: "5000",
        size: "41",
        shoe: {
            id: 6,
            name: "Airmax 90",
            price: 4500,
            img: "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg",
        },
    },
    {
        id: 7,
        client: "Abdoumes",
        phone: "0540415848",
        state: "Alger",
        city: "bab elwed",
        price: "5000",
        size: "41",
        shoe: {
            id: 7,
            name: "Airmax 90",
            price: 4500,
            img: "https://res.cloudinary.com/dg3kz4fwx/image/upload/v1726331105/download_1_uzd4t4.jpg",
        },
    }
] 