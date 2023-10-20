import React, { useEffect } from 'react';

const Header = () => {
  const handleClick = () => {
    const menu = document.getElementById('menu');
    const header = document.querySelector('header');

    menu.classList.toggle('hidden');

    if (!menu.classList.contains('hidden')) {
      header.classList.add('bg-white-scroll');
    } else {
      header.classList.remove('bg-white-scroll');
    }
  };

  const updateHeaderBackground = () => {
    const header = document.querySelector('header');
    const scrollThreshold = 100;

    if (window.scrollY > scrollThreshold) {
      header.classList.add('bg-white-scroll');
    } else {
      header.classList.remove('bg-white-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateHeaderBackground);

    return () => {
      window.removeEventListener('scroll', updateHeaderBackground);
    };
  }, []);


  return (
    <div className='sm:px-8 md:px-12 xl:px-36 border-b border-b-[#bdbdbd] bg-white top-0 sticky'>
    <header className="bg-transparent   ">
      <div className=" h-[80px] z-10 ">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center lg:border-e-2 pe-12 border-slate-600">
          <img src={require('../images/Vector.png')} className='pe-5' alt="React Logo" />
          <img src={require('../images/Layer11.png')} alt="React Logo" />
           
          </div>
          <div className="">
            <ul className="hidden lg:flex text-[#212a34] font-medium text-base gelion_font_family lg:gap-x-3 xl:gap-x-6 ">
              <li className='font-medium'> Find Workers</li>
              <li>Find Jobs</li>
              <li> About Us </li>
              <li> Resources</li>
              <li>Contact </li>
            </ul>
           
          </div>

          <div className="hidden items-center gap-4 font-medium  lg:flex pr-4 ">
          <button className=" text-[17px] py-4 px-4  tracking-wider gelion_font_family">
             Login
            </button>
            <button className=" text-[17px] border px-4  font-bold rounded-xl border-neutral-950 py-3 ">
              Open an account
            </button>
          </div>

          <div className="lg:hidden" onClick={handleClick}>
          <img src={require('../images/toggle.png')} className='pe-5' alt="React Logo" />
          </div>
        </div>

        <ul id="menu" class="hidden absolute bg-white w-full px-4 lg:hidden transition-opacity ease-in-out duration-300">
          <li className="border-b-2 border-zinc-300 w-full py-2">
          Find Workers
          </li>
          <li className="border-b-2 border-zinc-300 w-full py-2">
          Find Jobs
          </li>
          <li className="border-b-2 border-zinc-300 w-full py-2">
          About Us
          </li>
          <li className="border-b-2 border-zinc-300 w-full py-2">
          Resources
          </li>
          <li className="border-b-2 border-zinc-300 w-full py-2">
            Photo Gallery
          </li>
          <div className="flex flex-col my-6">
            <button className="text-white text-lg bg-[#77B6C5] py-4 px-6 tracking-wider gelion_font_family">
           Log In
            </button>
          </div>
        </ul>
      </div>
    </header>
  </div>
  )
}

export default Header;