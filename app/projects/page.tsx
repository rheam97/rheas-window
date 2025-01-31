'use client'
import React from "react";
import Menu from "../menu";
import StainedGlass from "../StainedGlass";
function Projects() {
    return (
        <body className="h-screen">
        <main className="h-full max-w-screen container md:border-50 border-40 border-black">
          <Menu />
          <StainedGlass />
        </main>
      </body>
    )
}

export default Projects;