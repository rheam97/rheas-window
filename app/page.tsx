"use client"

import Image from 'next/image'
import { Container } from 'postcss'
import React from 'react'
import { useState } from 'react'



function Banner() {
  return (
    <div id='about' className="container h-[calc(100svh-158px)] grid grid-cols-3 grid-rows-2 bg-hero max-w-full bg-cover">
    <div className="min-h-1/2 border-indigo-600 border-2 flex items-end hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out" >
      My name is Rhea Malviya
    </div>
    <div className=" min-h-1/2 border-indigo-600 border-2"></div>
    <div className=" min-h-1/2 border-indigo-600 border-2 flex items-center hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out">I found it difficult to design a brand around myself for this website.</div>
    <div className=" min-h-1/2 border-indigo-600 border-2 flex justify-items-end items-center hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out">I'm a Software Developer based in Brooklyn, NY.</div>
    <div className=" min-h-1/2 border-indigo-600 border-2 hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out overflow-y-auto"> I created this website to get excited about coding again after getting bogged down in the tech rat-race.</div>
    <div className=" min-h-1/2 border-indigo-600 border-2 flex items-center justify-start  hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out">Luckily, it worked :) I'm looking forward to adding more projects in the grid below</div>
  </div>
  )
}




function Tile (props:any){
  const [show, setShow] = React.useState(false);


  return (
    <>
    <div onClick={()=>setShow(true)} className={`border-solid border-4 relative border-black bg-gradient-to-b ${props.color} to-transparent rounded-2xl blur-sm lg:max-2xl:min-h-[16rem] 2xl:min-h-[27rem] min-h-[9rem] ${props.project ? `${props.project} bg-cover hover:filter-none active:filter-none` : `hover:filter-none active:filter-none`} transition-filter ease-in-out duration-700`}>
    {props.project ? <ProjectModal show={show} title={props.title} github={props.github} deployed={props.deployed}/> : null }
    {/* {props.project ? <div className={`absolute bg-opacity-0 top-0 left 0`}></div> : null} */}
    </div>

    </>

  )
}




function ProjectModal(props:any) {
  const [showModal, setShowModal] = React.useState(false);

  
  return (
    <>
     <button
        className="bg-white border-black border-3 text-black active:border-blue font-bold  absolute right-0 text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >O
      </button>
   
      {showModal ? (
        <>
          <div
            className="justify-center w-30 h-30 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {props.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                   <a href={props.github} target='_clear' className='underline'>Github</a> {props.deployed}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


function StainedGlass(){  

    return (
      <div id='projects' className="grid h-full md:grid-cols-4 grid-cols-3 bg-gradient-to-b from-cyan-500 via-pink-300 to-orange-500 md:border-t-100 border-t-70 border-black" >
      <Tile color='from-white via-slate-50'   />
      <Tile color='from-red-400' />
      <Tile color='from-yellow-400' />
      <Tile color='from-green-400' />
      <Tile color='from-cyan-400' />
      <Tile color='from-purple-400' project='bg-rf' title='Restroom Finder' github='https://github.com/rheam97/restroom-finder' deployed=''/>
      <Tile color='from-white via-slate-50' project='bg-ss' title='Silver Socials' github='https://github.com/rheam97/silver-socials' deployed=''/>
      <Tile color='from-red-400' />
      <Tile color='from-purple-400' />
      <Tile color='from-yellow-400' />
      <Tile color='from-green-400' />
      <Tile color='from-cyan-400' /> 
      </div>
    )

}


function Menu(){

  const [toggle, toggleOpen] = React.useState(false)

  const toggler = () => {
    toggleOpen(!toggle)
  }

  return (
    <header className='bg-black flex w-full justify-center sticky'>
      <nav className='flex items-center w-full justify-between pb-4 top-5 text-center'>
        <div className='hamburger sm:hidden' onClick={toggler}>
          <div className='burger'></div>
          <div className='burger'></div>
          <div className='burger'></div>
        </div>
        {/* {toggle ? (
        <ul className='grid grid-rows-4 bg-black space-y-1'>
        <li className=''>
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
            <a href='https://docs.google.com/document/d/18gEzXdmxVdJ4RKUgJ4ISjOk35JanS2kK-gfroLa5oWY/edit?usp=sharing' target="_clear">
            RESUME
            </a>
          </li>
          <li>
            <a href='mailto:rheam97@gmail.com'>
            CONTACT
            </a>
          </li>
        </ul>) : null} */}
        <ul className={`text-white sm:flex ${toggle ? `flex flex-col justify-around transition ease-linear duration-400 items-center w-1/2 h-[100svh] absolute bg-black mt-[500px] pt-[100px] `: ` hidden justify-between items-center w-full px-3` }`}>
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
            <a href='https://docs.google.com/document/d/18gEzXdmxVdJ4RKUgJ4ISjOk35JanS2kK-gfroLa5oWY/edit?usp=sharing' target="_clear">
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
    <main className='h-full max-w-screen container md:border-70 border-50 border-black'>
    <Menu/>
    <Banner/>
    <StainedGlass/>
    </main>
    </body>
  )
}
