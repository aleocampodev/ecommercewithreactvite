import { useContext} from "react";
import { ShoppingCartContext } from "../../context";
import { MdClose } from "react-icons/md";
import './productdetail.css'

const ProductDetail = () => {
 const {isProductDetailOpen, closeProductDetail, productShow} = useContext(ShoppingCartContext)


  return (
    <aside className={`${ isProductDetailOpen? 'flex': 'hidden'} product-detail`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <MdClose className="h-6 w-6 text-black cursor-pointer" onClick={() => closeProductDetail()}/>
      </div>
      <figure className="px-6">
        <img 
          className="w-full h-full rounded-lg" 
          src={productShow.image} 
          alt={productShow.title}/>
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">{productShow.price}</span>
        <span  className="font-medium text-md">{productShow.title}</span>
        <span  className="font-light text-sm">{productShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail
