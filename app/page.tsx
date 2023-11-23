"use client"

import Image from 'next/image'
import { Container } from 'postcss'
import React from 'react'
import { useState } from 'react'



function Banner() {
  return (
    <div id='about' className="container h-[calc(100svh-158px)] grid grid-cols-3 grid-rows-2 bg-hero max-w-full bg-cover">
    <div className="grid grid-cols-1 grid-rows-2 min-h-1/2 border-indigo-600 border-2" >
      <div className='pb-[30%] border-indigo-600 border-2'>Hi, My name is Rhea Malviya</div>
      <div className='pb-[10%] border-indigo-600 border-2'></div>
    </div>
    <div className="min-h-1/2 border-indigo-600 border-2"></div>
    <div className="h-1/2 pb-[57%] border-indigo-600 border-2">I found it difficult to design a brand around myself for this website.</div>
    <div className="h-1/2 pb-[57%] border-indigo-600 border-2">I'm a Software Developer based in Brooklyn, NY.</div>
    <div className="h-1/2 pb-[57%] border-indigo-600 border-2"></div>
    <div className="h-1/2 pb-[57%] border-indigo-600 border-2"></div>
  </div>
  )
}


function Tile (props:any){

  function modalOpen(){
    if(props.project){
      
    }

    return
  }

  return (
    <div className={`border-solid border-4 border-black bg-gradient-to-b ${props.color} to-transparent rounded-2xl blur-sm lg:max-2xl:min-h-[16rem] 2xl:min-h-[27rem] min-h-[9rem] ${props.project ? `${props.project} bg-cover hover:filter-none active:filter-none` : `hover:filter-none active:filter-none`} transition-filter ease-in-out duration-700`}>
      {props.project ? <ProjectModal title={props.title} github={props.github} deployed={props.deployed}/> : null}
    </div>
  )
}




function ProjectModal(props:any) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
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
                   {props.github} {props.deployed}
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
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
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


  let project1 = ''

  let project2 = ''

  

    return (
      <div id='projects' className="grid h-full md:grid-cols-4 grid-cols-3 bg-gradient-to-b from-cyan-500 via-pink-300 to-orange-500 md:border-t-100 border-t-70 border-black" >
      <Tile color='from-white via-slate-50'   />
      <Tile color='from-red-400' />
      <Tile color='from-yellow-400' />
      <Tile color='from-green-400' />
      <Tile color='from-cyan-400' />
      <Tile color='from-purple-400' project='bg-rf' title='Restroom Finder' github='' deployed=''/>
      <Tile color='from-white via-slate-50' project='bg-ss' title='Silver Socials' github='' deployed=''/>
      <Tile color='from-red-400' />
      <Tile color='from-purple-400' />
      <Tile color='from-yellow-400' />
      <Tile color='from-green-400' />
      <Tile color='from-cyan-400' /> 
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
    <main className='h-full max-w-screen container md:border-70 border-50 border-black'>
    <Menu/>
    <Banner/>
    <StainedGlass/>
    </main>
    </body>
  )
}
