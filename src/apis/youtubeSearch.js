import axios from "axios";

// put your api keys in .env file you can get those here - https://developers.google.com/youtube/v3/getting-started
export const selectRandomKey = () => {
  let youtube =
    "AIzaSyBFJoCgKwpiX6K2Pf6MEUkVdpTQ3x6rBRQ,AIzaSyB54ijrN82lwRmFY6JAj3QYx_m99_bOsGQ,AIzaSyCmKINkbPyCAo_UNMGt-Val-cBqhutUzxA";
  const keys = youtube.split(","); //we are splitting the api keys to make an array
  const random = Math.floor(Math.random() * Math.floor(keys.length)); //this will get a random number
  return keys[random];
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    videoCategoryId: "10",
    type: "video",
    key: selectRandomKey(),
  },
});
