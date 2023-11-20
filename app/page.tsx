"use client"

import Image from 'next/image'
import { Container } from 'postcss'
import React from 'react'
import { useState } from 'react'


function Banner() {
  return (
    <div id='about' className="container h-[calc(100svh-158px)] grid grid-cols-3 grid-rows-2 bg-hero max-w-full bg-cover">
    <div className="grid grid-cols-1 grid-rows-2 h-1/2 pb-[57%] border-indigo-600 border-2" >
      <div className='pb-[30%] border-indigo-600 border-2'>Hi, My name is Rhea Malviya</div>
      <div className='pb-[10%] border-indigo-600 border-2'></div>
    </div>
    <div className="h-1/2 pb-[57%] border-indigo-600 border-2"></div>
    <div className="h-1/2 pb-[57%] border-indigo-600 border-2">I found it difficult to design a brand around myself for this website.</div>
    <div className="h-1/2 pb-[57%] border-indigo-600 border-2">I'm a Software Developer based in Brooklyn, NY.</div>
    <div className="h-1/2 pb-[57%] border-indigo-600 border-2"></div>
  </div>
  )
}

/**
 * Tiles:
 * have an array of square components
 * assign random color oulgt of 10 to each component
 * each component has hover property that will lighten on hover
 * assign property at random as well
 *  - this property will reveal information on hover
 * 
 * need to figure out how many components you need based on screen width and height 
 * need to decide size of each tile 
 * then create array length based on those things
 * 
 */




function StainedGlass(){


  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnterHandler = () => setIsHovered(true);
  const onMouseLeaveHandler = () => setIsHovered(false);


  function Tile (props:any){

    return (
      <div className={`border-solid border-4 border-black ${isHovering ?  `deblur`: `bg-gradient-to-b ${props.color} to-transparent glass`} lg:max-2xl:min-h-[16rem] 2xl:min-h-[27rem] min-h-[9rem]`}>
      </div>
    )
  }



    return (
      <div id='projects' className="grid h-full md:grid-cols-4 grid-cols-3 bg-gradient-to-b from-cyan-500 via-pink-300 to-orange-500 md:border-t-100 border-t-70 border-black" >
      <Tile color='from-white via-slate-50'  onMouseENter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler} />
      <Tile color='from-red-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='from-yellow-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='from-green-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='from-cyan-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='from-purple-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='from-white via-slate-50'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='from-red-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='drom-purple-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='from-yellow-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='from-green-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/>
      <Tile color='from-cyan-400'  onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}/> 
      </div>
    )

}


function Menu(){
  return (
    <header className='bg-black flex w-full justify-center sticky'>
      <nav className='flex items-center w-full justify-between pb-4 top-5 text-center'>
        <ul className='text-white flex justify-between items-center w-full px-3'>
          <li>
            <a href='#about'>
            ABOUT
            </a>
          </li>
          <li>
            <a href='#projects'>
            PROJECTS
            </a>
          </li>
          <li>
            <a>
            RESUME
            </a>
          </li>
          <li>
            <a href='mailto:rheam97@gmail.com'>
            CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default function Home() {
  return (
    <body className='h-screen'>
    <main className='h-full container md:border-70 border-50 border-black'>
    <Menu/>
    <Banner/>
    <StainedGlass/>
    </main>
    </body>
  )
}
