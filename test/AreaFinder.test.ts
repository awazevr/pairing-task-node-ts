import { DataPoint } from "../src/DataPoint";
import DataSet from "../src/DataSet";
import { Rectangle } from "../src/Rectangle"
import { BruteForceAreaFinder } from "../src/BruteForceAreaFinder";
import { AreaFinder } from "../src/AreaFinder";

const DATASET_CSV = "dataset.csv"
const EXPECTED_DATASET_CSV = "expected_dataset.csv"

let dataset: DataPoint[];
let expectedResult: DataPoint[];
let rect: Rectangle;

beforeAll(() => {
    dataset = DataSet.ReadDataPoints(DATASET_CSV)
    expectedResult = DataSet.ReadDataPoints(EXPECTED_DATASET_CSV)
    rect = new Rectangle(-0.1, -0.1, 0.1, 0.1)
});

test('Brute Force Area Finder', () => {
    loadDataset(BruteForceAreaFinder.constructFrom(dataset))
})

const loadDataset = (areaFinder: AreaFinder) => {
    const pointsWithin: DataPoint[] = [];
    areaFinder.findPointsInside(rect, pointsWithin);
    expect(pointsWithin).toStrictEqual(expectedResult)
}
