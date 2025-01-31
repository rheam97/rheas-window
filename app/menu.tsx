"use client";
import React from "react";
import { useState } from "react";

function Menu() {
    const [toggle, toggleOpen] = React.useState(false);
  
    const toggler = () => {
      toggleOpen(!toggle);
    };
  
    return (
      <header className="bg-black flex w-full justify-center sticky">
        <nav className="flex items-center w-full justify-between pb-4 text-center">
          <div className="hamburger sm:hidden" onClick={toggler}>
            {/* /**change to single symbol that transitions */ }
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
          {/* {toggle ? (
          <ul className='flex flex-col justify-between mt-3 bg-black'>
          <li>
              <a href='#about'>
              ABOUT
              </a>
            </li>
            <li>
              <a href='/'>
              PROJECTS
              </a>
            </li>
              <li>
              <a href='#blog'>
              BLOG
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
          <ul
            className={`text-white sm:flex ${
              toggle
                ? `flex flex-col h-screen w-1/2 absolute transition ease-in-out duration-800 items-center bg-black top-5`
                : `hidden justify-between items-center w-full px-3`
            }`}
          >
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/projects">PROJECTS</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
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