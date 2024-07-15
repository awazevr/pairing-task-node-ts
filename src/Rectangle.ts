import { DataPoint } from "./DataPoint";

class Quadrilateral {
    constructor(
        public x1: number, 
        public y1: number,
        public x2: number,
        public y2: number,
    ) { }
}

export class Rectangle extends Quadrilateral {
    constructor(x1?: number, y1?: number, x2?: number, y2?:number) {
        super(
            x1 != undefined ? x1 : Number.POSITIVE_INFINITY,
            y1 != undefined ? y1 : Number.POSITIVE_INFINITY,
            x2 != undefined ? x2 : Number.NEGATIVE_INFINITY,
            y2 != undefined ? y2 : Number.NEGATIVE_INFINITY)
    }

    contains(point: DataPoint): boolean {
        // @TODO
        return false
    }
}