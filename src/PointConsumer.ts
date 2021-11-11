import { DataPoint } from "./DataPoint";

export interface PointConsumer {
    consumePoint(point: DataPoint): void;
}
