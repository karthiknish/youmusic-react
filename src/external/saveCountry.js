import axios from "axios";

const country_code = localStorage.getItem("country_code");

const GeoAPI = "https://ipapi.co/json/";

const fetchCountry = async () => {
  const res = await axios.get(GeoAPI, { mode: "no-cors" });

  localStorage.setItem("country_code", res.data.country);
};

if (!country_code) {
  fetchCountry();
}
