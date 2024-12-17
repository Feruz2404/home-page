import React from 'react'

const Hero = () => {
  return (
    <div className='h-[820px] grid grid-cols-2'>
      <div className='bg-hero bg-no-repeat bg-cover'></div>
      <div className='flex items-center  bg-[#171D28]'>
        <div className='pl-[63px] max-w-[500px] text-white'>
          <h1 className='text-7xl'>Bring the warmth.</h1>
          <p className='mt-2 mb-5'>Everyone needs a good winter jacket. 
          Find yours with our collection and more.</p>
          <button className='px-14 py-3 bg-blue-500 rounded-md hover:opacity-70'>Shopping Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero