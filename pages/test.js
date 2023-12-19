import { Inter } from 'next/font/google'
import GoogleMapReact from 'google-map-react';
import Navbar from '@/components/Navbar';
import HeatMap from '@/components/HeatMap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import { get_all_stations_wl_forecast, get_forecast_wl_station, get_water_level_vitals } from '@/utils/api_call';
import { useState } from 'react';
import data from "@/utils/optimised_water_coordinates.json"
import styles from "@/styles/index.module.css";
const inter = Inter({ subsets: ['latin'] })
import Layout from "@/components/Layout";
export default function Test({forecast, vitals}) {
  
  const [day, setDay] = useState(7)
  const [WLForecast, setWLForecast] = useState(forecast?.station[`day-${day}-forecast`])

  

  console.log({vitals});


  return (
   <>
          

  
   </>
  )
}


export async function getServerSideProps(context) {

  const forecast = await get_forecast_wl_station();
  const vitals_data = await get_water_level_vitals();
  console.log(vitals_data);
  const vitals = await vitals_data?.vitals
 
  // const stations = resp
  console.log({forecast});

  return {
    props: {forecast, vitals},
  }
}

Test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
