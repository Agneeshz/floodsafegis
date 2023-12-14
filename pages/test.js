import { Inter } from 'next/font/google'
import GoogleMapReact from 'google-map-react';
import Navbar from '@/components/Navbar';
import HeatMap from '@/components/HeatMap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import { get_all_stations_wl_forecast } from '@/utils/api_call';
import { useState } from 'react';
import data from "@/utils/optimised_water_coordinates.json"
const inter = Inter({ subsets: ['latin'] })

export default function Test() {
  const options = [
    {name: 'Chenimari', value: 'sv'},
    {name: 'Chaparmukh', value: 'en'},
 
  ];
  let coordinates = data?.map((item)=>{
    return {
      lat:item.latitude,
      lng:item.longitude,
      weight:2
    }
  })
  console.log({coordinates});

  const [day, setDay] = useState(1)


  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
 


  





  const heatMapData = {    
  // positions: [
  //   {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //     weight:10,
  //   },
  //   {
  //     lat: 12.99835602,
  //     lng: 79.01502627,
  //     weight:20
  //   },
  //   {
  //     lat: 14.99835602,
  //     lng: 79.01502627,
  //     weight:10
  //   },
  //   {
  //     lat: 13.99835602,
  //     lng: 79.01502627,
  //     weight:20
  //   }
  
  // ],
  positions:coordinates,
  options: {   
    radius: 10,   
    opacity: 0.6,
    
}}


  return (
   <>
    

          <HeatMap  day={day} defaultProps={defaultProps} heatMapData={heatMapData}/>
      
   </>
  )
}


