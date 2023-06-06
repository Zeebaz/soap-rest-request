import axios from "axios";

export const getRestResquest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("error on get rest", error);
  }
};

export const postRestRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.log("error on post rest", error);
  }
};
