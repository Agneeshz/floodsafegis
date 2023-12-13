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
  return (
   <>
    <div>
      <Navbar/>


        <div className='mx-40 mt-12 !text-black'>
        <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />

        </div>

        <div className='flex justify-center items-center'>

          <button className='bg-blue-400 text-white rounded-md p-4 text-lg mx-2' onClick={()=> setDay(1)}>1</button>
          <button className='bg-blue-400 text-white rounded-md p-4 text-lg mx-2' onClick={()=> setDay(2)}>2</button>
          <button className='bg-blue-400 text-white rounded-md p-4 text-lg mx-2' onClick={()=> setDay(3)}>3</button>
          <button className='bg-blue-400 text-white rounded-md p-4 text-lg mx-2' onClick={()=> setDay(4)}>4</button>
          <button className='bg-blue-400 text-white rounded-md p-4 text-lg mx-2' onClick={()=> setDay(5)}>5</button>
          <button className='bg-blue-400 text-white rounded-md p-4 text-lg mx-2' onClick={()=> setDay(6)}>6</button>
          <button className='bg-blue-400 text-white rounded-md p-4 text-lg mx-2' onClick={()=> setDay(7)}>7</button>

        </div>

        <div className='flex justify-center'>
          
          <div className='w-[75%] rounded-xl mt-12'>

          <HeatMap stations={stations} day={day}/>
          </div>
          
        </div>
      
    </div>
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