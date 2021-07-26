import ParkMap from "./ParkMap";
import parkCsvURL from "url:../assets/park_location.csv";

const istanbulMap = new ParkMap("map", { lat: 41.0082, lng: 28.9784 });
istanbulMap.loadParks(parkCsvURL);
