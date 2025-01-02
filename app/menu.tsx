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
        <nav className="flex items-center w-full justify-between pb-4 top-5 text-center">
          <div className="hamburger sm:hidden" onClick={toggler}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
          {/* {toggle ? (
          <ul className='grid grid-rows-4 bg-black space-y-1'>
          <li className=''>
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
                ? `flex flex-col justify-around transition ease-linear duration-400 items-center w-1/2 h-[100svh] absolute bg-black mt-[500px] pt-[100px] `
                : ` hidden justify-between items-center w-full px-3`
            }`}
          >
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/">PROJECTS</a>
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