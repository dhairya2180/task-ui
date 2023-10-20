import React from 'react'

const Section3 = () => {
  return (
    <div className=' px-4 sm:px-8 md:px-12 xl:px-36 pt-10 lg:py-20 backimage'>

        <div className='text-center items-center text-4xl lg:text-[44px]'>
            <p className='text-center text-[#212a34] text-base font-medium  uppercase  tracking-wide pb-8'>We are serving in</p>
            <span className='text-[#11b2ab] font-black '>Industries </span><span className='text-[#212a34] font-black'> we are working with</span>
        </div>

        <div class="flex  items-center justify-center py-5 pt-16  ">
                <div class="">
                <img src={require('../images/slider.png')} className=' justify-center' alt="React Logo" /> 
                </div>
                
                
            </div>

    </div>
  )
}

export default Section3;