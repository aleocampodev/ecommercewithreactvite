import React from 'react'
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

const OrderCard = (props) => {
  const {id,title, imageUrl, price, handleDelete} = props
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img  className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title}/>
        </figure>
        <p  className="text-sm font-light" >{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p  className="text-lg font-medium" >{price}</p>
        {
          handleDelete && <MdClose className="h-6 w-6 text-black cursor-pointer" onClick={() => handleDelete(id)}/>
        }
        
      </div>
    </div>
  )
}

OrderCard.PropTypes = {
  id: PropTypes.number,
  title:PropTypes.string, 
  imageUrl:PropTypes.string, 
  price:PropTypes.number, 
  handleDelete:PropTypes.func
};

export default OrderCard
