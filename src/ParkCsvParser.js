export default class ParkCsvParser {
  constructor(data) {
    this.data = data;
  }
  extract() {
    let rows = this.data.split("\n");
    let keys = rows.shift().split(",");
    return rows
      .filter((row) => row.split(",").length > 2)
      .map((row) => {
        let park = {};
        let values = row.split(",");
        keys.forEach((key, i) => {
          park[key] =
            key === "LATITUDE" || key === "LONGITUDE" ? +values[i] : values[i];
        });
        return park;
      });
  }
}
