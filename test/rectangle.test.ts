import { DataPoint } from "../src/DataPoint";
import { Rectangle } from "../src/Rectangle"

test('Point not in null rectangle', () => {
    let rect = new Rectangle();
    let point = new DataPoint(0, 0)
    
    expect(rect.contains(point)).toBe(false)
})

test('Point inside', () => {
    let rect = new Rectangle(0, 0, 2, 2);
    let point = new DataPoint(1, 1)
    
    expect(rect.contains(point)).toBe(true)
})

test('Point outside', () => {
    let rect = new Rectangle(0, 0, 2, 2);
    let point = new DataPoint(3, 3)
    
    expect(rect.contains(point)).toBe(false)
})