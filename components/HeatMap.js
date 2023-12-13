import React from 'react'
import GoogleMapReact from 'google-map-react';
function HeatMap({stations, day}) {
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
          // const [value1, value2, value3] = matches.map(match => match.split(/[:;]/)[1]);
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
        // console.log({data});
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
    console.log({stations_lat_lng});
  return (
    <div className='' style={{ height: '50vh', width: '100%'  , borderRadius:'4rem'}} id="map">
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBjX_00GI694FLmt2-_70v4ZHTL8DNa54E" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        heatmapLibrary={true}          
        heatmap={heatMapData}          
        >
    
        </GoogleMapReact>

    </div>
  )
}

export default HeatMap