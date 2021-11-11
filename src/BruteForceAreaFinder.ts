import { AreaFinder } from "./AreaFinder";
import { DataPoint } from "./DataPoint";
import { PointConsumer } from "./PointConsumer";
import { Rectangle } from "./Rectangle";

export class BruteForceAreaFinder implements AreaFinder {
    public fullDataSet: DataPoint[] = []

    static constructFrom(dataPoints: DataPoint[]) {
        return new BruteForceAreaFinder(dataPoints)
    }

    constructor(dataPoints: DataPoint[]) {
        this.fullDataSet = dataPoints
    }

    public findPointsInside(rect: Rectangle, consumer: PointConsumer) {
         // TODO: implement
    }
}