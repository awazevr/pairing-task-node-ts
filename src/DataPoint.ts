export class DataPoint {
    constructor(
        public x: number,
        public y: number,
    ) { }

    equals(value: any): boolean {
        if (value instanceof DataPoint)  {
            const that = value as DataPoint
            return this.x == that.x && this.y == that.y;
        }
        return false
    }

    toString() {
        console.log(this.x);
        console.log(this.y);
    }

}
