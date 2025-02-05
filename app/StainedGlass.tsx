import React from "react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import Tile from "./tile";

export default function StainedGlass() {
  return (
    <div
      id="projects"
      className="grid max-h-screen h-[calc(100vh-48px)] sm:h-[calc(100vh-40px)]  md:h-[calc(100vh-130px)] lg:grid-cols-4 lg:grid-rows-3 grid-cols-3 grid-rows-4 bg-gradient-to-b from-cyan-500 via-pink-300 to-orange-500  border-black relative"
    >
      <Tile color="from-white via-slate-50" />
      <Tile color="from-red-400" />
      <Tile color="from-yellow-400" />
      <Tile color="from-green-400" />
      <Tile color="from-cyan-400" />
      <Tile
        color="from-purple-400"
        project="bg-rf"
        title="Restroom Finder"
        github="https://github.com/rheam97/restroom-finder"
        deployed=""
      />
      <Tile
        color="from-white via-slate-50"
        project="bg-ss"
        title="Silver Socials"
        github="https://github.com/rheam97/silver-socials"
        deployed=""
      />
      <Tile color="from-red-400" />
      <Tile color="from-purple-400" />
      <Tile color="from-yellow-400" />
      <Tile color="from-green-400" />
      <Tile color="from-cyan-400" />
    </div>
  );
}
