"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  onClose: () => void,
  children: React.ReactNode
}

export const FamilyModal = ({onClose, children }: Props) => {
  const searchParams = useSearchParams()
  const modalRef = useRef<null | HTMLDialogElement>(null)
  const showModal = searchParams.get("modal")

  useEffect(() => {
    if(showModal === "create-family"){
      modalRef.current?.showModal()
    } else {
      modalRef.current?.close()
    }
  },[showModal])

  const closeModal = () => {
    modalRef.current?.close()
    onClose()
  }

  const modal: JSX.Element | null = showModal === "create-family" ? 
      (
        <dialog ref={modalRef} className="bg-stone-900 border-2 border-double border-white">
          <div className="">
            <button 
              className="bg-red-600 hover:bg-red-300 text-white w-9 ml-2 mt-2 rounded-md"
              onClick={closeModal}
            >
                X
            </button>
            {children}
          </div>
        </dialog>
    ): null

    return modal

  };