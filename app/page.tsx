"use client";

import Image from "next/image";
import Menu from "./menu";
import StainedGlass from "./StainedGlass";
import { Container } from "postcss";
import React from "react";
import { useState } from "react";

// lg:max-2xl:min-h-[25rem] 2xl:min-h-[45rem] min-h-[18rem]
// lg:max-2xl:min-h-[25rem] 2xl:min-h-[45rem] min-h-[18rem]
// lg:max-2xl:min-h-[25rem] 2xl:min-h-[45rem] min-h-[18rem]
// lg:max-2xl:min-h-[25rem] 2xl:min-h-[45rem] min-h-[18rem]
// lg:max-2xl:min-h-[25rem] 2xl:min-h-[45rem] min-h-[18rem]

// function Banner() {
//   return (
//     <div id='about' className="sm:h-[calc(100svh-220px)] h-[calc(100svh-158px)] grid grid-cols-3 grid-rows-2 bg-hero max-w-full bg-cover">
//     <div className=" border-indigo-600 border-2 flex items-end hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out" >
//       My name is Rhea Malviya
//     </div>
//     <div className=" border-indigo-600 border-2"></div>
//     <div className=" border-indigo-600 border-2 flex items-center hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out">I found it difficult to design a brand around myself for this website.</div>
//     <div className=" border-indigo-600 border-2 flex justify-items-end items-center hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out">I'm a Software Developer based in Brooklyn, NY.</div>
//     <div className=" border-indigo-600 border-2 hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out overflow-y-auto"> I created this website to get excited about coding again after getting bogged down in the tech rat-race.</div>
//     <div className=" border-indigo-600 border-2 flex items-center justify-start  hover:bg-black hover:text-white active:bg-black active:text-white transition-colors duration-600 ease-out">Luckily, it worked :) I'm looking forward to adding more projects in the grid below</div>
//   </div>
//   )
// }

// max-2xl:min-h-[16rem]





export default function Home() {
  return (
    <body className="h-screen">
      <main className="h-full max-w-screen container md:border-70 border-50 border-black">
        <Menu />
        <StainedGlass />
      </main>
    </body>
  );
}

