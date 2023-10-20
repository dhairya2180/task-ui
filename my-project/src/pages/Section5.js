import React from 'react'

const Section5 = () => {
  return (
    <div className='px-4 sm:px-8 md:px-12 xl:px-36 py-20 pb-10'>
         <div className=" grid grid-cols-12  ">
            <div className=' col-span-12 lg:col-span-6 flex items-center'>
                <div className=''> 
            <p className='text-start text-[#212a34] text-sm lg:text-lg font-medium  uppercase  tracking-wider'>Grizzly Force Cities</p>
            <p className='text-[32px] lg:text-[44px] text-[#212a34] font-black leading-[60px]'>Serving
            <span className='text-[#11b2ab]'> The Greater Vancouver</span>,<span className='text-[#11b2ab]'> Victoria</span>,<br className='hidden lg:flex'/>
            <span className='text-[#11b2ab]'>Okanagan</span>,<span className='text-[#11b2ab]'> Calgary</span> &<br />
            <span className='text-[#11b2ab]'>Toronto</span> Area</p>
            </div>
            </div>
            <div className=' col-span-12 lg:col-span-6 flex justify-center'>
            <img src={require('../images/section5_1.png')} className='' alt="React Logo" /> 
            </div>
         </div>

         <div className='grid grid-cols-12 gap-6 mt-16'>
            <div className='col-span-12 lg:col-span-6 rounded-lg bg-[#212a34] flex items-center py-5 px-8 '>
                <div className=''>
               <p className='text-white   text-xl lg:text-3xl'>Looking for additional help?</p>
               <div className='flex items-center text-base text-[#11b2a8]'>Find Workers <svg xmlns="http://www.w3.org/2000/svg" className='ms-3' width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13.0001L13 1.00012" stroke="#11B2A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.68359 0.99996H12.9972V12.3136" stroke="#11B2A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></div>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-6 rounded-lg bg-[#11b2a8] items-center py-5 px-8'>
            <p className='text-white   text-xl lg:text-3xl text-end'>Looking for extra cash?</p>
            <div className='flex items-center justify-end text-base text-white'>Find Workers <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className='ms-3' viewBox="0 0 14 14" fill="none">
            <path d="M1 13.0001L13 1.00012" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.68359 0.99996H12.9972V12.3136" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></div>
            </div>
         </div>
    </div>
  )
}

export default Section5;