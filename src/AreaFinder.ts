import { PointConsumer } from "./PointConsumer";
import { Rectangle } from "./Rectangle";

export interface AreaFinder {
    findPointsInside(rect: Rectangle, consumer: PointConsumer): void;
}
