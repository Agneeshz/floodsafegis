import { Inter } from 'next/font/google'
import GoogleMapReact from 'google-map-react';
import Navbar from '@/components/Navbar';
import HeatMap from '@/components/HeatMap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import { get_all_stations_wl_forecast } from '@/utils/api_call';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Map({stations}) {
  const options = [
    {name: 'Chenimari', value: 'sv'},
    {name: 'Chaparmukh', value: 'en'},
 
  ];

  const [day, setDay] = useState(1)


  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  const get_DL_WL  = (inputString) =>{


    const regex = /(\d+\.\d+);(\d+\.\d+):(\d+\.\d+)/;

    const matches = inputString.match(regex);
    // console.log({inputString});

    if (matches) {

      const [, value1, value2, value3] = matches;





      return {
        WL:value1,
        DL:value2,
        HFL:value3
      }
    } else {
      console.log("No match found.");
      return {
        WL:0,
        DL:0,
        HFL:0
      }
    }

  }
  const get_intensity = (data,forecast) =>{

    data = {
      WL:parseFloat(data?.WL),
      DL:parseFloat(data?.DL)
    }
    forecast = parseFloat(forecast)
    if (forecast < data?.WL){
      return 5;
    }else if(forecast < data?.DL && forecast >= data?.WL){
      console.log({forecast, data});
      return (forecast - data?.WL)%data?.DL
    }else{
      console.log("here" , {forecast, data});
      return forecast - data?.DL;
    }
    
  }

 
  const stations_lat_lng = stations?.map((item)=>{
    return {
      lat:item?.lat,
      lng:item?.lng,
      weight: get_intensity(get_DL_WL(item['WL;DL;HFL']),item[`day-${day}-forecast`]['max-WL'])


    }
  })

  





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
  positions:stations_lat_lng,
  options: {   
    radius: 40,   
    opacity: 0.6,
    
}}


  return (
   <>
    

          <HeatMap stations={stations} day={day} defaultProps={defaultProps} heatMapData={heatMapData}/>
      
   </>
  )
}



export async function getServerSideProps(context) {

  const resp = await get_all_stations_wl_forecast();
  const stations = resp?.stations


  return {
    props: {stations},
  }
}