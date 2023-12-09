import { Inter } from 'next/font/google'
import GoogleMapReact from 'google-map-react';
import Navbar from '@/components/Navbar';
import HeatMap from '@/components/HeatMap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const options = [
    {name: 'Chenimari', value: 'sv'},
    {name: 'Chaparmukh', value: 'en'},
 
];
  return (
   <>
    <div>
      <Navbar/>


        <div className='mx-40 mt-12 !text-black'>
        <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />

        </div>

        <div className='flex justify-center'>
          
          <div className='w-[75%] rounded-xl mt-12'>

          <HeatMap/>
          </div>
          
        </div>
      
    </div>
   </>
  )
}
