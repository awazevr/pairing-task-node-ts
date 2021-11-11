import parse from "csv-parse/lib/sync"
import fs from "fs"
import { DataPoint } from "./DataPoint"

class DataSet {
    public static ReadDataPoints(path:string): Array<DataPoint> {
        let points: Array<DataPoint> = []
        let csvString = fs.readFileSync(path).toString()
         
        const rows = parse(csvString, {delimiter: ';'})

        rows.forEach(row => {
            let point = new DataPoint(parseFloat(row[0]), parseFloat(row[1]))
            points.push(point)
        });

        return points
    }
}

export default DataSet