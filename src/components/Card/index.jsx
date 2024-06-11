import {useContext} from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa6';
import HeadPhones from '@images/headphones.jpeg'
import { ShoppingCartContext } from '../../context';

const Card = (props) => {
  const {data}= props
  const {count, setCount} = useContext(ShoppingCartContext)


  const handleCount = () =>{
    setCount(count + 1)
  }
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.image} alt={data.title} />
        <FaPlus className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h6 m-2 p-1 cursor-pointer" onClick={handleCount}/>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-sm font-medium">{`$${data.price}`}</span>
      </p>
    </div>
  )
}

Card.PropTypes = {
  data: PropTypes.object.isRequired
}

export default Card
