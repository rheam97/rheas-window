import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { ModalContext } from "./tile";

export default function ProjectModal({ title, github, deployed }) {
  // const [showModal, setShowModal] = useState(false);

  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <>
      {/* <button
          className="bg-white border-black border-3 text-black active:border-blue font-bold  absolute right-0 text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          ...
        </button> */}
      {showModal ?
        <>
          <div className="justify-center w-30 h-30 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <a
                      href={github}
                      target="_clear"
                      className="underline"
                    >
                      Github
                    </a>
                    {deployed}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                  >
                    Close
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        : null}
    </>
  );
}