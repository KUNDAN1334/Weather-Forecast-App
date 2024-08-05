const baseURL="https://api.weatherapi.com/v1/current.json?key=602db27ee3834729a2f130435240408"
export const getWeaherDataForCity=(city)=>{
    return fetch(`${baseURL}&q=${city}`).then((res)=>res.json())
}