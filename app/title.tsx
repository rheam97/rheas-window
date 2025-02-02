"use client";
import React from "react";
import { useState } from "react";

function Title(){
    return (
    <div className="h-screen max-w-screen container bg-black flex flex-col align-center justify-center">
        <h1 className='title px-5 bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text font-extrabold sm:text-8xl text-transparent text-2xl before:absolute before:inset-0 before:animate-typewriter
before:bg-black
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-black'>Hi, my name is Rhea. <a href='/about' className='transition duration-300 hover:text-indigo-500'>&rarr;</a></h1>
    </div>
    )
}

export default Title;