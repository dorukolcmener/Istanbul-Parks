import axios from "axios";
import ParkCsvParser from "./ParkCsvParser";
import iconURL from "url:../assets/tree-1151238_640.png";

export default class ParkMap {
  constructor(id, initialPosition) {
    this.markers = [];
    this.initialPosition = initialPosition;
    this.map = L.map(id).setView(this.initialPosition, 11);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  }

  async loadParks(parkCsvURL) {
    try {
      const { data } = await axios.get(parkCsvURL);
      this.parkLocations = new ParkCsvParser(data).extract();

      // Get Counties
      let counties = new Set();
      this.parkLocations.forEach((park) => counties.add(park.COUNTY_NAME));
      this.counties = [...counties].sort((a, b) => a.localeCompare(b));

      // Set County Dropdown
      let dropdown = document.querySelector("#countyselector");
      dropdown.innerHTML = this.counties.map(
        (county) => `<option value="${county}">${county}</option>`
      );

      this.panToCounty(dropdown.value, false);
      dropdown.addEventListener("change", ({ target: { value } }) => {
        this.panToCounty(value);
      });
    } catch (e) {
      setTimeout(() => {
        console.log(e.toString());
        this.loadParks();
      }, 5000);
    }
  }

  panToCounty(COUNTY, pan = true) {
    this.removeMarkers();
    let parksCounty = this.parkLocations.filter(
      ({ COUNTY_NAME }) => COUNTY_NAME === COUNTY
    );
    let countyLocation = parksCounty.reduce(
      ({ lat, lng }, park) => {
        this.createMarker(park);
        let { LATITUDE, LONGITUDE } = park;
        return { lat: lat + LATITUDE, lng: lng + LONGITUDE };
      },
      { lat: 0, lng: 0 }
    );
    countyLocation.lng = countyLocation.lng / parksCounty.length;
    countyLocation.lat = countyLocation.lat / parksCounty.length;

    if (pan)
      this.map.setView(countyLocation, 13, {
        animation: true,
      });
  }

  createMarker(park) {
    let { LATITUDE, LONGITUDE, NAME, NEIGHBORHOOD_NAME, COUNTY_NAME } = park;
    let marker = L.marker(
      { lat: LATITUDE, lng: LONGITUDE },
      {
        title: NAME,
        riseOnHover: true,
        icon: L.icon({
          iconUrl: iconURL,
          iconSize: [20, 20],
        }),
      }
    );
    marker.bindPopup(`<b>${NAME}</b>, ${NEIGHBORHOOD_NAME}, ${COUNTY_NAME}`);
    this.markers.push(marker);
    marker.addTo(this.map);
  }

  removeMarkers() {
    this.markers.forEach((marker) => {
      marker.unbindPopup();
      marker.remove();
    });
    this.markers = [];
  }
}
