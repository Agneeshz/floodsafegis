import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='flex justify-between px-16 py-6 items-center border-b-2'>

        <div className='flex justify-center items-center'>

            <div className='bg-gray-600 rounded-full h-16 w-16'>


            </div>
            <div className='text-2xl ml-4 font-semibold'>

              FloodSafeGIS

            </div>
        </div>

        <div>
          <Button text={"Login/Register"}/>
        </div>

    </div>
  )
}

export default Navbar