import React from 'react'

function Button({text}) {
  return (
    <div className='bg-blue-400 text-white font-medium text-xl rounded-md py-4 px-6'>
        {text}
    </div>
  )
}

export default Button