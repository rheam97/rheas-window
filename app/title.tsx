"use client";
import React from "react";
import { useState } from "react";

export default function Title(){
    return (
    <main className="h-screen bg-black flex flex-col align-center justify-center">
        <h1 className='px-5 bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text font-extrabold sm:text-8xl text-transparent text-2xl animate-typewriter before:bg-black'>Hi, my name is Rhea. I'm a Fullstack software engineer with 3 years of experience.  <a href='/about' className='transition duration-300 hover:text-indigo-500'>&rarr;</a></h1>
    </main>
    )
}