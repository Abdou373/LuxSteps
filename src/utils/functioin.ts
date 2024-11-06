import { ShoesType } from "./type";

export function helfArray(array: ShoesType[]) {
    const helf: any[] = []

    const helfLength = Math.ceil(array.length / 2)
    for (let i = 0; i < helfLength; i++) {
        helf.push(array[i]);
    }

    return helf;
}

export function restOfArray(array: ShoesType[]) {
    const rest: any[] = []

    for (let i = array.length / 2; i < array.length; i++) {
        rest.push(array[i]);
    }

    return rest;
}