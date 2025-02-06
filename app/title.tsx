"use client";
import React from "react";
import { useState } from "react";

function Title(){
    return (
    <div className="h-screen bg-black max-w-screen container flex flex-col align-center justify-center">
        <h1 className='title relative py-3 px-5 bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text font-extrabold sm:text-5xl md:text-6xl lg:text-7xl lg:m-auto text-transparent text-2xl
  w-[max-content] h-auto before:absolute before:inset-0 before:animate-typewriter before:bg-black 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white'>Hi, my name is Rhea. <a href='/about' className='transition duration-300 hover:text-indigo-500'>&rarr;</a></h1>
    </div>
    )
}

export default Title;