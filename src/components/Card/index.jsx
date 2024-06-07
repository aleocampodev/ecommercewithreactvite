import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm">Electronics</span>
        <img src="" alt="headphones" />
        <FaPlus className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h6"/>
      </figure>
      <p>
        <span>Headphones</span>
        <span>$300</span>
      </p>
    </div>
  )
}

export default Card
