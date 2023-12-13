import axios from "axios"
import { BASE_API_URL } from "./constants"

export const get_all_stations_wl_forecast = async () => {

    try{

        const resp = await axios.get(BASE_API_URL + 'get-forecasts-stations/')
        return resp?.data

    }catch(e){
        console.log(e);
    }

}