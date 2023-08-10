import axios from "axios";

const options = {
  method: "GET",
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
