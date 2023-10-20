import React from 'react';

const Hero = () => {
  return (
    <div className=' px-4 sm:px-8 md:px-12 xl:px-36  lg:py-20'>

        <div className="grid grid-cols-12   ">
            <div className=" col-span-12 lg:col-span-6  flex justify-center pt-10 pb-10  items-center lg:py-0">
                <div className=''>
                        <h1 className=" text-[45px] md:text-[50px] lg:text-[55px] font-black Garamond_font-family text-[#282c3f]">Modern
                        <br className="hidden lg:flex" /><span className='text-[#282c3f]'>Temp </span> <span className='text-[#11b2a8]'>Labour</span> <br className='hidden lg:flex'/>
                        <span className='text-[#11b2a8]'>Solutions</span></h1>
                    <div className='flex items-center justify-center gap-6 lg:justify-normal pt-10'>
                        <button className="text-white w-full text-base  bg-[#353843] py-4 px-2 rounded-xl tracking-wider gelion_font_family font-black"> Find Workers
                        </button>
                        <button className="text-white w-full text-base bg-[#11b2a8] py-4 px-2 rounded-xl tracking-wider gelion_font_family font-black">  Find a Job
                        </button>
                    </div>
                </div>
            </div>

            <div class=" col-span-12 lg:col-span-6 flex justify-center">
                <img src={require('./../images/Group1000002320.png')} alt="React Logo"  />
            </div>    

        </div>
    </div>
  )
}

export default Hero;