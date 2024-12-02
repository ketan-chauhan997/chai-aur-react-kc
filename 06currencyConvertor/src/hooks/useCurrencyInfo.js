//url - https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [currencyData, setCurrencyData] = useState({});

    useEffect(()=>{
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_T8IEvHWYD4RAd8ayk7aRsAC49nITJ1F8wb9cyDnT&base_currency=${currency}`)
        .then((res)=> res.json())  
        .then((res)=> setCurrencyData(res["data"]));
        console.log(currencyData);
    },[currency]);
    return currencyData;
}

export default useCurrencyInfo