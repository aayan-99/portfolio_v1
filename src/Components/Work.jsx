import React from 'react'
import Crypto from '../assets/images/crypto.jpg'
import Project from '../assets/images/project2.png'

const Work = () => {
  return (
    <div name="work" className='w-full sm:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work.</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage:`url(${Crypto})`}} className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://alpha-oryx.vercel.app/" target='_blank' rel='noreferrer'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold tect-lg'>Demo</button></a>
                            <a href="https://github.com/aayan-99/alpha-oryx" target='_blank' rel='noreferrer'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold tect-lg'>Code</button></a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div style={{backgroundImage:`url(${Project})`}} className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJs Application 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://above-the-horizon.vercel.app/" target='_blank' rel='noreferrer'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold tect-lg'>Demo</button></a>
                            <a href="https://github.com/aayan-99/above-the-horizon" target='_blank' rel='noreferrer'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold tect-lg'>Code</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work