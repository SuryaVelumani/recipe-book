import React, { useState } from 'react'

const NavBar = () => {
  const [mobileState, setMobileState] = useState('hidden mobile-menu')
  const navHandler = () => {
    if (mobileState.includes('hidden')) {
      setMobileState('mobile-menu')
    } else {
      setMobileState('hidden mobile-menu')
    }
  }
  return (
    <nav className='bg-secondary shadow-lg sticky top-0 z-10 font-primary '>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <div>
            <a
              href='/'
              className='md:hidden text-fifth text-shadow-neon font-neon text-2xl'
            >
              Recipe Book
            </a>
          </div>
          <div className='md:hidden flex items-center p-5'>
            <div>
              <button
                className='outline mobile-menu-button'
                onClick={navHandler}
              >
                <svg
                  className=' w-6 h-6 text-gray-500 hover:text-green-500 '
                  x-show='!showMenu'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${mobileState} md:hidden `}>
        <ul className='font-pixelated text-2xl'>
          <li>
            <p className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-center p-1'>
              <a href='/profile'>Cuisines</a>
            </p>
          </li>
          <li>
            <p className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-center p-1'>
              <a href='/profile'>Favourites</a>
            </p>
          </li>
          <li>
            <p className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-center p-1'>
              <a href='/profile'>Profile</a>
            </p>
          </li>
        </ul>
      </div>

      <div className='flex justify-between md:p-2'>
        <div className='flex items-center justify-center text-3xl font-neon'>
          <a href='/' className='hidden md:block text-fifth text-shadow-neon'>
            Recipe Book
          </a>
        </div>
        <div className='hidden md:flex items-center justify-center space-x-10 font-pixelated text-2xl lg:text-4xl md:text-3xl p-5 sticky top-0'>
          <p className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <a href='/profile'>Cuisines</a>
          </p>
          <p className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <a href='/profile'>Favourites</a>
          </p>
          <p className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <a href='/profile'>Profile</a>
          </p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
