import { DataPoint } from "./DataPoint";
import { Rectangle } from "./Rectangle";

export interface AreaFinder {
    findPointsInside(rect: Rectangle, pointsWithinRectangle: DataPoint[]): void;
}
