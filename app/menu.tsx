"use client";
import React from "react";
import { useState } from "react";

function Menu() {
    const [toggle, toggleOpen] = React.useState(false);
  
    const toggler = () => {
      toggleOpen(!toggle);
    };
  
    return (
      <header className="bg-black flex w-full justify-center sm:sticky relative">
        <nav className="flex items-center w-full justify-between sm:pb-4 pb-0 text-center bg-black relative sm:sticky">
          <div className={`hamburger sm:hidden z-50 text-white text-[25px] ${toggle ? `before:content-['x'] bg-none px-4` : `bg-menu bg-cover` }` } onClick={toggler}>
          </div>
          <ul
            className={`text-white sm:flex sm:justify-between justify-center items-center w-full px-3 ${
              toggle
                ? `flex flex-col w-screen h-screen absolute transition-all ease-in-out duration-500 delay-150 transform translate-y-0 items-center bg-black/50 z-50 top-0 backdrop-blur`
                : `hidden md:translate-y-0 -translation-y-full`
            }`}
          >
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/projects">PROJECTS</a>
            </li>
            <li>
              <a href="https://blog.rheam.dev" target="_clear">BLOG</a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/18gEzXdmxVdJ4RKUgJ4ISjOk35JanS2kK-gfroLa5oWY/edit?usp=sharing"
                target="_clear"
              >
                RESUME
              </a>
            </li>
            <li>
              <a href="mailto:rheam97@gmail.com">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Menu;