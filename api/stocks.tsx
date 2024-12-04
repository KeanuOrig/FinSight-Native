import axios from "./axiosConfig";

export const fetchStockList = async () => {
  const response = await axios.get('/stocks/list');
  return response.data;
};

export const fetchStockData = async (symbol: String) => {
  const response = await axios.get(`/stocks/pse/${symbol}`);
  return response.data;
};

export const fetchStockPrediction = async (symbol: String) => {
  const response = await axios.get(`/stocks/predict/${symbol}`);
  return response.data;
};