import axios from "axios"
import { BASE_API_URL , BASE_WEATHER_API_URL} from "./constants"

export const get_all_stations_wl_forecast = async () => {

    try{

        const resp = await axios.get(BASE_API_URL + 'get-forecasts-stations/')
        return resp?.data

    }catch(e){
        console.log(e);
    }

}



export const get_weather_data = async (lat, lng) =>{
    try{

        const resp = await axios.get(BASE_WEATHER_API_URL + `?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,rain_sum,precipitation_hours,precipitation_probability_max`)
        console.log({resp});
        return resp?.data

    }catch(e){
        console.log(e);

    }
}