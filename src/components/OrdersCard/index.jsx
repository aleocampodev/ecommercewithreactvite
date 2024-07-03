import React from "react";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";


const OrderCard = (props) => {
  const { totalPrice, totalProducts, dateNow } = props;
  return (
    <div className="flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80 ">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">{dateNow}</span>
          <span className="font-light">{totalProducts} articles</span>      
        </p>
        <p className="flex items-center gap-2">
        <span className="font-medium text-2xl">${totalPrice}</span>
        <FaArrowRight className="h-6 w-6 text-black cursor-pointer"/>
        </p>
      </div>
    </div>
  );
};

OrderCard.PropTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  handleDelete: PropTypes.func,
};

export default OrderCard;
