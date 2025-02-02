import React from "react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";



type ModalContextType = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContextState = {
  showModal: false,
  setShowModal: () => !ModalContextState.showModal
}

export const ModalContext = React.createContext<ModalContextType>(ModalContextState)

function Tile(props: any) {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <div
          onClick={() => setShowModal(!showModal)}
          className={`border-solid border-4 relative border-black bg-gradient-to-b ${props.color
            } to-transparent rounded-2xl blur-sm min-h-auto ${props.project
              ? `${props.project} bg-cover hover:filter-none active:filter-none`
              : `hover:filter-none active:filter-none`
            } transition-filter ease-in-out duration-700`}
        >

        </div>
        {props.project ? (
          <ProjectModal
            title={props.title}
            github={props.github}
            deployed={props.deployed} />
        ) : null}
      </ModalContext.Provider>
    </>
  );
}

export default Tile;
