const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=da6b8158e38c47f7b3081213240508";

  export const getWeatherDataForCity = async (city) => {
   const response = await fetch(`${baseURL}&q=${encodeURIComponent(city)}&aqi=yes`);
   return await response.json();
 };
 
 export const getWeatherDataForLocation = async (lat, lon) => {
   const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
   return await response.json();
 };