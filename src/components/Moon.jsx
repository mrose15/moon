import axios from "axios";

const options = {
  method: "GET",
  url: "https://moon-phase.p.rapidapi.com/calendar",
  headers: {
    "X-RapidAPI-Key": "9872acfecbmsh7bd10ad8b0c4fccp15b00bjsnf71453c429d6",
    "X-RapidAPI-Host": "moon-phase.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

const MoonComponent = () => {
  return <h1>hello!</h1>;
};

export default MoonComponent;
