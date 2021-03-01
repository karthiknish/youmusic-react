import axios from "axios";

// put your api keys in .env file you can get those here - https://developers.google.com/youtube/v3/getting-started
export const selectRandomKey = () => {
  let youtube =
    "AIzaSyDZw_-btdbjqSkkEZZrYVKDCT7tc85ghhg,AIzaSyCmb6ZeY76efJuePhqjg9cpUiXRua0q8SA,AIzaSyDRQ-xqrBXWC8fK0j3ViQI5ExZhAnteFmg";
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
