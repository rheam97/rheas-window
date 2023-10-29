import Image from 'next/image'
import { Container } from 'postcss'
import React from 'react'


interface BlindsProps {
  text?: string
  align?: string
}

const Blinds: React.FC<BlindsProps> = ({ text, align }) => {

  return (
    <div className={`bg-white md:py-9 py-7 drop-shadow-4xl ${align}`} >
      <h1 className='text-black font-bold px-2'>{text}</h1>
    </div>
  )
}

function Banner() {
  return (
    <div className="container h-screen space-y-1.5 bg-hero bg-cover py-3">
    {/* <Blinds text="Hi, My name is Rhea Malviya." align='text-left' />
    <Blinds text="I'm a Software Developer based in Brooklyn, NY." align='text-center' />
    <Blinds text="I found it difficult to design a brand around myself for this website." align='text-end' />
    <Blinds text='I spend a lot of time in my room with WFH and upskilling as a dev,' align='text-center' />
    <Blinds text='so... I decided to try to draw from my daily surroundings. Challenge myself a bit.' align='text-center' />
    <Blinds text='Welcome to my view.' align='text-center'/> */}
  </div>
  )
}

/**
 * Tiles:
 * have an array of square components
 * assign random color out of 10 to each component
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

    // function randomizer(){
    //   let random = 
    // }


    return (
      <div className="grid h-screen md:grid-cols-4 grid-cols-3 bg-gradient-to-b from-cyan-500 via-pink-300 to-orange-500">
      <div className='border-solid border-4 border-black bg-gradient-to-b from-white via-slate-50 to-transparent md:h-1/3 h-1/4 md:pb-66 pb-over glass'>
      </div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-red-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-yellow-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-green-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-cyan-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-purple-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-white via-slate-50 to-transparent md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-red-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-yellow-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-green-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-cyan-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      <div className='border-solid border-4 border-black bg-gradient-to-b from-purple-400 md:h-1/3 h-1/4 md:pb-66 pb-over glass'></div>
      </div>
    )

}


export default function Home() {
  return (
    <body>
    <Banner/>
    <StainedGlass/>
    </body>
  )
}
