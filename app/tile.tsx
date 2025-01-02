import React from "react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export const ModalContext = React.createContext(false)

function Tile(props: any) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        onClick={()=>setShow(true)}
        className={`border-solid border-4 relative border-black bg-gradient-to-b ${
          props.color
        } to-transparent rounded-2xl blur-sm lg:min-h-[16rem] 2xl:min-h-[27rem] min-h-[9rem] ${
          props.project
            ? `${props.project} bg-cover hover:filter-none active:filter-none`
            : `hover:filter-none active:filter-none`
        } transition-filter ease-in-out duration-700`}
      >
        {props.project ? (
          <ProjectModal 
            title={props.title}
            github={props.github}
            deployed={props.deployed}/>
        ) : null}
      </div>
    </>
  );
}

  export default Tile;