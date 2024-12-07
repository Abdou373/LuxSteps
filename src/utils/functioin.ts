import { ShoesType } from "./type";

export function helfArray(array: ShoesType[]) {
    const helf: ShoesType[] = []

    for (let i = 0; i < helfLength(array); i++) {
        helf.push(array[i]);
    }

    return helf;
}

export function restOfArray(array: ShoesType[]) {
    const rest: ShoesType[] = []

    for (let i = helfLength(array); i < array.length; i++) {
        rest.push(array[i]);
    }

    return rest;
}


function helfLength(array: ShoesType[]) {
    return Math.ceil(array.length / 2)
}
