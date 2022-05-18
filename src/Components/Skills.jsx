import React from 'react'

import HTML from '../assets/images/html.png'
import CSS from '../assets/images/css.png'
import Tailwind from '../assets/images/tailwind.png'
import JS from '../assets/images/javascript.png'
import ReactImg from '../assets/images/react.png'
import Firebase from '../assets/images/firebase.png'
import Typescript from '../assets/images/typescript.png'
import GitHub from '../assets/images/github.png'
import Skillname from './Skillname'

const Skills = () => {
  return (
    <div name='skills' className='w-full sm:h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I work with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <Skillname name={HTML} title="HTML"/>
                <Skillname name={CSS} title="CSS"/>
                <Skillname name={Tailwind} title="TailwindCSS"/>
                <Skillname name={JS} title="Javascript"/>
                <Skillname name={ReactImg} title="React"/>
                <Skillname name={Firebase} title="Firebase"/>
                <Skillname name={Typescript} title="Typescript"/>
                <Skillname name={GitHub} title="Git-Hub"/>
            </div>
        </div>
    </div>
  )
}

export default Skills